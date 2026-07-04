import type { Metadata } from 'next';

export const SITE_URL = 'https://isetonline.in';
export const SITE_TITLE = 'iSET — Shaping Competence for a Challenging World';
export const SITE_DESCRIPTION =
  'iSET is a flagship competitive exam for students LKG to Class XII — building reasoning, analytical skills, and exam confidence through a three-level programme.';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | '/';
};

export function buildPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
  };
}
