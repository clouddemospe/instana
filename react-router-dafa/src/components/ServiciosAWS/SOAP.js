import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = "https://xuqu84juk4.execute-api.us-east-2.amazonaws.com/demo-dev/nFunctionExample";

class SOAP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : "",
        };
    }

    lecturasoap=()=> {
        this.setState({ data: "Consultando..." })
        axios.get(baseUrl,
        {
                headers: {
                        'Content-Type': 'application/json',
                }
        })
        .then(response => {
            this.setState({data: JSON.stringify(response) })
        }).catch(error => {
            this.setState({ data: "ERROR\n" + error})
            console.log(error);
        });
    }

    render() {
        return(
            <div className="container">
                <div className="form-cabecera">
                    Prueba de lectura de soap
                </div>
                <div className="form-detalle">
                    <button className="btn btn-success" onClick={()=>this.lecturasoap()}>Leer ws soap</button>
                    <br></br>
                    <br></br>
                    <div className="input-group">
                        <textarea className="form-control" style={{height: 150}} readOnly value={this.state.data}>
                        </textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default SOAP;
