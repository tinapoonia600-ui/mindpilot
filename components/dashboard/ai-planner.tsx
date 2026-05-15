export default function AIPlanner() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold text-white">
        AI Study Planner
      </h2>

      <p className="mt-2 text-slate-400">
        Tell MindPilot what you need to study.
      </p>

      <textarea
        placeholder="Example: I have Physics exam in 10 days and 5 chapters remaining..."
        className="mt-6 h-40 w-full rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white outline-none"
      />

      <button className="mt-4 rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white hover:bg-indigo-600 transition">
        Generate Plan
      </button>
    </div>
  );
}