# Alltour React

Туристическое агентство - React/Next.js версия, мигрированная с Angular.

## Технологии

- **Next.js 14** - React фреймворк с SSR
- **TypeScript** - типизация
- **React Query** - управление состоянием и кэширование API
- **Swiper** - карусели и слайдеры
- **Framer Motion** - анимации
- **Bootstrap 5** - базовые стили
- **SCSS Modules** - модульные стили

## Структура проекта

```
src/
├── app/                    # Next.js App Router страницы
│   ├── about/             # Страница "О нас"
│   ├── catalog/           # Каталог туров
│   ├── contact/           # Контакты
│   ├── country/[slug]/    # Динамическая страница страны
│   ├── promotions/        # Акции и новости
│   ├── reviews/           # Блог
│   ├── layout.tsx         # Корневой layout
│   └── page.tsx           # Главная страница
├── components/
│   ├── forms/             # Компоненты форм
│   ├── layout/            # Header, Footer
│   ├── sections/          # Секции страниц
│   └── shared/            # Общие компоненты
├── hooks/                 # React хуки
├── lib/                   # Утилиты и конфигурация
├── services/              # API сервисы
├── styles/                # Глобальные стили и миксины
└── types/                 # TypeScript типы
```

## Установка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сборки
npm start
```

## Переменные окружения

Создайте файл `.env.local`:

```
NEXT_PUBLIC_API_URL=https://core.alltour.by
```

## Миграция с Angular

Этот проект был мигрирован с Angular 18. Основные изменения:

| Angular | React/Next.js |
|---------|---------------|
| `@angular/router` | Next.js App Router |
| `RxJS` | React Query |
| `@angular/cdk` | Custom hooks |
| `ngx-owl-carousel-o` | Swiper |
| Angular Animations | Framer Motion |
| Angular Services | Service functions + hooks |
| Angular Components | React Components |

## API

Приложение использует API: `https://core.alltour.by`

Доступные эндпоинты:
- `/api/countries` - список стран
- `/api/bestcountries` - лучшие страны
- `/api/hotels` - отели
- `/api/besthotels` - лучшие отели
- `/api/partners` - партнеры
- `/api/menu` - меню

## Разработка

```bash
# Запуск dev сервера
npm run dev

# Линтинг
npm run lint
```

## Лицензия

Private
