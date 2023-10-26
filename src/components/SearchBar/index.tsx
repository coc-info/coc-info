'use client';

import styles from './index.module.scss';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import searchIcon from '@/images/icons/search.svg';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/clans?name=${input}`);
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchBar}>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="클랜이름 또는 태그로 검색" />
      <button type="submit">
        <Image alt="search-icon" src={searchIcon} />
      </button>
    </form>
  );
}
