'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import HeaderTop from './HeaderTop';
import HeaderNavbar from './HeaderNavbar';
import LoginModal from '@/components/forms/LoginModal';
import styles from './Header.module.scss';

export default function HeaderMain() {
  const isHeaderHidden = useScrollDirection();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className={clsx(styles.header, { [styles.hidden]: isHeaderHidden })}>
        <HeaderTop isHeaderHidden={isHeaderHidden} />
        <div className="container">
          <nav className={styles.navbar}>
            <div>
              <Link href="/" className={styles.logo}>
                <Image 
                  src="/assets/images/alltour_logo.png" 
                  alt="Alltour" 
                  width={196} 
                  height={50}
                  priority
                />
              </Link>
            </div>
            <div>
              <HeaderNavbar />
            </div>
            <div className={styles.navActions}>
              <button className="btn-icon">
                <Image src="/assets/icons/heart.svg" alt="Favorites" width={28} height={28} />
              </button>
              <button className="btn-icon" onClick={() => setIsLoginModalOpen(true)}>
                <Image src="/assets/icons/account.svg" alt="Account" width={28} height={28} />
              </button>
            </div>
          </nav>
        </div>
      </div>
      
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </>
  );
}
