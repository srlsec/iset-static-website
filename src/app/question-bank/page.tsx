import PageHero from '@/components/PageHero';
import QuestionBankGrid from '@/components/QuestionBankGrid';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'iSET Question Bank — Sample Papers & Patterns',
  description:
    'Explore the iSET question bank with sample MCQ patterns, subject breakdowns, and exam format for all grades. Access official previous-year papers via IAME.',
  path: '/question-bank',
});

const formatCards = [
  { tag: 'Format', num: 'MCQ', label: 'Multiple Choice Questions\n4 options, 1 correct answer' },
  { tag: 'For Grade VI+', num: 'OMR', label: 'Optical Mark Recognition\nAnswer sheets for fast evaluation' },
  { tag: 'Duration', num: '60', label: 'Minutes per paper\nTimed competitive format' },
  { tag: 'Offline', num: '3', label: 'Levels of examination\nProgressive difficulty' },
];

const sampleSections = [
  {
    badge: 'LKG & UKG — Foundation Level',
    desc: 'Questions are picture-based and oral/visual for early learners.',
    questions: [
      {
        text: (
          <>
            Which colour is the sky on a clear day?
            <br />
            <em className="text-muted text-[0.85rem]">A) Red &nbsp; B) Blue &nbsp; C) Green &nbsp; D) Yellow</em>
          </>
        ),
        type: 'General Awareness — Colours & Environment',
      },
      {
        text: (
          <>
            Which shape has three sides?
            <br />
            <em className="text-muted text-[0.85rem]">A) Circle &nbsp; B) Square &nbsp; C) Triangle &nbsp; D) Rectangle</em>
          </>
        ),
        type: 'Mathematics — Shapes & Patterns',
      },
      {
        text: (
          <>
            What comes next? 2, 4, 6, ___
            <br />
            <em className="text-muted text-[0.85rem]">A) 7 &nbsp; B) 8 &nbsp; C) 9 &nbsp; D) 10</em>
          </>
        ),
        type: 'Mathematics — Number Patterns',
      },
    ],
  },
  {
    badge: 'Grade I – VII — Primary & Middle',
    desc: 'Questions test reasoning, vocabulary, science knowledge, and current awareness.',
    questions: [
      {
        text: (
          <>
            Choose the word that is most opposite to &quot;EXPAND&quot;:
            <br />
            <em className="text-muted text-[0.85rem]">A) Grow &nbsp; B) Enlarge &nbsp; C) Contract &nbsp; D) Stretch</em>
          </>
        ),
        type: 'English — Vocabulary & Antonyms',
      },
      {
        text: (
          <>
            If a train travels 60 km in 1 hour, how far will it travel in 2.5 hours?
            <br />
            <em className="text-muted text-[0.85rem]">A) 120 km &nbsp; B) 150 km &nbsp; C) 180 km &nbsp; D) 200 km</em>
          </>
        ),
        type: 'Mathematics — Mental Math & Problem Solving',
      },
      {
        text: (
          <>
            Which gas is most abundant in the Earth&apos;s atmosphere?
            <br />
            <em className="text-muted text-[0.85rem]">
              A) Oxygen &nbsp; B) Carbon dioxide &nbsp; C) Nitrogen &nbsp; D) Hydrogen
            </em>
          </>
        ),
        type: 'Science — Environmental Awareness',
      },
      {
        text: (
          <>
            Complete the pattern: AZ, BY, CX, ___
            <br />
            <em className="text-muted text-[0.85rem]">A) DY &nbsp; B) DW &nbsp; C) EW &nbsp; D) DX</em>
          </>
        ),
        type: 'Logical Reasoning — Patterns & Analogy',
      },
    ],
  },
  {
    badge: 'Grade VIII – XII — Senior Secondary',
    desc: 'Advanced reasoning, data interpretation, and analytical questions for senior students.',
    questions: [
      {
        text: (
          <>
            A sum of money doubles itself in 5 years at simple interest. What is the rate of interest per annum?
            <br />
            <em className="text-muted text-[0.85rem]">A) 10% &nbsp; B) 15% &nbsp; C) 20% &nbsp; D) 25%</em>
          </>
        ),
        type: 'Numerical Reasoning — Finance & Calculation',
      },
      {
        text: (
          <>
            Which of the following careers best suits someone with high emotional intelligence and strong interpersonal
            skills?
            <br />
            <em className="text-muted text-[0.85rem]">
              A) Software Engineer &nbsp; B) Counsellor &nbsp; C) Data Analyst &nbsp; D) Accountant
            </em>
          </>
        ),
        type: 'Life Skills — Career Awareness & Decision Making',
      },
      {
        text: (
          <>
            In a group of 5 people, if every person shakes hands with every other person exactly once, how many
            handshakes take place?
            <br />
            <em className="text-muted text-[0.85rem]">A) 5 &nbsp; B) 8 &nbsp; C) 10 &nbsp; D) 12</em>
          </>
        ),
        type: 'Analytical Thinking — Logical Aptitude',
      },
    ],
  },
];

