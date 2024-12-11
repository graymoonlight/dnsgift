import styles from '@/styles/modules/header.module.scss';

const Header: React.FC = () => {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>DNSGift</div>
          <div className={styles.tagline}>Подбираем подарки для вас!</div>
        </div>
      </header>
    );
  };
  
  export default Header;