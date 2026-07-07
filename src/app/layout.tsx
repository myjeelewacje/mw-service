import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MW Service | Dakreiniging, schoorsteenreiniging en gevelreiniging',
  description:
    'MW Service helpt met dakreiniging, schoorsteenreiniging en gevelreiniging. Vraag gratis en vrijblijvend een offerte aan.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
