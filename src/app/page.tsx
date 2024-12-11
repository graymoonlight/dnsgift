'use client'

import { useState } from 'react';
import styles from '@/styles/page.module.scss';

interface Gift {
  id: number;
  name: string;
  price: number;
  image: string;
  link: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [giftOptions, setGiftOptions] = useState<Gift[]>([]);
  const [step, setStep] = useState(1); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setStep(3);
  };

  const handlePriceRangeSelect = (range: string) => {
    setSelectedPriceRange(range);
    setStep(4);
  };

  const getGiftSuggestions = () => {
    const sampleGifts = [
      { id: 1, name: 'Подарок 1', price: 300, image: '/gift1.jpg', link: '#' },
      { id: 2, name: 'Подарок 2', price: 700, image: '/gift2.jpg', link: '#' },
      { id: 3, name: 'Подарок 3', price: 450, image: '/gift3.jpg', link: '#' },
      { id: 4, name: 'Подарок 4', price: 999, image: '/gift4.jpg', link: '#' },
      { id: 5, name: 'Подарок 5', price: 150, image: '/gift5.jpg', link: '#' },
    ];

    const filteredGifts = sampleGifts.filter(gift => {
      if (selectedPriceRange === 'low') return gift.price <= 500;
      if (selectedPriceRange === 'medium') return gift.price > 500 && gift.price <= 1000;
      if (selectedPriceRange === 'high') return gift.price > 1000;
      return true;
    });

    setGiftOptions(filteredGifts.slice(0, 5));
  };

  return (
    <main className={styles.main}>
      <div className={styles.searchSection}>
        <h1>Подбор подарков</h1>

        {step === 1 && (
          <div className={styles.inputGroup}>
            <label htmlFor="searchQuery">Введите вашу потребность:</label>
            <input
              id="searchQuery"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Что ищете?"
            />
            <button onClick={() => setStep(2)}>Далее</button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.categoryButtons}>
            <h3>Что вы ищете?</h3>
            <button onClick={() => handleCategorySelect('electronics')}>Электроника</button>
            <button onClick={() => handleCategorySelect('clothing')}>Одежда</button>
            <button onClick={() => handleCategorySelect('toys')}>Игрушки</button>
          </div>
        )}

        {step === 3 && (
          <div className={styles.priceRange}>
            <h3>Выберите ценовой диапазон:</h3>
            <button onClick={() => handlePriceRangeSelect('low')}>До 500 руб.</button>
            <button onClick={() => handlePriceRangeSelect('medium')}>500-1000 руб.</button>
            <button onClick={() => handlePriceRangeSelect('high')}>От 1000 руб.</button>
          </div>
        )}

        {step === 4 && (
          <div className={styles.results}>
            <h2>Результаты подбора:</h2>
            <div className={styles.giftList}>
              {giftOptions.length > 0 ? (
                giftOptions.map(gift => (
                  <div key={gift.id} className={styles.giftCard}>
                    <img src={gift.image} alt={gift.name} />
                    <h3>{gift.name}</h3>
                    <p>Цена: {gift.price} руб.</p>
                    <a href={gift.link}>Перейти к товару</a>
                  </div>
                ))
              ) : (
                <p>Извините, нет подходящих товаров.</p>
              )}
            </div>
            <button onClick={getGiftSuggestions}>Показать больше</button>
          </div>
        )}
      </div>
    </main>
  );
}
