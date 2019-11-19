import React from 'react'
import {Link} from 'react-router-dom';
const Header=()=>{
    return(<nav>
        <ul>
        <li><Link to={'./'}>Home</Link></li>

            <li><Link to={'./shop'}>Shop</Link></li>
            <li><Link to={'./About'}>About Us</Link></li>
        </ul>
    </nav>)
}
export default Header;