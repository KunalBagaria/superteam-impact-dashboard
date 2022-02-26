import styles from '@/styles/Footer.module.scss';
import newIcon from '@/images/icons/new.svg';
import nebIcon from '@/images/icons/neb.svg';

export const Footer = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit in posuere ligula etiam vestibulum tincidunt nisi.
    </h1>
    <div className={styles.btnFlex}>
      <button className={`${styles.btn} ${styles.blackBtn}`}>
        Check this CTA
        <img src={newIcon.src} alt="" />
      </button>
      <button className={`${styles.btn} ${styles.whiteBtn}`}>
        Check this CTA
        <img src={nebIcon.src} alt="" />
      </button>
    </div>
  </div>
);
