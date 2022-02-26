import styles from '@/styles/Footer.module.scss';
import newIcon from '@/images/icons/new.svg';
import nebIcon from '@/images/icons/neb.svg';

export const Footer = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>
      Join us and help us create the revolution in the third web.
    </h1>
    <div className={styles.btnFlex}>
      <button
        onClick={() => {
          window.open('https://lu.ma/superteamDAO', '_blank');
        }}
        className={`${styles.btn} ${styles.blackBtn}`}
      >
        Apply for Membership
        <img src={newIcon.src} alt="" />
      </button>
      <button
        onClick={() => {
          window.open('https://discord.gg/6jQkrFayfH', '_blank');
        }}
        className={`${styles.btn} ${styles.whiteBtn}`}
      >
        Join our Discord
        <img src={nebIcon.src} alt="" />
      </button>
    </div>
  </div>
);
