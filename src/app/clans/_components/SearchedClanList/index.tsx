import styles from './index.module.scss';

import ClanListItem from './ClanListItem.tsx';
import { SearchedClanList } from '@/utils/coc-api/types/list/SearchedClanList';

interface SearchedClanListProps {
  searchedClanList: SearchedClanList;
}

export default async function SearchedClanList({ searchedClanList }: SearchedClanListProps) {
  return (
    <ul className={styles.searchedClanList}>
      {searchedClanList.items.map((clan) => {
        return <ClanListItem key={clan.tag} searchedClan={clan} />;
      })}
    </ul>
  );
}
