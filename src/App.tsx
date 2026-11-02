import { useEffect, useState, FormEvent } from 'react'
import { Menu, X, Sun, Moon, Download, ExternalLink, ArrowLeft, ChevronRight, Linkedin, Github, Mail, User, Phone } from 'lucide-react'
import { site, experience, extra, skills, education, interests, projects, Project } from './data'

const nav = ['Home','About','Experience','Skills','Projects','Research','Education','Resume','Contact']
const Ext = ({ href, children }: { href: string; children: React.ReactNode }) =>
  href ? <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:underline">{children}<ExternalLink size={14} /></a>
       : <span className="text-muted italic">{children}</span>

function Header({ dark, setDark }: { dark: boolean; setDark: (b: boolean) => void }) {
  const [open, setOpen] = useState(false)
  const go = (n: string) => `#${n.toLowerCase()}`
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-extrabold tracking-tight text-lg">Kinara Hemachandra</a>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {nav.map(n => <a key={n} href={go(n)} className="hover:text-ink transition-colors">{n}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" className="btn btn-s !px-3" onClick={() => setDark(!dark)}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <CvButton cls="btn-p hidden sm:inline-flex" />
          <button aria-label="Menu" aria-expanded={open} className="btn btn-s !px-3 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X size={16} /> : <Menu size={16} />}</button>
        </div>
      </div>
      {open && <nav aria-label="Mobile" className="grid border-t border-line bg-bg2 px-5 py-3 lg:hidden">
        {nav.map(n => <a key={n} href={go(n)} onClick={() => setOpen(false)} className="py-2 text-muted hover:text-ink">{n}</a>)}</nav>}
    </header>)
}

function CvButton({ cls }: { cls: string }) {
  return site.cvPath
    ? <a href={site.cvPath} download className={`btn ${cls}`}><Download size={16} />Download CV</a>
    : <a href="#resume" className={`btn ${cls}`}><Download size={16} />Download CV</a>
}

function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[1.3fr_1fr]">
      <div className="hero-in">
        <p className="mb-4 text-sm font-semibold text-teal tracking-wide uppercase">Hello, I'm Kinara</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">Bridging Business Needs and Technology Solutions.</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          Motivated Software Engineering undergraduate with practical experience in Business Analysis, requirements gathering, and software documentation. Skilled in analyzing business processes, engaging stakeholders, and translating business needs into clear functional requirements for development teams.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-p">Explore My Work</a>
          <CvButton cls="btn-s" />
          <a href="#contact" className="px-2 text-sm text-muted hover:text-ink transition-colors">Contact Me</a>
        </div>
      </div>
      <div className="card hero-in text-center p-8">
        {site.photo ? (
          <div className="relative mx-auto h-48 w-48 mb-2">
            <img
              src={site.photo}
              alt="Kinara Hemachandra"
              className="h-48 w-48 rounded-full object-cover shadow-xl border-2 border-teal ring-4 ring-teal/20"
              width={192}
              height={192}
              onError={(e) => {
                const target = e.currentTarget
                if (!target.dataset.fallback) {
                  target.dataset.fallback = '1'
                  target.src = './profile.jpg'
                }
              }}
            />
          </div>
        ) : (
          <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-dashed border-line bg-bg2 text-muted" title="Set photo in data.ts">
            <User size={48} />
          </div>
        )}
        <h2 className="mt-5 text-xl font-extrabold">{site.name}</h2>
        <p className="text-sm text-muted font-medium mt-1">Junior Business Analyst | Software Engineering Undergraduate</p>
        <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-teal">
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          Open to Junior Business Analyst opportunities
        </p>
      </div>
    </section>)
}

const Sec = ({ id, h, children, alt }: { id: string; h: string; children: React.ReactNode; alt?: boolean }) =>
  <div className={alt ? 'bg-bg2' : ''}><section id={id} className="sec"><h2>{h}</h2>{children}</section></div>

