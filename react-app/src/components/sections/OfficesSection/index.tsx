'use client';

import { useState } from 'react';
import Accordion from '@/components/shared/Accordion';
import styles from './OfficesSection.module.scss';

const offices = [
  {
    id: 1,
    title: 'Победителей, 65 (ТЦ Корона "ЗАМОК")\nпав. 401',
    content: (
      <>
        <p>пн-сб: 11:00–20:30, вс: 11:00–20:30</p>
        <p>Тел: <a href="tel:+375291040044">+375 29 104 00 44</a></p>
        <p>A1: <a href="tel:+375293048080">+375 29 304 80 80</a>, <a href="tel:+375447535455">+375 44 753 54 55</a></p>
        <p>По предварительной записи работаем в любое время</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Партизанский 150-а (TЦ "МОМО")\n2 этаж. красная зона',
    content: (
      <>
        <p className={styles.withIcon}>
          <span className={styles.icoMetro}>M</span> &quot;Могилевская&quot;
        </p>
        <p>пн-пт: 11:00–20:00, сб: 11:00–19:00</p>
        <p>A1: <a href="tel:+375293778080">+375 29 377 80 80</a>, <a href="tel:+375293078080">+375 29 307 80 80</a></p>
        <p>По предварительной записи работаем в любое время</p>
      </>
    ),
  },
];

export default function OfficesSection() {
  const [activeOffice, setActiveOffice] = useState<number | null>(1);

  return (
    <section className="container">
      <div className={styles.officesSection}>
        <div className={styles.content}>
          <h2>Наши офисы в Минске</h2>
          <div className={styles.list}>
            <Accordion>
              {offices.map((office) => (
                <Accordion.Item
                  key={office.id}
                  title={office.title}
                  isOpen={activeOffice === office.id}
                  onToggle={() => setActiveOffice(activeOffice === office.id ? null : office.id)}
                >
                  {office.content}
                </Accordion.Item>
              ))}
            </Accordion>
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
    </section>
  );
}
