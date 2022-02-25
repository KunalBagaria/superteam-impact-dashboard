import { useEffect, useState } from "react";
import { Category, Metric } from "./Components";

export const Learn = ({
  setLoading
}: {
  setLoading: (loading: boolean) => void
}) => {
  return (
    <div>
      <Category title="Twitter">
        <Metric
          title="Total Followers"
          description="The total number of followers across Twitter."
        />
        <Metric
          title="Impressions"
          description="The number of impressions across Twitter."
        />
      </Category>
      <Category title="YouTube">
        <Metric
          title="Total Subscribers"
          description="The total number of subscribers across YouTube."
        />
        <Metric
          title="Impressions"
          description="The number of impressions across YouTube."
        />
      </Category>
    </div>
  )
};
