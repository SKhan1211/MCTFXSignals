import React, { useState } from 'react';

const Splash = (props) => {
  return (
    <div>
      <section className="splash-section-header container">
        <nav>
          <div className="splash-section-header nav__left-side">
            <i className="fas fa-bars"></i>
            <img src={window.firstLogo}></img>
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
        <header className="splash-section-offers header-container">
          <h3>What We Offer</h3>
          <aside className="splash-section-offers header__line"></aside>
          <p>Fast track to Professional Trading</p>
        </header>
        <div className="splash-section-offers outer__box-container">
          <img src={window.candlestick} />
          <div className="splash-section-offers box__header-container">
            <h3>High Quality Forex Signals</h3>
            <p>
              Our signals are precisely formulated to make you you money. We take into factor all accounts that drive the FX markets, including technical analysis, fundamental analysis, and geopolitical news.
            </p>
          </div>
        </div>
        <div className="splash-section-offers outer__box-container">
          <i className="fas fa-chalkboard-teacher"></i>
          <div className="splash-section-offers box__header-container">
            <h3>Industry Standard Education By Forex Pros</h3>
            <p>
              Forex is well known for it's 95% loss rate. Don't be part of the statistics. Join us and we will teach you all of the tools you need to trade for a living!
            </p>
          </div>
        </div>
        <div className="splash-section-offers outer__box-container">
          <i className="fas fa-users"></i>
          <div className="splash-section-offers box__header-container">
            <h3>Collaborative Forums to Take Your Trading to the Next Level</h3>
            <p>
              Our community looks out for each other and we strive to help everyone we can find success in one of the hardest financial markets in existence.
            </p>
          </div>
        </div>
      </section>
      <section className="splash-section-contact container">
        <div className="splash-section-contact heading__text-container">
          <h3>Have Questions?</h3>
          <p>
            If you'd like to know any more additional information, feel free to email us today. We promise we will get back to you
            as soon as possible!
          </p>
        </div>
        <div className="splash-section-contact input-container">
          <input type="text" name="Name" placeholder="Name" required />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea name="Mesage" placeholder="Message..." required/>
          <button type="submit">Send</button>
        </div>
      </section>

      <section className="splash-section-footer container">
        <img src={window.secondLogo} />
        <div className="splash-section-footer divider__line"></div>
        <div className="splash-section-footer our__info-container">
          <h3>Get In Touch</h3>
          <div className="splash-section-footer mobile__number-container">
            <i className="fas fa-mobile-alt"></i>
            <p>+1 (888) 888-8888</p>
          </div>
          <div className="splash-section-footer email-container">
            <i className="fas fa-envelope"></i>
            <p>mctsignals@gmail.com</p>
          </div>

          <h3>Information</h3>
          <div className="splash-section-footer information-container">
            <p>Company Details</p>
            <p>Our Blog</p>
            <p>Free Signal Promotion</p>
            <p>Testimonials</p>
            <p>Events</p>
          </div>
          
          <h3>Helpful Links</h3>
          <div className="splash-section-footer helpful__links-container">
            <p>FAQs</p>
            <p>Services</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Careers</p>
          </div>

          <h3>Stay Connected</h3>
          <div className="splash-section-footer follow__links-container">
            <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
          </div>

          <p className="splash-section-footer disclaimer__text">
            <span>Disclaimer:</span> Foreign exchange trading on margin carries a high level of risk and may not be suitable for all investors.
            Before investing, you should carefully consider your investment objectives, level of experience, and risk appetite.
            The possibility that you could sustain a loss of some or all of your initial investment exists and therefore you
            should not invest money you can't afford to lose. Past performance is not indicative of future results.
          </p>

          <p className="splash-section-footer copyright__text">Copyright © 2020 MCT Signals</p>

        </div>
      </section>
    </div>
  )
};

export default Splash;