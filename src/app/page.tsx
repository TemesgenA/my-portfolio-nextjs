import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <header className="max-w-5xl w-full flex justify-between text-sm">
        <nav>
          <ul className="flex gap-4">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="w-full">
        <h2>About Me</h2>
        {/* Replace with your About component */}
      </section>

      <section id="projects" className="w-full">
        <h2>Projects</h2>
        {/* Replace with your Projects component */}
      </section>

      <section id="skills" className="w-full">
        <h2>Skills</h2>
        {/* Replace with your Skills component */}
      </section>

      <section id="contact" className="w-full">
        <h2>Contact</h2>
        {/* Replace with your Contact component */}
      </section>

      <footer className="w-full text-center">
        {/* Replace with your Footer component */}
      </footer>
    </main>
  )
}
