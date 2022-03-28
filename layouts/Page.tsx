import { useEffect, useState } from "react";
import { Category, Metric } from "./Components";

export const Page = ({
  setLoading,
  data,
  name
}: {
  setLoading: (loading: boolean) => void,
  data: any[],
  name: string
}) => {
  const [parentData, setParentData] = useState<any[]>();
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    const filteredData = data.filter((item: any) => item.fields['Parent Category'] && item.fields['Child Category'] && item.fields['Parent Category'].includes(name));
    const dupCategories = filteredData.map((item: any) => item.fields['Child Category']);
    const uniqueCategories = [...new Set(dupCategories)];
    setParentData(filteredData);
    setCategories(uniqueCategories);
    console.log(data);
  }, [data, name]);

  return (
    <div>
      {categories && categories.map((category: string) => (
        <Category
          key={category}
          title={category}
          setLoading={setLoading}
        >
          {parentData && parentData.map((metric: any) => (
            <>
              {metric.fields['Child Category'] === category && (
                <Metric
                  key={metric.id}
                  title={metric.fields['Name']}
                  description={metric.fields['Description']}
                  fields={metric.fields}
                />
              )}
            </>
          ))}
        </Category>
      ))}
    </div>
  )
};
