import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, MapInfoWindow, MapMarker],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent implements AfterViewInit {

  @ViewChild(GoogleMap) map: GoogleMap | undefined;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  @Output() mapInitialized = new EventEmitter<GoogleMap>();


  zoom = 11;
  center: google.maps.LatLngLiteral = { lat: 53.89938138808464, lng: 27.55869048700048 };
  markers = [
    {
      position: { lat: 53.926400, lng: 27.517552 },
      title: `Победителей, 65 (ТЦ Корона 'ЗАМОК') <br> пав. 401`,
      description: `<p>пн-сб: 11:00–20:30, вс: 11:00–20:30</p>
              <p>Тел: <a href="tel: +375291040044">+375 29 104 00 44</a></p>
              <p>A1: <a href="tel: +375293048080">+375 29 304 80 80</a>, <a href="tel: +375447535455">+375 44 753 54
                  55</a></p>
              <p>По предварительной записи работаем в любое время</p>`,
      icon: 'assets/images/map_marker.svg',
    },
    {
      position: { lat: 53.859779, lng: 27.673874 },
      title: `Партизанский 150-а (TЦ "МОМО") <br> 2 этаж. красная зона`,
      description: `<p class="with-icon"><span class="ico-metro">M</span> "Могилевская"</p>
              <p>пн-пт: 11:00–20:00, сб: 11:00–19:00</p>
              <p>A1: <a href="tel: +375293778080">+375 29 377 80 80</a>, <a href="tel: +375293078080">+375 29 307 80 80</a></p>
              <p>По предварительной записи работаем в любое время</p>`,
      icon: 'assets/images/map_marker.svg',
    }
  ];

  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    fullscreenControl: true,
    zoomControl: true,
  }

  selectedMarker: any = null;

  openInfoWindow(marker: MapMarker, markerData: any) {
    this.selectedMarker = markerData;
    if (this.infoWindow) {
      this.infoWindow.open(marker);
    } else {
      console.error('InfoWindow is not available');
    }
  }

  ngAfterViewInit(): void {
    if (this.map) {
      this.mapInitialized.emit(this.map);
    }
  }
}
