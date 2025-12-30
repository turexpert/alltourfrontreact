'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useBestCountries } from '@/hooks/useApi';
import SectionWrapper from '@/components/shared/SectionWrapper';
import styles from './BestOffers.module.scss';

export default function BestOffers() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { data: countries = [], isLoading } = useBestCountries(12);

  const visibleOffers = countries.slice(0, 6);
  const hiddenOffers = countries.slice(6, 12);

  const toggle = () => setIsCollapsed(!isCollapsed);

  if (isLoading) {
    return (
      <SectionWrapper title={<h2>Лучшие предложения по странам</h2>}>
        <div className={styles.loading}>Загрузка...</div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title={<h2>Лучшие предложения по странам</h2>}>
      <div className={styles.countryCards}>
        {visibleOffers.map((offer, idx) => (
          <div key={offer.id} className={`${styles.countryCard} ${styles[`card${idx + 1}`]}`}>
            <Link href={`/country/${offer.slug}`}>
              <div className={styles.countryCardName}>
                <span className="icon icon-location"></span>
                {offer.name}
              </div>
              <div className={styles.countryCardImage}>
                <Image 
                  src={offer.img} 
                  alt={offer.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.countryCardInfo}>
                <div>
                  <span className="icon icon-train"></span>
                  <span>от <strong>{offer.bus.byn} BYN</strong>/ ${offer.bus.usd}</span>
                </div>
                <div>
                  <span className="icon icon-plane"></span>
                  <span>от <strong>{offer.plane.byn} BYN</strong>/ ${offer.plane.usd}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.countryCards}
          >
            {hiddenOffers.map((offer, idx) => (
              <div key={offer.id} className={`${styles.countryCard} ${styles[`card${idx + 1}`]}`}>
                <Link href={`/country/${offer.slug}`}>
                  <div className={styles.countryCardName}>
                    <span className="icon icon-location"></span>
                    {offer.name}
                  </div>
                  <div className={styles.countryCardImage}>
                    <Image 
                      src={offer.img} 
                      alt={offer.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.countryCardInfo}>
                    <div>
                      <span className="icon icon-train"></span>
                      <span>от <strong>{offer.bus.byn} BYN</strong>/ ${offer.bus.usd}</span>
                    </div>
                    <div>
                      <span className="icon icon-plane"></span>
                      <span>от <strong>{offer.plane.byn} BYN</strong>/ ${offer.plane.usd}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {hiddenOffers.length > 0 && (
        <div className={styles.countryAction}>
          <button className="btn btn-tertiary" onClick={toggle}>
            {isCollapsed ? 'Показать ещё' : 'Свернуть'}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
