import '../StyleSheets/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
      return (
            <div className='navbar'>
                  <ul className="navlinks">
                        <Link to='/coffee' className='navlink' id="coffee">coffee</Link>
                        <Link to='/coffee' className='navlink' id="menu">menu</Link>
                        <Link to='/coffee' className='navlink' id="coffee_house">coffee house</Link>
                        <Link to='/coffee' className='navlink' id="responsibility">responsibility</Link>
                        <Link to='/coffee' className='navlink' id="rewards">rewards</Link>
                        <Link to='/coffee' className='navlink' id="careers">careers</Link>
                        <Link to='/coffee' className='navlink' id="starbucks_seasonal_gift">starbucks season's gifting</Link><br />
                        <Link to='/coffee' className='navlink' id="starbucks_delivers">starbucks delivers</Link>
                        <Link to='/coffee' className='navlink' id="about_us">about us</Link>
                  </ul>
            </div>
      )
}

export default Navbar
