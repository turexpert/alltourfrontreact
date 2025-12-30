'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionWrapper from '@/components/shared/SectionWrapper';
import styles from './Partners.module.scss';

const partners = [
  { name: 'TEZ TOUR', src: 'teztour.png' },
  { name: 'Anex Tour', src: 'anex.png' },
  { name: 'Coral Travel', src: 'coral.png' },
  { name: 'Sunmar', src: 'sunmar.png' },
  { name: 'Pegas', src: 'pegas.png' },
  { name: 'TUI', src: 'tui.png' },
  { name: 'Biblio Globus', src: 'biblio.png' },
  { name: 'Fun Sun', src: 'funsun.png' },
];

export default function Partners() {
  return (
    <SectionWrapper 
      title={<h2>Наши партнеры</h2>}
      hasContainer={false}
      hasContainerForHeader={true}
    >
      <div className={styles.partners}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 8 },
          }}
        >
          {partners.map((partner, idx) => (
            <SwiperSlide key={idx} className={styles.slide}>
              <Image 
                src={`/assets/images/partners/${partner.src}`} 
                alt={partner.name}
                width={166}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
