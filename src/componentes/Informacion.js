import React from 'react';
import {Link} from 'react-router-dom';

class Informacion extends React.Component{
	render(){
		return(
			<div className="content-info">
				<h2>Mis Datos</h2>
				<div className="mis-datos">
					<div className="my-information">
						<div className="item-md b-d">
							<p>Hola, soy estudiante de ingenieria de sistemas en Perú, me gusta mucho 
							el desarrollo FrontEnd, cada dia me esfuerzo por aprender nuevas tecnologias, 
							y asi elevar mis conocimientos como desarrollador.</p>
						</div>
						<label></label>
						<div className="item-md">
							<h3>Nombres: Daniel Eduardo</h3>
							<h3>Apellidos: Bravo Leguia</h3>
							<h3>Centro de Estudios: Universidad Cesar Vallejo</h3>
							<h3>Carrera: Ingeniería de Sistemas</h3>
						</div>
					</div>
					<div className="contact-me">
						<div className="contact">
							<h4>Si quieres realizar un proyecto conmigo no dudes en contactarme</h4>
							<div className="btn-contact">
								<Link to="/contacto">Contactar</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Informacion;