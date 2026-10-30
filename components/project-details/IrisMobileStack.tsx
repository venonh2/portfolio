// Coordinates follow a 376px-wide drawing; text is placed in % so it stretches with the lines
export default function IrisMobileStack() {
  return (
    <div className="relative h-60 w-full max-w-[376px] text-[15px] md:text-base">
      <p className="text-base md:text-lg">React Native</p>

      <svg
        viewBox="0 0 376 240"
        preserveAspectRatio="none"
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
      >
        <path vectorEffect="non-scaling-stroke" d="M100 12 C130 14 160 40 160 62" />
        <path vectorEffect="non-scaling-stroke" d="M55 30 L62 124" />
        <path vectorEffect="non-scaling-stroke" d="M15 38 C8 90 -2 150 0 175 C2 200 15 212 27 216" />
      </svg>

      <ul>
        <li className="absolute top-[72px] left-[20%]">RTSP protocol with Native Modules</li>
        <li className="absolute top-[134px] left-[4%] pr-2">
          CI/CD With App Center ( it no longer exists )
        </li>
        <li className="absolute top-[196px] left-[15%]">
          Unit tests with ... Can you guess? I’m just Jesting don’t worry
        </li>
      </ul>
    </div>
  );
}
