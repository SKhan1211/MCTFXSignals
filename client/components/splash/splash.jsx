import React, { useState } from 'react';

const Splash = (props) => {
  return (
    <div>
      <section className="splash-section-header container">
        <nav>
          <div className="splash-section-header nav__left-side">
            <i className="fas fa-bars"></i>
            <img src="https://lh3.googleusercontent.com/ZdHc5M_HNZ-YKK-u3Lbgna6hStST38UPylBPglF_i9z686LCjHFo9Av0kP6AcE0RIKGaZL5aKrPLovSTR5GgKvmXMhiGdUzoJHJHg1HIDTUoe7fR1Cz5NLT-U0T_56Wp4lycsuY27kn1BzqwYtuFPWan6aOWjFZRvpcbeggrHDbsGoolUBMpXC3VWbTkrzqBYnRqxo_2p3nKzyCBtZdZFsY2hgPbk2vy8xc33nK8YYWmB6y_bZ6GOkL_Mv9VpSEE1cLVCawNVL0xZBnUhI-KuGIFEKz4pG8DU4d5UPJYMVkcqfssxDUFBU9Pl5i2zwrrUl41oE8kEPTgmn10N2Qh9JCKvqE4PSXWwjG0QPZ_CaOUEqR8gi8TLycawGuTrcpxn_OFk59QW6TxWGIgeBAjwKYrpSNz2b-W-i8nMQZd-eFNHtN0sAnPfNQ0NdOFSSN9bnEB8zgWul0nzHTlQqX4tzRgp3rWBPXQ3FBzE-Egi6ZFeiTlVSpCBKDdjyF8CfUbG22CGnucmk6EKTSz7uvb3u3CP40MSezvEVhp9VzyQSpc5oCBUucmwCR9XZcQ4HKdNw52VVpf7GMaZ4c3ZpK15JBQktpdWyUD-y1yUJXIWY0X_2UmwYyuztFXNJ-om5tMay7Wy-8jDEjuXIHa9-85uI2dx7dqlYwxy4M60H90KGHw2Z4JcQLschc2k8GY_Q=w577-h448-no?authuser=0"></img>
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
        <main>
          <p id="about-us-p">
            Midnight Crew Trading is a trusted FX signals provider getting your 
            trading to the level it needs to be. We take the deep research and 
            analysis out of your trading so you can sit back and watch your 
            account grow.
          </p>
          <aside>
            <div>
              <i className="fas fa-user-tie"></i>
              <h3>Professional Research</h3>
              <p className="splash-section-whyus p-item-list">
                Our years of experience in financial markets means you can trust our analysis is unique
                and thoroughly conducted for every pair
              </p>
            </div>
            <div>
              <i className="fas fa-chart-bar"></i>
              <h3>Market Insights</h3>
              <p className="splash-section-whyus p-item-list">
                We will keep you up to date with everything you need to know happening in the markets 
                right now
              </p>
            </div>
            <div>
              <i className="fas fa-dollar-sign"></i>
              <h3>Top-Class Analysis</h3>
              <p className="splash-section-whyus p-item-list">
                Our proven strategies have lasted through many financial crises and are still going strong
              </p>
            </div>
          </aside>
        </main>
      </section>

      <section className="splash-section-offers container">
        <h3>What We Offer</h3>
        <aside className="splash-section-offers header__line"></aside>
        <p>
          Fast track to Professional Trading.
        </p>

        <div></div>

      </section>

      {/* <p>
        Disclaimer: Foreign exchange trading on margin carries a high level of risk and may not be suitable for all investors.
        Before investing, you should carefully consider your investment objectives, level of experience, and risk appetite.
        The possibility that you could sustain a loss of some or all of your initial investment exists and therefore you
        should not invest money you can't afford to lose. Past performance is not indicative of future results.
      </p> */}

    </div>
  )
};

export default Splash;