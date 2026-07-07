'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type Slide = {
  image: string
  title: React.ReactNode
  text: string
}

const slides: Slide[] = [
  {
    image: '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
    title: (
      <>
        Een <span>schoon dak.</span>
        <br />
        Een <span>zorgeloos</span> resultaat.
      </>
    ),
    text: 'Professionele dak-, gevel- en schoorsteenreiniging met oog voor kwaliteit, detail en een verzorgde afwerking.',
  },
  {
    image: '/images/portfolio/budynek-firmowy-elewacja-po-myciu-chemicznym.webp',
    title: (
      <>
        Reiniging met <span>echte foto’s</span>.
        <br />
        Geen filters. Wel <span>resultaat</span>.
      </>
    ),
    text: 'Wij werken met echte projectbeelden, duidelijke communicatie en een aanpak die past bij de ondergrond.',
  },
  {
    image: '/images/portfolio/elewacja-placowki-opiekunczej-po-myciu-chemicznym.webp',
    title: (
      <>
        Een frisse gevel.
        <br />
        Een <span>sterke eerste indruk</span>.
      </>
    ),
    text: 'Van particuliere woningen tot bedrijfsgebouwen: wij reinigen veilig, gefaseerd en met aandacht voor duurzaamheid.',
  },
]

export function HeroSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const slide = slides[active]

  return (
    <section className="hero-section">
      <div className="hero-backgrounds" aria-hidden="true">
        {slides.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt=""
            className={index === active ? 'hero-bg active' : 'hero-bg'}
          />
        ))}
        <div className="hero-scrim" />
      </div>

      <div className="hero-inner shell">
        <div className="hero-copy">
          <span className="pill">MW Service</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>

          <div className="hero-badges">
            <span>Milieubewust</span>
            <span>Veilig & verzekerd</span>
            <span>Echte projectfoto’s</span>
          </div>

          <div className="hero-cta-row">
            <Link href="#offerte" className="button primary">
              Gratis offerte aanvragen
            </Link>
            <Link href="#projecten" className="button ghost-light">
              Bekijk projecten
            </Link>
          </div>

          <div className="hero-dots" aria-label="Hero slider">
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                className={index === active ? 'active' : ''}
                onClick={() => setActive(index)}
                aria-label={`Ga naar slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-form-card" id="offerte">
          <span className="form-mini">Gratis offerte</span>
          <h2>Vraag vrijblijvend een offerte aan</h2>
          <p>Ontvang snel een reactie en een duidelijke prijsinschatting.</p>
          <form className="lead-form-grid">
            <input type="text" placeholder="Naam" />
            <input type="tel" placeholder="Telefoonnummer" />
            <input type="email" placeholder="E-mailadres" />
            <select defaultValue="">
              <option value="" disabled>
                Kies een dienst
              </option>
              <option>Dakreiniging</option>
              <option>Gevelreiniging</option>
              <option>Schoorsteenreiniging</option>
            </select>
            <textarea placeholder="Uw bericht (optioneel)" />
            <button type="submit" className="button form-button">
              Offerte aanvragen
            </button>
          </form>
          <small>Binnen 24 uur reactie op werkdagen.</small>
        </div>
      </div>
    </section>
  )
}
