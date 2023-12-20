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

import type { WarLeague } from '@/utils/coc-api/types/leagues/WarLeague';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const BADGE_TABLE: { readonly [key: number]: string | StaticImport | any } = {
  //Unranked
  48000000: '',

  // Bronze League III
  48000001: warBronze3Badge,

  // Bronze League II
  48000002: warBronze2Badge,

  // Bronze League I
  48000003: warBronze1Badge,

  // Silver League III
  48000006: warSilver3Badge,

  // Silver League II
  48000005: warSilver2Badge,

  // Silver League I
  48000004: warSilver1Badge,

  // Gold League III
  48000007: warGold3Badge,

  // Gold League II
  48000008: warGold2Badge,

  // Gold League I
  48000009: warGold1Badge,

  // Crystal League III
  48000010: warCrystal3Badge,

  // Crystal League II
  48000011: warCrystal2Badge,

  // Crystal League I
  48000012: warCrystal1Badge,

  // Master League III
  48000013: warMaster3Badge,

  // Master League II
  48000014: warMaster2Badge,

  // Master League I
  48000015: warMaster1Badge,

  // Champion League III
  48000016: warChampion3Badge,

  // Champion League II
  48000017: warChampion2Badge,

  // Champion League I
  48000018: warChampion1Badge,
};

interface WarLeagueBadgeProps {
  league: WarLeague;
  width?: number;
  height?: number;
}

export default function WarLeagueBadge({ league, width, height }: WarLeagueBadgeProps) {
  return <Image alt="클랜전 리그 뱃지" src={BADGE_TABLE[league.id]} width={width} height={height} />;
}
