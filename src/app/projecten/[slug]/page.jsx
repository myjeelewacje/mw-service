import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BeforeAfterSlider } from '../../../components/BeforeAfterSlider'
import { PROJECTS, getProject } from '../../../data/projects'

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export default function ProjectDetailPage({ params }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="inner-page">
      <section className="detail-hero">
        <img src={project.heroImage} alt={project.title} className="detail-hero-image" />
        <div className="detail-overlay" />
        <div className="detail-content shell">
          <Link href="/projecten" className="back-link light">← Terug naar projecten</Link>
          <span className="eyebrow light">{project.service}</span>
          <h1>{project.title}</h1>
          <p>{project.seoDescription}</p>
        </div>
      </section>

      <section className="section shell detail-grid">
        <div>
          <div className="section-heading left">
            <span className="eyebrow">Projectomschrijving</span>
            <h2>{project.shortTitle}</h2>
            <p>{project.intro}</p>
          </div>

          <div className="phase-list">
            {project.phases.map((phase) => (
              <article key={phase.title} className="phase-card">
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="detail-summary">
          <h3>Projectgegevens</h3>
          <ul>
            <li><strong>Dienst</strong><span>{project.service}</span></li>
            <li><strong>Type</strong><span>{project.location}</span></li>
            <li><strong>Aanpak</strong><span>Fasegewijs en zorgvuldig uitgevoerd</span></li>
            <li><strong>Foto’s</strong><span>Echte projectfoto’s</span></li>
          </ul>
        </aside>
      </section>

      <section className="section shell">
        <div className="section-heading left">
          <span className="eyebrow">Vergelijking</span>
          <h2>Voor en na</h2>
        </div>
        <BeforeAfterSlider before={project.before} after={project.after} title={project.shortTitle} />
      </section>

      <section className="section shell">
        <div className="section-heading left">
          <span className="eyebrow">Fotogalerij</span>
          <h2>Projectbeelden</h2>
        </div>
        <div className="gallery-grid">
          {project.gallery.map((image) => (
            <img key={image} src={image} alt={project.title} className="gallery-image" />
          ))}
        </div>
      </section>
    </main>
  )
}
