import Link from 'next/link'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { LeadForm } from '@/components/LeadForm'
import { BENEFITS, COMPANY, PROCESS, SERVICES } from '@/data/site'
import { REALIZATIONS } from '@/data/realizations'

const heroSlides = [
  '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
  '/images/portfolio/mycie-elewacji-budynek-uslugowy-belgia-po.webp',
  '/images/portfolio/budynek-firmowy-elewacja-po-myciu-chemicznym.webp',
]

export default function HomePage() {
  const mainProject = REALIZATIONS[0]

  return (
    <main>
      <header className="site-header">
        <Link href="/" className="logo">
          <img src="/images/brand/mw-service-logo.svg" alt="MW Service" />
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="#diensten">Diensten</Link>
          <Link href="#voor-na">Voor & Na</Link>
          <Link href="#realisaties">Realisaties</Link>
          <Link href="#werkwijze">Werkwijze</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <a href={`tel:${COMPANY.phone.replaceAll(' ', '')}`}>{COMPANY.phone}</a>
          <Link className="button small" href="#offerte">
            Gratis offerte
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg">
          <img src={heroSlides[0]} alt="Professionele reiniging door MW Service" />
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Professionele reiniging</span>
            <h1>Dakreiniging, schoorsteenreiniging en gevelreiniging</h1>
            <p>
              Wij reinigen daken, schoorstenen en gevels met aandacht voor
              veiligheid, materiaal en een duurzaam resultaat.
            </p>

            <div className="hero-buttons">
              <Link className="button" href="#offerte">
                Gratis offerte
              </Link>
              <Link className="button ghost" href="#realisaties">
                Bekijk realisaties →
              </Link>
            </div>

            <div className="slider-dots" aria-label="Hero slider voorbeeld">
              {heroSlides.map((slide, index) => (
                <span key={slide} className={index === 0 ? 'active' : ''} />
              ))}
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      <section className="benefits">
        {BENEFITS.map((item) => (
          <article key={item.title}>
            <div className="benefit-icon">✓</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="diensten" className="section">
        <div className="section-title centered">
          <span className="eyebrow">Onze diensten</span>
          <h2>Waarmee kunnen wij u helpen?</h2>
          <p>
            Drie duidelijke diensten, met een veilige aanpak en een nette
            afwerking.
          </p>
        </div>

        <div className="cards three">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={service.title} />
              <div>
                <span className="round-icon">⌂</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="#offerte">Meer info →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="voor-na" className="section before-section">
        <div className="section-title centered">
          <span className="eyebrow">Voor & Na</span>
          <h2>Bekijk het verschil voor en na</h2>
        </div>

        <BeforeAfterSlider
          before={mainProject.before}
          after={mainProject.after}
          title={mainProject.shortTitle}
          alt="Woning in het bos voor en na de reiniging"
        />
      </section>

      <section id="realisaties" className="section">
        <div className="section-title">
          <div>
            <span className="eyebrow">Realisaties</span>
            <h2>Projecten waar we trots op zijn</h2>
          </div>
          <p>
            Echte projecten met echte foto’s. Geen bewerkte resultaten, maar
            duidelijke voorbeelden van ons werk.
          </p>
        </div>

        <div className="cards three">
          {REALIZATIONS.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.cardImage} alt={project.title} />
              <div>
                <span>{project.service}</span>
                <h3>{project.shortTitle}</h3>
                <p>{project.excerpt}</p>
                <Link href={`/realisaties/${project.slug}`}>Bekijk project →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="werkwijze" className="section process-section">
        <div className="section-title centered">
          <span className="eyebrow">Werkwijze</span>
          <h2>Zo pakken wij uw project aan</h2>
        </div>

        <div className="process-grid">
          {PROCESS.map((step) => (
            <article key={step.step}>
              <strong>{step.step}</strong>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div>
          <span className="eyebrow">Gratis offerte</span>
          <h2>Klaar voor een schone en beschermde woning of gebouw?</h2>
          <p>
            Neem contact op en ontvang een vrijblijvende offerte op maat.
          </p>
        </div>

        <Link className="button" href="#offerte">
          Gratis offerte aanvragen →
        </Link>
      </section>

      <footer>
        <img src="/images/brand/mw-service-logo.svg" alt="MW Service" />
        <p>
          MW Service helpt met dakreiniging, schoorsteenreiniging en
          gevelreiniging.
        </p>
        <div>
          <a href={`tel:${COMPANY.phone.replaceAll(' ', '')}`}>{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
      </footer>
    </main>
  )
}
