'use client';

import styles from '@/styles/modules/search.module.scss';
import { useState } from 'react';
import { searchProducts } from '@/api/api';

const SearchModule = () => {
  const [query, setQuery] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);

  const extractKeywords = (text: string): string[] => {
    const stopWords = ['и', 'в', 'на', 'с', 'по', 'для', 'о', 'это', 'то'];
    const words = text
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 2 && !stopWords.includes(word));

    return [...new Set(words)];
  };

  const handleSearch = async () => {
    try {
      const extractedKeywords = extractKeywords(query);
      setKeywords(extractedKeywords);

      const data = await searchProducts(extractedKeywords);
      setResults(data);
    } catch (error) {
      console.error('Ошибка поиска:', error);
    }
  };

  return (
    <div className={styles['search-container']}>
      <h1>Поиск подарков</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Опишите, что вы ищете"
        className={styles['search-input']}
      />
      <button onClick={handleSearch} className={styles['search-button']}>
        Найти
      </button>

      {results.length > 0 && (
        <div className={styles.results}>
          <h3>Результаты поиска:</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchModule;
