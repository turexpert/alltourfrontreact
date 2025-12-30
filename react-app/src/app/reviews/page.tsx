import styles from './page.module.scss';

export default function ReviewsPage() {
  return (
    <div className={styles.reviews}>
      <div className="container">
        <h1>Блог</h1>
        <div className={styles.content}>
          <p>Полезные статьи о путешествиях, советы экспертов и обзоры направлений.</p>
          
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.image} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <span className={styles.category}>Советы</span>
              </div>
              <div className={styles.cardContent}>
                <h3>Как выбрать идеальный отель для отдыха</h3>
                <p>Полезные советы по выбору отеля: на что обратить внимание...</p>
                <div className={styles.meta}>
                  <span>15 июля 2024</span>
                  <span>5 мин чтения</span>
                </div>
              </div>
            </article>
            
            <article className={styles.card}>
              <div className={styles.image} style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <span className={styles.category}>Направления</span>
              </div>
              <div className={styles.cardContent}>
                <h3>Топ-10 пляжей Турции</h3>
                <p>Обзор лучших пляжей турецкого побережья для идеального отдыха...</p>
                <div className={styles.meta}>
                  <span>10 июля 2024</span>
                  <span>7 мин чтения</span>
                </div>
              </div>
            </article>
            
            <article className={styles.card}>
              <div className={styles.image} style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <span className={styles.category}>Гиды</span>
              </div>
              <div className={styles.cardContent}>
                <h3>Путеводитель по Египту</h3>
                <p>Всё что нужно знать перед поездкой в страну пирамид...</p>
                <div className={styles.meta}>
                  <span>5 июля 2024</span>
                  <span>10 мин чтения</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
