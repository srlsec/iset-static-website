import Link from 'next/link';
import Hero from '@/components/Hero';
import StatsMarquee from '@/components/StatsMarquee';
import { buildPageMetadata, SITE_DESCRIPTION, SITE_TITLE } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  path: '/',
});

const REGISTER_URL = 'https://iameonline.com/login/index';

const COMPETITIVE_EXAMS = 'NEET, JEE, NTSE, Olympiads, IIS, CLAT, SSC, UPSC, and PSC';

const BENEFIT_COLUMNS = [
  [
    "Improves students' academic skills",
    'Builds confidence in examinations',
    'Develops communication and presentation skills',
    "Identifies students' strengths and areas for improvement",
    'Prepares students for future competitive challenges',
  ],
  [
    'Enhances critical and creative thinking',
    'Encourages concept-based learning',
    'Promotes discipline and regular learning habits',
    'Supports holistic growth and personality development',
    'Motivates students towards excellence and lifelong learning',
  ],
] as const;

const SYLLABUS_BANDS = [
  {
    title: 'LKG & UKG',
    items: [
      'Colours & Shapes',
      'Basic English & Numbers',
      'Listening & Picture Identification',
      'General Awareness',
      'Patterns and Analogy',
      'Colouring and Drawing',
    ],
  },
  {
    title: 'Grade I – VII',
    items: [
      'Vocabulary, Grammar & Comprehension',
      'Mental Math, General Science',
      'Environmental & Moral Awareness, Current Affairs & GK',
      'Logical Reasoning, Patterns & Analogy, Life Skills & Manners',
    ],
  },
  {
    title: 'Grade VIII – X',
    items: [
      'Vocabulary & Grammar',
      'Mental Math, General Science',
      'Environmental & Moral Awareness, Current Affairs & GK',
      'Logical Reasoning, Analytical Thinking, Decision Making',
    ],
  },
  {
    title: 'XI – XII',
    items: [
      'English Language, Numerical Ability, General Science',
      'History, Geography, Civics & Economics',
      'Life Skills, Decision Making & Current Affairs, Pattern & Analogy',
    ],
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <StatsMarquee />

      <section id="about" className="py-14 md:py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="intro-visual relative bg-gradient-to-br from-navy to-sky rounded-2xl p-8 md:p-12 text-white overflow-hidden">
              <blockquote className="font-display text-[1.2rem] md:text-[1.6rem] leading-[1.4] md:leading-[1.35] text-white mb-5 md:mb-6">
                &ldquo;Every child possesses a unique set of <em className="text-white font-bold italic">talents and abilities</em> waiting to be discovered.&rdquo;
              </blockquote>
              <p className="text-[0.8125rem] md:text-[0.85rem] text-white/60 leading-relaxed">
                iSET is designed to unveil hidden gems, providing insights that pave the way for personalized growth and success.
              </p>
              <div className="mt-7 flex gap-4 flex-wrap">
                <div>
                  <strong className="text-[1.15rem] md:text-[1.4rem] font-display font-bold text-white">3</strong>
                  <br />
                  <span className="text-[0.75rem] md:text-[0.8rem] text-white/50">Exam Levels</span>
                </div>
                <div>
                  <strong className="text-[1.15rem] md:text-[1.4rem] font-display font-bold text-white">21+</strong>
                  <br />
                  <span className="text-[0.75rem] md:text-[0.8rem] text-white/50">Years of Service</span>
                </div>
                <div>
                  <strong className="text-[1.15rem] md:text-[1.4rem] font-display font-bold text-white">80%+</strong>
                  <br />
                  <span className="text-[0.75rem] md:text-[0.8rem] text-white/50">Score for LTS/UTS</span>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">About iSET</span>
              <h2 className="mb-4 text-navy">A Platform Built for Every Learner</h2>
              <p className="mb-4 max-w-none">
                With 21 years completed and entering its 22nd year, iSET has been a beacon of academic excellence, giving students from LKG to Class XII a structured platform to develop analytical thinking, logical reasoning, and conceptual clarity.
              </p>
              <p className="mb-7 max-w-none">
                Over 1.1 million students have benefited, gaining the confidence to excel in academics and competitive examinations alike — including {COMPETITIVE_EXAMS}.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-navy text-white font-semibold text-[0.875rem] md:text-[0.95rem] transition-all duration-250 hover:bg-[#1a2f5a]">
                Read the Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">Why iSET?</span>
          <h2 className="mb-8 md:mb-10 text-navy">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {BENEFIT_COLUMNS.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4 md:gap-5">
                {column.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3.5 bg-white rounded-xl px-5 py-4 md:px-6 md:py-[1.125rem] shadow-sm border border-border/70"
                  >
                    <span className="shrink-0 w-2.5 h-2.5 rounded-full bg-sky" aria-hidden="true" />
                    <p className="max-w-none text-[0.9375rem] md:text-base text-text mb-0 leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">Curriculum Overview</span>
          <h2 className="mb-4 text-navy">Syllabus at a Glance</h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10 md:mb-12">
            <p className="mb-0 text-[0.9375rem] md:text-[1.05rem] text-muted">
              Four tailored pathways ensure age-appropriate challenge for every student.
            </p>
            <Link href="/curriculum" className="text-sky font-semibold shrink-0 sm:ml-6">
              View full curriculum →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {SYLLABUS_BANDS.map((band) => (
              <div key={band.title} className="border-l-4 border-sky pl-6 py-6 bg-[#F5F5F5] rounded-r-[10px]">
                <h4 className="text-navy mb-2.5">{band.title}</h4>
                <ul className="list-none">
                  {band.items.map((item) => (
                    <li key={item} className="text-[0.8125rem] md:text-[0.88rem] text-muted py-[3px]">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] text-center py-20 px-6">
        <h2 className="text-navy mb-4">Ready to Register for iSET?</h2>
        <p className="text-muted max-w-[52ch] mx-auto mb-9">
          Join over 1.1 million students who have already discovered their potential through the flagship iSET exam programme.
        </p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-sky text-white px-8 py-4 md:px-10 md:py-[18px] rounded-full text-[0.9375rem] md:text-[1.05rem] font-bold transition-all duration-250 hover:bg-[#2d6aa8] hover:-translate-y-0.5"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Register iSET Exam
        </a>
        <p className="mt-5 text-[0.85rem] text-muted max-w-none mx-auto">
          Registration is handled through the official IAME portal at iameonline.com
        </p>
      </section>
    </>
  );
}
