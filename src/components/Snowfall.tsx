type Flake = {
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
};

function mulberry32(seed: number) {
  let value = seed;
  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createFlakes(count: number, seed: number): Flake[] {
  const random = mulberry32(seed);

  return Array.from({ length: count }, () => {
    const depth = random();
    const near = depth > 0.82;

    return {
      left: random() * 100,
      size: near ? 2.5 + random() * 1.6 : 1.2 + random() * 1.3,
      opacity: near ? 0.36 + random() * 0.22 : 0.2 + random() * 0.22,
      duration: near ? 11 + random() * 8 : 18 + random() * 16,
      delay: -random() * 28,
      drift: (random() - 0.5) * (near ? 70 : 36),
    };
  });
}

const FLAKES = createFlakes(46, 20261118);

export default function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {FLAKES.map((flake, index) => (
        <span
          key={index}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            ['--snow-drift' as string]: `${flake.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
