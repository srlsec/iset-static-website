import Link from 'next/link';
import Image from 'next/image';

const REGISTER_URL = 'https://iameonline.com/login/index';

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/iameindia',
    label: 'Facebook',
    icon: '/social/facebook.png',
    boxClassName: 'h-8 w-8',
    imageClassName: 'object-contain scale-[1.45]',
  },
  {
    href: 'https://www.instagram.com/iameindia/',
    label: 'Instagram',
    icon: '/social/instagram.png',
    boxClassName: 'h-8 w-8',
    imageClassName: 'object-contain',
  },
  {
    href: 'https://www.youtube.com/channel/UCwECqBCF91hTK-t-U4ajWYQ',
    label: 'YouTube',
    icon: '/social/youtube.png',
    boxClassName: 'h-8 w-[46px]',
    imageClassName: 'object-contain',
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-14">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          <div>
            <Image
              src="/iset-logo-white.png"
              alt="iSET — International Skill Enhancement Training"
              width={160}
              height={64}
              className="shrink-0"
              style={{ height: '52px', width: 'auto' }}
            />
            <p className="text-[0.8125rem] md:text-[0.88rem] mt-3 max-w-[28ch] text-white/60 leading-relaxed">
              International Skill Enhancement Training — shaping competence for a challenging world.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {SOCIAL_LINKS.map(({ href, label, icon, boxClassName, imageClassName }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex h-8 items-center transition-opacity duration-250 hover:opacity-80"
                >
                  <span className={`relative block shrink-0 ${boxClassName}`}>
                    <Image src={icon} alt={label} fill className={imageClassName} sizes="48px" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.15em] uppercase text-sky mb-4">
              Quick Links
            </p>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About iSET' },
                { href: '/curriculum', label: 'Curriculum' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/history', label: 'History' },
                { href: '/question-bank', label: 'Question Bank' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link text-[0.8125rem] md:text-[0.88rem] text-white/65 transition-colors duration-250 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.15em] uppercase text-sky mb-4">
              iSET Exam
            </p>
            <ul className="list-none flex flex-col gap-2.5">
              {[
                { href: 'https://iameonline.com/iset_previous', label: 'Previous Questions' },
                { href: 'https://iameonline.com/syllabus', label: 'Syllabus' },
                { href: 'https://iameonline.com/uploads/brochures/112025/23d3f46dca8e935ffba50080f5242b67.pdf', label: 'Download Brochure' },
                { href: 'https://iameonline.com/notifications', label: 'Notifications' },
                { href: REGISTER_URL, label: 'Register Now' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-[0.8125rem] md:text-[0.88rem] text-white/65 transition-colors duration-250 hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.15em] uppercase text-sky mb-4">
              Contact
            </p>
            <div className="flex gap-2.5 items-start text-[0.8125rem] md:text-[0.88rem] text-white/65 mb-2.5">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>4th Floor, Markaz Complex, Mavoor Road, Calicut, Kerala, India-673004</span>
            </div>
            <div className="flex gap-2.5 items-start text-[0.8125rem] md:text-[0.88rem] text-white/65 mb-2.5">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 8086 511 165</span>
            </div>
            <div className="flex gap-2.5 items-start text-[0.8125rem] md:text-[0.88rem] text-white/65 mb-2.5">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>mail@iameonline.com</span>
            </div>
            <div className="mt-2 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0232835344486!2d75.78530727486176!3d11.259697350094159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65948f227aa45%3A0xe070500382808ff4!2sIdeal%20Association%20For%20Minority%20Education!5e0!3m2!1sen!2sin!4v1686496858568!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="iSET Location"
                className="w-full h-40 border-none"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.8rem] text-white/45">
          <span>© 2026 iSET — International Skill Enhancement Training. All rights reserved.</span>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="text-white/45">
            Register for iSET ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
