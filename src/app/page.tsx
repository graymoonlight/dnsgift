'use client';

import { useState } from 'react';
import styles from '@/styles/page.module.scss';
import SearchModule from "@/modules/search";
import ChatModule from '@/modules/chat';

const HomePage = () => {
  return (
    <div className={styles['page-container']}>
      <h1 className={styles['page-header']}>Добро пожаловать в наш сервис поиска подарков</h1>
      <div className={styles['page-section']}>
        <SearchModule />
      </div>
      <div className={styles['page-section']}>
        <ChatModule />
      </div>
    </div>
  );
};

export default HomePage;


