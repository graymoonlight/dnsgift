'use client';

import { useState } from 'react';
import styles from '@/styles/modules/chat.module.scss';

const ChatModule = () => {
  const steps = [
    {
      question: 'Для кого подарок?',
      answers: ['Для студента', 'Для друга', 'Для ребенка'],
    },
    {
      question: 'Пол человека?',
      answers: ['Мужской', 'Женский'],
    },
    {
      question: 'Категория товаров',
      answers: ['Гаджеты', 'Бытовая техника', 'Игры и развлечения', 'Аксессуары'],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [chatHistory, setChatHistory] = useState<{ question: string; answer: string }[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (answer: string) => {
    const currentQuestion = steps[currentStep].question;

    setChatHistory((prev) => [...prev, { question: currentQuestion, answer }]);

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <div className={styles['chat-container']}>
      <div className={styles['chat-window']}>
        {chatHistory.map((entry, index) => (
          <div key={index} className={styles['chat-bubble']}>
            <div className={styles['user-question']}>{entry.question}</div>
            <div className={styles['user-answer']}>{entry.answer}</div>
          </div>
        ))}
        {!isComplete && currentStep < steps.length && (
          <div className={styles['chat-bubble']}>
            <div className={styles['bot-question']}>{steps[currentStep].question}</div>
            <div className={styles['bot-answers']}>
              {steps[currentStep].answers.map((answer, index) => (
                <button
                  key={index}
                  className={styles['answer-button']}
                  onClick={() => handleAnswer(answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        )}

        {isComplete && (
          <div className={styles['chat-bubble']}>
            <div className={styles['bot-question']}>
              Спасибо за ответы! Мы подберем для вас лучшие подарки. Вы можете обновить страницу, чтобы начать заново.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatModule;
