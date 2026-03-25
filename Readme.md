# Frontend templates

Здесь собраны стартовые шаблоны для фронтенд-проектов. Каждый шаблон — отдельная папка в корне репозитория со своим `README` и зависимостями. Репозиторий пополняется по мере появления новых заготовок.

## Шаблоны

| Папка | Стек | Зачем |
|--------|------|--------|
| [`next-tailwind/`](./next-tailwind/) | Next.js (App Router), TypeScript, Tailwind v4, shadcn/ui, FSD-скелет, Docker `standalone` | База под приложение с нормальной структурой и UI-китом |
| [`next-scss/`](./next-scss/) | Next.js (App Router), TypeScript, Sass (глобальные стили + CSS Modules), FSD, Docker `standalone` | Тот же каркас, что у `next-tailwind`, без Tailwind и shadcn |
| [`react-tailwind/`](./react-tailwind/) | Vite, React 19, TypeScript, Tailwind v4, shadcn-стек, FSD как в `next-tailwind` | SPA с той же раскладкой слоёв и алиасами, что и Next-шаблон |
| [`react-scss/`](./react-scss/) | Vite, React 19, TypeScript, Sass, FSD как в `react-tailwind` | SPA без Tailwind и shadcn |

### Как пользоваться

1. Склонируй репозиторий (или скачай нужную папку).
2. Перейди в каталог шаблона, например `cd next-tailwind`, `cd next-scss`, `cd react-tailwind` или `cd react-scss`.
3. Следуй инструкциям в `README.md` внутри этой папки (`npm ci`, `npm run dev` и т.д.).
