'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionWrapper from '@/components/shared/SectionWrapper';
import styles from './PopularFeatures.module.scss';

const items = [
  { id: '1', title: 'Горящие туры', class: 'icon icon-fire' },
  { id: '2', title: 'Авторские туры', class: 'icon icon-ticket' },
  { id: '3', title: 'Автобусные туры', class: 'icon icon-bus' },
  { id: '4', title: 'Отели дня', class: 'icon icon-hotel' },
  { id: '5', title: 'Отдых с детьми', class: 'icon icon-kids' },
  { id: '6', title: 'Круизы', class: 'icon icon-ship' },
];

export default function PopularFeatures() {
  return (
    <SectionWrapper title={<h2>Популярные разделы и услуги</h2>}>
      <div className={styles.popularFeatures}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.navigate}>
                <span className={item.class}></span>
                <span>{item.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
