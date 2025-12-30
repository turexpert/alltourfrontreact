'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useMediaQuery';
import SocialLinks from '@/components/shared/SocialLinks';
import styles from './Footer.module.scss';

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerLogo}>
          <Link href="/">
            <Image
              src="/assets/images/footer-logo.png"
              alt="Alltour"
              width={269}
              height={70}
            />
          </Link>
        </div>

        {isMobile && (
          <div className={styles.footerNewsPhone}>
            <a href="tel:+375293778080">
              <i className="icon icon-phone"></i> +375 29 377 80 80
            </a>
          </div>
        )}

        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.footerCatalog}>
              <h5>Каталог туров</h5>
              <div className={styles.footerLinks}>
                <ul>
                  <li>
                    <Link href="#">
                      <Image
                        src="/assets/images/fire.png"
                        alt=""
                        width={14}
                        height={14}
                        className={styles.iconFire}
                      />
                      Горящие туры
                    </Link>
                  </li>
                  <li><Link href="#">Авторские туры</Link></li>
                  <li><Link href="#">Автобусные туры</Link></li>
                  <li><Link href="#">Отели дня</Link></li>
                  <li><Link href="#">Отдых с детьми</Link></li>
                  <li><Link href="#">Круизы</Link></li>
                </ul>
                <ul>
                  <li><Link href="/promotions">Акции и новости</Link></li>
                  <li><Link href="/reviews">Блог</Link></li>
                  <li><Link href="/about">О нас</Link></li>
                  <li><Link href="/contact">Контакты</Link></li>
                  <li>
                    <Link href="#">
                      <Image
                        src="/assets/images/wave.png"
                        alt=""
                        width={14}
                        height={14}
                      />
                      Вакансии
                    </Link>
                  </li>
                  <li><Link href="#">Корпоративным клиентам</Link></li>
                </ul>
              </div>
            </div>
            {!isMobile && (
              <div className={styles.footerPolicy}>
                <Link href="#">Политика обработки персональных данных</Link>
              </div>
            )}
          </div>

          <div className={styles.footerRight}>
            {!isMobile && (
              <div className={styles.footerNews}>
                <div className={styles.footerNewsSection}>
                  <h5>Последние новости</h5>
                  <ul>
                    <li>
                      <Link href="#" className={styles.footerNewsItem}>
                        Подбор тура онлайн по всем туроператорам
                      </Link>
                      <div className={styles.footerNewsDate}>2024-07-29 19:51</div>
                    </li>
                    <li>
                      <Link href="#" className={styles.footerNewsItem}>
                        Pаннее бронирование туров - лето 2024!
                      </Link>
                      <div className={styles.footerNewsDate}>2024-03-27 15:08</div>
                    </li>
                  </ul>
                </div>

                <div className={styles.footerNewsPhone}>
                  <a href="tel:+375293778080">
                    <i className="icon icon-phone"></i> +375 29 377 80 80
                  </a>
                </div>
              </div>
            )}

            <div className={styles.footerSocial}>
              <div className={styles.footerSocialTelegram}>
                <h5>Подпишитесь на наш Telegram канал</h5>
                <div>
                  Получайте все спецпредложения и эксклюзивные акции первым
                  <button className={`btn btn-secondary ${styles.btnSocial}`}>
                    <span className={styles.iconWrapper}>
                      <Image 
                        src="/assets/images/icons/social-telegram.svg" 
                        alt="Telegram"
                        width={20}
                        height={20}
                      />
                    </span>
                    Telegram-канал
                  </button>
                </div>
              </div>

              <div className={styles.footerSocialLink}>
                <SocialLinks />
              </div>

              {isMobile && (
                <div className={styles.footerPolicy}>
                  <Link href="#">Политика обработки персональных данных</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
