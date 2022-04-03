import styles from "@/styles/Home.module.scss";
import carret from "@/images/icons/carret.svg";
import { useState } from "react";
import { getPercent, numberFormatter } from "@/utils/numbers";
import { MetricRow } from "types";

export const Category = (props: any) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={styles.category}>
      <div
        onClick={() => setExpanded(!expanded)}
        className={styles.space}
        style={{ cursor: "pointer" }}
      >
        <p className={styles.syneText}>{props.title}</p>
        <img
          className={styles.carret}
          src={carret.src}
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          alt=""
        />
      </div>
      {expanded && <>{props.children}</>}
    </div>
  );
};

interface Props {
  title: string;
  description: string;
  metricData: MetricRow;
}

export const Metric = (metrics: Props) => {
  const lastMonthMetric = metrics.metricData.last_month;
  const thisMonthMetric = metrics.metricData.this_month;
  const totalMetrics = metrics.metricData.total;
  const monetary = metrics.metricData.monetary_metric;
  const percent = Math.ceil(
    getPercent(thisMonthMetric ?? 0, lastMonthMetric ?? 0)
  );

  return (
    <div className={styles.metric}>
      <div
        style={{ alignItems: "flex-start" }}
        className={styles.metricContent}
      >
        <div className={styles.verticalSpaceBetween}>
          <p className={styles.mainText}>{metrics.title}</p>
          <p
            className={styles.blueText}
            style={{ marginTop: "1.6rem", fontSize: "1.8rem" }}
          >
            {metrics.description}
          </p>
        </div>

        <div className={styles.metricNumberFlex}>
          {!totalMetrics && (
            <div className={styles.metricNumbers}>
              <div className={styles.verticalSpaceBetween}>
                <p style={{ fontSize: "2rem" }} className={styles.blueText}>
                  Last Month
                </p>
                <p style={{ marginTop: "1.6rem" }} className={styles.mainText}>
                  {monetary ? "$" : ""}
                  {numberFormatter(lastMonthMetric ?? 0)}
                  <span
                    style={{
                      marginLeft: monetary || !totalMetrics ? "1rem" : "0rem",
                    }}
                    className={styles.greenText}
                  >
                    ---
                  </span>
                </p>
              </div>
            </div>
          )}

          <div className={styles.metricNumbers}>
            <div className={styles.verticalSpaceBetween}>
              <p style={{ fontSize: "2rem" }} className={styles.blueText}>
                {totalMetrics ? "Total" : "This Month"}
              </p>
              <p style={{ marginTop: "1.6rem" }} className={styles.mainText}>
                {monetary ? "$" : ""}
                {totalMetrics
                  ? numberFormatter(totalMetrics)
                  : numberFormatter(thisMonthMetric ?? 0)}
                {!totalMetrics && (
                  <span
                    style={{
                      marginLeft: monetary || !totalMetrics ? "1rem" : "0rem",
                      color: percent > 0 ? "var(--light-green)" : "var(--red)",
                    }}
                    className={styles.greenText}
                  >
                    {percent > 0 ? `+${percent}%` : `${percent}%`}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
