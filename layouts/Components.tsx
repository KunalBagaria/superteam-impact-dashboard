import styles from '@/styles/Home.module.scss';
import carret from '@/images/icons/carret.svg'
import { useState } from 'react';
import { getPercent, numberFormatter } from '@/components/numbers';

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

interface Props {
  title: string,
  description: string,
  fields: any,
}

export const Metric = (metrics: Props) => {
  const lastMonthMetric = metrics.fields['Last Month'];
  const thisMonthMetric = metrics.fields['This Month'];
  const totalMetrics = metrics.fields['Total'];
  const monetary = metrics.fields['Monetary Metric'];
  const percent = Math.ceil(getPercent(thisMonthMetric, lastMonthMetric));

  return (
    <div className={styles.metric}>

      <div
      style={{ alignItems: 'flex-start' }}
        className={styles.metricContent}
      >
        <div className={styles.verticalSpaceBetween}>
          <p className={styles.mainText}>{metrics.title}</p>
          <p
            className={styles.blueText}
            style={{ marginTop: '1.6rem', fontSize: '1.8rem' }}
          >
            {metrics.description}
          </p>
        </div>

        <div className={styles.metricNumberFlex}>

          {!totalMetrics && (
            <div className={styles.metricNumbers}>
              <div className={styles.verticalSpaceBetween}>
                <p
                  style={{ fontSize: '2rem' }}
                  className={styles.blueText}>
                    Last Month
                </p>
                <p
                  style={{ marginTop: '1.6rem' }}
                  className={styles.mainText}>
                  {monetary ? '$' : ''}
                  {numberFormatter(lastMonthMetric)}
                  <span
                    style={{ marginLeft: (monetary || !totalMetrics) ? '1rem' : '0rem' }}
                    className={styles.greenText}>
                    ---
                  </span>
                </p>
              </div>
            </div>
          )}

          <div className={styles.metricNumbers}>
            <div className={styles.verticalSpaceBetween}>
              <p
                style={{ fontSize: '2rem' }}
                className={styles.blueText}>
                  {totalMetrics ? 'Total' : 'This Month'}
              </p>
              <p
                style={{ marginTop: '1.6rem' }}
                className={styles.mainText}>
                {monetary ? '$' : ''}
                {totalMetrics ? numberFormatter(totalMetrics) : numberFormatter(thisMonthMetric)}
                {!totalMetrics && (
                  <span
                    style={{
                      marginLeft: (monetary || !totalMetrics) ? '1rem' : '0rem',
                      color: percent > 0 ? 'var(--light-green)' : 'var(--red)',
                    }}
                    className={styles.greenText}>
                    {percent > 0 ? `+${percent}%` : `${percent}%`}
                  </span>
                )}
              </p>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
};
