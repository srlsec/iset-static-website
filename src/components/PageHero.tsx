import Link from 'next/link';

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbLabel: string;
};

export default function PageHero({
  title,
  description,
  breadcrumbLabel,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-14 pb-12 md:py-20 md:pb-[60px] text-center">
      <div className="relative z-10 max-w-[1140px] mx-auto px-6">
        <div className="flex justify-center gap-2 text-[0.8125rem] md:text-[0.82rem] text-white/40 mb-4 md:mb-5">
          <Link href="/" className="text-sky">
            Home
          </Link>{' '}
          › {breadcrumbLabel}
        </div>
        <h1 className="text-white mb-2 md:mb-3 px-1">{title}</h1>
        <p className="text-white/65 text-[0.9375rem] md:text-[1.1rem] leading-relaxed mx-auto max-w-none px-1">{description}</p>
      </div>
    </section>
  );
}
