(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new URL(`../`,``+import.meta.url),t=t=>new URL(t,e).toString(),n=new URL(`fotos/logo-soul-surf.png`,e).href,r=t(`index.html`),i=new URL(r).pathname,a=window.location.pathname,o=a===i||a===`${i.replace(/index\.html$/,``)}`,s={home:r,about:t(`sobre.html`),gallery:t(`galeria.html`),initiatives:t(`iniciativas.html`),support:t(`apoie-o-soul-surf.html`),transparency:t(`transparencia.html`),contact:t(`contato.html`),blog:o?`#blog`:`${r}#blog`,mvv:`${t(`sobre.html`)}#mvv`,water:o?`#water`:`${r}#water`,sponsors:o?`#sponsors`:`${r}#sponsors`,terms:t(`termos-de-uso.html`),privacy:t(`politica-de-privacidade.html`),cookies:t(`politica-cookies.html`),logo:n};function c(){let e=`
    <nav id="navbar" role="navigation" aria-label="Navegação principal">
      <div class="container">
        <div class="nav-inner">
          <a href="${s.home}" class="nav-logo" aria-label="Projeto Soul Surf — início">
            <div class="nav-logo-icon" aria-hidden="true">
              <img src="${s.logo}" alt="Crianças do Projeto Soul Surf" />
            </div>
            <div class="nav-logo-text">
              <strong>Soul Surf</strong>
              <span>Projeto Social</span>
            </div>
          </a>

          <ul class="nav-links">
            <li><a href="${s.home}">Início</a></li>
            <li><a href="${s.about}">Sobre</a></li>
            <li><a href="${s.gallery}">Galeria</a></li>
            <li><a href="${s.initiatives}">Iniciativas</a></li>
            <li><a href="${s.support}">Apoie</a></li>
            <li><a href="${s.transparency}">Transparência</a></li>
            <li><a href="${s.contact}">Contato</a></li>
          </ul>

          <a href="https://benfeitoria.com/projeto/projeto-social-soul-surf-10zy" target="_blank" rel="noopener noreferrer" class="nav-cta btn btn-primary">
            Ajude a transformar vidas
          </a>

          <button class="hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Menu mobile">
      <a href="${s.home}" onclick="closeMobileMenu()">Início</a>
      <a href="${s.about}" onclick="closeMobileMenu()">Sobre</a>
      <a href="${s.gallery}" onclick="closeMobileMenu()">Galeria</a>
      <a href="${s.initiatives}" onclick="closeMobileMenu()">Iniciativas</a>
      <a href="${s.support}" onclick="closeMobileMenu()">Apoie</a>
      <a href="${s.transparency}" onclick="closeMobileMenu()">Transparência</a>
      <a href="${s.contact}" onclick="closeMobileMenu()">Contato</a>
    </div>
  `;document.body.insertAdjacentHTML(`afterbegin`,e)}function l(){let e=`
    <footer id="footer" aria-label="Rodapé">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="${s.home}" style="display:inline-flex;align-items:center;gap:12px;color:#fff;" aria-label="Soul Surf — voltar ao início">
              <div class="nav-logo-icon" aria-hidden="true">
                <img src="${s.logo}" alt="Crianças do Projeto Soul Surf" />
              </div>
              <div class="nav-logo-text">
                <strong>Soul Surf</strong>
                <span>Do Mar Pra Vida</span>
              </div>
            </a>
            <p>Projeto social que usa o surf como ferramenta de inclusão, educação e transformação de vidas em Itanhaém/SP desde 2021.</p>
          </div>

          <div class="footer-col">
            <h4>Projeto</h4>
            <ul>
              <li><a href="${s.about}">O Projeto</a></li>
              <li><a href="${s.initiatives}">Iniciativas</a></li>
              <li><a href="${s.support}">Apoie o Soul Surf</a></li>
              <li><a href="${s.gallery}">Galeria</a></li>
              <li><a href="${s.blog}">Blog</a></li>
              <li><a href="${s.mvv}">Missão, Visão e Valores</a></li>
              <li><a href="${s.water}">Campanha Água</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Transparência</h4>
            <ul>
              <li><a href="${s.transparency}">Portal</a></li>
              <li><a href="${s.transparency}">Relatórios</a></li>
              <li><a href="${s.sponsors}">Parceiros</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Doe</h4>
            <ul>
              <li><a href="https://benfeitoria.com/projeto/projeto-social-soul-surf-10zy" target="_blank" rel="noopener noreferrer">Via Benfeitoria</a></li>
              <li><a href="${s.support}">Outras formas</a></li>
            </ul>
            <h4 style="margin-top: 28px;">Redes Sociais</h4>
            <div class="footer-social" style="margin-top: 12px;">
              <a href="https://www.facebook.com/projetosoulsurf" target="_blank" rel="noopener noreferrer" aria-label="Facebook do Projeto Soul Surf">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/projetosoulsurf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Projeto Soul Surf">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@projetosoulsurf" target="_blank" rel="noopener noreferrer" aria-label="YouTube do Projeto Soul Surf">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-legal">
            <button onclick="openLegalModal('${s.terms}', 'Termos de Uso')">Termos de Uso</button>
            <span class="footer-legal-sep">·</span>
            <button onclick="openLegalModal('${s.privacy}', 'Política de Privacidade')">Política de Privacidade</button>
            <span class="footer-legal-sep">·</span>
            <button onclick="openLegalModal('${s.cookies}', 'Política de Cookies')">Política de Cookies</button>
          </div>
          <p>© 2026 Projeto Soul Surf — Ass. de Surf Cibratel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    <div class="legal-modal-overlay" id="legalModalOverlay">
      <div class="legal-modal">
        <div class="legal-modal-header">
          <h3 id="legalModalTitle">Documento</h3>
          <button class="legal-modal-close" onclick="closeLegalModal()" aria-label="Fechar">X</button>
        </div>
        <iframe id="legalModalIframe" src="" title="Documento legal"></iframe>
      </div>
    </div>
  `;document.body.insertAdjacentHTML(`beforeend`,e)}function u(){let e=document.getElementById(`navbar`),t=document.getElementById(`hamburger`),n=document.getElementById(`mobileMenu`),r=document.querySelector(`#navbar .nav-links`),i=document.querySelector(`#navbar .nav-cta`);function a(){window.matchMedia(`(max-width: 1280px)`).matches?(r&&r.style.setProperty(`display`,`none`,`important`),i&&i.style.setProperty(`display`,`none`,`important`),t.style.setProperty(`display`,`flex`,`important`),t.style.width=`42px`,t.style.height=`42px`,t.style.padding=`8px`,t.style.flexShrink=`0`,n.style.flexDirection=`column`,n.style.top=`72px`,t.classList.contains(`open`)?n.style.setProperty(`display`,`flex`,`important`):(n.classList.remove(`open`),n.style.setProperty(`display`,`none`,`important`),t.setAttribute(`aria-expanded`,`false`))):(r&&r.style.removeProperty(`display`),i&&i.style.removeProperty(`display`),t.style.removeProperty(`display`),t.style.width=``,t.style.height=``,t.style.padding=``,t.style.flexShrink=``,n.style.removeProperty(`display`),n.style.removeProperty(`flex-direction`),n.style.removeProperty(`top`),n.classList.remove(`open`),t.classList.remove(`open`),t.setAttribute(`aria-expanded`,`false`))}a(),window.addEventListener(`resize`,a),window.addEventListener(`scroll`,()=>{window.scrollY>50?e.classList.add(`scrolled`):e.classList.remove(`scrolled`)}),t.addEventListener(`click`,()=>{t.classList.toggle(`open`),n.classList.toggle(`open`),n.style.setProperty(`display`,n.classList.contains(`open`)?`flex`:`none`,`important`),t.setAttribute(`aria-expanded`,t.classList.contains(`open`))})}function d(){let e=document.getElementById(`hamburger`),t=document.getElementById(`mobileMenu`);e.classList.remove(`open`),t.classList.remove(`open`),t.style.setProperty(`display`,`none`,`important`),e.setAttribute(`aria-expanded`,`false`)}function f(e,t){let n=document.getElementById(`legalModalOverlay`),r=document.getElementById(`legalModalIframe`),i=document.getElementById(`legalModalTitle`);i.textContent=t,r.src=e,n.classList.add(`open`),document.body.style.overflow=`hidden`}function p(){let e=document.getElementById(`legalModalOverlay`),t=document.getElementById(`legalModalIframe`);e.classList.remove(`open`),t.src=``,document.body.style.overflow=``}window.closeMobileMenu=d,window.openLegalModal=f,window.closeLegalModal=p;function m(){let e=document.querySelector(`.cta-floating`);if(!e)return;let t=!1;window.addEventListener(`scroll`,()=>{window.scrollY>300&&!t?(e.classList.add(`show`),t=!0):window.scrollY<=300&&t&&(e.classList.remove(`show`),t=!1)});let n=e.querySelector(`.cta-floating-close`);n&&n.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation(),e.style.display=`none`})}document.addEventListener(`DOMContentLoaded`,()=>{c(),l(),u(),m()});