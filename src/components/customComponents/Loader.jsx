import React, { useEffect, useLayoutEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoaderComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 500); // Match this with the fade-out duration
  };

  useLayoutEffect(() => {
    const timer = setTimeout(handleLoaderComplete, 2000); // Duration to show loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000000; /* Keep background black */
          transition: opacity 0.5s ease, transform 0.5s ease;
          opacity: 1;
          transform: translateY(0);
          z-index: 9999; /* Ensure it's on top */
        }

        .fade-out {
          opacity: 0;
          transform: translateY(-100%);
        }

        .loading-animation {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circle {
          width: 20px;
          height: 20px;
          margin: 0 10px;
          border-radius: 50%;
          background-color: #ffffff;
          animation: bounce 0.5s ease-in-out infinite;
        }

        .circle:nth-child(2) {
          animation-delay: 0.1s;
        }

        .circle:nth-child(3) {
          animation-delay: 0.2s;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
