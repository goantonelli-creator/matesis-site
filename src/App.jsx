import React, { useState, useEffect } from 'react'
import './App.css'

function Logo({ light = false }) {
  return (
    <img
      src={light ? '/MATESIS_logo-trasparent-white.png' : '/MATESIS_logo-trasparent.png'}
      alt="Matesis"
      style={{ height: '44px', width: 'auto' }}
    />
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top"><Logo light={!scrolled} /></a>
        <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span/><span/><span/>
        </button>
        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <a href="#advisory" onClick={() => setMenuOpen(false)}>Advisory</a>
<a href="#come-funziona" onClick={() => setMenuOpen(false)}>Come funziona</a>
          <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
          <a href="#moduli" onClick={() => setMenuOpen(false)}>Moduli</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Chi siamo</a>
          <a href="#contatti" className="btn btn--primary nav__cta" onClick={() => setMenuOpen(false)}>Contattaci</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="tag tag--orange hero__eyebrow">Performance Strategy</span>
          <h1 className="hero__title">
            Dalle persone<br/>
            <span className="hero__title--accent">ai numeri.</span><br/>
            Dai numeri<br/>alle persone.
          </h1>
          <p className="hero__sub">
            Matesis è il sistema integrato di consulenza e software per chi vuole
            misurare e sviluppare la performance organizzativa — non a spizzichi,
            ma come un unico progetto coerente.
          </p>
          <div className="hero__actions">
            <a href="#contatti" className="btn btn--primary">Scrivici →</a>
            <a href="#platform" className="btn btn--outline-white">Scopri la piattaforma</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card">
            <span className="tag tag--orange">Matesis Advisory</span>
            <p>Consulenza in performance management, HR e controllo di gestione</p>
          </div>
          <div className="hero__divider"><span>+</span></div>
          <div className="hero__card">
            <span className="tag tag--outline-light">Matesis Platform</span>
            <p>Software SaaS per la gestione integrata di persone e KPI aziendali</p>
          </div>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span>Scopri come funziona</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
    </section>
  )
}

