import { useState } from 'react';
import styles from '@/styles/Slider.module.scss';

const getCurrentPosition = (index: number) => {
  if (index === 0) return '3.25%';
  if (index === 1) return '26.65%';
  if (index === 2) return '50%';
  if (index === 3) return '73.5%';
}

export const handleLoading = (set: (loading: boolean) => void) => {
  set(true);
  setTimeout(() => {
    set(false);
  }, 3000);
};

export const Slider = ({
  setParentSlide,
  setLoading
}: {
  setParentSlide: (index: number) => void,
  setLoading: (loading: boolean) => void
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = ['Learn', 'Earn', 'Build', 'Invest'];
  return (
    <div className={styles.container}>
      {slides.map((slide, index) => (
        <div
          onClick={() => {
            handleLoading(setLoading);
            setActiveSlide(index)
            setParentSlide(index)
          }}
          key={index}
          className={styles.slide}
        >
          <p
            className={styles.slideText}
            style={{ color: index === activeSlide ? 'var(--inverse-color)' : '' }}
          >
            {slide}
          </p>
        </div>
      ))}
      <div
        style={{ left: getCurrentPosition(activeSlide) }}
        className={styles.slideBackground}
      />
    </div>
  )
};
