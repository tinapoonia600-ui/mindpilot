import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#020617]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8 text-white">
          <h1 className="text-4xl font-bold">
            Welcome to MindPilot 🧠
          </h1>

          <p className="mt-4 text-slate-400">
            Your AI autonomous study planner.
          </p>
        </div>
      </div>
    </main>
  );
}