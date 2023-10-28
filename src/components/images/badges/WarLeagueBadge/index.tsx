import Image from 'next/image';

import warBronze1Badge from '@/images/game-images/icons/war-league-badges/war-bronze-1.webp';
import warBronze2Badge from '@/images/game-images/icons/war-league-badges/war-bronze-2.webp';
import warBronze3Badge from '@/images/game-images/icons/war-league-badges/war-bronze-3.webp';

import warSilver1Badge from '@/images/game-images/icons/war-league-badges/war-silver-1.webp';
import warSilver2Badge from '@/images/game-images/icons/war-league-badges/war-silver-2.webp';
import warSilver3Badge from '@/images/game-images/icons/war-league-badges/war-silver-3.webp';

import warGold1Badge from '@/images/game-images/icons/war-league-badges/war-gold-1.webp';
import warGold2Badge from '@/images/game-images/icons/war-league-badges/war-gold-2.webp';
import warGold3Badge from '@/images/game-images/icons/war-league-badges/war-gold-3.webp';

import warCrystal1Badge from '@/images/game-images/icons/war-league-badges/war-crystal-1.webp';
import warCrystal2Badge from '@/images/game-images/icons/war-league-badges/war-crystal-2.webp';
import warCrystal3Badge from '@/images/game-images/icons/war-league-badges/war-crystal-3.webp';

import warMaster1Badge from '@/images/game-images/icons/war-league-badges/war-master-1.webp';
import warMaster2Badge from '@/images/game-images/icons/war-league-badges/war-master-2.webp';
import warMaster3Badge from '@/images/game-images/icons/war-league-badges/war-master-3.webp';

import warChampion1Badge from '@/images/game-images/icons/war-league-badges/war-champion-1.webp';
import warChampion2Badge from '@/images/game-images/icons/war-league-badges/war-champion-2.webp';
import warChampion3Badge from '@/images/game-images/icons/war-league-badges/war-champion-3.webp';

import type { WarLeague } from '@/types/warLeague';

interface WarLeagueBadgeProps {
  league: WarLeague;
  width?: number;
  height?: number;
}

export default function WarLeagueBadge({ league, width, height }: WarLeagueBadgeProps) {
  const BADGE_TABLE = {
    unranked: '',
    bronze1: warBronze1Badge,
    bronze2: warBronze2Badge,
    bronze3: warBronze3Badge,
    silver1: warSilver1Badge,
    silver2: warSilver2Badge,
    silver3: warSilver3Badge,
    gold1: warGold1Badge,
    gold2: warGold2Badge,
    gold3: warGold3Badge,
    crystal1: warCrystal1Badge,
    crystal2: warCrystal2Badge,
    crystal3: warCrystal3Badge,
    master1: warMaster1Badge,
    master2: warMaster2Badge,
    master3: warMaster3Badge,
    champion1: warChampion1Badge,
    champion2: warChampion2Badge,
    champion3: warChampion3Badge,
  } as const;

  return <Image alt="클랜전 리그 뱃지" src={BADGE_TABLE[league]} width={width} height={height} />;
}
