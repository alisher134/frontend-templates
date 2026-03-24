# vite-react

Vite + React 19 + TypeScript. Структура слоёв и алиасы совпадают с шаблоном [`next-tailwind`](../next-tailwind/): **app** (тонкая оболочка), **appLayer**, **pagesLayer**, **widgets / features / entities / stores**, **shared**. Стили — Tailwind CSS v4, тема и подход shadcn/ui, как в Next-шаблоне (`globals.css`, `Button` в `shared/ui`).

## Требования

- Node.js 20+
- npm (`package-lock.json` в репозитории)

## Быстрый старт

```bash
npm ci
npm run dev
```

Открой URL из вывода терминала (часто [http://localhost:5173](http://localhost:5173)).

## Точка входа и маршрутизация

| Путь | Назначение |
|------|------------|
| `src/main.tsx` | Монтирование дерева, импорт шрифтов и `globals.css` |
| `src/app/RootLayout.tsx` | Аналог корневого `layout.tsx`: оболочка страницы + `AppProviders` |
| `src/app/Page.tsx` | Аналог `page.tsx`: только подключает экран из `pagesLayer` |
| `src/appLayer` | Провайдеры, глобальные стили |
| `src/pagesLayer` | Композиция экранов (импорт `@/pages/...`) |
| `src/widgets`, `src/features`, `src/entities`, `src/stores` | Слои FSD — по мере роста проекта |
| `src/shared` | UI (`ui`), утилиты (`lib`), хуки |

Алиасы `@/pages/*` → `src/pagesLayer/*` настроены в `tsconfig.app.json` и в `vite.config.ts` (оба должны совпадать).

Правила импортов и стиль кода — в `eslint.config.mjs` (в т.ч. `simple-import-sort` по слоям).

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Режим разработки |
| `npm run build` | Сборка |
| `npm run preview` | Превью production-сборки |
| `npm run lint` / `npm run lint:fix` | ESLint |
| `npm run format` / `npm run format:check` | Prettier |
| `npm run typecheck` | `tsc` без emit |
