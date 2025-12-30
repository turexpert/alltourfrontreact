'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import SectionWrapper from '@/components/shared/SectionWrapper';
import styles from './BestHotels.module.scss';

// Mock data for hotels
const hotels = [
  {
    id: 1,
    name: 'Sunrise Resort & Spa',
    country: 'Турция',
    city: 'Анталья',
    label: 'Горящий тур',
    images: ['/assets/images/hotels/hotel1.jpg', '/assets/images/hotels/hotel2.jpg'],
    likes: [
      { code: 'pool', text: 'Бассейн' },
      { code: 'beach', text: 'Пляж' },
      { code: 'spa', text: 'SPA' },
      { code: 'food', text: 'Питание' },
    ],
  },
  {
    id: 2,
    name: 'Paradise Beach Hotel',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    label: 'Хит продаж',
    images: ['/assets/images/hotels/hotel2.jpg', '/assets/images/hotels/hotel1.jpg'],
    likes: [
      { code: 'pool', text: 'Бассейн' },
      { code: 'diving', text: 'Дайвинг' },
      { code: 'wifi', text: 'Wi-Fi' },
      { code: 'kids', text: 'Детская зона' },
    ],
  },
  {
    id: 3,
    name: 'Ocean View Resort',
    country: 'ОАЭ',
    city: 'Дубай',
    images: ['/assets/images/hotels/hotel1.jpg'],
    likes: [
      { code: 'pool', text: 'Бассейн' },
      { code: 'beach', text: 'Пляж' },
      { code: 'restaurant', text: 'Рестораны' },
      { code: 'fitness', text: 'Фитнес' },
    ],
  },
];

const countries = ['Все страны', 'Турция', 'Египет', 'ОАЭ', 'Таиланд', 'Мальдивы'];

export default function BestHotels() {
  const [selectedCountry, setSelectedCountry] = useState('Все страны');
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const actions = (
    <div className={styles.action}>
      <div className={styles.filters}>
        <select 
          value={selectedCountry} 
          onChange={(e) => setSelectedCountry(e.target.value)}
          className={styles.select}
        >
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className={styles.carouselNav}>
        <button 
          className="btn btn-round" 
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
        >
          <span className="icon icon-arrow_left_big"></span>
        </button>
        <button 
          className="btn btn-round" 
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
        >
          <span className="icon icon-arrow_right_big"></span>
        </button>
      </div>
    </div>
  );

  return (
    <SectionWrapper 
      title={<h2>Подборка лучших отелей</h2>}
      actions={actions}
    >
      <div className={styles.hotelsCard}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <div className={styles.hotelCard}>
                <div className={styles.hotelImage}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                  >
                    {hotel.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <Image 
                          src={image} 
                          alt={hotel.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {hotel.label && <div className={styles.badge}>{hotel.label}</div>}
                <div className={styles.hotelInfo}>
                  <h3>{hotel.name}</h3>
                  <div className={styles.location}>
                    <span className="icon icon-location"></span>
                    {hotel.country}, {hotel.city}
                  </div>
                  <div className={styles.guestLikes}>
                    <div className={styles.guestLikesTitle}>Что гостям нравится:</div>
                    <ul>
                      {hotel.likes.map((like, idx) => (
                        <li key={idx}>
                          <Image 
                            src={`/assets/icons/gl-icons/${like.code}.svg`} 
                            alt="" 
                            width={20} 
                            height={20}
                          />
                          {like.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <button className="btn btn-secondary">Рассчитать тур</button>
                  <button className={`btn ${styles.btnOutline}`}>Об отеле</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
