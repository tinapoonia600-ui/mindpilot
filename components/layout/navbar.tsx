export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-[#020617] px-8 py-4 text-white">
      <div>
        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-indigo-500" />
      </div>
    </header>
  );
}