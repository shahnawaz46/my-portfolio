import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/ActiveSectionContext';
import type { activeLinkType } from '../interfaces/Interface';

export const useSectionInView = (
  activeLink: activeLinkType,
  threshold = 0.3
) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveLink } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveLink(activeLink);
    }
  }, [inView]);

  return { ref };
};
