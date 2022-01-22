import '../StyleSheets/Header.css'
import logo from '../Images/logo.png'
import loc_img from '../Images/loc_img.png'
import {Link} from 'react-router-dom'


function Header() {
      return (
            <div className='header'>
                  <Link to="/Home">
                        <div className="logo"><img className='logo-img' src={logo} alt="starbucks_logo" /></div></Link>  
                  <Link to="/loc">
                        <div className="location">
                              <img className='loc-pin-img' src={loc_img} alt="location" />
                              <p className='loc-p'>find a store</p>
                        </div>
                  </Link> 
            </div>
      )
}

export default Header
