import './globals.css'
import type { Metadata } from 'next'
import { COMPANY } from '@/data/site'

export const metadata: Metadata = {
  title: `${COMPANY.name} | Dakreiniging, gevelreiniging en schoorsteenreiniging`,
  description:
    'MW Service helpt met dakreiniging, gevelreiniging en schoorsteenreiniging. Echte projecten, duidelijke communicatie en duurzame resultaten.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
