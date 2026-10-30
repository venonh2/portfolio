import HeroQuiz from "./HeroQuiz";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-svh w-full max-w-5xl flex-col px-5 pt-5 pb-16 md:px-10 md:pt-8">
      <p className="text-sm md:text-base">Brendow E. R</p>

      <p className="mt-12 pl-1 text-base font-semibold md:mt-16 md:text-xl">
        Looks like You Have Found ME
      </p>

      <h1 className="mt-16 pl-2 text-5xl font-bold tracking-tight md:mt-20 md:text-8xl">
        Are you read? Let&apos;s get <span className="text-accent">Started</span>
      </h1>

      <HeroQuiz />
    </section>
  );
}
