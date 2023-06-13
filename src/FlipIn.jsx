import { useEffect, useRef, useState } from "react";

const FlipIn = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    // eslint-disable-next-line 
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={`flip-in ${isVisible ? "visible" : ""}`} ref={domRef}>
      {children}
    </div>
  );
};

export default FlipIn;
