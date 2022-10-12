import * as React from 'react';
import './main.scss';


export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-top">
          <div className="left">
            <div className="footer-colums">

              {/* Cot 1 */}
              <div className="colum">
                <ul>
                  <div className="h5">COMPANY</div>
                  <li className="colum-item">
                    <a href="">Home</a>
                  </li>
                  <li className="colum-item">
                    <a href="">Cases</a>
                  </li>
                  <li className="colum-item">
                    <a href="">About Us</a>
                  </li>
                  <li className="colum-item">
                    <a href="">Blog</a>
                  </li>

                  <ul className="sub-menu">
                    <li className="sub-menu-item">Healthcare App Development</li>
                    <li className="sub-menu-item">Telemedicine App Development</li>
                    <li className="sub-menu-item">Location-based Mobile App Development</li>
                    <li className="sub-menu-item">How to Create a Fitness App</li>
                    <li className="sub-menu-item">How to Create a Social Media App</li>
                  </ul>
                  <li className="colum-item">
                    <a href="">Sitemap</a>
                  </li>
                </ul>
              </div>

              {/* Cot 2  */}
              <div className="colum">
                <div className="h5">SERVICES</div>
                <ul>
                  <li className="colum-item">
                    <a href="">Mobile App Development</a>
                    <ul className="sub-menu">
                      <li className="sub-menu-item">iOS</li>
                      <li className="sub-menu-item">Android</li>
                      <li className="sub-menu-item">Cross-Platform</li>
                    </ul>
                  </li>
                  <li className="colum-item">
                    <a href="">Web Design and Development</a>
                  </li>
                  <li className="colum-item">
                    <a href="">UX/UI Design</a>
                  </li>
                  <li className="colum-item">
                    <a href="">Software Testing</a>
                  </li>
                </ul>
              </div>

              {/* Cot 3 */}
              <div className="colum">
                <ul>
                  <li className="colum-item">
                    <div className="h5">TECHNOLOGIES</div>
                    <ul className="h4">
                      <li className='colum-item'>
                        <a href="">React.js</a>
                      </li>
                      <li className='colum-item'>
                        <a href="">React Native</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="right">
            <div className="soc-contact">
            <address>
                <p>1295 Tadsworth Terrace #5330, Lake Mary, FL 32746, United States</p>
                <p>Kaupmehe tn 7-120, 10114, Kesklinna linnaosa, Harju maakond, Tallinn, Estonia</p>
            </address>
            <div className="mail-link">
              <a href="" className="mail">biz@riseapps.biz</a>
            </div>
            </div>
            
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-left"></div>
          <div className="bottom-right">
            <p className="copy">2022 © Riseapps.All rights reserved</p>
            <p>
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
