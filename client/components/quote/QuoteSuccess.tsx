export default function QuoteSuccess() {
  return (
    <div className="rounded-[2rem] bg-sky-50 p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a73b8]">How it works</p>
      <div className="mt-6 space-y-5">
        {[
          "Share your route, cargo needs, and timing requirements.",
          "Our team reviews your request and recommends the best transport approach.",
          "Receive a clear quote and next-step support from our logistics specialists.",
        ].map((step, index) => (
          <div key={step} className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071d34] text-sm font-semibold text-white">
              {index + 1}
            </div>
            <p className="text-slate-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