function About() {
  const cards = [
    ['Business Analysis', 'Requirements gathering, stakeholder engagement, BRD/SRS documentation, and workflow analysis.'],
    ['Technology & Systems', 'Software Engineering background, database concepts, SQL, and agile cross-team collaboration.'],
    ['Operations & Communication', 'Client communication, CRM system workflows, operational problem-solving, and process improvement.']
  ]
  return <Sec id="about" h="About Me" alt>
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="max-w-prose space-y-4 leading-relaxed text-muted">
        <p>I am a Software Engineering undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). My academic background and practical industry work have built my foundation in software systems, business processes, requirements elicitation, and technical documentation.</p>
        <p>During my Business Analyst internship at Cloud Syntex, I gained hands-on experience gathering business and functional requirements for CRM enhancements, authoring BRDs and SRS, clarifying requirements between stakeholders and engineering teams, and mapping CRM workflows (HubSpot, Dinero).</p>
        <p>In addition, my experience as a Virtual Telecommunication Assistant with RAR Properties strengthened my communication, CRM tracking, and customer problem-solving abilities.</p>
        <p>My career goal is to excel as a Junior Business Analyst, bridging business objectives and technology solutions to drive operational efficiency.</p>
      </div>
      <div className="space-y-4">
        {cards.map(([t, d]) => <div key={t} className="card !p-5"><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></div>)}
        <div className="card !p-5"><h3 className="mb-2 font-bold">What I Bring</h3><ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {[
            'Strong ability to communicate effectively across clients, developers, and QA engineers',
            'Comprehensive understanding of both business requirements and technical feasibility',
            'Hands-on experience preparing BRDs, SRS, user stories, and acceptance criteria',
            'Detail-oriented approach to process flows, backlog grooming, and documentation',
            'Analytical mindset for workflow optimization and problem identification'
          ].map(x => <li key={x}>{x}</li>)}</ul></div>
      </div>
    </div>
    <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {['Business Analysis Experience', 'Software Engineering Background', 'Research & System Analysis', 'Stakeholder Collaboration'].map(x => (
        <li key={x} className="rounded-lg border border-line px-4 py-3 text-sm font-semibold text-teal text-center">{x}</li>
      ))}
    </ul>
  </Sec>
}

function Experience() {
  return <Sec id="experience" h="Professional Experience">
    <ol className="space-y-8 border-l border-line pl-6">
      {experience.map(e => <li key={e.role} className="relative">
        <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
        <div className="card">
          <p className="text-sm font-semibold text-teal">{e.period}</p>
          <h3 className="text-xl font-extrabold mt-1">{e.role}</h3>
          <p className="text-sm text-muted font-medium">{e.org}{e.place && ` · ${e.place}`}</p>
          <p className="mt-3 text-muted leading-relaxed">{e.d}</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">{e.l.map(x => <li key={x}>{x}</li>)}</ul>
        </div></li>)}
    </ol>
    <div className="card mt-8">
      <h3 className="font-bold">Additional Practical Experience: {extra.title}</h3>
      <p className="mt-2 text-sm text-muted">{extra.d}</p>
      {extra.url && <p className="mt-2 text-sm"><Ext href={extra.url}>Visit Website</Ext></p>}
    </div>
  </Sec>
}

function Skills() {
  return <Sec id="skills" h="Skills & Competencies" alt><div className="grid gap-5 md:grid-cols-2">
    {skills.map(s => <div key={s.g} className="card"><h3 className="mb-3 font-bold">{s.g}</h3><div className="flex flex-wrap gap-2">{s.items.map(i => <span key={i} className="tag">{i}</span>)}</div></div>)}
  </div></Sec>
}

