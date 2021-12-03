import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="mailing-list-container">
          <p>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Emmtsy.</p>
        </div>

        <div className="footer-links-container">
          <div className="footer-info">
            <div className="footer-shop info">
              <h2>Technologies</h2>
              <p>React-Redux</p>
              <p>Javascript </p>
              <p>AWS </p>
              <p>Ruby on Rails </p>
              <p>HTML/CSS </p>
            </div>

            <div className="footer-sell info">
              <h2>Sell</h2>
              <p>Sell on Emmtsy</p>
              <p>Teams</p>
              <p>Forums</p>
              <p>Affiliates</p>
            </div>

            <div className="footer-about info">
              <h2>About</h2>
              <p>Emmtsy, Inc.</p>

              <a target="_blank" href="https://www.linkedin.com/in/emmett-he-a59113218/">
                LinkedIn
              </a>
            <br/>
              <a href="https://github.com/emmetthe" target="_blank">
                Github
              </a>
            </div>

            <div className="footer-help info">
              <h2>Help</h2>
              <p>Help Center</p>
              <p>Privacy settings</p>

              <div className="footer-icon-section">
                <div className="footer-logo-container">
                  <a href="https://github.com/emmetthe" target="_blank">
                    <img className="footer-logo" src={window.github} />
                  </a>
                  <a href="https://www.linkedin.com/in/emmett-he-a59113218/" target="_blank">
                    <img className="footer-logo" src={window.linkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="lang-currency">
            <img src={window.flag} />
            United States | English (US) | $ (USD)
          </div>
          <div className="terms-policies">
            <p>2021 Emmtsy, Inc.</p>
            <p>
              <u>Terms of Use</u>
            </p>
            <p>
              <u>Privacy</u>
            </p>
            <p>
              <u>Interest-based ads</u>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
