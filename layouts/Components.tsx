import styles from '@/styles/Home.module.scss';
import carret from '@/images/icons/carret.svg'
import { useState } from 'react';

export const Category = (props: any) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={styles.category}>
      <div
        onClick={() => setExpanded(!expanded)}
        className={styles.space}
        style={{ cursor: 'pointer' }}
      >
        <p className={styles.syneText}>{props.title}</p>
        <img
          className={styles.carret}
          src={carret.src}
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          alt=""
        />
      </div>
      {expanded && (
        <>{props.children}</>
      )}
    </div>
  );
};

interface Metric {
  title: string,
  value: string
}

interface Props {
  title: string,
  description: string,
  // metrics: Metric[]
}

export const Metric = (metrics: Props) => {
  return (
    <div className={styles.metric}>
      <div className={styles.verticalSpaceBetween}>
        <p className={styles.mainText}>{metrics.title}</p>
        <p
          className={styles.blueText}
          style={{ marginTop: '1.6rem', fontSize: '1.8rem' }}
        >
          {metrics.description}
        </p>
      </div>
    </div>
  )
};
