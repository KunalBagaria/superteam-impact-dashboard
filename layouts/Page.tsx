import { useEffect, useState } from "react";
import { MetricRow } from "types";
import { Category, Metric } from "./Components";

export const Page = ({
  setLoading,
  data,
  name,
}: {
  setLoading: (loading: boolean) => void;
  data: MetricRow[];
  name: string;
}) => {
  const [parentData, setParentData] = useState<MetricRow[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.parent_category.includes(name)
    );
    const dupCategories = filteredData.map((item) => item.child_category);
    const uniqueCategories = [...new Set(dupCategories)];
    setParentData(filteredData);
    setCategories(uniqueCategories);
  }, [data, name]);

  return (
    <div>
      {name === 'Earn' && (
        <Category title={'Community GDP'} setLoading={setLoading}>
          {parentData && parentData.map((metric) => (
            <>
              {
              metric.child_category === 'Community GDP' &&
              metric.name === 'Community GDP' && (
                <Metric
                  key={metric.id}
                  title={metric.name}
                  description={metric.description}
                  metricData={metric}
                />
              )}
            </>
          ))}
          {parentData && parentData.map((metric) => (
            <>
              {
                metric.child_category === 'Community GDP' &&
                metric.name !== 'Community GDP' && (
                <Metric
                  key={metric.id}
                  title={metric.name}
                  description={metric.description}
                  metricData={metric}
                />
              )}
            </>
          ))}
        </Category>
      )}
      {categories &&
        categories.map((category: string) => category !== 'Community GDP' && (
          <Category key={category} title={category} setLoading={setLoading}>
            {parentData && parentData.map((metric) => (
              <>
                {metric.child_category === category && (
                  <Metric
                    key={metric.id}
                    title={metric.name}
                    description={metric.description}
                    metricData={metric}
                  />
                )}
              </>
            ))}
          </Category>
        ))
      }
    </div>
  );
};
