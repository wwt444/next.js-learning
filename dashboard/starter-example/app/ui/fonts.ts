import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });


 export const myFont = localFont({
    src: '../../public/font/DancingScript-Bold.ttf',
  })