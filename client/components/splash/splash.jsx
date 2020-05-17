import React, { useState } from 'react';

const Splash = (props) => {
  return (
    <div>
      <section className="splash-section-header container">
        <nav>
          <div className="splash-section-header nav__left-side">
            <i className="fas fa-bars"></i>
            <div className="PLACEHOLDER">LOGO</div> {/* Logo placeholder */}
          </div>
          <div className="splash-section-header nav__right-side">
            <button className="splash-section-header nav__right-side__sign-in" onClick={() => props.history.push('/login')}>Sign In</button>
            <button className="splash-section-header nav__right-side__join-us" onClick={() => props.history.push('/signup')}>Join Us</button>
          </div>
        </nav>
        <main>
          <p>Finally,</p> 
          <p>A Forex Service Provider</p>
          <p>You Can Trust.</p>
        </main>
      </section>
      <section className="splash-section-services container">

        <footer>
          <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
          <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
        </footer>

      </section>
      <section className="splash-section-whyus container"></section>
    </div>
  )
};

export default Splash;