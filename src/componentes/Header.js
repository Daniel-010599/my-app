import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';

function Header(){
	return(
		<div className="header-app">
          <div className="header-center">
            <Link to="/"><img src={logo} alt=""/></Link>
            <div className="nav-header">
              <nav>
                <ul>
                  <li><Link to="/informacion">Información</Link></li>
                  <li><Link className="nav-contact" to="/contacto">Contacto</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
	)
}

export default Header;