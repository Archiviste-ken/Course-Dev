import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Register form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f10] shadow-[0_24px_80px_rgba(0,0,0,0.5)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="order-2 flex items-center border-t border-white/10 p-8 sm:p-10 lg:order-1 lg:border-t-0 lg:border-r">
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-white">
                  Create account
                </h1>
                <p className="text-sm text-white/60">
                  Register with a username, email, and password.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-white/75"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="yourname"
                  className="w-full rounded-2xl border border-white/10 bg-[#070a0b] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/25"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white/75"
                >
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
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-white/75"
                >
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
                <span>Create account</span>
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              <p className="text-center text-sm text-white/60">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#9ee7ef] transition hover:text-[#c4f2f6]"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>

          <div className="order-1 border-b border-white/10 p-8 sm:p-10 lg:order-2 lg:border-b-0">
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#31b8c6]/20 bg-[#31b8c6]/10 px-3 py-1 text-xs font-medium text-[#9ee7ef]">
                  Start here
                </div>

                <div className="space-y-4">
                  <h2 className="max-w-md text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Build your account with a focused setup.
                  </h2>
                  <p className="max-w-lg text-sm leading-6 text-white/65 sm:text-base">
                    The Perplexity-inspired layout keeps the page compact,
                    readable, and grounded while the teal accent stays
                    consistent.
                  </p>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  What you need
                </p>
                <p className="text-sm leading-6 text-white/70">
                  A username, email, and password to create your profile and
                  keep the signup flow aligned with login.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
