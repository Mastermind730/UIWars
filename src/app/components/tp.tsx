import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/styles.css';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
    

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">E-Library</div>
        <ul className="nav-links">
          <li><Link href="#hero">Home</Link></li>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#categories">Categories</Link></li>
          <li><Link href="#books">Books</Link></li>
          <li><Link href="#footer">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero fade-in">
        <h1>Discover Knowledge Like Never Before</h1>
        <p>An inclusive E-Library for everyone.</p>
        <button className="cta">Start Your Journey</button>
      </header>

      {/* Carousel Section */}
      <section className="carousel">
        <h2>Featured Books</h2>
        <div className="carousel-container">
          <div className="carousel-slide">Book 1</div>
          <div className="carousel-slide">Book 2</div>
          <div className="carousel-slide">Book 3</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Empowering Features</h2>
        <div className="feature-item slide-up">
          <h3>Voice Navigation</h3>
          <p>Navigate effortlessly using voice commands.</p>
        </div>
        <div className="feature-item slide-up">
          <h3>High-Contrast Mode</h3>
          <p>Increase readability with adaptive contrast.</p>
        </div>
        <div className="feature-item slide-up">
          <h3>Large Font Mode</h3>
          <p>Enhanced visibility for a better experience.</p>
        </div>
      </section>

      {/* Book Categories Section */}
      <div className="grid">
        <div className="card">
          <span className="icon">
            {/* SVG Icon */}
          </span>
          <h4>Products</h4>
          <p>Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.</p>
          <div className="shine"></div>
        </div>
        <div className="card">
          <span className="icon">
            {/* SVG Icon */}
          </span>
          <h4>Categories</h4>
          <p>Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.</p>
          <div className="shine"></div>
        </div>
      </div>

      {/* Day/Night Toggle */}
      <label className="day-night">
        <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        <div></div>
      </label>

      {/* Twitter Link */}
      <a className="twitter" target="_top" href="https://twitter.com/aaroniker_me">
        {/* SVG Icon */}
      </a>

      {/* Book Cards Section */}
      <section id="books" className="book-cards">
        <h2>Browse Our Collection</h2>
        <div className="card">Book Title 1</div>
        <div className="card">Book Title 2</div>
        <div className="card">Book Title 3</div>
        <div className="card">Book Title 4</div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="footer fade-in">
        <p>Empowering individuals through technology.</p>
        <div className="footer-links">
          <Link href="#">Accessibility Options</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="social-icons">
          <Link href="#" className="icon">🌐</Link>
          <Link href="#" className="icon">📘</Link>
          <Link href="#" className="icon">🐦</Link>
        </div>
        <p>© 2024 E-Library. All rights reserved.</p>
      </footer>
    </>
  );
}
