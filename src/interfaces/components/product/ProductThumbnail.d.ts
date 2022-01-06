import {CSSProperties} from 'react';

declare global {
  interface ProductThumbnailProps {
    title: string;
    category: string;
    image?: string;
    price: number;
    style?: Partial<CSSProperties>;
  }
}
