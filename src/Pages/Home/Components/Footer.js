import { Link } from 'react-router-dom'

import img13 from '../Images/facebook.png'
import img14 from '../Images/twitter.png'
import img15 from '../Images/instagram.png'
import img16 from '../Images/wordmark.png'

import "../StyleSheets/Footer.css"



function Footer() {
      return (
            <div className='footer'>
                  <div className="social-media">
                        <Link to="/facebook"><img src={img13} alt="" className="social-icons" id="facebook" /></Link>
                        <Link to="/twitter"><img src={img14} alt="" className="social-icons" id="twitter" /></Link>
                        <Link to="instargram"><img src={img15} alt="" className="social-icons" id="instagram" /></Link>
                  </div>
                  <div className="about">
                        <div className="div-left">
                              <span className="left">
                                    <Link to="/home" className='lnk'><h3 className="about-us head">about us</h3></Link>
                                    <Link to="/home" className='lnk'><p className="footer-span-left p" id="link-1">our heritage</p></Link>
                                    <Link to="/home" className='lnk'><p className="footer-span-left p" id="link-2">our company</p></Link>
                              </span>
                              <span className="right">
                                    <span className="footer-span-right-left" id="right-left-1">
                                          <Link to="/home" className='lnk'><h3 className="about-us head">CUSTOMER SERVICE</h3></Link>
                                          <Link to="/home" className='lnk'><p className="footer-span-left p" id="link-1">Frequently Asked Questions</p></Link>
                                    </span>
                                    <span className="footer-span-right-left" id="right-left-2">
                                          <Link to="/home" className='lnk'><h3 className="about-us head">QUICK LINKS</h3></Link>
                                          <Link to="/home" className='lnk'><p className="footer-span-left p" id="link-1">Store Locator</p></Link>
                                    </span>
                              </span>
                        </div>
                        <div className="div-right"><img src={img16} alt="" /></div>
                  </div>
                  <div className="footer-foot">
                        <div className="foot-links">
                              <Link to="/foot" className="foot-link" id="1">web accessibility | </Link>
                              <Link to="/foot" className="foot-link" id="2">privacy policy | </Link>
                              <Link to="/foot" className="foot-link" id="3">terms of use | </Link>
                              <Link to="/foot" className="foot-link" id="4">site map | </Link>
                              <Link to="/foot" className="foot-link" id="5">contact us | </Link>
                              <Link to="/foot" className="foot-link" id="6">cookie preferences</Link>
                        </div>
                  </div>
                  <div className="copy">
                        <pre className="copyright">© 2019 Starbucks Coffee Company. All rights reserved.</pre>
                  </div>
            </div>
      )
}


export default Footer
