import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SOAP from './components/ServiciosAWS/SOAP';
import './App.css';
import useToken from './useToken';

// Capturing pages in Instana API
const GetLocationRoute = ({ component: ComponentToRender, ...rest }) => {
  return(
    <Route {...rest} render={(props) => {
       console.log("Set page to", props.location.pathname)

       // eslint-disable-next-line no-undef
       ineum('page', props.location.pathname);
       return <ComponentToRender {...props}/>
    }}></Route>
  )
};

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="AppBody">
      <BrowserRouter>
        <Switch>
          <GetLocationRoute path="/SOAP" component={SOAP} />
          <GetLocationRoute path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="form-cabecera">
          Demo Instana: Monitoreo de Servicios AWS
      </div>
    </div>)
}

export default App;
