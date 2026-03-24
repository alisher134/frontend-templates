# vite-react

Vite + React 19 + TypeScript. Структура слоёв и алиасы совпадают с шаблоном [`next-tailwind`](../next-tailwind/): **`app`** (оболочка, провайдеры, стили, точка входа страницы), **`pages`** (композиция экранов), **widgets / features / entities / stores**, **shared**. Стили — Tailwind CSS v4, тема и подход shadcn/ui, как в Next-шаблоне (`globals.css`, `Button` в `shared/ui`).

## Требования

- Node.js 20+
- npm (`package-lock.json` в репозитории)

## Быстрый старт

```bash
npm ci
npm run dev
```

Открой URL из вывода терминала (часто [http://localhost:5173](http://localhost:5173)).

## Точка входа и слои

| Путь | Назначение |
|------|------------|
| `src/main.tsx` | Монтирование дерева, импорт шрифтов и `globals.css` |
| `src/app/RootLayout.tsx` | Аналог корневого `layout.tsx`: оболочка + `AppProviders` |
| `src/app/Page.tsx` | Аналог `page.tsx`: подключает экран из `pages` |
| `src/app/providers`, `src/app/styles` | Провайдеры и глобальные стили |
| `src/pages` | Композиция экранов (импорт `@/pages/...`) |
| `src/widgets`, `src/features`, `src/entities`, `src/stores` | Слои FSD — по мере роста проекта |
| `src/shared` | UI (`ui`), утилиты (`lib`), хуки |

Алиас `@/pages/*` → `src/pages/*` задан в `tsconfig.app.json` и в `vite.config.ts` (должны совпадать). В шаблоне Next слой экранов лежит в `src/pagesLayer` с тем же алиасом `@/pages/...`.

Правила импортов — в `eslint.config.mjs` (в т.ч. `simple-import-sort` по слоям).

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Режим разработки |
| `npm run build` | Сборка |
| `npm run preview` | Превью production-сборки |
| `npm run lint` / `npm run lint:fix` | ESLint |
| `npm run format` / `npm run format:check` | Prettier |
| `npm run typecheck` | `tsc` без emit |
