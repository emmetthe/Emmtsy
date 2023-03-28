import React from 'react';
import "./footer.css"
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import angel from './images/angel.png'
import flag from './images/flag.png'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="mailing-list-container">
          <p></p>
        </div>

        <div className="footer-links-container">
          <div className="footer-info">
            <div className="footer-shop info">
              <h2>Technologies</h2>
              <a href="https://reactjs.org/" target="blank">React-Redux</a>
              <a href="https://www.javascript.com/" target="blank">JavaScript</a>
              <a href="https://rubyonrails.org/" target="blank">Ruby on Rails</a>
              <a href="https://aws.amazon.com/s3/" target="blank">AWS</a>
            </div>

            <div className="footer-sell info">
              <h2>Projects</h2>
              <a href="https://quickly-healthy.herokuapp.com/#/" target="blank">
                Quickly Healthy
              </a>
              <a href="https://emmetthe.github.io/js-project/" target="blank">Free Range</a>
            </div>

            <div className="footer-about info">
              <h2>About</h2>
              <p>Emmtsy, Inc.</p>
              <a target="_blank" href="https://emmetthe.netlify.app/#">
                Portfolio
              </a>
            </div>

            <div className="footer-help info">
              <h2>Socials</h2>
             

              <div className="footer-icon-section">
                <div className="footer-logo-container">
                  <a href="https://github.com/emmetthe" target="_blank">
                    <img className="footer-logo" src={github} />
                  </a>
                  <a href="https://www.linkedin.com/in/emmett-he-a59113218/" target="_blank">
                    <img className="footer-logo" src={linkedin} />
                  </a>
                  <a href="https://angel.co/u/emmett-he" target="_blank">
                    <img className="footer-logo" src={angel} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="lang-currency">
            <img src={flag} />
            United States | English (US) | $ (USD)
          </div>
          <div className="terms-policies">
            <p>2021 Emmtsy, Inc.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
