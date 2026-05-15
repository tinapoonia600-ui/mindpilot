import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

import StatsCard from "@/components/dashboard/stats-card";
import AIPlanner from "@/components/dashboard/ai-planner";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#020617]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="space-y-8 p-8">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Welcome back, Tina 👋
            </h1>

            <p className="mt-2 text-slate-400">
              Let’s organize your study goals today.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StatsCard
              title="Study Hours"
              value="24h"
              description="This week"
            />

            <StatsCard
              title="Tasks Completed"
              value="18"
              description="Great consistency"
            />

            <StatsCard
              title="Upcoming Exams"
              value="3"
              description="Next 14 days"
            />
          </div>

          <AIPlanner />
        </div>
      </div>
    </main>
  );
}