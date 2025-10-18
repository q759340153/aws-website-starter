import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {


  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ loading: false, msg: '', err: false })

  // Set this in a .env file as:
  // VITE_API_URL=https://<api-id>.execute-api.<region>.amazonaws.com/subscribe
  // Or replace the fallback string below with your real endpoint.
  const API_URL =
    
    'https://3x3i0uddx4.execute-api.us-east-1.amazonaws.com/subscribe'

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true, msg: '', err: false })

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to subscribe')
      setStatus({ loading: false, msg: data?.message || 'Subscribed!', err: false })
      setEmail('')
    } catch (err) {
      setStatus({ loading: false, msg: err.message || 'Something went wrong', err: true })
    }
  }




  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-slate-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to Hongyu's <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">ExperienceLab</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-prose">
            ExperienceLab curates unforgettable experiences and fine wine events, blending luxury, art, and community into a modern lifestyle brand.
          </p>
          <p className="mt-5 text-lg text-slate-600 max-w-prose">
            We believe life is about who you share it with—the wines, the memories, and the stories you create together.
          </p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Email address"
          />
          <button
            disabled={status.loading}
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold inline-flex items-center justify-center hover:opacity-90 shadow disabled:opacity-60"
          >
            {status.loading ? (
              'Joining…'
            ) : (
              <>
                Join ExperienceLab <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
        {status.msg && (
          <div className={`mt-3 text-sm ${status.err ? 'text-rose-600' : 'text-emerald-700'}`}>
            {status.msg}
          </div>
        )}
          <div className="mt-4 text-xs text-slate-500">No spam. Unsubscribe anytime.</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-rose-100">
            <img
              src="/DSC02758.jpg"
              alt="ExperienceLab by Hongyu"
              className="object-cover w-full h-full"
            />
          </div>
          <ul className="mt-6 space-y-3">
            {[
              'Private wine dinners & events',
              'Curated investment collections',
              'Global wine community access',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-rose-600" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-purple-600">About ExperienceLab</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Founded by Hongyu Cao in New York City, ExperienceLab started as an intimate fine wine club and grew into a vibrant community of enthusiasts, collectors, and entrepreneurs. We craft moments that can’t be found on Google Maps—where every bottle opened tells a story of friendship, creativity, and discovery.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Beyond events, we manage curated wine investments, optimize asset returns, and design data-driven experiences that merge taste with technology.
            </p>
          </div>
          <div className="bg-purple-50 rounded-2xl shadow p-6 border border-slate-200">
            <h3 className="font-semibold text-lg text-indigo-700">Vision</h3>
            <p className="mt-2 text-slate-700">To redefine social luxury through curated experiences that connect people, passions, and possibilities.</p>
            <h3 className="mt-6 font-semibold text-lg text-indigo-700">Mission</h3>
            <p className="mt-2 text-slate-700">To engineer once-in-a-lifetime gatherings blending fine wine, culture, and genuine human connection.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-purple-600">Get in Touch</h2>
        <p className="mt-3 text-slate-600 max-w-prose">Want to attend a dinner, invest in fine wines, or collaborate with us? Reach out below and we’ll connect personally.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows="4" className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" required />
          </div>
          <button className="px-6 py-3 rounded-2xl bg-purple-600 text-white font-semibold hover:opacity-90 shadow">Send Message</button>
        </form>
      </section> */}
      
      <section id="about" className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16  gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-purple-600">About Hongyu</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Hongyu Cao is the founder and CEO of ExperienceLab, a New York–based venture that curates fine-wine experiences and manages alternative wine investments.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              With a background in technology consulting, engineering, and data analytics, Hongyu combines analytical precision with an eye for artistry. Before launching ExperienceLab, he led digital transformation projects for global Fortune 500 clients at DXC Technology and earned dual master’s degrees from Columbia University (Electrical Engineering) and Johns Hopkins University (Engineering Management).
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              What began as a personal passion for rare vintages and hospitality has grown into a community of over 500 clients, blending luxury dining, social connection, and investment strategy. Hongyu’s vision is to redefine what it means to experience value — not just in markets, but in moments.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether designing a curated wine dinner, structuring a new investment portfolio, or crafting a once-in-a-lifetime experience, Hongyu approaches each endeavor with the same principle: intentionality turns the ordinary into the unforgettable.
            </p>
          </div>

        </div>
      </section>
      
    </div>
  )
}



// import { CheckCircle2, ArrowRight } from 'lucide-react'
// import { useState } from 'react'

// export default function Home() {
//   const [email, setEmail] = useState('')
//   const [status, setStatus] = useState({ loading: false, msg: '', err: false })

//   // Set this in a .env file as:
//   // VITE_API_URL=https://<api-id>.execute-api.<region>.amazonaws.com/subscribe
//   // Or replace the fallback string below with your real endpoint.
//   const API_URL =
    
//     'https://3x3i0uddx4.execute-api.us-east-1.amazonaws.com/subscribe'

//   async function onSubmit(e) {
//     e.preventDefault()
//     setStatus({ loading: true, msg: '', err: false })

//     try {
//       const res = await fetch(API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       })
//       const data = await res.json()
//       if (!res.ok) throw new Error(data?.error || 'Failed to subscribe')
//       setStatus({ loading: false, msg: data?.message || 'Subscribed!', err: false })
//       setEmail('')
//     } catch (err) {
//       setStatus({ loading: false, msg: err.message || 'Something went wrong', err: true })
//     }
//   }

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
//       <div>
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           Welcome to Hongyu&apos;s{' '}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
//             ExperienceLab
//           </span>
//         </h1>

//         <p className="mt-5 text-lg text-slate-600 max-w-prose">
//           ExperienceLab curates unforgettable experiences and fine wine events
//         </p>
//         <p className="mt-5 text-lg text-slate-600 max-w-prose">
//           It&apos;s not only a social club—it&apos;s a whole new lifestyle
//         </p>

//         <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//             required
//             className="flex-1 px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             aria-label="Email address"
//           />
//           <button
//             disabled={status.loading}
//             className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold inline-flex items-center justify-center hover:opacity-90 shadow disabled:opacity-60"
//           >
//             {status.loading ? (
//               'Joining…'
//             ) : (
//               <>
//                 Join ExperienceLab <ArrowRight className="ml-2 h-4 w-4" />
//               </>
//             )}
//           </button>
//         </form>

//         {status.msg && (
//           <div className={`mt-3 text-sm ${status.err ? 'text-rose-600' : 'text-emerald-700'}`}>
//             {status.msg}
//           </div>
//         )}

//         <div className="mt-4 text-xs text-slate-500">No spam. Unsubscribe anytime.</div>
//       </div>

//       <div className="bg-white rounded-2xl shadow p-6 border border-slate-200">
//         <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-rose-100">
//           <img
//             src="/DSC02758.jpg"
//             alt="ExperienceLab by Hongyu"
//             className="object-cover w-full h-full"
//           />
//         </div>

//         <ul className="mt-6 space-y-3">
//           {['Fast static hosting', 'Custom domain + HTTPS', 'CI/CD from GitHub'].map((t) => (
//             <li key={t} className="flex items-center gap-2 text-slate-700">
//               <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {t}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }
