'use client';

import styles from './index.module.scss';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import searchIcon from '@/images/icons/search.svg';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [isValidation, setIsValidation] = useState(true);
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.length < 3) {
      setIsValidation(false);
      return;
    }
    router.push(`/clans?name=${input}`);
  };

  return (
    <div className={styles.searchBarWrapper}>
      <form onSubmit={onSubmit} className={styles.searchBar}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="클랜이름 또는 태그로 검색" />
        <button type="submit">
          <Image alt="search-icon" src={searchIcon} />
        </button>
      </form>
      {isValidation || <div className={styles.invalidatedMessage}>최소 3글자 이상 입력해주세요.</div>}
    </div>
  );
}
