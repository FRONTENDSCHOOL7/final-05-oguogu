import { useState, useRef, useCallback, useMemo } from 'react';

export default function useHorizontalScroll() {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startX, setStartX] = useState(0);

  const onDragStart = useCallback(
    (e) => {
      e.preventDefault();
      setIsDrag(true);
      setStartX(e.pageX + scrollLeft);
    },
    [scrollLeft]
  );

  const onDragEnd = useCallback(() => {
    setIsDrag(false);
  }, []);

  const onDragMove = useCallback(
    (e) => {
      if (isDrag) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        let newScrollLeft = startX - e.pageX;

        if (newScrollLeft < 0) {
          newScrollLeft = 0;
        } else if (newScrollLeft > scrollWidth - clientWidth) {
          newScrollLeft = scrollWidth - clientWidth;
        }

        setScrollLeft(newScrollLeft);
        scrollRef.current.scrollLeft = newScrollLeft;
      }
    },
    [isDrag, startX]
  );

  const onThrottleDragMove = useMemo(() => {
    const throttle = (func, ms) => {
      let throttled = false;
      return (...args) => {
        if (!throttled) {
          throttled = true;
          setTimeout(() => {
            func(...args);
            throttled = false;
          }, ms);
        }
      };
    };

    const throttleDragMove = throttle(onDragMove, 50);
    return throttleDragMove;
  }, [onDragMove]);

  return {
    scrollRef,
    isDrag,
    onDragStart,
    onThrottleDragMove,
    onDragEnd,
  };
}
