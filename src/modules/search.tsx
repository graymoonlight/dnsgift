'use client';

import styles from '@/styles/modules/search.module.scss';
import { useState } from 'react';
import { searchProducts } from '@/api/api';

const SearchModule = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      const data = await searchProducts(query);
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
            {results.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Ссылка на подарок {item.categoryId}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchModule;

