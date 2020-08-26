import { useEffect, useState } from "react";

const useObserver = (reference: string) => {
  const [isContentVisible, setContentVisibility] = useState<boolean>(false);

  useEffect(() => {
    const observer = (
      reference: string,
      setContentState: (arg: boolean) => void
    ) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setContentState(true);
            } else {
              setContentState(false);
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
        return () => observer.unobserve(target);
      }
    };
    observer(reference, setContentVisibility);
  }, []);

  return {
    isContentVisible,
  };
};

export default useObserver;
