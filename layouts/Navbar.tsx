import Image from 'next/image';
import logo from '@/images/logo.svg';
import styles from '@/styles/Navbar.module.scss';
import discordIcon from '@/images/icons/discord.svg';
import twitterIcon from '@/images/icons/twitter.svg';
import websiteIcon from '@/images/icons/website.svg';

const Socials = [
  {
    icon: discordIcon,
    link: 'https://discord.gg/6jQkrFayfH',
  }, {
    icon: twitterIcon,
    link: 'https://twitter.com/SuperteamDAO',
  }, {
    icon: websiteIcon,
    link: 'https://superteam.fun',
  }
]

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
      {Socials.map((social, index) => (
        <div
          key={index}
          className={styles.social}
        >
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <Image
              src={social.icon}
              alt={social.icon.src}
            />
          </a>
        </div>
      ))}
    </div>
  </nav>
);
