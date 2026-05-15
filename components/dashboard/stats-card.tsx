type StatsCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function StatsCard({
  title,
  value,
  description,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}