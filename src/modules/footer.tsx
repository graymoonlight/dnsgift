import styles from '@/styles/modules/footer.module.scss';
import { FaTelegramPlane, FaVk } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copy}>© {new Date().getFullYear()} DNSGift. Все права защищены.
        </div>
        <div className={styles.links}>
          <a href="/privacy">Политика конфиденциальности</a>
          <a href="/terms">Пользовательское соглашение</a>
        </div>
        <div className={styles.socials}>
          <a href="https://t.me/" target="_blank">
            <FaTelegramPlane className={styles.icon} />
          </a>
          <a href="https://vk.com/" target="_blank">
            <FaVk className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;