import styles from './page.module.scss';

interface CountryPageProps {
  params: {
    slug: string;
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  const { slug } = params;

  return (
    <div className={styles.country}>
      <div className="container">
        <h1>Туры в {slug}</h1>
        <div className={styles.content}>
          <p>Здесь будет информация о турах в выбранную страну.</p>
          
          <div className={styles.info}>
            <h2>Популярные направления</h2>
            <p>Выберите курорт или отель для бронирования тура.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
