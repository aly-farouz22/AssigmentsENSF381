import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
import reviews from '../data/review'; 

function Homepage() {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
      setRandomReviews(shuffledReviews.slice(0, 2));
    };

    getRandomReviews();
  }, []);

  return (
    <div>
      <Header />
      <div className="main-content">
        <section className="about-us-section">
          <h2>About Us</h2>
          <p>We are a leading company dedicated to providing high-quality products and excellent customer service.</p>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </section>
        <section className="customer-reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {randomReviews.map((review, index) => (
              <div key={index} className="review">
                <p>{review.customerName}</p>
                <p>{review.reviewContent}</p>
                <div className="stars">
                  {[...Array(review.stars)].map((_, index) => (
                    <span key={index} role="img" aria-label="star">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
