import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using FontAwesome for the arrow

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled more than 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} style={styles.button}>
          <FaArrowUp style={styles.icon} />
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    height: '40px',
    width: '40px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 1000,
  },
  icon: {
    fontSize: '20px',
  },
};

export default ScrollToTop;
