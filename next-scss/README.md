# next-scss

Шаблон **Next.js 16** (App Router) на **TypeScript** с **Sass**, ориентир на слои в духе **FSD**: маршруты отдельно от экранов и виджетов, общие алиасы для импортов. Стили — глобальный `globals.scss`, при необходимости **CSS Modules** рядом с компонентами. Шрифт **Inter** подключается через **`next/font/google`**.

## Требования

- **Node.js** 20+
- **npm** (зависимости — в `package.json`)

## Быстрый старт

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000). Сборка и dev идут через **webpack** (`--webpack` в скриптах), чтобы стабильно работали в том числе настройки вроде **SVGR** для SVG.

## Структура `src/`

| Путь | Назначение |
|------|------------|
| `app/` | App Router: `layout.tsx`, `page.tsx`, маршруты |
| `appLayer/styles/` | `globals.scss`, сброс в `normalize.css` |
| `pagesLayer/` | Страницы приложения (композиция, без разметки маршрута Next) |
| `widgets/` | Крупные блоки UI (например, шапка, подвал) |
| `shared/` | Общие типы, ассеты, утилиты |
| `entities/`, `features/` | Заготовки слоёв под рост проекта |

`app/page.tsx` по смыслу только подключает экран из `pagesLayer`.

## Алиасы TypeScript

В `tsconfig.json` заданы, среди прочего:

- `@/*` → `src/*`
- `@appLayer/*`, `@pagesLayer/*`, `@widgets/*`, `@shared/*`, `@entities/*`, `@features/*`

Используй их вместо длинных относительных путей в `import`.

## Стили

- **`globals.scss`** — `@use` для `normalize.css`, базовые **CSS-переменные** (`:root`, напр. `--app-background-color`), сброс `*` и стили `body`.
- Новые глобальные токены и блоки — по смыслу в `appLayer/styles/`.
- Локальная вёрстка компонента — **`*.module.scss`** рядом с `.tsx`.

Проверка стилей: **`npm run lint:style`** (Stylelint, конфиг в `.stylelintrc.json`). В линт не попадает «чужой» `normalize.css`.

## Шрифты

**Inter** задаётся в `app/layout.tsx` через `next/font/google`: подключены начертания 400–700, подмножества **latin** и **cyrillic**. Класс вешается на `<html>`.

## SVG как React-компоненты

В `next.config.ts` для **Turbopack** настроено правило: импорт `*.svg` через **`@svgr/webpack`** как модуль с React-компонентом. Имеет смысл в связке с путём к типам в `src/shared/types/svg.d.ts`.

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Разработка (webpack) |
| `npm run build` | Продакшен-сборка (webpack) |
| `npm run start` | Запуск после `build` |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint + автофиксы и Stylelint с фиксами по `**/*.{css,scss}` |
| `npm run lint:style` | только Stylelint |

## Полезные ссылки

- [Документация Next.js](https://nextjs.org/docs)
- [Sass в Next.js](https://nextjs.org/docs/app/building-your-application/styling/sass)
- [Оптимизация шрифтов](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
