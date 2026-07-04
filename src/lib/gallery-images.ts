export type GalleryImage = {
  src: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
};

const GALLERY_FOLDER = '/image_gallary';

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: `${GALLERY_FOLDER}/iset-event-01.jpg`, alt: 'iSET event photo 1' },
  { src: `${GALLERY_FOLDER}/iset-event-03.jpg`, alt: 'iSET event photo 2' },
  { src: `${GALLERY_FOLDER}/iset-event-10.jpg`, alt: 'iSET event photo 3' },
  { src: `${GALLERY_FOLDER}/iset-event-11.jpg`, alt: 'iSET event photo 4' },
  { src: `${GALLERY_FOLDER}/iset-event-12.jpg`, alt: 'iSET event photo 5' },
  { src: `${GALLERY_FOLDER}/iset-event-23.jpg`, alt: 'iSET event photo 6' },
];
