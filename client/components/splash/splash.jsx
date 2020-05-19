import React, { useState } from 'react';

const Splash = (props) => {
  return (
    <div>
      <section className="splash-section-header container">
        <nav>
          <div className="splash-section-header nav__left-side">
            <i className="fas fa-bars"></i>
            <img src="https://lh6.googleusercontent.com/lkoLPdhQyoy-4ZpNP63qcFxmaipeNH55YSDx8hVMTyiMB3kaMxRv1gI8GuboQ45qWOXOpbdLaImF8oT0MYcc=w2880-h1304"></img>
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
        <nav>
          <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
          <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
        </nav>
        <main>
          <p>Get your first signal FREE, on us!</p>
          <p>
            Transform your trading by joining the MCT community.
            Gain access to accurate signals, trade analysis, and market commentary. 
            We trade what we teach and will empower you to grow with us!
          </p>
          <div className="splash-section-services main__button-container">
            <button>Get Started Now</button>
            <button>Learn More</button>
          </div>
        </main>

      </section>
      <section className="splash-section-whyus container">

        <header>
          <p>Why We Are Different</p>
          <p>About <span>Us</span></p>
          <div className="splash-section-whyus header__line"></div>
        </header>
        {/* <main>
          <p>
            Midnight Crew Trading is a trusted FX signals provider getting your 
            trading to the level it needs to be. We take the deep research and 
            analysis out of your trading so you can sit back and watch your 
            account grow.
          </p>
        </main> */}
       

      </section>
    </div>
  )
};

export default Splash;