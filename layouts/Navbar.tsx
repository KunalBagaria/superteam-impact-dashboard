import Image from 'next/image';
import logo from '@/images/logo.svg';
import styles from '@/styles/Navbar.module.scss';

export const Navbar = () => (
  <nav className={styles.container}>
    <div className={styles.logo}>
      <Image
        src={logo.src}
        alt="SuperteamDAO Logo"
        width="100%"
        height="100%"
      />
    </div>
    <div className={styles.socials}>

    </div>
  </nav>
);
