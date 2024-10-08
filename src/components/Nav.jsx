import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'
import logo from '../assets/logo.png' 

const Nav=()=>{
    return(
        <NavStyle>
        <nav>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" width="150px" />
      </a>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
        </NavStyle>
    )
}
export default Nav