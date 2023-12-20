import thUnknownImage from '@/images/game-images/structure/town-hall/town-hall-unknown.svg';
import th1Image from '@/images/game-images/structure/town-hall/town-hall-1.webp';
import th2Image from '@/images/game-images/structure/town-hall/town-hall-2.webp';
import th3Image from '@/images/game-images/structure/town-hall/town-hall-3.webp';
import th4Image from '@/images/game-images/structure/town-hall/town-hall-4.webp';
import th5Image from '@/images/game-images/structure/town-hall/town-hall-5.webp';
import th6Image from '@/images/game-images/structure/town-hall/town-hall-6.webp';
import th7Image from '@/images/game-images/structure/town-hall/town-hall-7.webp';
import th8Image from '@/images/game-images/structure/town-hall/town-hall-8.webp';
import th9Image from '@/images/game-images/structure/town-hall/town-hall-9.webp';
import th10Image from '@/images/game-images/structure/town-hall/town-hall-10.webp';
import th11Image from '@/images/game-images/structure/town-hall/town-hall-11.webp';
import th12Image from '@/images/game-images/structure/town-hall/town-hall-12.webp';
import th13Image from '@/images/game-images/structure/town-hall/town-hall-13.webp';
import th14Image from '@/images/game-images/structure/town-hall/town-hall-14.webp';
import th15Image from '@/images/game-images/structure/town-hall/town-hall-15.webp';
import th16Image from '@/images/game-images/structure/town-hall/town-hall-16.webp';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

//Town Hall image table
const TH_IMAGE_TABLE = [
  thUnknownImage,
  th1Image,
  th2Image,
  th3Image,
  th4Image,
  th5Image,
  th6Image,
  th7Image,
  th8Image,
  th9Image,
  th10Image,
  th11Image,
  th12Image,
  th13Image,
  th14Image,
  th15Image,
  th16Image,
] as const;

export const getTownHallImage = (townhallLevel: number): string | StaticImport | any => {
  return TH_IMAGE_TABLE[townhallLevel] ?? TH_IMAGE_TABLE[0];
};
