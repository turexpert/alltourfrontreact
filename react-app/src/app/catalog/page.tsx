import styles from './page.module.scss';

export default function CatalogPage() {
  return (
    <div className={styles.catalog}>
      <div className="container">
        <h1>Каталог туров</h1>
        <div className={styles.content}>
          <p>Здесь будет каталог туров с фильтрами и поиском.</p>
          
          <div className={styles.categories}>
            <div className={styles.category}>
              <span className="icon icon-fire"></span>
              <h3>Горящие туры</h3>
              <p>Лучшие предложения с максимальными скидками</p>
            </div>
            <div className={styles.category}>
              <span className="icon icon-ticket"></span>
              <h3>Авторские туры</h3>
              <p>Уникальные маршруты от наших экспертов</p>
            </div>
            <div className={styles.category}>
              <span className="icon icon-bus"></span>
              <h3>Автобусные туры</h3>
              <p>Комфортные путешествия по Европе</p>
            </div>
            <div className={styles.category}>
              <span className="icon icon-hotel"></span>
              <h3>Отели дня</h3>
              <p>Специальные предложения на размещение</p>
            </div>
            <div className={styles.category}>
              <span className="icon icon-kids"></span>
              <h3>Отдых с детьми</h3>
              <p>Семейные туры с детскими программами</p>
            </div>
            <div className={styles.category}>
              <span className="icon icon-ship"></span>
              <h3>Круизы</h3>
              <p>Морские и речные круизы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
