function Skills() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Rust",
    "React",
    "React Native",
    "Vue.js",
    "MongoDB",
    "PostgreSQL",
    "AWS"
  ]

  // TypeScript • JavaScript • React • Node.js • Python • Rust • React Native • MongoDB • PostgreSQL • AWS
  return (
    <>
      <h1 className="py-6">skills</h1>
      <p className="m-0 text-sm opacity-50"> {skills.join(" • ")}</p>
    </>
  )
}

