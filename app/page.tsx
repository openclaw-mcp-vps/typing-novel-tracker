export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tool
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Master Typing Through{" "}
          <span className="text-[#58a6ff]">Classic Literature</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Practice typing with timeless novels. Track your WPM, accuracy trends, and reading comprehension — all in one gamified dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200"
        >
          Start Typing — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access to all novels.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-2xl p-8 bg-[#161b22]">
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-sm text-[#8b949e] mt-1">Classic Novels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">2x</div>
            <div className="text-sm text-[#8b949e] mt-1">Avg WPM Gain</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-sm text-[#8b949e] mt-1">Progress Tracking</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/50 rounded-2xl p-8 bg-[#161b22] text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited access to 50+ classic novels",
              "Real-time WPM & accuracy tracking",
              "Comprehension quizzes after each chapter",
              "Progress dashboard & streak system",
              "Export your stats as PDF"
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which novels are included?",
              a: "We include 50+ public domain classics — Pride and Prejudice, Moby Dick, Great Expectations, and more. New titles are added monthly."
            },
            {
              q: "How does the WPM tracking work?",
              a: "As you type each passage, we measure keystrokes in real time, calculate your words per minute, and log accuracy. Your dashboard shows trends over time."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your account settings. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} TypingNovel. All rights reserved.
      </footer>
    </main>
  );
}
