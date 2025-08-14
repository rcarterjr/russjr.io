export function Bio() {
  const yoe = (new Date()).getFullYear() - 2019

  return (
    <>
      <h1 className="pb-6">bio</h1>
      <p className="m-0 text-sm opacity-50">
        Hi, I’m Russell Carter — a Software Engineer with {yoe} years of experience
        building web, mobile, and backend systems. I’m proficient in TypeScript,
        JavaScript, React, Node.js, Python, and Rust (btw), with a strong focus
        on designing and developing scalable APIs and backend architectures.
        I hold a Bachelor’s degree in Computer Science. I also use
        Neovim (btw) and run Arch Linux (btw).
      </p>
    </>
  );
}
