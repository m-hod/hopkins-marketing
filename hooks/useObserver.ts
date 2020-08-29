import { useEffect, useState } from "react";

const useObserver = (reference: string) => {
  const [isContentVisible, setContentVisibility] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContentVisibility(true);
          } else {
            setContentVisibility(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    const target: Element | null = document.querySelector(`#${reference}`);
    if (target) {
      observer.observe(target);
      return () => {
        observer.unobserve(target);
        observer.disconnect();
      };
    }
  }, []);

  return {
    isContentVisible,
  };
};

export default useObserver;
