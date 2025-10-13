import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-20 space-y-20">
      {/* Hero */}
      <section className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <p className="text-sm uppercase tracking-wider text-blue-600 font-medium">Open to learn & grow</p>
          <h1 className="mt-3 text-4xl/tight sm:text-5xl/tight font-bold tracking-tight">
            Hi, I’m <span className="text-blue-600">Sami Aburaed</span> — a motivated developer eager to build, learn, and contribute.
          </h1>
          <p className="mt-5 text-zinc-600 dark:text-zinc-300 max-w-prose">
            I focus on clean, accessible, and modern web experiences. I’m ready to join a team, learn quickly, and deliver value from day one.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
              View Projects
            </a>
            <a href="/CV_Sami_Aburaed_EN.docx" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900">
              Download CV (EN)
            </a>
            <a href="/CV_Sami_Aburaed_HE.docx" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900">
              קורות חיים (HE)
            </a>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="size-40 sm:size-48 rounded-full bg-gradient-to-tr from-blue-600/20 via-blue-500/10 to-transparent ring-1 ring-zinc-200 dark:ring-zinc-800 flex items-center justify-center">
            <Image src="/next.svg" alt="logo" width={96} height={96} className="dark:invert" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Highlighted Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-xl border p-5 hover:shadow-sm transition">
              <h3 className="font-medium">Project {i}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Brief description of what this project does and the impact it had. Add a link to the repo or live demo.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-zinc-100 dark:bg-zinc-900 px-2 py-1">React</span>
                <span className="rounded-full bg-zinc-100 dark:bg-zinc-900 px-2 py-1">TypeScript</span>
                <span className="rounded-full bg-zinc-100 dark:bg-zinc-900 px-2 py-1">Tailwind</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="#" className="text-sm text-blue-600 hover:underline">Live</a>
                <a href="#" className="text-sm text-blue-600 hover:underline">Code</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript/TypeScript",
            "React/Next.js",
            "HTML/CSS/Tailwind",
            "Git/GitHub",
            "REST APIs",
          ].map((s) => (
            <span key={s} className="text-sm rounded-md border px-3 py-1.5 bg-white dark:bg-zinc-950">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-prose">
          I’m actively looking for opportunities. If you think I could be a good fit, reach out and I’ll respond quickly.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:samiaburaed42@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Email</a>
          <a href="https://github.com/sami1507" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900">GitHub</a>
          <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
