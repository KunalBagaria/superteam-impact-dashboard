import styles from "@/styles/Footer.module.scss";
import newIcon from "@/images/icons/new.svg";
import nebIcon from "@/images/icons/neb.svg";

export const Footer = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>
      We are a digital co-op of operators, devs & angels working on promising
      solana projects{" "}
    </h1>
    <div className={styles.btnFlex}>
      <button
        onClick={() => {
          window.open("https://superteam.fun/find-work-in-web3", "_blank");
        }}
        className={`${styles.btn} ${styles.blackBtn}`}
      >
        Come Join us
        <img src={newIcon.src} alt="" />
      </button>
      <button
        onClick={() => {
          window.open("https://discord.gg/6jQkrFayfH", "_blank");
        }}
        className={`${styles.btn} ${styles.whiteBtn}`}
      >
        Join our Discord
        <img src={nebIcon.src} alt="" />
      </button>
    </div>
  </div>
);
