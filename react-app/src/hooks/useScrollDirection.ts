'use client';

import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderHidden(currentScrollTop > lastScrollTop && currentScrollTop > 100);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return isHeaderHidden;
}
