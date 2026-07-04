export type QuestionBankEntry = {
  grade: string;
  label: string;
  file: string;
  sizeKB: number;
};

/** Natural grade order: LKG, UKG, STD 1–10 */
export const QUESTION_BANK: QuestionBankEntry[] = [
  { grade: 'LKG', label: 'LKG Question Paper', file: 'lkg-qap.pdf', sizeKB: 3470 },
  { grade: 'UKG', label: 'UKG Question Paper', file: 'ukg-qap.pdf', sizeKB: 3735 },
  { grade: '1', label: 'STD 1', file: 'qp-std-1.pdf', sizeKB: 528 },
  { grade: '2', label: 'STD 2', file: 'qp-std-2.pdf', sizeKB: 448 },
  { grade: '3', label: 'STD 3', file: 'qp-std-3.pdf', sizeKB: 345 },
  { grade: '4', label: 'STD 4', file: 'qp-std-4.pdf', sizeKB: 433 },
  { grade: '5', label: 'STD 5', file: 'qp-std-5.pdf', sizeKB: 501 },
  { grade: '6', label: 'STD 6', file: 'std-6-qp.pdf', sizeKB: 286 },
  { grade: '7', label: 'STD 7', file: 'std-7-qp.pdf', sizeKB: 287 },
  { grade: '8', label: 'STD 8', file: 'std-8-qp.pdf', sizeKB: 294 },
  { grade: '9', label: 'STD 9', file: 'std-9-qp.pdf', sizeKB: 304 },
  { grade: '10', label: 'STD 10', file: 'std-10-qp.pdf', sizeKB: 257 },
];

export function formatFileSize(sizeKB: number): string {
  if (sizeKB > 1000) {
    return `${(sizeKB / 1024).toFixed(1)} MB`;
  }
  return `${sizeKB} KB`;
}

export function isPrePrimary(entry: QuestionBankEntry): boolean {
  return entry.grade === 'LKG' || entry.grade === 'UKG';
}
