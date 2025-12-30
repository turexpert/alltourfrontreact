'use client';

import { useIsMobile } from '@/hooks/useMediaQuery';
import HomeBanner from '@/components/sections/HomeBanner';
import PopularFeatures from '@/components/sections/PopularFeatures';
import PopularFeaturesTop from '@/components/sections/PopularFeaturesTop';
import BestOffers from '@/components/sections/BestOffers';
import BestHotels from '@/components/sections/BestHotels';
import Partners from '@/components/sections/Partners';
import SubscribeSection from '@/components/sections/SubscribeSection';
import OfficesSection from '@/components/sections/OfficesSection';
import styles from './page.module.scss';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className={styles.home}>
      {isMobile && <PopularFeaturesTop />}
      <HomeBanner />
      {!isMobile && <PopularFeatures />}
      <BestOffers />
      <BestHotels />
      <Partners />
      <SubscribeSection />
      <OfficesSection />
    </div>
  );
}
