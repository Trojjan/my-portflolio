import { useEffect, useRef, useState } from "react";

const FadeInRight = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current; 

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef); 
  }, []);

  return (
    <div className={`fade-in-right ${isVisible ? 'animate' : ''}`} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeInRight;
