import Link from 'next/link'
import { notFound } from 'next/navigation'
import { REALIZATIONS, getRealizationBySlug } from '@/data/realizations'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return REALIZATIONS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = getRealizationBySlug(slug)

  if (!project) {
    return { title: 'Realisatie | MW Service' }
  }

  return {
    title: `${project.shortTitle} | MW Service`,
    description: project.excerpt,
  }
}

export default async function RealizationPage({ params }: PageProps) {
  const { slug } = await params
  const project = getRealizationBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <header className="site-header">
        <Link href="/" className="logo">
          <img src="/images/brand/mw-service-logo.svg" alt="MW Service" />
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/#diensten">Diensten</Link>
          <Link href="/#voor-na">Voor & Na</Link>
          <Link href="/#realisaties">Realisaties</Link>
          <Link href="/#werkwijze">Werkwijze</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link className="button small" href="/#offerte">
            Gratis offerte
          </Link>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '70px' }}>
        <div className="section-title">
          <div>
            <span className="eyebrow">Realisatie</span>
            <h1 style={{ color: '#123b2b' }}>{project.title}</h1>
            <p>{project.excerpt}</p>
          </div>
        </div>

        <div className="cards three">
          {project.images.map((image) => (
            <article className="project-card" key={image}>
              <img src={image} alt={project.title} />
            </article>
          ))}
        </div>

        <div style={{ marginTop: '34px' }}>
          <Link className="button" href="/#offerte">
            Vraag offerte aan
          </Link>
        </div>
      </section>
    </main>
  )
}
