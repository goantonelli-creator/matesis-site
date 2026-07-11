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
    { icon: '◈', title: 'Performance Management', desc: 'Sistemi di valutazione, obiettivi e feedback strutturati per far crescere le persone nel tempo.', ai: 'Inclusa analisi e ottimizzazione dei processi con agenti AI.' },
    { icon: '◉', title: 'Controllo di Gestione', desc: 'Modelli di reporting, KPI e full costing per chi vuole capire davvero cosa succede in azienda.', ai: 'Inclusa automazione del reporting e analisi predittiva con AI.' },
    { icon: '◐', title: 'HR & Organizzazione', desc: 'Job design, selezione, sviluppo e piani di carriera costruiti sulla realtà operativa del cliente.', ai: 'Inclusi flussi HR automatizzati e supporto AI al job design.' },
    { icon: '◑', title: 'Ricerca & Selezione', desc: "Processi strutturati di ricerca, valutazione e selezione del personale. Dalla job description all'onboarding.", ai: 'Incluso screening e valutazione dei candidati con AI.' },
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
              <p className="advisory__ai">⚡ {s.ai}</p>
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
      desc: "Analizziamo l'organizzazione: struttura, processi, KPI esistenti, maturità HR. Capiamo dove si perde valore.",
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
      desc: "Configuriamo Matesis Platform sui parametri definiti. People e Analytics vengono impostati sulla realtà specifica dell'azienda.",
      icon: '⊞',
    },
    {
      num: '04',
      title: 'Autonomia',
      desc: "L'azienda gestisce i cicli di valutazione e il controllo in autonomia. Restiamo disponibili per evoluzione e supporto.",
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
function DemoForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', azienda: '', interesse: '', note: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (!form.nome || !form.email || !form.interesse) return
    window.location.href = `mailto:info@matesis.it?subject=Richiesta demo — ${form.interesse} — ${form.azienda}&body=${encodeURIComponent(`Nome: ${form.nome}\nAzienda: ${form.azienda}\nEmail: ${form.email}\nInteresse: ${form.interesse}\n\nNote: ${form.note}`)}`
    setSent(true)
  }

  if (sent) return (
    <div className="demo-form__thanks">
      <span>✓</span> Grazie! Si aprirà il tuo client email per inviarci la richiesta.
    </div>
  )

  return (
    <div className="demo-form">
      <div className="demo-form__row">
        <input name="nome" placeholder="Nome e cognome *" value={form.nome} onChange={handleChange} />
        <input name="azienda" placeholder="Azienda" value={form.azienda} onChange={handleChange} />
      </div>
      <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} />
      <select name="interesse" value={form.interesse} onChange={handleChange}>
        <option value="">Cosa ti interessa vedere? *</option>
        <option value="Matesis People">Matesis People</option>
        <option value="Matesis Analytics">Matesis Analytics</option>
        <option value="Entrambi">Entrambi (People + Analytics)</option>
        <option value="Altri moduli sviluppati">Altri moduli sviluppati</option>
      </select>
      <textarea name="note" placeholder="Note aggiuntive (facoltativo)" rows={3} value={form.note} onChange={handleChange} />
      <button className="btn btn--primary demo-form__submit" onClick={handleSubmit}>
        Prenota la demo →
      </button>
      <p className="demo-form__note">* campi obbligatori — ti risponderemo entro 24 ore</p>
    </div>
  )
}
function MockupDemo() {
  const [active, setActive] = useState(0)

  const screens = [
    { label: 'Analytics', tag: 'Matesis Analytics' },
    { label: 'People', tag: 'Matesis People' },
    { label: 'Workforce', tag: 'Matesis Workforce' },
  ]

  return (
    <section className="mockup-demo" id="demo">
      <div className="container">
        <div className="section-header">
          <span className="tag tag--navy">Anteprima</span>
          <h2 className="section-title">La piattaforma<br/>in azione.</h2>
          <p className="section-sub">Una preview dell'interfaccia. Ogni tenant è configurato sui processi specifici dell'azienda.</p>
        </div>

        <div className="md__tabs">
          {screens.map((s, i) => (
            <button key={i} className={`md__tab ${active === i ? 'md__tab--active' : ''}`} onClick={() => setActive(i)}>
              {s.label}
            </button>
          ))}
        </div>

        <div className="md__screen">
          <div className="md__screen-bar">
            <div className="md__screen-dots">
              <span/><span/><span/>
            </div>
            <div className="md__screen-url">app.matesis.it</div>
            <span className={`tag ${active === 0 ? 'tag--orange' : active === 1 ? 'tag--navy' : 'tag--outline'}`}>
              {screens[active].tag}
            </span>
          </div>

          <div className="md__screen-content">
            {active === 0 && <MockupAnalytics />}
            {active === 1 && <MockupPeople />}
            {active === 2 && <MockupWorkforce />}
          </div>
        </div>

        <div className="md__cta">
  <p>Vuoi vedere la piattaforma sul tuo caso specifico?</p>
  <DemoForm />
</div>
      </div>
    </section>
  )
}

