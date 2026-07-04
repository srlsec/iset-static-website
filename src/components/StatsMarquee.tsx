const STATS = [
  { num: '1.1 Million+', label: 'Students Benefited' },
  { num: '20 Years', label: 'Of Excellence' },
  { num: '400+', label: 'Member Schools' },
  { num: 'LKG – XII', label: 'All Grades Eligible' },
] as const;

function StatItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center shrink-0 px-8 md:px-12">
      <div className="flex flex-col items-center text-center">
        <span className="font-display text-[1.5rem] sm:text-[1.75rem] md:text-[2.2rem] font-bold text-navy whitespace-nowrap leading-tight">
          {num}
        </span>
        <span className="text-[0.8125rem] md:text-[0.9rem] text-muted whitespace-nowrap mt-1">
          {label}
        </span>
      </div>
      <span className="text-sky/40 text-xl ml-8 md:ml-12 self-center" aria-hidden="true">
        •
      </span>
    </div>
  );
}

export default function StatsMarquee() {
  const items = [...STATS, ...STATS];

  return (
    <div className="bg-white overflow-hidden py-6 md:py-7">
      <div className="marquee-wrap">
        <div className="marquee-track" aria-label="iSET highlights">
          {items.map((stat, index) => (
            <StatItem key={`${stat.label}-${index}`} num={stat.num} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