function Flow({ f }: { f: Project['flows'][number] }) {
  return <figure className="mt-6"><figcaption className="mb-3 text-sm font-semibold">{f.title}{f.conceptual && <span className="ml-2 font-normal text-muted">(conceptual illustration)</span>}</figcaption>
    <ol className="flex flex-wrap items-stretch gap-2">{f.steps.map((s, i) => <li key={s} className="flex items-center gap-2">
      <span className="rounded-lg border border-line bg-bg2 px-3 py-2 text-sm">{s}</span>{i < f.steps.length - 1 && <ChevronRight size={16} className="text-teal" />}</li>)}</ol></figure>
}

function Detail({ p }: { p: Project }) {
  return <article className="mx-auto max-w-3xl px-5 pb-20 pt-28">
    <a href="#projects" className="mb-6 inline-flex items-center gap-1 text-sm text-accent"><ArrowLeft size={16} />Back to all projects</a>
    <p className="text-sm text-teal font-semibold">{p.cat}</p>
    <h1 className="mt-1 text-3xl font-extrabold">{p.title}</h1>
    <p className="mt-2 text-sm text-muted">Role: {p.role}</p>
    {p.note && <p className="mt-4 rounded-lg border border-line bg-bg2 p-3 text-sm text-muted">{p.note}</p>}
    {p.sections.map(s => <section key={s.h} className="mt-8"><h2 className="mb-2 text-lg font-bold">{s.h}</h2>
      {s.p && <p className="leading-relaxed text-muted">{s.p}</p>}
      {s.l && <ul className="list-disc space-y-1 pl-5 text-muted">{s.l.map(x => <li key={x}>{x}</li>)}</ul>}</section>)}
    <section className="mt-8"><h2 className="mb-2 text-lg font-bold">Tools and Technologies</h2><div className="flex flex-wrap gap-2">{p.tools.map(t => <span key={t} className="tag">{t}</span>)}</div></section>
    {p.flows.length > 0 && <section className="mt-8"><h2 className="text-lg font-bold">Workflow / System Design</h2>{p.flows.map(f => <Flow key={f.title} f={f} />)}</section>}
    {p.links && <ul className="mt-8 space-y-2">{p.links.map(l => <li key={l.label}><Ext href={l.url}>{l.label}</Ext></li>)}</ul>}
  </article>
}

