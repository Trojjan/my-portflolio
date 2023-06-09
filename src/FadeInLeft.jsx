import { useEffect, useRef, useState } from 'react';




const FadeInLeft = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={`fade-in-left ${isVisible ? 'animate' : ''}`} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeInLeft;
