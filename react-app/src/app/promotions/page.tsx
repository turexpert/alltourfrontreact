import styles from './page.module.scss';

export default function PromotionsPage() {
  return (
    <div className={styles.promotions}>
      <div className="container">
        <h1>Акции и новости</h1>
        <div className={styles.content}>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.date}>29 июля 2024</div>
              <h3>Подбор тура онлайн по всем туроператорам</h3>
              <p>Удобный поиск и бронирование туров по цене туроператоров или ниже...</p>
              <a href="#" className={styles.readMore}>Читать далее</a>
            </article>
            
            <article className={styles.card}>
              <div className={styles.date}>27 марта 2024</div>
              <h3>Раннее бронирование туров - лето 2024!</h3>
              <p>Успейте забронировать летний отдых по специальным ценам...</p>
              <a href="#" className={styles.readMore}>Читать далее</a>
            </article>
            
            <article className={styles.card}>
              <div className={styles.date}>15 марта 2024</div>
              <h3>Горящие туры в Египет</h3>
              <p>Специальные предложения на отдых в Египте с вылетом из Минска...</p>
              <a href="#" className={styles.readMore}>Читать далее</a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
