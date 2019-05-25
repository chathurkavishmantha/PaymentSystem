
import React, { Component } from 'react';

class login extends  Component {

    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email : null,
            password: null
        }
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setSate({
            password: e.target.value
        })
    }

    onSubmit(e){

    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Login</h2>
                </div>

                <div className="card-body">
                    <form method="POST" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" onChange={this.onChangeEmail} placeholder="E-mail"/>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" name="password" id="password" onChange={this.onChangePassword} placeholder="Password"/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default  login;