import { OwlOptions } from "ngx-owl-carousel-o";

export const POPULAR_FEATURES_OPTIONS: OwlOptions = {
  autoplay: true,
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  smartSpeed: 2000,
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

export const POPULAR_FEATURES_ITEMS = [
  {
    id: '1',
    class: 'icon icon-palm',
    title: 'Авторские туры'
  }, {
    id: '2',
    class: 'icon icon-kids',
    title: 'Отдых с детьми'
  }, {
    id: '3',
    class: 'icon icon-bus',
    title: 'Автобусные туры'
  }, {
    id: '5',
    class: 'icon icon-fire',
    title: 'Горящие туры'
  }, {
    id: '6',
    class: 'icon icon-ship',
    title: 'Круизы'
  }, {
    id: '7',
    class: 'icon icon-search2',
    title: 'Супер поиск туров'
  }, {
    id: '8',
    class: 'icon icon-hotel',
    title: 'Отели для VIP'
  }, {
    id: '9',
    class: 'icon icon-ticket',
    title: 'Авиабилеты'
  },{
    id: '4',
    class: 'icon icon-build',
    title: 'Туры с осмотром недвижимости'
  }
];
