import {
  QUESTION_BANK,
  formatFileSize,
  isPrePrimary,
  type QuestionBankEntry,
} from '@/data/questionBank';

function DownloadIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function QuestionBankCard({ entry }: { entry: QuestionBankEntry }) {
  const title = entry.label.replace(/ Question Paper$/, '');

  return (
    <article className="bg-white rounded-xl border border-border p-5 md:p-6 shadow-card flex flex-col gap-4 transition-shadow duration-250 hover:shadow-card-hover">
      <div className="flex-1">
        <h3 className="text-navy text-[1.05rem] md:text-[1.125rem] mb-1">{title}</h3>
        <p className="text-[0.8125rem] text-muted max-w-none">{formatFileSize(entry.sizeKB)}</p>
      </div>
      <a
        href={`/question_bank/${entry.file}`}
        download
        aria-label={`Download ${entry.label} PDF`}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sky text-white font-semibold text-[0.9rem] transition-all duration-250 hover:bg-[#2d6aa8] hover:-translate-y-px w-full"
      >
        <DownloadIcon />
        Download PDF
      </a>
    </article>
  );
}

function QuestionBankGridGroup({
  entries,
  heading,
}: {
  entries: QuestionBankEntry[];
  heading?: string;
}) {
  if (entries.length === 0) return null;

  return (
    <div>
      {heading && (
        <h3 className="text-navy text-[0.95rem] md:text-[1rem] font-semibold mb-4 tracking-wide">{heading}</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {entries.map((entry) => (
          <QuestionBankCard key={entry.file} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default function QuestionBankGrid() {
  const prePrimary = QUESTION_BANK.filter(isPrePrimary);
  const standards = QUESTION_BANK.filter((entry) => !isPrePrimary(entry));

  return (
    <section className="mt-12 pt-12 border-t border-border" aria-labelledby="question-bank-downloads">
      <span className="inline-block text-[0.8125rem] md:text-[0.72rem] font-bold tracking-[0.12em] md:tracking-[0.18em] uppercase text-sky mb-3">
        Downloads
      </span>
      <h2 id="question-bank-downloads" className="mb-3 text-navy">
        Question Bank
      </h2>
      <p className="mb-8 max-w-none text-[0.8125rem] md:text-[0.9rem] leading-relaxed">
        Download previous years&apos; iSET question papers by grade.
      </p>

      <div className="bg-cream rounded-2xl p-6 md:p-8 flex flex-col gap-8">
        <QuestionBankGridGroup entries={prePrimary} heading="Pre-Primary" />
        <QuestionBankGridGroup entries={standards} heading={prePrimary.length > 0 ? 'STD 1 – 10' : undefined} />
      </div>
    </section>
  );
}
