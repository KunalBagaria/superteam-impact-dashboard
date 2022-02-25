import styles from '@/styles/Home.module.scss';
import { useState, useEffect } from "react"
import { Learn } from './Learn';
import { Loading } from './Loading';

export const ParentSlide = ({
  activeSlide,
  loading,
  setLoading
}: {
  activeSlide: number,
  loading: boolean,
  setLoading: (loading: boolean) => void
}) => {

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
        <>
          {activeSlide === 0 && (
            <Learn setLoading={setLoading} />
          )}
        </>
      )}
    </div>
  )
};
