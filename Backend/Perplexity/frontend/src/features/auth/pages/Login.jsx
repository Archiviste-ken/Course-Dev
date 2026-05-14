import { useState } from 'react'
import { Link } from 'react-router'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Login form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f10] shadow-[0_24px_80px_rgba(0,0,0,0.5)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#31b8c6]/20 bg-[#31b8c6]/10 px-3 py-1 text-xs font-medium text-[#9ee7ef]">
                  Welcome Back!!
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-md text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Sign in to continue your workflow.
                  </h1>
                  <p className="max-w-lg text-sm leading-6 text-white/65 sm:text-base">
                    A minimal, focused login experience with a cool teal accent and the same calm, product-first feel.
                  </p>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">Why this works</p>
                <p className="text-sm leading-6 text-white/70">
                  Clear hierarchy, quiet surfaces, and one strong accent color keep attention on the form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Login</h2>
                <p className="text-sm text-white/60">Use your email address and password.</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/75">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#070a0b] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/25"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-white/75">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/10 bg-[#070a0b] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/25"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center rounded-2xl bg-[#31b8c6] px-4 py-3.5 text-sm font-semibold text-[#03191c] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#31b8c6]/60"
              >
                <span>Sign in</span>
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
              </button>

              <p className="text-center text-sm text-white/60">
                Don&apos;t have an account?{' '}
                <Link to="/register" className="font-semibold text-[#9ee7ef] transition hover:text-[#c4f2f6]">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login