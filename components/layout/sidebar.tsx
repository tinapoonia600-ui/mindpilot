import { Home, Calendar, Brain, Settings } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
  },
  {
    title: "Planner",
    icon: Calendar,
  },
  {
    title: "AI Coach",
    icon: Brain,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0F172A] border-r border-white/10 text-white p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          MindPilot
        </h1>

        <p className="text-sm text-slate-400">
          AI Study Planner
        </p>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.title}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/10 transition"
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}