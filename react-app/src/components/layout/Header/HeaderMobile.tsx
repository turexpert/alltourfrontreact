'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.mobileHeader}>
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" className={styles.logo}>
            <Image 
              src="/assets/images/alltour_logo.png" 
              alt="Alltour" 
              width={150} 
              height={40}
              priority
            />
          </Link>
          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="icon icon-menu"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button 
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="icon icon-close"></i>
          </button>
          <ul className={styles.mobileNavList}>
            <li>
              <Link href="/catalog" onClick={() => setIsMenuOpen(false)}>
                Каталог туров
              </Link>
            </li>
            <li>
              <Link href="/promotions" onClick={() => setIsMenuOpen(false)}>
                Акции и новости
              </Link>
            </li>
            <li>
              <Link href="/reviews" onClick={() => setIsMenuOpen(false)}>
                Блог
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                О нас
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Контакты
              </Link>
            </li>
            <li>
              <Link href="/mice" onClick={() => setIsMenuOpen(false)}>
                MICE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
