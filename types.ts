export type MetricRow = {
  id: string;
  name: string;
  child_category: string;
  parent_category: string;
  description: string;
  last_month?: number;
  this_month?: number;
  total?: number;
  monetary_metric: boolean;
};
