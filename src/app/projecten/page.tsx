import Link from 'next/link'
import { PROJECTS } from '../../data/projects'

export default function ProjectenPage() {
  return (
    <main className="inner-page">
      <section className="page-hero small shell">
        <Link href="/" className="back-link">
          ← Terug naar home
        </Link>
        <span className="eyebrow">Projecten</span>
        <h1>Alle realisaties</h1>
        <p>Echte projectfoto’s en heldere omschrijvingen van uitgevoerde werken.</p>
      </section>

      <section className="section shell">
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <article key={project.slug} className="project-card">
              <img src={project.cardImage} alt={project.title} />
              <div className="project-copy">
                <span>{project.service}</span>
                <h3>{project.shortTitle}</h3>
                <p>{project.excerpt}</p>
                <Link href={`/projecten/${project.slug}`}>Bekijk project →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
