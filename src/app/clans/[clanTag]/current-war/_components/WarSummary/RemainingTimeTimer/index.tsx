'use client';

import { useState, useEffect } from 'react';

interface RemainingTimeTimerProps {
  until: string; //yyyyddmmThhmmss 형식
}

export function RemainingTimeTimer({ until }: RemainingTimeTimerProps) {
  const clacTimeRemaining = (date: string) => {
    const y = date.slice(0, 4);
    const m = date.slice(4, 6);
    const d = date.slice(6, 8);
    const hour = date.slice(9, 11);
    const min = date.slice(11, 13);
    const sec = date.slice(13, 15);

    const miliseconds = Date.parse(`${y}-${m}-${d}T${hour}:${min}:${sec}+00:00`);

    const milisecondsRemaining = miliseconds - Date.now();

    if (milisecondsRemaining < 1) return '';

    const hourRemaining = Math.floor(milisecondsRemaining / (1000 * 60 * 60));
    const mimRemaining = Math.floor((milisecondsRemaining / (1000 * 60)) % 60);
    const secRemaining = Math.floor((milisecondsRemaining / 1000) % 60);

    const hourText = hourRemaining > 0 ? `${hourRemaining}시간 ` : '';
    const minText = mimRemaining > 0 ? `${mimRemaining}분 ` : '';
    const secText = `${secRemaining}초 `;

    return `${[hourText, minText, secText].join('')}남음`;
  };

  const [remaining, setRemaining] = useState(clacTimeRemaining(until));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemaining(clacTimeRemaining(until));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return <div>{remaining}</div>;
}
