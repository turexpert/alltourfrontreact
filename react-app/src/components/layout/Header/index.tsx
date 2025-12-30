'use client';

import { useIsMobile } from '@/hooks/useMediaQuery';
import HeaderMain from './HeaderMain';
import HeaderMobile from './HeaderMobile';

export default function Header() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <HeaderMobile />;
  }

  return <HeaderMain />;
}
