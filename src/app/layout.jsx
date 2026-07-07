import './globals.css'
import { COMPANY } from '../data/site'

export const metadata = {
  title: `${COMPANY.name} | Dakreiniging, gevelreiniging en schoorsteenreiniging`,
  description: 'MW Service helpt met dakreiniging, gevelreiniging en schoorsteenreiniging. Echte projecten, duidelijke communicatie en duurzame resultaten.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
