import Lottie from 'lottie-react';
import loadingAnimation from '@/components/animations/loading.json';

export const Loading = () => {
  return (
    <div
      style={{ height: '50rem', width: '50rem' }}
    >
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
      />;
    </div>
  );
};
