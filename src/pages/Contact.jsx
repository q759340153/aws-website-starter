import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    // Placeholder submit — replace with your API endpoint (Lambda, Formspree, etc.)
    await new Promise(r => setTimeout(r, 400))
    setStatus('Thanks! We will get back to you soon.')
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-2 text-slate-600">Drop a line and we’ll respond shortly.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-300" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-300" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows="5" value={form.message} onChange={onChange} className="mt-1 w-full px-4 py-3 rounded-2xl border border-slate-300" required />
        </div>
        <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold">Send</button>
      </form>
      {status && <p className="mt-4 text-emerald-700">{status}</p>}
    </section>
  )
}
