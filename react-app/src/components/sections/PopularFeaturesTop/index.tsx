'use client';

import styles from './PopularFeaturesTop.module.scss';

const items = [
  { id: '1', title: 'Горящие туры', class: 'icon icon-fire' },
  { id: '2', title: 'Авторские туры', class: 'icon icon-ticket' },
  { id: '3', title: 'Автобусные туры', class: 'icon icon-bus' },
  { id: '4', title: 'Отели дня', class: 'icon icon-hotel' },
  { id: '5', title: 'Отдых с детьми', class: 'icon icon-kids' },
  { id: '6', title: 'Круизы', class: 'icon icon-ship' },
];

export default function PopularFeaturesTop() {
  return (
    <div className={styles.popularFeaturesTop}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <span className={item.class}></span>
              <span className={styles.title}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
