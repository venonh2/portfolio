import CopyContact from "./CopyContact";

const LINKEDIN_URL = "https://www.linkedin.com/in/brendow-evangelista-12029a200";
const GITHUB_URL = "https://github.com/venonh2";
const EMAIL = "Brendow-evan@hotmail.com";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-5 pt-12 pb-16 md:px-10 md:pt-24"
    >
      <h2
        id="about-title"
        className="text-center text-[32px] font-bold tracking-tight md:text-5xl"
      >
        About Me
      </h2>

      <div className="mt-12 flex flex-col gap-4 pl-3 text-base md:mt-16 md:gap-5 md:text-lg">
        <p>Brendow E. R</p>
        <p>Degree in Software engineering</p>

        <h3 className="mt-2 font-semibold underline decoration-1 underline-offset-4">
          Contact info
        </h3>
        <ul className="flex flex-col gap-4 md:gap-5">
          <li>
            <CopyContact label="Linkedin" value={LINKEDIN_URL} />
          </li>
          <li>
            <CopyContact label="Github" value={GITHUB_URL} />
          </li>
          <li>
            <CopyContact label={EMAIL} value={EMAIL} />
          </li>
        </ul>
      </div>

      {/* Takes the remaining screen height so the section fills the viewport */}
      <div className="flex flex-1 items-center justify-center pt-16">
        {/* Shrinks slightly on narrow phones so each forced line still fits */}
        <p className="whitespace-nowrap text-center text-[min(30px,calc((100vw-40px)/10))] font-bold leading-tight text-accent md:text-[42px]">
          Not the best
          <br />
          developer out there,
          <br />
          but one of the great
          <br />
          ones.
        </p>
      </div>
    </section>
  );
}