function MockupAnalytics() {
  const kpis = [
    { label: 'Ricavi YTD', value: '€ 1.24M', delta: '+12%', up: true },
    { label: 'Margine operativo', value: '18.4%', delta: '+2.1pp', up: true },
    { label: 'Costo del personale', value: '€ 480K', delta: '+4%', up: false },
    { label: 'EBITDA', value: '€ 228K', delta: '+8%', up: true },
  ]
  const bars = [65, 72, 58, 80, 74, 88, 76, 91, 68, 85, 79, 94]
  const months = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic']

  return (
    <div className="mock-analytics">
      <div className="mock-analytics__kpis">
        {kpis.map((k, i) => (
          <div className="mock-kpi" key={i}>
            <span className="mock-kpi__label">{k.label}</span>
            <span className="mock-kpi__value">{k.value}</span>
            <span className={`mock-kpi__delta ${k.up ? 'mock-kpi__delta--up' : 'mock-kpi__delta--down'}`}>{k.delta}</span>
          </div>
        ))}
      </div>
      <div className="mock-analytics__chart">
        <div className="mock-chart-title">Andamento ricavi mensili</div>
        <div className="mock-bars">
          {bars.map((h, i) => (
            <div className="mock-bar-wrap" key={i}>
              <div className="mock-bar" style={{ height: `${h}%` }}/>
              <span>{months[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MockupPeople() {
  const employees = [
    { name: 'M. Rossi', role: 'Responsabile HR', score: 87, status: 'Completata' },
    { name: 'L. Bianchi', role: 'Project Manager', score: 74, status: 'In corso' },
    { name: 'A. Ferrari', role: 'Consulente Senior', score: 91, status: 'Completata' },
    { name: 'G. Marino', role: 'Analista', score: 0, status: 'Da avviare' },
  ]

  return (
    <div className="mock-people">
      <div className="mock-people__header">
        <span className="mock-people__title">Ciclo di valutazione 2024</span>
        <div className="mock-progress-wrap">
          <span>3/4 completate</span>
          <div className="mock-progress"><div className="mock-progress__bar" style={{ width: '75%' }}/></div>
        </div>
      </div>
      <div className="mock-people__list">
        {employees.map((e, i) => (
          <div className="mock-person" key={i}>
            <div className="mock-person__avatar">{e.name.split(' ').map(n => n[0]).join('')}</div>
            <div className="mock-person__info">
              <span className="mock-person__name">{e.name}</span>
              <span className="mock-person__role">{e.role}</span>
            </div>
            {e.score > 0 && (
              <div className="mock-person__score-wrap">
                <div className="mock-person__score-bar">
                  <div style={{ width: `${e.score}%`, background: e.score > 80 ? 'var(--navy)' : 'var(--orange)' }}/>
                </div>
                <span>{e.score}/100</span>
              </div>
            )}
            <span className={`mock-status mock-status--${e.status === 'Completata' ? 'done' : e.status === 'In corso' ? 'progress' : 'todo'}`}>
              {e.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupWorkforce() {
  const people = [
    { name: 'M. Rossi', role: 'Resp. HR', tipo: 'Indeterminato', scadenza: '—', cedolini: 12 },
    { name: 'L. Bianchi', role: 'PM', tipo: 'Determinato', scadenza: '31/12/2024', cedolini: 8 },
    { name: 'A. Ferrari', role: 'Consulente', tipo: 'Indeterminato', scadenza: '—', cedolini: 12 },
    { name: 'G. Marino', role: 'Analista', tipo: 'Stage', scadenza: '30/06/2024', cedolini: 3 },
  ]

  return (
    <div className="mock-workforce">
      <div className="mock-table">
        <div className="mock-table__head">
          <span>Dipendente</span>
          <span>Ruolo</span>
          <span>Contratto</span>
          <span>Scadenza</span>
          <span>Cedolini</span>
        </div>
        {people.map((p, i) => (
          <div className="mock-table__row" key={i}>
            <span className="mock-table__name">
              <span className="mock-avatar">{p.name.split(' ').map(n => n[0]).join('')}</span>
              {p.name}
            </span>
            <span>{p.role}</span>
            <span>
              <span className={`mock-contract mock-contract--${p.tipo === 'Indeterminato' ? 'green' : p.tipo === 'Determinato' ? 'orange' : 'blue'}`}>
                {p.tipo}
              </span>
            </span>
            <span>{p.scadenza}</span>
            <span className="mock-table__cedolini">{p.cedolini} 📄</span>
          </div>
        ))}
      </div>
    </div>
  )
}
function ModuliAggiuntivi() {
  const core = [
    { tag: 'Matesis People', desc: 'HR, performance management e valutazioni. Incluso in ogni tenant.' },
    { tag: 'Matesis Analytics', desc: 'KPI, forecasting e controllo di gestione. Incluso in ogni tenant.' },
  ]
  const progetto = [
    { tag: 'Matesis Workforce', desc: 'Amministrazione persone, cedolini, visite mediche e contratti.' },
    { tag: 'Matesis Network', desc: 'Ricerca fornitori per mappa geografica e gestione partner.' },
    { tag: 'Matesis Planning', desc: 'Pianificazione operativa e gestione delle risorse aziendali.' },
  ]
  const roadmap = [
    { tag: 'Matesis Finance', desc: 'Cash flow operativo, analisi costi/ricavi e gestione finanziaria.' },
    { tag: 'Matesis Academy', desc: "Piattaforma per la gestione e l'erogazione della formazione aziendale." },
  ]

  return (
    <section className="moduli-add" id="moduli-aggiuntivi">
      <div className="container">
        <div className="section-header">
          <span className="tag tag--outline">Ecosistema</span>
          <h2 className="section-title">Ogni azienda è diversa.<br/>Matesis si adatta.</h2>
          <p className="section-sub">Due moduli core inclusi in ogni progetto. Un ecosistema di moduli aggiuntivi configurabili sui tuoi processi specifici.</p>
        </div>

        <div className="ma__group">
          <div className="ma__group-label">
            <span className="tag tag--navy">Core — inclusi</span>
          </div>
          <div className="ma__grid ma__grid--2">
            {core.map((m, i) => (
              <div className="ma__card ma__card--core" key={i}>
                <h4>{m.tag}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ma__group">
          <div className="ma__group-label">
            <span className="tag tag--outline">Su progetto — configurabili</span>
            <p>Disponibili nell'ambito di un progetto Advisory. Sviluppati e adattati sui processi specifici del cliente.</p>
          </div>
          <div className="ma__grid ma__grid--3">
            {progetto.map((m, i) => (
              <div className="ma__card ma__card--progetto" key={i}>
                <h4>{m.tag}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ma__group">
          <div className="ma__group-label">
            <span className="tag tag--outline">In arrivo</span>
            <p>Moduli in sviluppo attivo. Disponibili nei prossimi mesi.</p>
          </div>
          <div className="ma__grid ma__grid--2">
            {roadmap.map((m, i) => (
              <div className="ma__card ma__card--roadmap" key={i}>
                <div className="ma__roadmap-badge">Roadmap</div>
                <h4>{m.tag}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
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
          <span>© {new Date().getFullYear()} Matesis — Tutti i diritti riservati — <a href="#privacy" style={{color:"rgba(255,255,255,0.4)"}}>Privacy & Cookie Policy</a></span>
          <span>P.IVA IT 02576080697 — matesis.it</span>
        </div>
      </div>
    </footer>
  )
}


function Privacy() {
  const [show, setShow] = React.useState(false);
  return (
    <section id="privacy" style={{background:'var(--bg-light)', padding:'80px 0'}}>
      <div className="container" style={{maxWidth:'760px'}}>
        <h2 style={{fontFamily:'var(--font-display)', fontSize:'28px', fontWeight:800, marginBottom:'8px'}}>Privacy Policy e Cookie Policy</h2>
        <p style={{fontSize:'13px', color:'var(--text-light)', marginBottom:'40px'}}>Ultimo aggiornamento: luglio 2026</p>

        <h3 style={{fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, marginBottom:'12px', marginTop:'32px'}}>Titolare del trattamento</h3>
        <p style={{fontSize:'15px', lineHeight:'1.8', color:'var(--text-secondary)'}}>Goffredo Antonelli — P.IVA IT 02576080697 — Jesi (AN), Italia<br/>Email: <a href="mailto:info@matesis.it" style={{color:'var(--orange)'}}>info@matesis.it</a></p>

        <h3 style={{fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, marginBottom:'12px', marginTop:'32px'}}>Dati raccolti e finalità</h3>
        <p style={{fontSize:'15px', lineHeight:'1.8', color:'var(--text-secondary)'}}>Il presente sito raccoglie dati di navigazione (IP, browser, pagine visitate) tramite Google Analytics 4, solo previo consenso. I dati inseriti nel modulo di contatto sono utilizzati esclusivamente per rispondere alla richiesta.</p>

        <h3 style={{fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, marginBottom:'12px', marginTop:'32px'}}>Cookie utilizzati</h3>
        <p style={{fontSize:'15px', lineHeight:'1.8', color:'var(--text-secondary)'}}>Cookie tecnici: <strong>ga_consent</strong> (12 mesi) — memorizza la scelta di consenso.<br/>Cookie analitici (solo con consenso): <strong>_ga</strong>, <strong>_ga_*</strong> — Google Analytics, durata 2 anni.</p>

        <h3 style={{fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, marginBottom:'12px', marginTop:'32px'}}>Diritti dell'interessato</h3>
        <p style={{fontSize:'15px', lineHeight:'1.8', color:'var(--text-secondary)'}}>Hai diritto di accesso, rettifica, cancellazione, opposizione e limitazione del trattamento. Per esercitarli scrivi a <a href="mailto:info@matesis.it" style={{color:'var(--orange)'}}>info@matesis.it</a>. Puoi proporre reclamo al <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" style={{color:'var(--orange)'}}>Garante della Privacy</a>.</p>

        <h3 style={{fontFamily:'var(--font-display)', fontSize:'16px', fontWeight:700, marginBottom:'12px', marginTop:'32px'}}>Gestione consenso cookie</h3>
        <p style={{fontSize:'15px', lineHeight:'1.8', color:'var(--text-secondary)'}}>Puoi revocare il consenso ai cookie analitici in qualsiasi momento:</p>
        <button onClick={() => { localStorage.removeItem('ga_consent'); location.reload(); }} style={{background:'none', border:'1px solid var(--orange)', color:'var(--orange)', padding:'8px 16px', borderRadius:'6px', cursor:'pointer', fontSize:'14px', marginTop:'8px'}}>Gestisci preferenze cookie</button>
      </div>
    </section>
  );
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
      <MockupDemo />
      <ModuliAggiuntivi />
      <About />
      <CtaFinal />
      <Privacy />
      <Footer />
    </>
  )
}
