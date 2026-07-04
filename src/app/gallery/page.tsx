import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'iSET Gallery — Events & Award Ceremonies',
  description:
    'Explore iSET event photos from award ceremonies and student celebrations. View programme highlights and browse the full gallery on iameonline.com.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Memories from iSET events, award ceremonies, and student celebrations."
        breadcrumbLabel="Gallery"
      />

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
            Event Highlights
          </span>
          <h2 className="mb-4 text-navy">Gallery</h2>
          <p className="text-[0.9375rem] md:text-[1.05rem] text-muted mb-8 max-w-none leading-relaxed">
            Celebrating student achievement and participation at iSET events across the programme.
          </p>

          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
