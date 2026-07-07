export type Realization = {
  slug: string
  title: string
  shortTitle: string
  service: string
  location: string
  excerpt: string
  before: string
  after: string
  cardImage: string
  images: string[]
}

export const REALIZATIONS: Realization[] = [
  {
    slug: 'woning-in-het-bos',
    title: 'Dakreiniging, gevelreiniging en schilderwerk bij woning in het bos',
    shortTitle: 'Woning in het bos',
    service: 'Dakreiniging en gevelreiniging',
    location: 'Particuliere woning',
    excerpt:
      'Een volledig project in fases: dakreiniging, gevelreiniging en schilderwerk met duurzame siliconenverf.',
    before: '/images/portfolio/mycie-dachu-czyszczenie-elewacji-dom-w-lesie-przed.webp',
    after: '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
    cardImage: '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
    images: [
      '/images/portfolio/mycie-dachu-czyszczenie-elewacji-dom-w-lesie-przed.webp',
      '/images/portfolio/dom-w-lesie-przed-myciem-dachu-i-elewacji-bok.webp',
      '/images/portfolio/prace-etapowe-mycie-dachu-elewacji-dom-w-lesie.webp',
      '/images/portfolio/mycie-dachu-czyszczenie-malowanie-elewacji-dom-w-lesie-po.webp',
      '/images/portfolio/dom-w-lesie-po-malowaniu-elewacji-farba-silikonowa-bok.webp',
      '/images/portfolio/dom-w-lesie-po-kompleksowej-renowacji-elewacji.webp',
    ],
  },
  {
    slug: 'zorginstelling-gevelreiniging',
    title: 'Gevelreiniging van zorginstelling',
    shortTitle: 'Reiniging van zorginstelling',
    service: 'Gevelreiniging',
    location: 'Zorginstelling',
    excerpt:
      'Chemische gevelreiniging van een gevoelig geveltype met aandacht voor structuur en veiligheid.',
    before: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-przed.webp',
    after: '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-po.webp',
    cardImage: '/images/portfolio/elewacja-placowki-opiekunczej-po-myciu-chemicznym.webp',
    images: [
      '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-przed.webp',
      '/images/portfolio/zacieki-na-elewacji-przed-myciem-chemicznym.webp',
      '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-w-trakcie.webp',
      '/images/portfolio/mycie-chemiczne-elewacji-placowka-opiekuncza-po.webp',
      '/images/portfolio/elewacja-placowki-opiekunczej-po-myciu-chemicznym.webp',
    ],
  },
  {
    slug: 'modern-kantoorgebouw',
    title: 'Gevelreiniging van modern kantoorgebouw',
    shortTitle: 'Modern kantoorgebouw',
    service: 'Gevelreiniging',
    location: 'Kantoorgebouw',
    excerpt:
      'Reiniging van glad beton en gevelvlakken met aandacht voor materiaal, omgeving en planning.',
    before: '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-przed.webp',
    after: '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-po.webp',
    cardImage: '/images/portfolio/budynek-firmowy-elewacja-po-myciu-chemicznym.webp',
    images: [
      '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-przed.webp',
      '/images/portfolio/zabrudzenia-na-elewacji-betonowej-przed-myciem.webp',
      '/images/portfolio/mycie-elewacji-betonowej-budynek-firmowy-etapowo.webp',
      '/images/portfolio/mycie-betonu-gladkiego-budynek-firmowy-po.webp',
      '/images/portfolio/budynek-firmowy-elewacja-po-myciu-chemicznym.webp',
    ],
  },
]

export function getRealizationBySlug(slug: string) {
  return REALIZATIONS.find((item) => item.slug === slug)
}
