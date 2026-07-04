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
                  <strong className="text-[1.15rem] md:text-[1.4rem] font-display font-bold text-white">Gold</strong>
                  <br />
                  <span className="text-[0.75rem] md:text-[0.8rem] text-white/50">Coin Award</span>
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
              <p className="mb-4 max-w-none">For over 20 years, iSET has been a beacon of academic excellence, giving students from LKG to Class XII a structured platform to develop analytical thinking, logical reasoning, and conceptual clarity.</p>
              <p className="mb-7 max-w-none">Over 1.1 million students have benefited, gaining the confidence to excel in academics and competitive examinations alike — including NTSE, Olympiads, and JEE.</p>
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
          <h2 className="mb-4 text-navy">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Knowledge Enhancement', desc: 'Deepens subject understanding beyond school textbooks, encouraging students to explore and master concepts at a deeper level.', icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></> },
              { title: 'Reasoning & Analytical Skills', desc: 'Sharpens critical thinking and logical aptitude — the foundation of success in all competitive and scholastic pursuits.', icon: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></> },
              { title: 'Competitive Preparedness', desc: 'Equips students with the confidence to face exams like NTSE, Olympiads, and JEE — building a habit of excellence early.', icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
              { title: 'Scientific Curiosity', desc: 'Develops an inquisitive mindset that is essential for innovation, lifelong learning, and careers in STEM and beyond.', icon: <><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></> },
              { title: 'Prestigious Opportunities', desc: 'Top institutions and universities recognize the value of competitive excellence — iSET opens doors that standard exams cannot.', icon: <><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></> },
              { title: 'Gold Coin & Top Awards', desc: 'Grand Finale winners receive gold coin awards, trophies, and certificates — real recognition for real achievement.', icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /> },
            ].map((b) => (
              <div key={b.title} className="bg-white border border-border rounded-[10px] p-8 shadow-card transition-all duration-250 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="card-icon">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{b.icon}</svg>
                  </div>
                  <h3>{b.title}</h3>
                  <p className="max-w-none">{b.desc}</p>
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
              Three tailored pathways ensure age-appropriate challenge for every student.
            </p>
            <Link href="/curriculum" className="text-sky font-semibold shrink-0 sm:ml-6">
              View full curriculum →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'LKG & UKG', items: ['Colours & Shapes', 'Basic English & Numbers', 'Listening & Picture Identification', 'General Awareness', 'Patterns and Analogy'] },
              { title: 'Grade I – VII', items: ['Vocabulary, Grammar, Reading', 'Mental Math & Science Basics', 'Environmental & Moral Awareness', 'Logical Reasoning & Patterns', 'Current Affairs (Avenir Magazine)'] },
              { title: 'Grade VIII – XII', items: ['Communication & Analytical Thinking', 'Numerical & Scientific Reasoning', 'Life Skills & Career Awareness', 'Decision Making & Current Affairs', 'Patterns & Analogy'] },
            ].map((band) => (
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
