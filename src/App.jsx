import { useState } from 'react'

const features = [
  { title: 'Context-aware AI', text: 'Models that learn your domain, language, and workflows — not generic answers.' },
  { title: 'Private by design', text: 'Your data stays yours. Encrypted in transit and at rest, never used to train shared models.' },
  { title: 'Plug into your stack', text: 'Connect to the tools you already use with simple APIs and ready-made integrations.' },
]

const benefits = [
  ['Save hours every week', 'Automate repetitive research, drafting, and analysis so your team can focus on decisions.'],
  ['Decide with confidence', 'Clear, sourced insights instead of guesswork.'],
  ['Scale without hiring sprees', 'Handle more customers and more data with the same team.'],
  ['Get started in days', 'No months-long rollout. Start small, prove value, then expand.'],
]

const field =
  'w-full rounded-lg border border-slate-400 px-4 py-3 text-slate-900 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // ponytail: no backend; wire to Formspree/your API when you have an endpoint
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  if (sent)
    return (
      <p role="status" className="rounded-lg bg-white p-6 text-center text-navy font-medium">
        Thanks! We'll be in touch soon.
      </p>
    )

  return (
    <form onSubmit={submit} className="space-y-5 rounded-2xl bg-white p-6 sm:p-8 shadow-lg text-left">
      <div>
        <label htmlFor="name" className="mb-1 block font-medium text-slate-800">Name</label>
        <input id="name" name="name" required autoComplete="name" value={form.name} onChange={update} className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block font-medium text-slate-800">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block font-medium text-slate-800">Message</label>
        <textarea id="message" name="message" rows="5" required value={form.message} onChange={update} className={field} />
      </div>
      <button type="submit" className="w-full rounded-lg bg-teal px-6 py-3 font-semibold text-white hover:bg-navy focus:outline-none focus:ring-4 focus:ring-teal/40 transition-colors">
        Send message
      </button>
    </form>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-white focus:text-navy">Skip to content</a>

      <header className="sticky top-0 z-10 bg-navy/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6" aria-label="Main">
          <a href="#" className="text-xl font-bold text-white">Consciouss<span className="text-cyan-300">AI</span></a>
          <ul className="flex gap-4 sm:gap-8 text-sm sm:text-base text-white">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#benefits" className="hover:underline">Benefits</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section className="bg-gradient-to-br from-navy to-teal text-white">
          <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">AI that truly understands your business</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white">
              ConscioussAI turns your data into clear answers and automated workflows — securely, and without the learning curve.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact" className="rounded-lg bg-white px-8 py-3 font-semibold text-navy hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/50">Get started</a>
              <a href="#features" className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/50">Learn more</a>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">Features</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-700">Everything you need to put AI to work, nothing you don't.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 h-1.5 w-12 rounded bg-teal" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-navy">{f.title}</h3>
                <p className="mt-3 text-slate-700">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="scroll-mt-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">Why teams choose ConscioussAI</h2>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {benefits.map(([title, text]) => (
                <li key={title} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal font-bold text-white" aria-hidden="true">✓</span>
                  <div>
                    <h3 className="font-semibold text-navy">{title}</h3>
                    <p className="mt-1 text-slate-700">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 bg-navy text-white">
          <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl">Let's talk</h2>
            <p className="mt-4 mb-10 text-white/90">Tell us what you're building. We usually reply within one business day.</p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-navy border-t border-white/20 py-6 text-center text-sm text-white/80">
        © {new Date().getFullYear()} ConscioussAI. All rights reserved.
      </footer>
    </div>
  )
}
