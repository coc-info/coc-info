'use client';

import styles from './index.module.scss';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import searchIcon from '@/images/icons/search.svg';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [isValidation, setIsValidation] = useState(true);
  const [isOpenedMoreMessage, setIsOpenedMoreMessage] = useState(false);
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsOpenedMoreMessage(false);

    if (input.length < 3) {
      setIsValidation(false);
      return;
    }

    if (input[0] === '#') {
      router.push(`/clans/${encodeURIComponent(input)}/info`);
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
      {isValidation || (
        <div className={styles.invalidatedMessage}>
          <div>
            최소 3글자 이상 입력해주세요.
            <span
              onClick={() => {
                setIsOpenedMoreMessage(true);
              }}
            >
              클랜이름이 2글자 이하면 어떻게 하나요?
            </span>
          </div>
          {isOpenedMoreMessage && (
            <div>
              클래시 오브 클랜의 API는 3글자 이상의 검색만 지원하고 있습니다. 2글자 이하인 클랜은 태그로 검색해주세요.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
