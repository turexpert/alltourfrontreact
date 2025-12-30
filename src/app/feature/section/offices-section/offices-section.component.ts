import { Component } from '@angular/core';
import { AccordionComponent } from '../../../shared/components/accordion/accordion.component';
import { AccordionItemComponent } from '../../../shared/components/accordion/accordion-item/accordion-item.component';
import { GoogleMapComponent } from '../../../shared/components/google-map/google-map.component';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-offices-section',
  standalone: true,
  imports: [AccordionComponent, AccordionItemComponent, GoogleMapComponent],
  templateUrl: './offices-section.component.html',
  styleUrl: './offices-section.component.scss'
})
export class OfficesSectionComponent {
  map: GoogleMap | null = null;

  state: Map<number, boolean> = new Map();

  private panTimeout: any;
  private zoomTimeout: any;

  onMapInitialized(map: GoogleMap) {
    this.map = map;
  }

  toggle(isOpen: boolean, section: number) {
    this.state.set(section, isOpen);

    if (Array.from(this.state.values()).every(value => !value)) {
      this.panAndZoom({ lat: 53.89938138808464, lng: 27.55869048700048 }, 11, 11);
    } else if (section === 1 && isOpen) {
      this.panAndZoom({ lat: 53.926400, lng: 27.517552 }, 11, 14);
    } else if (section === 2 && isOpen) {
      this.panAndZoom({ lat: 53.859779, lng: 27.673874 }, 11, 14);
    }
  }

  private panAndZoom(center: { lat: number; lng: number }, initialZoom: number, finalZoom: number) {
    if (this.map) {
      if (this.panTimeout) clearTimeout(this.panTimeout);
      if (this.zoomTimeout) clearTimeout(this.zoomTimeout);

      //this.smoothZoom(this.map!, initialZoom);
      this.map!.googleMap?.setZoom(initialZoom);

      this.panTimeout = setTimeout(() => {
        this.map!.panTo(center);
      }, 400);

      this.zoomTimeout = setTimeout(() => {
        this.map!.googleMap?.setZoom(finalZoom);
      }, 800);
    }
  }
}
