import PageHero from '@/components/PageHero';
import { buildPageMetadata } from '@/lib/metadata';

const REGISTER_URL = 'https://iameonline.com/login/index';

export const metadata = buildPageMetadata({
  title: 'The History of iSET — Two Decades of Impact',
  description:
    'Explore the full history of iSET — founding milestones, multi-state growth, Grand Finale highlights, and over 20 years of trusted academic excellence.',
  path: '/history',
});

const achievements = [
  {
    num: '20+',
    label: 'Years Conducted',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
  {
    num: '1.1 Million+',
    label: 'Students Benefited',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    num: '400+',
    label: 'Member Schools',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    num: 'Multi-State',
    label: 'Kerala, Karnataka, Tamil Nadu & beyond',
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    num: 'Gold',
    label: 'Gold Coin — Top Prize at Grand Finale',
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    ),
  },
  {
    num: '3 Levels',
    label: 'Prelims → LTS/UTS → Grand Finale',
    icon: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
  },
];

const timelineItems = [
  {
    year: '2005',
    side: 'left',
    tag: 'Foundation',
    title: 'iSET is Founded',
    desc: 'The Ideal Association for Minority Education launches the International Skill Enhancement Training — a bold initiative to create a structured competitive platform for minority community schools across Kerala.',
  },
  {
    year: 'Early Years',
    side: 'right',
    tag: 'Growth',
    title: 'Expansion Across Kerala',
    desc: 'iSET grows rapidly, attracting participation from schools across all major Kerala regions including Kozhikode, Malappuram, Kannur, Thrissur, Palakkad, and Ernakulam. Regional senate bodies are established to manage the exam at scale.',
  },
  {
    year: 'Expansion',
    side: 'left',
    tag: 'Milestone',
    title: 'Multi-State Reach',
    desc: 'iSET crosses state borders, welcoming schools from Karnataka (Kodagu, Udupi, Mangalore, Mysore) and Tamil Nadu (including Kanyakumari and Nilgiris regions) — transforming into a truly national programme.',
  },
  {
    year: '2024',
    side: 'right',
    tag: 'Grand Finale',
    title: 'Grand Finale at Majestic Auditorium',
    desc: 'iSET 2024 Grand Finale held at Majestic Auditorium, Kozhikode on 5th February 2025 — bringing together the brightest students from across the country for the most prestigious recognition event in the IAME academic calendar.',
  },
  {
    year: 'Legacy',
    side: 'left',
    tag: 'Recognition',
    title: '1.1 Million+ Students Milestone',
    desc: 'iSET surpasses 1.1 million cumulative student participants — a landmark that cements its status as one of the most impactful school exam programmes in India for minority community education.',
  },
  {
    year: '2026',
    side: 'right',
    tag: 'Now Open',
    title: 'iSET — Register Today',
    desc: 'The latest edition of iSET continues the 20-year legacy. Prelims on November 7, 2026 → LTS & UTS on December 5, 2026 → Grand Finale (TalentX Summit) on December 30, 2026, Calicut. Open to all students LKG–XII in IAME member schools.',
    highlight: true,
    showRegister: true,
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="History of iSET"
        description="Two decades of building academic excellence across India."
        breadcrumbLabel="History"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
            iSET by the Numbers
          </span>
          <h2 className="mb-4 text-navy">Key Milestones</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {achievements.map((a) => (
              <div key={a.label} className="bg-white rounded-xl p-7 border-t-4 border-sky shadow-card text-center">
                <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-navy to-sky flex items-center justify-center mx-auto mb-4 text-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {a.icon}
                  </svg>
                </div>
                <div className="font-display text-[1.875rem] md:text-[2.4rem] font-bold text-navy leading-none">{a.num}</div>
                <div className="text-muted text-[0.8125rem] md:text-[0.88rem] mt-1">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
            A Journey Through Time
          </span>
          <h2 className="mb-4 text-navy">iSET Timeline</h2>
          <p className="mb-14 max-w-none">
            From its founding to today, iSET has grown into one of India&apos;s most recognised school-level
            competitive exam programmes.
          </p>

          <div className="timeline relative">
            {timelineItems.map((item) => (
              <div
                key={item.title}
                className={`flex gap-12 mb-16 items-start max-md:flex-col max-md:pl-16 max-md:relative ${
                  item.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 max-md:w-full">
                  {item.side === 'left' && (
                    <div
                      className={`bg-white rounded-xl px-8 py-7 shadow-card border border-border ${
                        item.highlight ? 'border-l-4 border-l-sky' : ''
                      }`}
                    >
                      <span className="inline-block bg-sky/10 text-sky rounded-full px-3 py-0.5 text-[0.75rem] font-semibold mb-2.5">
                        {item.tag}
                      </span>
                      <h3 className="text-navy mb-2">{item.title}</h3>
                      <p className="text-[0.8125rem] md:text-[0.9rem] leading-relaxed max-w-none">{item.desc}</p>
                      {item.showRegister && (
                        <a
                          href={REGISTER_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky text-white font-semibold text-[0.95rem] transition-all duration-250 hover:bg-[#2d6aa8] hover:-translate-y-px"
                        >
                          Register Now →
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div className="shrink-0 w-14 flex flex-col items-center max-md:absolute max-md:left-0 max-md:top-0">
                  <div
                    className={`w-5 h-5 rounded-full bg-sky border-[3px] border-white z-[1] mt-1.5 ${
                      item.highlight ? 'shadow-[0_0_0_4px_rgba(59,130,196,.3)]' : 'shadow-[0_0_0_3px_#3B82C4]'
                    }`}
                  />
                  <div className="font-display text-[0.85rem] font-bold text-sky mt-2 whitespace-nowrap">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 max-md:w-full">
                  {item.side === 'right' && (
                    <div
                      className={`bg-white rounded-xl px-8 py-7 shadow-card border border-border ${
                        item.highlight ? 'border-l-4 border-l-sky' : ''
                      }`}
                    >
                      <span className="inline-block bg-sky/10 text-sky rounded-full px-3 py-0.5 text-[0.75rem] font-semibold mb-2.5">
                        {item.tag}
                      </span>
                      <h3 className="text-navy mb-2">{item.title}</h3>
                      <p className="text-[0.8125rem] md:text-[0.9rem] leading-relaxed max-w-none">{item.desc}</p>
                      {item.showRegister && (
                        <a
                          href={REGISTER_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky text-white font-semibold text-[0.95rem] transition-all duration-250 hover:bg-[#2d6aa8] hover:-translate-y-px"
                        >
                          Register Now →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
