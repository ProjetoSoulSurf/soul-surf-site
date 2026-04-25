/**
 * Configuration file for Soul Surf Project
 * Centralized URLs, paths, and constants
 */

// Base paths for static assets
export const ASSETS = {
  images: {
    logo: '/images/logo/logo-soul-surf.png',
    gallery: '/images/gallery/',
    sponsors: '/images/sponsors/',
  },
  documents: '/documents/',
}

// Site URLs and navigation
export const URLS = {
  pages: {
    home: '/src/pages/home/index.html',
    about: '/src/pages/about/sobre.html',
    contact: '/src/pages/about/contact.html',
    transparency: '/src/pages/about/transparency.html',
    gallery: '/src/pages/gallery/galeria.html',
    initiatives: '/src/pages/initiatives/iniciativas.html',
    support_us: '/src/pages/support/support-us.html',
    open_positions: '/src/pages/support/open-positions.html',
    tax_deduction: '/src/pages/support/tax-deduction.html',
    blog: '/#blog',
    articles: {
      article_1: '/src/pages/articles/article-1.html',
      article_2: '/src/pages/articles/article-2.html',
      article_3: '/src/pages/articles/article-3.html',
    },
    documents: {
      official: '/src/pages/documents/official-documents.html',
      impact_data: '/src/pages/documents/impact-data.html',
      annual_reports: '/src/pages/documents/annual-reports.html',
      institutional_partners: '/src/pages/documents/institutional-partners.html',
      accounting: '/src/pages/documents/accounting.html',
      bylaws: '/src/pages/documents/bylaws.html',
      cnpj: '/src/pages/documents/cnpj.html',
    },
    legal: {
      terms: '/src/pages/legal/terms-of-use.html',
      privacy: '/src/pages/legal/privacy-policy.html',
      cookies: '/src/pages/legal/cookie-policy.html',
    },
  },
  anchors: {
    mvv: '#mvv',
    water: '#water',
    sponsors: '#sponsors',
    blog: '#blog',
  },
}

// External links
export const EXTERNAL_LINKS = {
  benfeitoria: 'https://benfeitoria.com/projeto/projeto-social-soul-surf-10zy',
  github: 'https://github.com/ProjetoSoulSurf',
  social: {
    instagram: 'https://instagram.com/soulsurf',
    facebook: 'https://facebook.com/soulsurf',
  },
}

// Project metadata
export const PROJECT = {
  name: 'Projeto Soul Surf',
  tagline: 'Do Mar Pra Vida',
  description: 'Projeto social que usa o surf como ferramenta de inclusão, educação e transformação de vidas em Itanhaém/SP desde 2021.',
  email: 'contato@projetosoulsurf.org.br',
  location: 'Itanhaém, SP',
  founded: 2021,
}

// Colors and theme
export const THEME = {
  colors: {
    primary: '#00A86B', // Green
    blue: '#1E90FF',
    text: '#1a1a1a',
    text_light: '#666666',
    bg_light: '#f9f9f9',
    border: '#e0e0e0',
  },
}

// API endpoints (if needed in future)
export const API = {
  baseUrl: process.env.VITE_API_URL || 'https://api.projetosoulsurf.org.br',
}
