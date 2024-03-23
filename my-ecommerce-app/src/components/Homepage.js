

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import reviews from '../data/review';
import logo from '../logo.svg'; 

const Homepage = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
      const selectedReviews = shuffledReviews.slice(0, 2);
      setRandomReviews(selectedReviews);
    };

    getRandomReviews();
  }, []);

  return (
    <div>
      <Header />
      <div className="main-content">
        <section className="about-us">
          <h2>About Us</h2>
          <p>Insert your company's mission and vision here.</p>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </section>
        <section className="customer-reviews">
          <h2>Customer Reviews</h2>
          {randomReviews.map((review, index) => (
            <div key={index} className="review">
              <p>{review.customerName}</p>
              <p>{review.reviewContent}</p>
              <p>
                {Array(review.stars)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </p>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
