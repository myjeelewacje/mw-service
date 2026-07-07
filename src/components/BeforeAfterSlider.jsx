'use client'

import { useState } from 'react'

export function BeforeAfterSlider({ before, after, title, alt }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="ba" aria-label={`${title} - vergelijking voor en na`}>
      <div className="ba-frame">
        <img src={after} alt={alt || `${title} na de werken`} className="ba-after-img" />

        <div className="ba-before-layer" style={{ width: `${position}%` }}>
          <img src={before} alt={alt || `${title} voor de werken`} className="ba-before-img" />
        </div>

        <div className="ba-line" style={{ left: `${position}%` }}>
          <span>↔</span>
        </div>

        <span className="ba-label ba-left">Voor</span>
        <span className="ba-label ba-right">Na</span>

        <input
          className="ba-input"
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label={`Vergelijking voor en na voor ${title}`}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
    </div>
  )
}
