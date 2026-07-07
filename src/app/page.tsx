import Link from 'next/link'
import { HeroSection } from '../components/HeroSection'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import { BENEFITS, COMPANY, NAV_ITEMS, PROCESS, SERVICES } from '../data/site'
import { PROJECTS } from '../data/projects'

export default function HomePage() {
  return (
    <main>
      <header className="floating-header-wrap">
        <div className="floating-header shell">
          <Link href="/" className="brand" aria-label="MW Service home">
            <img src="/images/brand/mw-service-logo.svg" alt="MW Service" />
          </Link>

          <nav className="main-nav">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            <a className="phone-pill" href={`tel:${COMPANY.phone.replaceAll(' ', '')}`}>
              {COMPANY.phone}
            </a>
            <Link className="button header-button" href="#offerte">
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </header>

      <HeroSection />

      <section className="benefits-row shell">
        {BENEFITS.map((item) => (
          <article key={item.title} className="benefit-card">
            <div className="benefit-mark">✓</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="diensten" className="section shell">
        <div className="section-heading center">
          <span className="eyebrow">Onze diensten</span>
          <h2>Specialisten in een schoon en verzorgd exterieur</h2>
          <p>
            Dakreiniging, gevelreiniging en schoorsteenreiniging met een professionele,
            rustige en fasegewijze aanpak.
          </p>
        </div>

        <div className="service-grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="service-content">
                <span className="service-tag">{service.accent}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="#offerte">Meer informatie →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="voor-na" className="section compare-section">
        <div className="shell">
          <div className="section-heading between">
            <div>
              <span className="eyebrow">Voor & na</span>
              <h2>Het verschil ziet u meteen</h2>
            </div>
            <p>
              Echte voor- en naresultaten van projecten die wij uitvoerden. Geen bewerking,
              maar zichtbare verbetering.
            </p>
          </div>

          <div className="compare-grid">
            <article className="compare-card wide">
              <BeforeAfterSlider
                before={PROJECTS[0].before}
                after={PROJECTS[0].after}
                title={PROJECTS[0].shortTitle}
                alt="Voor en na van het huis in het bos"
              />
              <div className="compare-copy">
                <h3>Dakreiniging & gevelrenovatie</h3>
                <p>Volledige uitvoering in fases, inclusief schilderwerk met siliconenverf.</p>
              </div>
            </article>

            <article className="compare-card">
              <BeforeAfterSlider
                before={PROJECTS[1].before}
                after={PROJECTS[1].after}
                title={PROJECTS[1].shortTitle}
                alt="Voor en na van een bedrijfsgebouw in glad beton"
              />
              <div className="compare-copy">
                <h3>Gevelreiniging bedrijfsgebouw</h3>
                <p>Complexe chemische reiniging, veilig en fasegewijs uitgevoerd.</p>
              </div>
            </article>

            <article className="compare-card">
              <BeforeAfterSlider
                before={PROJECTS[2].before}
                after={PROJECTS[2].after}
                title={PROJECTS[2].shortTitle}
                alt="Voor en na van de gevel van een zorginstelling"
              />
              <div className="compare-copy">
                <h3>Gevelreiniging zorginstelling</h3>
                <p>Voorzichtig gereinigd met aangepaste behandeling voor gevoelige gevels.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projecten" className="section shell">
        <div className="section-heading between">
          <div>
            <span className="eyebrow">Projecten</span>
            <h2>Recente realisaties</h2>
          </div>
          <Link href="/projecten" className="text-link">
            Bekijk alle projecten →
          </Link>
        </div>

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

      <section id="werkwijze" className="section tinted-section">
        <div className="shell">
          <div className="section-heading center">
            <span className="eyebrow">Werkwijze</span>
            <h2>Zo werken wij</h2>
            <p>Een duidelijke aanpak, stap voor stap en afgestemd op uw woning of gebouw.</p>
          </div>

          <div className="process-grid">
            {PROCESS.map((step) => (
              <article key={step.step} className="process-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section shell cta-block">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Klaar voor een schone woning, gevel of schoorsteen?</h2>
          <p>
            Stuur ons uw vraag en ontvang snel een vrijblijvende offerte. Wij denken mee en
            geven eerlijk advies op basis van de situatie.
          </p>
        </div>
        <div className="cta-actions">
          <a className="phone-pill large" href={`tel:${COMPANY.phone.replaceAll(' ', '')}`}>
            {COMPANY.phone}
          </a>
          <a className="button primary" href={`mailto:${COMPANY.email}`}>
            Mail ons
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <img className="footer-logo" src="/images/brand/mw-service-logo.svg" alt="MW Service" />
            <p>
              MW Service is uw specialist in dakreiniging, gevelreiniging en
              schoorsteenreiniging.
            </p>
          </div>
          <div>
            <h4>Snelle links</h4>
            <div className="footer-links">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href={`tel:${COMPANY.phone.replaceAll(' ', '')}`}>{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              <span>{COMPANY.location}</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
