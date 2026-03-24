# next-template

Стартовый шаблон [Next.js](https://nextjs.org) (App Router) с ориентацией на Feature-Sliced Design, строгий TypeScript, ESLint/Prettier, Tailwind CSS v4 и UI на базе [shadcn/ui](https://ui.shadcn.com) (Radix). Сборка в режиме [`standalone`](https://nextjs.org/docs/app/api-reference/config/next-config-js/output) для Docker.

## Требования

- Node.js 20+
- npm (в репозитории зафиксирован `package-lock.json`)

## Быстрый старт

```bash
cp .env.example .env.local
npm ci
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Структура проекта

| Путь | Назначение |
|------|------------|
| `src/app` | Маршруты App Router: только страницы и layout, без тяжёлой разметки экранов |
| `src/appLayer` | Провайдеры, глобальные стили |
| `src/pagesLayer` | Композиция экранов (импорт `@/pages/...`) |
| `src/widgets`, `src/features`, `src/entities`, `src/stores` | Слои FSD — добавляйте по мере роста проекта (алиасы уже в `tsconfig.json`) |
| `src/shared` | Переиспользуемый UI (`ui`), утилиты (`lib`), хуки, API-клиенты |

Маршрут подключает экран через короткий файл-«провод», например `src/app/page.tsx` рендерит компонент из `src/pagesLayer`.

Правила импортов: только «вниз» по слоям (например, `entities` не импортирует `pages`). Порядок импортов задаётся в `eslint.config.mjs` (`simple-import-sort`).

## Переменные окружения

Скопируйте `.env.example` в `.env.local` для разработки.

| Переменная | Описание |
|------------|----------|
| `NEXT_PUBLIC_APP_URL` | Публичный URL приложения (для ссылок, метаданных и т.п.) |

Секреты и прод-значения не коммитьте; используйте `.env.local` или переменные на платформе деплоя.

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Режим разработки |
| `npm run build` | Продакшен-сборка |
| `npm run start` | Запуск после `build` |
| `npm run lint` / `npm run lint:fix` | ESLint |
| `npm run format` / `npm run format:check` | Prettier |
| `npm run typecheck` | Проверка типов без эмита |

## Docker

Образ собирает приложение и запускает [standalone](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)-сервер.

Публичные переменные, вшитые в клиентский бандл, нужно передавать на **этапе сборки** через `--build-arg`:

```bash
docker build -t next-template:latest --build-arg NEXT_PUBLIC_APP_URL=https://example.com .
docker run --rm -p 3000:3000 next-template:latest
```

Для локального прогона с файлом окружения (создайте `.env.production` по образцу `.env.example`):

```bash
npm run docker:build
npm run docker:run:env
```

Эквивалент без npm-скриптов: `docker run --rm -p 3000:3000 --env-file .env.production next-template:latest`.

## UI (shadcn)

Конфигурация CLI: `components.json`. Компоненты добавляются в `src/shared/ui`, утилита `cn` — в `src/shared/lib/utils.ts`.

## TypeScript

Включены строгие опции и дополнительные проверки (`noUncheckedIndexedAccess`, `noImplicitOverride` и др.) — см. `tsconfig.json`.

## Полезные ссылки

- [Документация Next.js](https://nextjs.org/docs)
- [Deploying Next.js](https://nextjs.org/docs/app/building-your-application/deploying)
