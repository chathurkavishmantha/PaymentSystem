import React, { Component } from 'react';

class sign_up extends Component {

    constructor(props){
        super(props);

        this.state ={
            FirstName: null,
            LastName: null,
            Email: null,
            Password: null,
            ConfirmPassword: null,
        }
    }

    onChangeFirstName(e){
        this.setState({
            FirstName: e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            LastName: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            Password: e.target.value
        })
    }

    onChangeConfirmPassword(e){
        this.setState({
            ConfirmPassword: e.target.value
        })
    }

    render () {

        return (

            <div className="card">
               <div className="card-header">
                   <h2 className="card-title">SignUp</h2>
               </div>
                
                <div className="card-body">
                    <form method="post" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="FirstName" id="fname" onChange={this.onChangeFirstName} placeholder="FirstName"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" name="LastName" id="lname" onChange={this.onChangeLastName} placeholder="Last Name"/>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" name="Email" id="email" onChange={this.onChangeEmail} placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" name="Password" id="password" onChange={this.onChangePassword} placeholder="password"/>
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" name="ConfirmPassword" id="cpassword" onChange={this.onChangeConfirmPassword} placeholder="Confirm Password"/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm">Sign Up</button>
                        </div>

                    </form>
                </div>
            </div>

        );
    }

}

export  default  sign_up;