function Projects() {
  const sorted = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  return <Sec id="projects" h="Projects & Case Studies"><div className="grid gap-5 md:grid-cols-2">
    {sorted.map((p, i) => <a key={p.slug} href={`#/project/${p.slug}`} className={`card block transition-all hover:border-accent hover:shadow-md ${i === 0 ? 'md:col-span-2' : ''}`}>
      <p className="text-xs font-semibold text-teal">{p.cat}</p>
      <h3 className={`mt-1 font-extrabold ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{p.title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{p.summary}</p>
      <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Read case study<ChevronRight size={16} /></p></a>)}
  </div></Sec>
}

function Research() {
  return <Sec id="research" h="Research and Academic Work" alt><div className="grid gap-5 md:grid-cols-2">
    <div className="card"><h3 className="font-bold text-lg">SLIIT Final-Year Research</h3><p className="mt-2 text-sm text-muted leading-relaxed">Intelligent IoT-Based Smart Water Infrastructure Monitoring Platform in Sri Lanka. Focused on sensor telemetry analysis, water fraud detection, and Non-Revenue Water (NRW) reduction.</p>
      <a href="#/project/iot-water-monitoring" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Read research summary<ChevronRight size={16} /></a></div>
    <div className="card"><h3 className="font-bold text-lg">Key Academic & Engineering Projects</h3>
      <ul className="mt-3 space-y-2.5 text-sm text-muted">
        <li><a className="text-accent font-medium hover:underline inline-flex items-center gap-1" href="#/project/wellness-studio-management">Wellness Studio Management System (Java & MERN)<ChevronRight size={14} /></a></li>
        <li><a className="text-accent font-medium hover:underline inline-flex items-center gap-1" href="#/project/finance-tracker">Personal Finance Tracker App (Kotlin, Android Studio)<ChevronRight size={14} /></a></li>
        <li><a className="text-accent font-medium hover:underline inline-flex items-center gap-1" href="#/project/secure-software-development">Secure Software Development (SE4030)<ChevronRight size={14} /></a></li>
        <li><a className="text-accent font-medium hover:underline inline-flex items-center gap-1" href="#/project/online-job-portal">Online Job Portal & Spare Parts Management<ChevronRight size={14} /></a></li>
      </ul>
    </div>
  </div></Sec>
}

function Education() {
  return <Sec id="education" h="Education"><div className="card">
    <p className="text-sm font-semibold text-teal">{education.status}</p>
    <h3 className="text-xl font-extrabold mt-1">{education.school}</h3>
    <p className="text-muted font-medium">{education.q} · {site.location}</p>
    <div className="mt-4 flex flex-wrap gap-2">{education.areas.map(a => <span key={a} className="tag">{a}</span>)}</div></div>
    <h3 className="mb-3 mt-12 text-xl font-extrabold">Professional Interests</h3>
    <p className="mb-4 max-w-prose text-muted leading-relaxed">I am focused on roles where I can understand complex business problems, analyse and optimize processes, and facilitate collaboration between technical and business stakeholders.</p>
    <div className="flex flex-wrap gap-2">{interests.map(a => <span key={a} className="tag">{a}</span>)}</div></Sec>
}

function Resume() {
  return <Sec id="resume" h="Curriculum Vitae" alt>
    <div className="card space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-lg">Kinara Hemachandra — CV</h3>
          <p className="text-sm text-muted">Preview my full CV below or download a PDF copy.</p>
        </div>
        <div className="flex gap-3">
          <a className="btn btn-p" href={site.cvPath} download="Kinara_Hemachandra_CV.pdf">
            <Download size={16} />Download CV
          </a>
          <a className="btn btn-s" href={site.cvPath} target="_blank" rel="noreferrer">
            <ExternalLink size={16} />Open in New Tab
          </a>
        </div>
      </div>
      {site.cvPath ? (
        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-inner">
          <object
            data={site.cvPath}
            type="application/pdf"
            className="h-[750px] w-full"
          >
            <iframe
              title="Kinara Hemachandra CV Preview"
              src={site.cvPath}
              className="h-[750px] w-full border-0"
            >
              <div className="p-8 text-center text-muted">
                <p>Your browser could not preview the PDF directly.</p>
                <a className="btn btn-p mt-4 inline-flex" href={site.cvPath} download="Kinara_Hemachandra_CV.pdf">
                  <Download size={16} />Download CV (PDF)
                </a>
              </div>
            </iframe>
          </object>
        </div>
      ) : (
        <p className="text-muted">CV not connected yet.</p>
      )}
    </div>
  </Sec>
}

function Contact() {
  const [st, setSt] = useState<{ ok: boolean; msg: string } | null>(null)
  const [err, setErr] = useState<Record<string, string>>({})
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const er: Record<string, string> = {}
    if (!d.name.trim()) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(d.email)) er.email = 'Enter a valid email address.'
    if (!d.subject.trim()) er.subject = 'Enter a subject.'
    if (d.message.trim().length < 10) er.message = 'Message must be at least 10 characters.'
    setErr(er); if (Object.keys(er).length) return
    if (site.formEndpoint) {
      try { const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
        setSt(r.ok ? { ok: true, msg: 'Message sent. Thank you.' } : { ok: false, msg: 'Sending failed. Please try again or email directly.' }); if (r.ok) e.currentTarget.reset()
      } catch { setSt({ ok: false, msg: 'Network error. Please try again.' }) }
    } else if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\n${d.name} (${d.email})`)}`
      setSt({ ok: true, msg: 'Opening your email app to send the message.' })
    } else setSt({ ok: false, msg: 'Form not connected yet. Set formEndpoint or email in src/data.ts.' })
  }
  const f = (n: string, l: string, area?: boolean) => <label className="block text-sm">{l}
    {area ? <textarea name={n} rows={5} className="mt-1 w-full rounded-lg border border-line bg-bg2 p-3 text-ink focus:border-accent focus:outline-none" aria-invalid={!!err[n]} /> : <input name={n} type={n === 'email' ? 'email' : 'text'} className="mt-1 w-full rounded-lg border border-line bg-bg2 p-3 text-ink focus:border-accent focus:outline-none" aria-invalid={!!err[n]} />}
    {err[n] && <span role="alert" className="text-xs text-red-400 mt-1 block">{err[n]}</span>}</label>

  return <Sec id="contact" h="Let's Connect"><div className="grid gap-10 lg:grid-cols-2">
    <div>
      <p className="max-w-prose leading-relaxed text-muted">
        I am actively seeking opportunities as a Junior Business Analyst, Business Operations, or Product Analyst. Feel free to reach out for professional opportunities, collaborations, or discussions.
      </p>
      <ul className="mt-6 space-y-3.5 text-sm">
        <li className="flex items-center gap-2.5">
          <Mail size={16} className="text-teal" />
          <a href={`mailto:${site.email}`} className="text-ink hover:text-accent transition-colors">{site.email}</a>
        </li>
        {site.phone && (
          <li className="flex items-center gap-2.5">
            <Phone size={16} className="text-teal" />
            <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="text-ink hover:text-accent transition-colors">{site.phone}</a>
          </li>
        )}
        <li className="flex items-center gap-2.5">
          <Linkedin size={16} className="text-teal" />
          <Ext href={site.linkedin}>LinkedIn Profile</Ext>
        </li>
        <li className="flex items-center gap-2.5">
          <Github size={16} className="text-teal" />
          <Ext href={site.github}>GitHub Profile</Ext>
        </li>
        <li className="text-muted pt-1">Location: {site.location}</li>
      </ul>
    </div>
    <form onSubmit={submit} noValidate className="card space-y-4">
      {f('name', 'Your Name')}
      {f('email', 'Your Email')}
      {f('subject', 'Subject')}
      {f('message', 'Message', true)}
      <button className="btn btn-p" type="submit">Send Message</button>
      {st && <p role="status" className={st.ok ? 'text-teal text-sm mt-2' : 'text-red-400 text-sm mt-2'}>{st.msg}</p>}
    </form>
  </div></Sec>
}

function Footer() {
  return <footer className="border-t border-line bg-bg2"><div className="mx-auto max-w-6xl space-y-2 px-5 py-10 text-sm text-muted">
    <p className="font-bold text-ink text-base">Kinara Hemachandra</p>
    <p>Junior Business Analyst | Software Engineering Undergraduate</p>
    <p className="flex gap-4 pt-1">
      <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
      <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
      {site.email && <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">Email</a>}
    </p>
    <p className="text-xs pt-3">Understanding problems · Connecting people and technology · Creating structured solutions</p>
    <p className="text-xs">© {new Date().getFullYear()} Kinara Hemachandra. All rights reserved.</p>
  </div></footer>
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [hash, setHash] = useState(location.hash)
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])
  useEffect(() => { const h = () => { setHash(location.hash); if (location.hash.startsWith('#/')) window.scrollTo(0, 0) }; addEventListener('hashchange', h); return () => removeEventListener('hashchange', h) }, [])
  const proj = hash.startsWith('#/project/') ? projects.find(p => p.slug === hash.slice(10)) : undefined
  useEffect(() => { document.title = proj ? `${proj.title} | Kinara Hemachandra` : 'Kinara Hemachandra | Business Analyst Portfolio' }, [proj])
  return <>
    <Header dark={dark} setDark={setDark} />
    <main>{proj ? <Detail p={proj} /> : <><Hero /><About /><Experience /><Skills /><Projects /><Research /><Education /><Resume /><Contact /></>}</main>
    <Footer /></>
}
