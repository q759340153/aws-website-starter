import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Launch your site on <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">AWS</span> in minutes
        </h1>
        <p className="mt-5 text-lg text-slate-600 max-w-prose">
          A clean, modern starter you can deploy to AWS Amplify or S3 + CloudFront. Edit the text, drop in your logo, and you’re live.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold inline-flex items-center justify-center hover:opacity-90 shadow">
            Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </form>
        <div className="mt-4 text-xs text-slate-500">No spam. Unsubscribe anytime.</div>
      </div>
      <div className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="aspect-video rounded-xl bg-slate-100 grid place-items-center text-slate-400">
          <span className="text-sm">Hero image / product mockup</span>
        </div>
        <ul className="mt-6 space-y-3">
          {[
            'Fast static hosting',
            'Custom domain + HTTPS',
            'CI/CD from GitHub',
          ].map((t) => (
            <li key={t} className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
