'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

interface HeaderTopProps {
  isHeaderHidden?: boolean;
}

export default function HeaderTop({ isHeaderHidden }: HeaderTopProps) {
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.topBar}>
      <div className="container">
        <div className={styles.topBarActions}>
          <div>Свяжитесь с нами:</div>
          <div className={styles.socialLink}>
            <div className={styles.socialIcon}>
              <a href="#" className={styles.btnWithIcon}>
                <Image 
                  src="/assets/images/icons/social-viber.svg" 
                  alt="Viber" 
                  width={20} 
                  height={20} 
                />
              </a>
              <a href="#" className={styles.btnWithIcon}>
                <Image 
                  src="/assets/images/icons/social-telegram.svg" 
                  alt="Telegram" 
                  width={20} 
                  height={20} 
                />
              </a>
            </div>
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <button 
                className={styles.phoneList}
                onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
              >
                <i className="icon icon-phone"></i>
                +375 29 377 80 80
                <i className="icon icon-arrow_down"></i>
              </button>
              {isPhoneDropdownOpen && (
                <div className={styles.phoneDropdown}>
                  <div className={styles.phoneItem}>
                    <p>ТЦ Замок</p>
                    <a href="tel:+375293778080">
                      <i className="icon icon-phone"></i>
                      +375 29 377 80 80
                    </a>
                  </div>
                  <div className={styles.phoneItem}>
                    <p>ТЦ Момо</p>
                    <a href="tel:+375293048080">
                      <i className="icon icon-phone"></i>
                      +375 29 304 80 80
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
