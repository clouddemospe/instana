//import React, {useState, useEffect} from 'react'
import {Router, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";
import Navbar from './components/Navbar/Navbar';
import S3 from './components/ServiciosAWS/S3';
import Dynamo from './components/ServiciosAWS/Dynamo';
import RDS from './components/ServiciosAWS/RDS'
import SQS from './components/ServiciosAWS/SQS'
import SNS from './components/ServiciosAWS/SNS'
import './App.css';

const customHistory = createBrowserHistory();

customHistory.listen(location => {
  console.log('Set page to', location.pathname);

  // eslint-disable-next-line no-undef
  ineum('page', location.pathname);
  
  // Note that the above can result in many useless pages when you are making use of path parameters.
  // In these cases you will have to define the page via different means, e.g. by creating a custom
  // Route component which accepts a 'pageName' property.
});

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

export default function App() {
  return (
    <Router history={customHistory}>
      <div className="App">
        <Navbar></Navbar>
        <div className="AppBody">
          <Switch>
            <GetLocationRoute path="/s3" component={S3} />
            <GetLocationRoute path="/dynamo" component={Dynamo} />
            <GetLocationRoute path="/rds" component={RDS} />
            <GetLocationRoute path="/sqs"component={SQS} />
            <GetLocationRoute path="/sns" component={SNS} />
            <GetLocationRoute path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
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

