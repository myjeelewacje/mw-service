'use client'

import { useState } from 'react'

type Props = {
  before: string
  after: string
  title: string
  alt: string
}

export function BeforeAfterSlider({ before, after, title, alt }: Props) {
  const [position, setPosition] = useState(50)

  return (
    <div className="before-after">
      <div className="ba-header">
        <span>Voor & Na</span>
        <strong>{title}</strong>
      </div>

      <div className="ba-stage" aria-label={alt}>
        <img src={after} alt={`${alt} na`} className="ba-img" />
        <div className="ba-before" style={{ width: `${position}%` }}>
          <img src={before} alt={`${alt} voor`} className="ba-img" />
        </div>

        <div className="ba-line" style={{ left: `${position}%` }}>
          <span>↔</span>
        </div>

        <span className="ba-label ba-label-left">Voor</span>
        <span className="ba-label ba-label-right">Na</span>

        <input
          className="ba-range"
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label="Vergelijk voor en na"
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
    </div>
  )
}
