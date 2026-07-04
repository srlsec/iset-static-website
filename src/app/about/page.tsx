import PageHero from '@/components/PageHero';
import { buildPageMetadata } from '@/lib/metadata';

const REGISTER_URL = 'https://iameonline.com/login/index';

export const metadata = buildPageMetadata({
  title: 'About iSET — 20+ Years of Academic Excellence',
  description:
    'Learn about iSET and its mission to empower students LKG to Class XII through structured competitive exams, gold coin awards, and over 20 years of excellence.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About iSET"
        description="Two decades of transforming how students learn, compete, and grow."
        breadcrumbLabel="About"
      />

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="about-img-box relative bg-gradient-to-br from-sky to-navy rounded-2xl px-6 py-9 md:px-9 md:py-12 overflow-hidden">
              <div className="font-display text-[2.75rem] md:text-[4rem] font-black text-white leading-none">1.1 Million+</div>
              <div className="text-white/60 text-[0.8125rem] md:text-[0.9rem] mb-6 md:mb-8">students benefited since inception</div>
              <ul className="list-none">
                {[
                  'Over 20 years of academic excellence',
                  'More than 400 member schools across India',
                  'Open to all grades: LKG to Class XII',
                  '3-level competitive exam structure',
                  'Affiliated with CBSE, ICSE, IGCSE & State boards',
                  'Gold Coin awards at the Grand Finale',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-white/75 text-[0.8125rem] md:text-[0.9rem] py-2 border-b border-white/[0.08] flex items-center gap-2.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
                Background
              </span>
              <h2 className="mb-4 text-navy">What is iSET?</h2>
              <p className="mb-4 max-w-none">
                iSET — International Skill Enhancement Training — is a flagship competitive exam programme. For over 20 years, it has been a beacon of academic
                excellence, providing students with a structured platform to develop analytical thinking, logical
                reasoning, and conceptual clarity.
              </p>
              <p className="mb-4 max-w-none">
                Over 1.1 million students have benefited from this programme, gaining the confidence to excel in
                academics and competitive examinations alike. iSET is not just a test — it is an opportunity to unlock
                the limitless potential of every student.
              </p>
              <p className="max-w-none">
                We have the power to transform learning experiences and inspire students to reach their full
                potential. By integrating iSET into their academic journey, students are equipped with the tools they
                need to thrive in an ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
                The Organisation Behind iSET
              </span>
              <h2 className="mb-4 text-navy">About IAME</h2>
              <p className="mb-4 max-w-none">
                The Ideal Association for Minority Education (IAME) is a confederation of more than 400 English medium
                schools run by minority community managements across India. It is a registered body under the Societies
                Registration Act of 1860.
              </p>
              <p className="mb-4 max-w-none">
                The main motive behind this confederation is to play a pivotal role in social and educational
                transformation through systematic and quality programmes. The singular objective: uplifting communities
                at the grassroots through socio-educational excellence.
              </p>
              <p className="max-w-none">
                IAME has been in the vanguard of school education — empowering schools, raising the bar of quality, and
                helping institutions achieve 21st century standards.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  letter: 'M',
                  bg: 'bg-sky',
                  title: 'Motto',
                  text: '"Leading the community to be always ahead."',
                  textClass: 'text-text text-[1.1rem]',
                },
                {
                  letter: 'V',
                  bg: 'bg-sky',
                  title: 'Vision',
                  text: 'To be the largest consortium of the most sought-after educational institutions in India.',
                  textClass: '',
                },
                {
                  letter: 'M',
                  bg: 'bg-navy',
                  title: 'Mission',
                  text: 'To provide strategic leadership to all member institutions to become centres of excellence through comprehensive educational policies, technology integration, research and development.',
                  textClass: '',
                },
              ].map((card) => (
                <div key={card.title} className="bg-white border border-border rounded-[10px] p-6 shadow-card">
                    <div className="flex gap-3 items-center mb-2">
                      <div
                        className={`w-9 h-9 rounded-lg ${card.bg} flex items-center justify-center text-white font-bold text-[0.85rem]`}
                      >
                        {card.letter}
                      </div>
                      <h4 className="text-navy text-[0.85rem] uppercase tracking-[0.05em]">{card.title}</h4>
                    </div>
                    <p className={`max-w-none ${card.textClass}`}>{card.text}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
            Why iSET Stands Apart
          </span>
          <h2 className="mb-4 text-navy">Differentiators & Benefits</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {[
              {
                title: 'Inclusive for All Grades',
                desc: 'Unlike most competitive exams, iSET caters to every grade from LKG to Class XII — making it truly all-encompassing.',
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
                title: '3-Level Progressive Structure',
                desc: 'Prelims at school, LTS/UTS district level, and a Grand Finale — building competence and confidence step by step.',
                icon: (
                  <>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </>
                ),
              },
              {
                title: 'Prestigious Gold Coin Awards',
                desc: 'Grand Finale winners are awarded gold coin awards, trophies, and certificates — tangible recognition of achievement.',
                icon: (
                  <>
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </>
                ),
              },
              {
                title: '20+ Years of Credibility',
                desc: 'Two decades of consistent, trusted operation with a track record that top schools and families rely upon.',
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
              },
              {
                title: 'Scholarship Opportunities',
                desc: 'Students who score 80%+ in LTS/UTS (Grade IV and VII) qualify for scholarship awards, encouraging high performance.',
                icon: (
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                ),
              },
              {
                title: 'Holistic Curriculum Coverage',
                desc: 'Tests go beyond textbooks — covering reasoning, current affairs, life skills, and analytical thinking for real-world readiness.',
                icon: (
                  <>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </>
                ),
              },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 items-start p-5 bg-cream rounded-[10px]">
                  <div className="shrink-0 w-11 h-11 rounded-[10px] bg-navy flex items-center justify-center text-white">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {b.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-navy mb-1 text-base">{b.title}</h4>
                    <p className="text-[0.8125rem] md:text-[0.88rem] max-w-none">{b.desc}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-navy text-white rounded-2xl p-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 items-center">
            <div>
              <h3 className="text-white mb-3">Who Can Participate?</h3>
              <p className="mb-4 text-white/65 max-w-none">
                iSET is open to all students enrolled in IAME member schools.
              </p>
              <div className="inline-flex items-center gap-2.5 bg-white/[0.08] rounded-[10px] px-6 py-4">
                <svg width="28" height="28" fill="none" stroke="#3B82C4" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div>
                  <div className="font-display text-[1.25rem] md:text-[1.6rem] text-white">LKG to Class XII</div>
                  <div className="text-[0.75rem] md:text-[0.8rem] text-white/50">All students are eligible</div>
                </div>
              </div>
              <p className="mt-5 text-white/55 max-w-none">
                The examination is conducted in Offline Mode. For Grade VI and above, answers are marked on OMR sheets.
              </p>
            </div>
            <div className="hidden md:block w-px self-stretch bg-white/30" aria-hidden="true" />
            <div className="text-center flex flex-col items-center justify-center">
              <h3 className="text-white mb-2">Ready to Participate?</h3>
              <p className="text-white/55 text-[0.88rem] mb-6 max-w-none">
                Register your school through the official IAME portal.
              </p>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full max-w-xs px-7 py-3.5 rounded-full bg-sky text-white font-semibold text-[0.95rem] transition-all duration-250 hover:bg-[#2d6aa8] hover:-translate-y-px"
              >
                Register Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
