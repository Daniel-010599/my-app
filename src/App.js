import React from 'react';
import './App.css';
import Informacion from './componentes/Informacion.js';
import Contacto from './componentes/Contacto.js';
import Header from './componentes/Header.js';
import Footer from './componentes/Footer.js';
import Home from './componentes/Home.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {db} from './Database/Firebase.js';

class App extends React.Component{

  addContact=async(nombres,apellidos,correo,mensaje)=>{
    const add = {nombres:nombres,apellidos:apellidos,correo:correo,mensaje:mensaje};
    await db.collection('contacts').doc().set(add);
  }

  render(){
    return(
      <Router>
        <div className="app">
          <Header/>
          <Switch>
            <Route path="/informacion">
              <Informacion/>
            </Route>
            <Route path="/contacto">
              <Contacto addcontact={this.addContact}/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
