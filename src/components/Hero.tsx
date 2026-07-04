import Image from 'next/image';
import Link from 'next/link';
import HeroCurveDivider from '@/components/HeroCurveDivider';

const REGISTER_URL = 'https://iameonline.com/login/index';

const HERO_POINTS = [
  'Igniting Minds. Inspiring Futures.',
  'Unleash Potential. Achieve Excellence.',
  'Empowering Young Minds for Tomorrow.',
] as const;

function TickIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="mt-0.5 shrink-0 text-[#DDE6F2]"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function StudentImage({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none flex items-end justify-end ${className}`}>
      <div className="relative h-[340px] w-[215px] sm:h-[420px] sm:w-[265px] md:h-[560px] md:w-[420px]">
        <Image
          src="/student-image_2.png"
          alt="Student giving a thumbs up"
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 215px, 420px"
          priority
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden max-[439px]:min-h-[480px]"
      style={{
        background: 'linear-gradient(135deg, #1a1a8c 0%, #0d0d5e 50%, #000033 100%)',
      }}
    >
      <div className="relative z-10 mx-auto flex max-[439px]:min-h-[480px] max-w-[1140px] flex-col justify-center px-6 pt-12 pb-20 min-[440px]:min-h-0 min-[440px]:justify-start min-[440px]:pt-8 min-[440px]:pb-20 md:pt-10 md:pb-24">
        <div className="grid grid-cols-1 items-start gap-3 min-[440px]:grid-cols-[1.15fr_0.85fr] md:grid-cols-[3fr_2fr] md:gap-8">
          <div className="relative z-10 flex min-w-0 flex-col items-start text-left">
            <h1 className="font-display mb-4 max-w-none text-[clamp(1.875rem,10vw,2.375rem)] font-extrabold leading-[1.15] text-white min-[440px]:text-[clamp(1.375rem,5vw,42px)] md:mb-6 md:max-w-[26ch] md:text-[clamp(36px,5.5vw,58px)]">
              <span className="block text-white">Shaping Competence</span>
              <span className="block bg-gradient-to-br from-[#DDE6F2] via-[#B8C6DA] to-[#8499B8] bg-clip-text text-transparent">
                for a challenging World
              </span>
            </h1>

            <ul className="mb-6 hidden list-none space-y-2.5 text-[clamp(1rem,2.2vw,1.125rem)] font-medium leading-relaxed text-white/85 md:mb-6 md:block">
              {HERO_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <TickIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex w-full flex-col gap-3 min-[440px]:w-auto min-[440px]:flex-row min-[440px]:flex-wrap md:gap-4">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[25px] bg-[#2255cc] px-4 py-2.5 text-[0.8125rem] font-semibold text-white transition-all duration-250 hover:bg-[#1a44aa] min-[440px]:w-auto md:px-7 md:py-3 md:text-[0.95rem]"
              >
                Register for iSET
              </a>
              <Link
                href="#about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[25px] border-2 border-white bg-transparent px-4 py-2.5 text-[0.8125rem] font-semibold text-white transition-all duration-250 hover:bg-white/10 min-[440px]:w-auto md:px-7 md:py-3 md:text-[0.95rem]"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="hidden min-h-[340px] min-[440px]:block sm:min-h-[420px] md:min-h-[560px]"
            aria-hidden="true"
          />
        </div>
      </div>

      <StudentImage className="absolute bottom-0 right-4 z-[2] hidden min-[440px]:flex sm:right-6 md:right-[max(1.5rem,calc((100vw-1140px)/2+1.5rem))] md:scale-105" />

      <HeroCurveDivider />
    </section>
  );
}
