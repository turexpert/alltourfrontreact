import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {
  public showCarousel = false;
  customOptions: OwlOptions = {
    items: 4,
    nav: true,
    dots: false,
    stagePadding: 20,
    navText: ['<div class=\'owl-prev\'>&#8249;</div>', '<div class=\' owl-next\'>&#8250;</div>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  };
  public customOptions2: OwlOptions = {
    // autoplay:true,
    // autoplayTimeout:1000,
    autoplayHoverPause: true,

    loop: true,
    margin: 24,
    nav: false,
    autoplay: false,
    smartSpeed: 2000,
    // loop: true,
    // margin: 24,
    // nav: true,
    // autoplay: true,
    // smartSpeed: 2000,

    navText: [
      "<i class='fa-solid fa-angle-left'><</i>",
      "<i class='fa-solid fa-angle-right'>></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  public items = [
    {
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },{
      id: '1',
      class: 'icon icon-palm',
      title: 'Авторские туры'
    },
  ]


  // initCarousel() {
  //   this.showCarousel = true;
  // }


//  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit() {
    setTimeout(() => {
      this.showCarousel = true;

    }, 2000);

    // this.customOptions = {
    //   loop: true,
    //   mouseDrag: true,
    //   touchDrag: false,
    //   pullDrag: false,
    //   dots: false,
    //   navSpeed: 700,
    //   autoplay: true,
    //   navText: ['', ''],
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     400: {
    //       items: 2
    //     },
    //     740: {
    //       items: 3
    //     },
    //     940: {
    //       items: 4
    //     }
    //   }
    // }

  }
}

