'use client';

import styles from './SubscribeSection.module.scss';

export default function SubscribeSection() {
  return (
    <div className={styles.subscribeSection}>
      <section className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2>Подпишитесь на наш Telegram</h2>
            <div className={styles.text}>
              Получайте все спецпредложения и эксклюзивные акции первым
            </div>
          </div>

          <div className={styles.image}>
            <span className="icon icon-tg"></span>
            <div className={styles.rotating}>
              <a href="#">
                <svg width="217" height="217">
                  <defs>
                    <path 
                      id="circlePath" 
                      d="M 108, 110 m -85.2, 0 a 85.2,85.2 0 1,1 170.4,0 a 85.2,85.2 0 1,1 -170.4,0" 
                    />
                  </defs>
                  <text fontSize="21.5px" fill="white">
                    <textPath href="#circlePath" startOffset="0">
                      перейти в Telegram канал перейти в Telegram канал
                    </textPath>
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
