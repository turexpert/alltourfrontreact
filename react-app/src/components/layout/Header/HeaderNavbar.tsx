'use client';

import Link from 'next/link';
import styles from './Header.module.scss';

export default function HeaderNavbar() {
  return (
    <ul className={styles.navbarNav}>
      <li className={styles.navItem}>
        <Link href="/catalog" className={styles.navLink}>
          Каталог туров
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/promotions" className={styles.navLink}>
          Акции и новости
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/reviews" className={styles.navLink}>
          Блог
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/about" className={styles.navLink}>
          О нас
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/contact" className={styles.navLink}>
          Контакты
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/mice" className={styles.navLink}>
          MICE
        </Link>
      </li>
    </ul>
  );
}
