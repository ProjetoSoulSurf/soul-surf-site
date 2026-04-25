# Guia de Contribuição - Soul Surf

Bem-vindo ao Projeto Soul Surf! Este guia descreve como colaborar com o desenvolvimento do nosso site.

## 📁 Estrutura do Projeto (Clean Code)

```
soul-surf-site/
├── src/                           # Código-fonte
│   ├── pages/                     # Páginas do site (organizadas por seção)
│   │   ├── home/
│   │   ├── about/
│   │   ├── initiatives/
│   │   ├── gallery/
│   │   ├── articles/
│   │   ├── support/
│   │   ├── documents/
│   │   └── legal/
│   ├── components/                # Componentes reutilizáveis
│   │   ├── ui/                    # Componentes UI (Button.jsx, Card.jsx)
│   │   └── layout/                # Layout components
│   ├── styles/                    # Folhas de estilo
│   │   ├── shared.css
│   │   ├── variables.css
│   │   └── components/
│   ├── scripts/                   # Scripts JavaScript
│   ├── config.js                  # Configuração centralizada
│   └── main.jsx                   # Entrada React
├── public/                        # Assets estáticos
│   ├── images/
│   │   ├── logo/
│   │   ├── gallery/               # Fotos do projeto
│   │   └── sponsors/
│   └── documents/                 # PDFs e documentos
├── css/                           # Estilos globais
│   └── shared.css
├── js/                            # JavaScript compartilhado
│   └── shared.js
├── vite.config.js                 # Configuração Vite
└── package.json
```

## 🎯 Convenções de Código

### Nomenclatura de Arquivos
- **HTML**: `kebab-case.html` (ex: `contact.html`, `privacy-policy.html`)
- **React**: `PascalCase.jsx` (ex: `Button.jsx`, `HomePage.jsx`)
- **CSS**: `kebab-case.css` (ex: `shared.css`, `button.css`)
- **JavaScript**: `camelCase.js` (ex: `config.js`, `shared.js`)

### Estrutura de Pastas
- ✅ Páginas organizadas por **categoria temática** em `/src/pages/`
- ✅ Imagens categorizadas em subpastas (`/logo`, `/gallery`, `/sponsors`)
- ✅ Componentes reutilizáveis em `/src/components/`
- ✅ Configurações centralizadas em `src/config.js`

### HTML
```html
<!-- Usar semantic HTML -->
<section class="container">
  <h1>Título Principal</h1>
  <p>Descrição clara do conteúdo</p>
</section>

<!-- Sempre adicionar alt text em imagens -->
<img src="/images/gallery/project-photo.jpg" alt="Descrição da foto" loading="lazy" />

<!-- Usar caminhos absolutos para assets -->
<link rel="stylesheet" href="/styles/shared.css" />
```

### CSS
```css
/* Usar variáveis CSS para cores */
:root {
  --color-primary: #00A86B;
  --color-blue: #1E90FF;
  --text-dark: #1a1a1a;
}

/* Nomear classes em kebab-case */
.initiative-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.initiative-card:hover {
  transform: scale(1.01);
  transition: all 0.2s ease;
}
```

### JavaScript
```javascript
// Usar imports explícitos
import { URLS, ASSETS } from '../src/config.js'

// Nomear funções descritivamente
function loadGalleryItems() {
  // implementação
}

// Usar const para constantes
const GALLERY_LIMIT = 28
```

## 🚀 Como Adicionar uma Nova Página

1. **Criar arquivo HTML** em `/src/pages/categoria/nome-pagina.html`
2. **Importar estilos comuns**:
   ```html
   <link rel="stylesheet" href="../../css/shared.css" />
   ```
3. **Importar script compartilhado**:
   ```html
   <script type="module" src="../../js/shared.js"></script>
   ```
4. **Usar caminhos absolutos** para imagens:
   ```html
   <img src="/images/gallery/project-photo.jpg" alt="Descrição" loading="lazy" />
   ```
5. **Atualizar urls em** `src/config.js` se necessário

## 🖼️ Como Adicionar Imagens

1. **Colocar em `/public/images/`** na categoria apropriada
2. **Usar em HTML** com caminho absoluto:
   ```html
   <img src="/images/gallery/new-photo.jpg" alt="Descrição" loading="lazy" />
   ```
3. **Otimizar antes de subir** (use ferramentas como TinyPNG)

## 📝 Commits Git

Use mensagens claras com prefixo:

```bash
git commit -m "feat: adicionar página de galeria com lightbox"
git commit -m "fix: corrigir layout responsivo em mobile"
git commit -m "refactor: reorganizar estrutura de pastas"
git commit -m "docs: atualizar guia de contribuição"
git commit -m "style: ajustar cores conforme design system"
```

## ✅ Checklist Antes de Fazer Push

- [ ] Código segue as convenções desta guia
- [ ] Imagens estão em `/public/images/` com caminho correto
- [ ] Links internos usam caminhos corretos em `config.js`
- [ ] HTML validado (sem erros semânticos)
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Alt text adicionado em todas as imagens
- [ ] Commit message é clara e descritiva

## 🔗 Links Úteis

- [Documentação Vite](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev - Performance](https://web.dev/)

## 📞 Dúvidas?

Entre em contato: contato@projetosoulsurf.org.br
