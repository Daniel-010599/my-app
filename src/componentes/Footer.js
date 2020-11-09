import React from 'react';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';

function Footer(){
	return(
		<footer>
          <div className="footer-app">
            <span><p>Creado por Daniel Bravo Leguia - &copy; 2020</p></span>
            <div className="rs-footer">
              <div className="rs-app">
                <img src={linkedin} alt="linkedin my-web"/>
                <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/daniel-bravo-536a52173/">Linkedin</a>
              </div>
              <div className="rs-app">
                <img src={twitter} alt=" twitter my-web"/>
                <a rel="noreferrer noopener" target="_blank" href="https://twitter.com/BravoLeguia">Twitter</a>
              </div>
              <span><p>Correo: daniel.leguia99@gmail.com</p></span>
            </div>
          </div>
        </footer>
	)
}

export default Footer;