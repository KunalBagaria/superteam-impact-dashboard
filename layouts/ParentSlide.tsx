import styles from '@/styles/Home.module.scss';
import { useEffect } from "react"
import { Page } from './Page';
import { Loading } from './Loading';

export const ParentSlide = ({
  activeSlide,
  loading,
  setLoading,
  data
}: {
  activeSlide: number,
  loading: boolean,
  setLoading: (loading: boolean) => void,
  data: any[]
}) => {
  const pages = ['Learn', 'Earn', 'Build', 'Invest']
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div
      style={{ marginTop: '12rem' }}
      className="main-width"
    >
      {loading && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
      {!loading && (
        <Page
          name={pages[activeSlide]}
          data={data}
          setLoading={setLoading}
        />
      )}
    </div>
  )
};
