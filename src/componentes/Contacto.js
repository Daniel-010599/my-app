import React from 'react';
import PropTypes from 'prop-types';

class Contacto extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nombres:'',
			apellidos:'',
			correo:'',
			mensaje:'',
			errorNombres:'',
			errorApellidos:'',
			errorCorreo:'',
			errorMensaje:'',
			mensajeEnviado:''
		};
	}

	validate= () =>{
		let errorNombres = "";
		let errorApellidos = "";
		let errorCorreo = "";
		let errorMensaje = "";
		let mensajeEnviado = "";

		if(!this.state.nombres || !this.state.apellidos || !this.state.correo || !this.state.mensaje){
			errorNombres = "Datos Incompletos";
			this.setState({
				mensajeEnviado:''
			});
		}else if(!this.state.correo.includes("@")||!this.state.correo.includes(".com")){
			errorCorreo = "Correo Incorrecto";
			this.setState({
				mensajeEnviado:''
			});
		}
		if(errorNombres || errorApellidos || errorCorreo || errorMensaje){
			this.setState({
				errorNombres,errorApellidos,errorCorreo,errorMensaje
			});
			return false;
		}else{
			mensajeEnviado = "Mensaje Enviado con Exito";
			this.setState({
				mensajeEnviado,
				errorCorreo:''
			});
		}
		return true;
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		const isValid = this.validate();

		const {nombres,apellidos,correo,mensaje} = this.state

		if(isValid){
			console.log(this.state);
			this.props.addcontact(nombres,apellidos,correo,mensaje);
			this.setState({
				nombres:'',
				apellidos:'',
				correo:'',
				mensaje:'',
				errorNombres:''
			})
		}
	}

	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	render(){
		return(
			<div className="content-contact">
				<div className="form-contact">
					<form onSubmit={this.handleSubmit}>
						<div className="form-na">
							<div className="input-na input-names">
								<label htmlFor="names">Nombres: </label>
								<input id="names" className="input-name" value={this.state.nombres} name="nombres" onChange={this.handleChange} type="text"/>
							</div>
							<div className="input-na">
								<label htmlFor="lastname">Apellidos: </label>
								<input id="lastname" className="input-lastname" value={this.state.apellidos} name="apellidos" onChange={this.handleChange} type="text"/>
							</div>
						</div>
						<label htmlFor="email">Correo: </label>
						<input id="email" value={this.state.correo} name="correo" onChange={this.handleChange} className="input-c" type="email"/>
						<label htmlFor="message">Mensaje: </label>
						<textarea id="message" value={this.state.mensaje} name="mensaje" onChange={this.handleChange}></textarea>
						<div className="contact-s">
							<input className="form-submit" type="submit" value="Contactar"/>
						</div>
					</form>
					<span className="complete-data">{this.state.errorNombres}</span>
					<span>{this.state.errorApellidos}</span>
					<span className="incorrect-email">{this.state.errorCorreo}</span>
					<span>{this.state.errorMensaje}</span>
					<span className="message-sent">{this.state.mensajeEnviado}</span>
				</div>
			</div>
		)
	}
}

Contacto.propTypes = {
	addcontact: PropTypes.func.isRequired
};

export default Contacto;