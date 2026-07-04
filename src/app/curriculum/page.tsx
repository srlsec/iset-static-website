import PageHero from '@/components/PageHero';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'iSET Curriculum & Syllabus — LKG to XII',
  description:
    'View the iSET curriculum — syllabus and exam pattern for LKG to Class XII, including Prelims, LTS/UTS, Grand Finale, and subjects by grade.',
  path: '/curriculum',
});

const curriculumCards = [
  {
    headerClass: 'bg-gradient-to-br from-[#0D1B3E] to-[#1a3a6e]',
    badge: 'Foundation',
    title: 'LKG & UKG',
    sub: 'Level 1 Prelims only • Conducted at school',
    subjects: [
      { name: 'Language', items: ['Basic English Vocabulary', 'Listening Comprehension', 'Picture Identification'] },
      { name: 'Mathematics', items: ['Basic Numbers (1–100)', 'Colours & Shapes', 'Patterns & Matching'] },
      { name: 'General Awareness', items: ['Everyday Objects', 'Environmental Awareness', 'Patterns and Analogy'] },
    ],
  },
  {
    headerClass: 'bg-gradient-to-br from-[#1a3a6e] to-sky',
    badge: 'Primary & Middle',
    title: 'Grade I – VII',
    sub: 'All 3 Levels • OMR sheets from Grade VI onward',
    subjects: [
      { name: 'English', items: ['Vocabulary & Grammar', 'Reading Comprehension', 'Communication Skills'] },
      { name: 'Mathematics', items: ['Mental Math', 'Problem Solving', 'Numerical Reasoning'] },
      { name: 'Science', items: ['Science Basics', 'Environmental Awareness', 'Scientific Curiosity'] },
      {
        name: 'General & Life Skills',
        items: ['Current Affairs (Avenir)', 'Logical Reasoning', 'Moral Awareness', 'Life Skills & Manners'],
      },
    ],
  },
  {
    headerClass: 'bg-gradient-to-br from-sky to-[#0e6abf]',
    badge: 'Senior Secondary',
    title: 'Grade VIII – XII',
    sub: 'All 3 Levels • Junior & Senior categories at Grand Finale',
    subjects: [
      { name: 'Communication', items: ['Analytical Thinking', 'Advanced English', 'Verbal Reasoning'] },
      { name: 'Mathematics & Science', items: ['Numerical Reasoning', 'Scientific Reasoning', 'Data Interpretation'] },
      { name: 'Life & Career', items: ['Life Skills', 'Career Awareness', 'Decision Making'] },
      { name: 'General Awareness', items: ['Current Affairs (Avenir)', 'Patterns & Analogy', 'Logical Aptitude'] },
    ],
  },
];

const examPattern = [
  { num: 'Level 1', numColor: 'text-sky', title: 'Prelims', label: 'Nov 07, 2026\nAt Schools • Offline\nAll grades LKG–XII' },
  { num: 'Level 2', numColor: 'text-sky', title: 'LTS & UTS', label: 'Dec 05, 2026\n80%+ scorers eligible\nGrade IV & VII' },
  {
    num: 'Level 3',
    numColor: 'text-navy',
    title: 'Grand Finale',
    label: 'Dec 30, 2026 • Calicut\nJunior: Grade VI–VII\nSenior: Grade VIII–XII',
  },
  { num: 'OMR', numColor: 'text-navy', title: 'Answer Format', label: 'Grade VI–XII use\nOMR sheets\nOffline examination' },
  { num: 'Gold', numColor: 'text-navy', title: 'Gold Coin Award', label: 'Grand Finale winners\n+ Trophies & Certificates' },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="iSET Curriculum & Syllabus"
        description="Age-appropriate syllabus designed to challenge, inspire, and develop every student."
        breadcrumbLabel="Curriculum"
      />

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          {curriculumCards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl overflow-hidden shadow-card mb-8 border border-border">
                <div className={`px-8 py-7 flex items-center gap-4 ${card.headerClass}`}>
                  <div>
                    <div className="bg-white/15 text-white rounded-lg px-3.5 py-1.5 text-[0.78rem] font-bold tracking-[0.08em] uppercase inline-block">
                      {card.badge}
                    </div>
                    <div className="font-display text-xl md:text-2xl text-white mt-2">{card.title}</div>
                    <div className="text-[0.8125rem] md:text-[0.85rem] text-white/60 mt-1">{card.sub}</div>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
                  {card.subjects.map((subject) => (
                    <div key={subject.name} className="subject-block">
                      <h4 className="text-navy text-[0.88rem] uppercase tracking-[0.08em] mb-2.5 pb-1.5 border-b-2 border-sky">
                        {subject.name}
                      </h4>
                      <ul className="list-none">
                        {subject.items.map((item) => (
                          <li key={item} className="text-[0.88rem] text-muted py-1 flex items-baseline gap-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
          ))}

          <div className="bg-cream rounded-2xl p-10 mt-12">
              <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
                Exam Structure
              </span>
              <h2 className="mb-4 text-navy">Pattern of iSET</h2>
              <p className="max-w-none">
                The examination is conducted in selected centers.
              </p>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-7">
                {examPattern.map((ep) => (
                  <div key={ep.title} className="bg-white rounded-[10px] p-6 text-center border border-border">
                    <div className={`font-display text-[1.625rem] md:text-[2.2rem] font-bold ${ep.numColor}`}>{ep.num}</div>
                    <div className="font-semibold text-navy text-[0.9375rem] md:text-base my-1">{ep.title}</div>
                    <div className="text-[0.75rem] md:text-[0.82rem] text-muted mt-1 whitespace-pre-line">{ep.label}</div>
                  </div>
                ))}
              </div>
            </div>

          <div className="bg-navy rounded-2xl p-10 flex items-center justify-between gap-6 mt-12 flex-wrap">
              <div>
                <h3 className="text-white mb-1.5">Download the Official Curriculum PDF</h3>
                <p className="text-white/60 text-[0.9rem] max-w-none">
                  Get the complete syllabus and brochure for iSET directly from IAME.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://iameonline.com/uploads/brochures/112025/23d3f46dca8e935ffba50080f5242b67.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky text-white font-semibold text-[0.95rem] transition-all duration-250 hover:bg-[#2d6aa8] hover:-translate-y-px"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Brochure
                </a>
                <a
                  href="https://iameonline.com/syllabus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-white border-2 border-white/70 font-semibold text-[0.95rem] transition-all duration-250 hover:bg-white/10"
                >
                  View Syllabus →
                </a>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
