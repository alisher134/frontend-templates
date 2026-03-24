export function HomePage() {
  return (
    <main className="bg-background flex min-h-full flex-1 flex-col items-center justify-center px-6">
      <h1 className="text-foreground text-center text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.95] font-extralight tracking-[-0.06em]">
        Hello,{" "}
        <span className="from-foreground to-muted-foreground bg-linear-to-br bg-clip-text font-light text-transparent">
          world
        </span>
      </h1>
    </main>
  );
}
