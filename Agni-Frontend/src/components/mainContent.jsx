// src/components/MainContent.jsx
import React, { useEffect, useRef, useState } from "react";
import "./styles/Header.css";
const MainContent = () => {
  const cardsWrapper = useRef(null);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 8; // Number of cards

  const updateDots = (dots) => {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  useEffect(() => {
    const dots = document.querySelectorAll(".dot");

    // Move to the next card
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % totalCards;
        cardsWrapper.current.style.transform = `translateX(-${
          newIndex * 100
        }%)`;
        updateDots(dots);
        return newIndex;
      });
    };

    // Move to the previous card
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + totalCards) % totalCards;
        cardsWrapper.current.style.transform = `translateX(-${
          newIndex * 100
        }%)`;
        updateDots(dots);
        return newIndex;
      });
    };

    // Initialize event listeners
    prevBtn.current.addEventListener("click", handlePrevClick);
    nextBtn.current.addEventListener("click", handleNextClick);

    // Clean up event listeners on unmount
    return () => {
      prevBtn.current.removeEventListener("click", handlePrevClick);
      nextBtn.current.removeEventListener("click", handleNextClick);
    };
  }, [currentIndex, totalCards]); // Add dependencies

  useEffect(() => {
    const dots = document.querySelectorAll(".dot");
    updateDots(dots); // Initialize dots on load
  }, []);

  return (
    <main id="mainContent">
      <div className="main-contents">
        <div className="marquee">
          <div className="marquee-content">
            <p>
              • &emsp; &emsp; 20% Discount on all Grocery &emsp; &emsp; • &emsp;
              &emsp;30% Discount on purchase of Rs.2000 and above &emsp; &emsp;
              • &emsp; &emsp; 50% discount on using Amazon Pay Later &emsp;
              &emsp; • &emsp; &emsp; Flat 10% off on Payments using ICIC credit
              cards &emsp; &emsp; • &emsp;
            </p>
          </div>
        </div>
        <h1>Welcome to AGNI Smart Shopping Mart</h1>
        <p>
          Browse items, manage your cart, and explore our smart mart map! <br />
          Best sellers, Mega sale live now!
          <span className="Red_dot"></span>
        </p>

        <section className="cards-carousel">
          <button className="carousel-btn prev-btn" ref={prevBtn}>
            &#10094;
          </button>
          <div className="cards-wrapper" ref={cardsWrapper}>
            {[...Array(totalCards)].map((_, index) => (
              <div className="card" key={index}>
                <img
                  src={`image/${index + 1}.png`}
                  alt={`Product ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button className="carousel-btn next-btn" ref={nextBtn}>
            &#10095;
          </button>

          {/* Navigation dots container */}
          <div className="carousel-dots">
            {[...Array(totalCards)].map((_, index) => (
              <span className="dot" key={index}></span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