function Advisory() {
  const services = [
    { icon: '◈', title: 'Performance Management', desc: 'Sistemi di valutazione, obiettivi e feedback strutturati per far crescere le persone nel tempo.' },
    { icon: '◉', title: 'Controllo di Gestione', desc: 'Modelli di reporting, KPI e full costing per chi vuole capire davvero cosa succede in azienda.' },
    { icon: '◐', title: 'HR & Organizzazione', desc: 'Job design, selezione, sviluppo e piani di carriera costruiti sulla realtà operativa del cliente.' },
  ]
  return (
    <section className="advisory" id="advisory">
      <div className="container">
        <div className="section-header">
          <span className="tag tag--navy">Matesis Advisory</span>
          <h2 className="section-title">La consulenza<br/>che parte dai dati.</h2>
          <p className="section-sub">Non portiamo modelli preconfezionati. Entriamo nell'organizzazione, capiamo come funziona, e costruiamo sistemi di performance che reggono nel tempo — anche senza di noi.</p>
        </div>
        <div className="advisory__grid">
          {services.map((s, i) => (
            <div className="advisory__card" key={i}>
              <span className="advisory__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="advisory__highlight">
          <div className="advisory__highlight-icon">◎</div>
          <div className="advisory__highlight-text">
            <h4>Nessun costo di sviluppo software.</h4>
            <p>Nei progetti Advisory, la configurazione della piattaforma è inclusa nel progetto. Non ci sono costi di sviluppo o implementazione separati. L'unico costo ricorrente è il canone mensile della piattaforma.</p>
          </div>
        </div>
        <div className="advisory__quote">
          <blockquote>"Il nostro principio è formare i clienti a leggere i risultati, non a produrli. La dipendenza dal consulente è un fallimento del consulente."</blockquote>
          <cite>— Goffredo Antonelli, fondatore</cite>
        </div>
      </div>
    </section>
  )
}
function ComeFunziona() {
  const steps = [
    {
      num: '01',
      title: 'Diagnosi',
      desc: 'Analizziamo l\'organizzazione: struttura, processi, KPI esistenti, maturità HR. Capiamo dove si perde valore.',
      icon: '◎',
    },
    {
      num: '02',
      title: 'Progettazione',
      desc: 'Costruiamo il sistema di performance su misura: competenze, obiettivi, metriche di controllo. Metodologia Advisory.',
      icon: '◈',
    },
    {
      num: '03',
      title: 'Attivazione',
      desc: 'Configuriamo Matesis Platform sui parametri definiti. People e Analytics vengono impostati sulla realtà specifica dell\'azienda.',
      icon: '⊞',
    },
    {
      num: '04',
      title: 'Autonomia',
      desc: 'L\'azienda gestisce i cicli di valutazione e il controllo in autonomia. Restiamo disponibili per evoluzione e supporto.',
      icon: '◉',
    },
  ]

  return (
    <section className="come-funziona" id="come-funziona">
      <div className="container">
        <div className="section-header">
          <span className="tag tag--outline">Il processo</span>
          <h2 className="section-title">Come funziona.</h2>
          <p className="section-sub">
            Advisory e Platform non sono due prodotti separati. Sono due fasi dello stesso progetto.
          </p>
        </div>
        <div className="cf__steps">
          {steps.map((s, i) => (
            <div className="cf__step" key={i}>
              <div className="cf__step-num">{s.num}</div>
              <div className="cf__step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <div className="cf__arrow">→</div>}
            </div>
          ))}
        </div>
        <div className="cf__connector">
          <div className="cf__connector-left">
            <span className="tag tag--navy">Matesis Advisory</span>
            <p>Passi 01 e 02</p>
          </div>
          <div className="cf__connector-divider"/>
          <div className="cf__connector-right">
            <span className="tag tag--orange">Matesis Platform</span>
            <p>Passi 03 e 04</p>
          </div>
        </div>
      </div>
    </section>
  )
}
function Platform() {
  return (
    <section className="platform" id="platform">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="tag tag--orange">Matesis Platform</span>
          <h2 className="section-title section-title--light">Il software nato<br/>dalla consulenza.</h2>
          <p className="section-sub section-sub--light">Non è un tool comprato da un catalogo. È la digitalizzazione diretta di anni di metodologia consulenziale — costruita per le PMI italiane, non per le enterprise americane. Puoi partire dal software, dalla consulenza, o da entrambi: ogni componente ha valore autonomo.</p>
        </div>
        <div className="platform__features">
          <div className="platform__feature">
            <div className="platform__feature-icon">⟳</div>
            <h4>Multi-tenant SaaS</h4>
            <p>Ogni azienda ha il suo spazio isolato, configurabile e branded.</p>
          </div>
          <div className="platform__feature">
            <div className="platform__feature-icon">⊞</div>
            <h4>Moduli integrati</h4>
            <p>People e Analytics parlano la stessa lingua — i dati HR alimentano i KPI gestionali.</p>
          </div>
          <div className="platform__feature">
            <div className="platform__feature-icon">◎</div>
            <h4>Pensato per chi non ha un IT</h4>
            <p>Interfaccia semplice, onboarding guidato, supporto incluso.</p>
          </div>
        </div>
        <div className="platform__cta-row">
          <a href="#contatti" className="btn btn--primary">Scrivici per una demo</a>
          <a href="#moduli" className="btn btn--outline-white">Esplora i moduli ↓</a>
        </div>
      </div>
    </section>
  )
}

function Moduli() {
  const moduli = [
    {
      tag: 'Matesis People', tagClass: 'tag--navy',
      title: 'Le persone al centro della strategia.',
      points: ['Valutazioni della performance con self-assessment e feedback del manager','Cicli di valutazione configurabili per competenze e obiettivi','Gestione dei contratti, cedolini e visite mediche','Development briefing e piani di sviluppo individuali','Profili per livello CCNL con indicatori comportamentali'],
      accent: 'var(--navy)',
    },
    {
      tag: 'Matesis Analytics', tagClass: 'tag--orange',
      title: 'I numeri che guidano le decisioni.',
      points: ['Dashboard KPI configurabili per reparto e centro di costo','Forecasting e analisi degli scostamenti','Full costing con eliminazione delle partite interaziendali','Reporting direzionale pronto per il CDA','Integrazione con i dati HR di People'],
      accent: 'var(--orange)',
    },
  ]
  return (
    <section className="moduli" id="moduli">
      <div className="container">
        <div className="section-header">
          <span className="tag tag--outline">I moduli</span>
          <h2 className="section-title">Due strumenti,<br/>un unico sistema.</h2>
        </div>
        <div className="moduli__grid">
          {moduli.map((m, i) => (
            <div className="moduli__card" key={i} style={{ '--accent': m.accent }}>
              <span className={`tag ${m.tagClass}`}>{m.tag}</span>
              <h3>{m.title}</h3>
              <ul>
                {m.points.map((p, j) => (
                  <li key={j}><span className="moduli__bullet">→</span>{p}</li>
                ))}
              </ul>
              <a href="#contatti" className="btn btn--outline-navy moduli__btn">Scrivici per una demo</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="tag tag--navy">Chi siamo</span>
          <h2 className="section-title">Matesis è nato<br/>da un problema reale.</h2>
          <p>Goffredo Antonelli è un commercialista, un manager e consulente di performance management. Dopo anni di engagement con PMI italiane su temi di controllo di gestione e sviluppo HR, ha costruito Matesis — prima come metodo, poi come software.</p>
          <p>La piattaforma è nata perché i tool esistenti erano o troppo grandi (pensati per corporate) o troppo piccoli (fogli Excel con un'interfaccia). Matesis occupa lo spazio intermedio: strutturato come un enterprise, usabile come uno strumento quotidiano.</p>
          <div className="about__links">
            <a href="https://www.goffredoantonelli.com" target="_blank" rel="noopener" className="btn btn--outline-navy">Profilo di Goffredo →</a>
          </div>
        </div>
        <div className="about__visual">
          <div className="about__stat">
            <span className="about__stat-num">PMI</span>
            <span className="about__stat-label">focus esclusivo sulle piccole e medie imprese italiane</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-num">SaaS</span>
            <span className="about__stat-label">piattaforma cloud, sempre aggiornata, zero installazioni</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-num">360°</span>
            <span className="about__stat-label">consulenza e software pensati insieme, non separati</span>
          </div>
        </div>
      </div>
    </section>
  )
}
function CtaFinal() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', azienda: '', messaggio: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `mailto:info@matesis.it?subject=Contatto da ${form.nome} - ${form.azienda}&body=${encodeURIComponent(`Nome: ${form.nome}\nAzienda: ${form.azienda}\nEmail: ${form.email}\n\n${form.messaggio}`)}`
    setSent(true)
  }

  return (
    <section className="cta-final" id="contatti">
      <div className="container cta-final__inner">
        <span className="tag tag--orange">Inizia da qui</span>
        <h2>Parliamo del tuo progetto.</h2>
        <p>Compila il form — ti risponderemo entro 24 ore.</p>
        {sent ? (
          <div className="cta-form__thanks">
            <span>✓</span> Grazie! Si aprirà il tuo client email per inviarci il messaggio.
          </div>
        ) : (
          <div className="cta-form">
            <div className="cta-form__row">
              <input name="nome" placeholder="Nome e cognome" value={form.nome} onChange={handleChange} />
              <input name="azienda" placeholder="Azienda" value={form.azienda} onChange={handleChange} />
            </div>
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <textarea name="messaggio" placeholder="Raccontaci il tuo progetto o cosa stai cercando..." rows={4} value={form.messaggio} onChange={handleChange} />
            <button className="btn btn--primary cta-form__submit" onClick={handleSubmit}>
              Invia messaggio →
            </button>
            <p className="cta-form__alt">
              Preferisci scrivere direttamente? <a href="mailto:info@matesis.it">info@matesis.it</a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo light />
          <p>Performance strategy.<br/>Dalle persone ai numeri.</p>
        </div>
        <div className="footer__cols">
  <div>
    <h5>Advisory</h5>
    <ul>
      <li><a href="#advisory">Performance Management</a></li>
      <li><a href="#advisory">Controllo di Gestione</a></li>
      <li><a href="#advisory">HR & Organizzazione</a></li>
    </ul>
  </div>
  <div>
    <h5>Platform</h5>
    <ul>
      <li><a href="#moduli">Matesis People</a></li>
      <li><a href="#moduli">Matesis Analytics</a></li>
      <li><a href="#contatti">Richiedi demo</a></li>
    </ul>
  </div>
  <div>
    <h5>Contatti</h5>
    <ul>
      <li><a href="mailto:info@matesis.it">info@matesis.it</a></li>
      <li><a href="https://www.goffredoantonelli.com" target="_blank" rel="noopener">goffredoantonelli.com</a></li>
    </ul>
  </div>
</div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Matesis — Tutti i diritti riservati</span>
          <span>P.IVA IT 02576080697 — matesis.it</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Advisory />
      <ComeFunziona />
      <Platform />
      <Moduli />
      <About />
      <CtaFinal />
      <Footer />
    </>
  )
}