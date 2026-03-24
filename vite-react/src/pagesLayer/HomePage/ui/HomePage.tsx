export function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex items-center gap-3">
          <img
            alt="Vite logo"
            className="h-8 w-8"
            height={32}
            src="/vite.svg"
            width={32}
          />
          <img
            alt="React logo"
            className="h-8 w-8 dark:invert"
            height={32}
            src="/react.svg"
            width={32}
          />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            Vite + React + та же FSD-раскладка, что и в Next-шаблоне.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Точка входа —{" "}
            <code className="text-foreground">src/app/Page.tsx</code> (как{" "}
            <code className="text-foreground">page.tsx</code> в App Router).
            Экраны живут в{" "}
            <code className="text-foreground">src/pagesLayer</code>, провайдеры
            и глобальные стили — в{" "}
            <code className="text-foreground">src/appLayer</code>.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="bg-foreground text-background flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors hover:bg-[#383838] md:w-[158px] dark:hover:bg-[#ccc]"
            href="https://vite.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Документация Vite
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://react.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
        </div>
      </main>
    </div>
  );
}