const subjectBreakdown = [
  { name: 'English Language', width: '80%', detail: 'Grammar, vocabulary, comprehension' },
  { name: 'Mathematics', width: '80%', detail: 'Mental math, problem solving' },
  { name: 'Science', width: '80%', detail: 'Environmental, basic science' },
  { name: 'Logical Reasoning', width: '80%', detail: 'Patterns, analogy, sequences' },
  { name: 'General Awareness', width: '80%', detail: 'Current affairs (Avenir), life skills' },
];

export default function QuestionBankPage() {
  return (
    <>
      <PageHero
        title="iSET Question Bank & Exam Pattern"
        description="Sample question patterns, exam format reference, and subject-wise breakdowns."
        breadcrumbLabel="Question Bank"
      />

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
            Exam Format
          </span>
          <h2 className="mb-4 text-navy">Pattern of Questions</h2>
          <p className="mb-8 max-w-none">
            iSET questions are designed to test understanding, not rote memory. The pattern progresses with each level,
            and is calibrated to each grade group.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mb-12">
            {formatCards.map((card) => (
              <div key={card.num} className="bg-white rounded-xl p-6 border border-border text-center shadow-card">
                  <span className="inline-block mb-3 bg-navy/[0.07] text-navy rounded-full px-3 py-0.5 text-[0.75rem] font-semibold">
                    {card.tag}
                  </span>
                  <div className="font-display text-[1.625rem] md:text-[2rem] font-bold text-navy">{card.num}</div>
                  <div className="text-[0.75rem] md:text-[0.82rem] text-muted mt-1 whitespace-pre-line">{card.label}</div>
                </div>
            ))}
          </div>

          <p className="mb-8 text-[0.8125rem] md:text-[0.9rem] text-muted max-w-none leading-relaxed">
            Sample questions shown are for illustration purposes. For actual previous-year papers, see the Previous
            Questions link below.
          </p>

          {sampleSections.map((section) => (
            <div key={section.badge} className="bg-cream rounded-2xl p-6 md:p-10 mb-8">
                <span className="inline-block bg-navy text-white rounded-full px-3.5 py-0.5 text-[0.75rem] font-semibold mb-3.5">
                  {section.badge}
                </span>
                <h3 className="text-navy mb-1.5">Sample Question Types</h3>
                <p className="mb-5 text-[0.8125rem] md:text-[0.9rem] max-w-none leading-relaxed">{section.desc}</p>
                <ul className="list-none flex flex-col gap-3">
                  {section.questions.map((q, i) => (
                    <li
                      key={i}
                      className="bg-white rounded-[10px] px-4 py-3.5 md:px-5 md:py-4 border-l-4 border-sky text-[0.8125rem] md:text-[0.9rem] text-text flex items-start gap-3 md:gap-3.5"
                    >
                      <div className="shrink-0 w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-[0.78rem] font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div>{q.text}</div>
                        <div className="text-[0.72rem] font-semibold text-muted uppercase tracking-[0.08em] mt-1">
                          {q.type}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
          ))}

          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
            Subject Distribution
          </span>
          <h2 className="mb-4 text-navy">Subject-wise Question Breakdown</h2>
          <p className="mb-8 max-w-none">
            Papers draw on all major subject areas with roughly equal weight across subjects (Grade I–VII pattern
            shown).
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
            {subjectBreakdown.map((sb) => (
              <div key={sb.name} className="bg-white rounded-[10px] p-5 border border-border">
                  <h4 className="text-navy text-[0.95rem] mb-2">{sb.name}</h4>
                  <div className="bg-cream rounded h-1.5 mb-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky to-navy rounded"
                      style={{ width: sb.width }}
                    />
                  </div>
                  <div className="text-[0.78rem] text-muted">{sb.detail}</div>
                </div>
            ))}
          </div>

          <QuestionBankGrid />

          <div className="bg-navy rounded-2xl p-10 flex items-center justify-between gap-6 mt-12 flex-wrap">
              <div>
                <h3 className="text-white mb-2">Access Previous Year Question Papers</h3>
                <p className="text-white/60 max-w-none">
                  Download official previous question papers from IAME to understand the exam format and difficulty
                  level. Practicing with real papers is the most effective preparation strategy.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://iameonline.com/iset_previous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky text-white font-semibold text-[0.95rem] transition-all duration-250 hover:bg-[#2d6aa8] hover:-translate-y-px"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Previous Questions
                </a>
                <a
                  href="https://iameonline.com/question_paper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-white border-2 border-white/70 font-semibold text-[0.95rem] transition-all duration-250 hover:bg-white/10"
                >
                  Question Papers →
                </a>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
