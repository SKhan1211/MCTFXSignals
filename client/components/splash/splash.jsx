import React, { useState } from 'react';

const Splash = () => {

  return (
    <div>
      <section className="splash-section-header container">
        <nav>
          <div className="splash-section-header nav__left-side">
            <i class="fas fa-bars"></i>
            <div className="PLACEHOLDER">LOGO</div> {/* Logo placeholder */}
          </div>
          <div className="splash-section-header nav__right-side">
            <button className="splash-section-header nav__right-side__sign-in">Sign In</button>
            <button className="splash-section-header nav__right-side__join-us">Join Us</button>
          </div>
        </nav>
      </section>
      <section className="splash-section-services container"></section>
      <section className="splash-section-whyus container"></section>
    </div>
  )
};

export default Splash;