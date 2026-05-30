import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      threshold = 0.15,
      delay = 0,
      translateY = 30,
      scale,
    } = options;

    el.style.opacity = '0';
    const transformValue = translateY !== 0
      ? `translateY(${translateY}px)${scale ? ` scale(${scale})` : ''}`
      : scale ? `scale(${scale})` : 'none';
    el.style.transform = transformValue;
    el.style.transition = `opacity ${options.duration ?? 0.7}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform ${options.duration ?? 0.7}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options.threshold, options.delay, options.duration, options.translateY, options.scale]);

  return ref;
}
