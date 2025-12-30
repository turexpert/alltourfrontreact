import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className="container">
        <h1>Контакты</h1>
        
        <div className={styles.content}>
          <div className={styles.offices}>
            <div className={styles.office}>
              <h3>ТЦ Корона &quot;ЗАМОК&quot;</h3>
              <p><strong>Адрес:</strong> Победителей, 65, пав. 401</p>
              <p><strong>Режим работы:</strong> пн-сб: 11:00–20:30, вс: 11:00–20:30</p>
              <p><strong>Телефон:</strong> <a href="tel:+375291040044">+375 29 104 00 44</a></p>
              <p><strong>A1:</strong> <a href="tel:+375293048080">+375 29 304 80 80</a></p>
            </div>
            
            <div className={styles.office}>
              <h3>ТЦ &quot;МОМО&quot;</h3>
              <p><strong>Адрес:</strong> Партизанский 150-а, 2 этаж, красная зона</p>
              <p><strong>Метро:</strong> &quot;Могилевская&quot;</p>
              <p><strong>Режим работы:</strong> пн-пт: 11:00–20:00, сб: 11:00–19:00</p>
              <p><strong>A1:</strong> <a href="tel:+375293778080">+375 29 377 80 80</a></p>
            </div>
          </div>
          
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.5!2d27.5!3d53.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDU0JzAwLjAiTiAyN8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sby!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
