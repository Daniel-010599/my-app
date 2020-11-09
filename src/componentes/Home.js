import React from 'react';
import  monitor from '../img/monitor.png';
import css from '../img/css.png';
import js from '../img/javascript.png';
import html from '../img/html.png';

function Home(){
	return(
		<div className="content">
            <div className="image-app">
              <h1>Daniel Bravo Leguia</h1>
              <img src={monitor} alt=""/>
            </div>
            <div className="frontend-app">
              <h2>Conocimientos FrontEnd</h2>
              <div className="conocimientos">
                <div className="item-fe">
                  <img src={html} alt=""/>
                  <h3>HTML</h3>
                </div>
                <div className="item-fe">
                  <img src={css} alt=""/>
                  <h3>CSS</h3>
                </div>
                <div className="item-fe">
                  <img src={js} alt=""/>
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
        </div>
	)
}

export default Home;