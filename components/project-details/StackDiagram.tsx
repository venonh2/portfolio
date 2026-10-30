type Props = {
  root: string;
  // Drawn top to bottom, each connected to the root by its own dotted line
  items: [React.ReactNode, React.ReactNode, React.ReactNode];
  // Extra content shown below the diagram, without connecting lines
  children?: React.ReactNode;
};

// Coordinates follow a 376px-wide drawing; text is placed in % so it stretches with the lines
export default function StackDiagram({ root, items: [first, second, third], children }: Props) {
  return (
    <div className="text-[15px] md:text-base">
      <Diagram root={root} first={first} second={second} third={third} />
      {children}
    </div>
  );
}

type DiagramProps = {
  root: string;
  first: React.ReactNode;
  second: React.ReactNode;
  third: React.ReactNode;
};

function Diagram({ root, first, second, third }: DiagramProps) {
  return (
    <div className="relative h-60 w-full max-w-94">
      <p className="text-base md:text-lg">{root}</p>

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
        <li className="absolute top-18 left-[20%]">{first}</li>
        <li className="absolute top-33.5 left-[4%] pr-2">{second}</li>
        <li className="absolute top-49 left-[15%]">{third}</li>
      </ul>
    </div>
  );
}
