import React from 'react';
import Form from './component/form';
import Joi from 'joi-browser';
import axios from 'axios';
import {Redirect, Route} from 'react-router-dom';
import Dashboard from './dashboard';


class LoginForm extends Form {
    state = { 
        data: {
            email: '',
            password: ''
        },
        errors: {},
     }

     schema = {
         email: Joi.string().email().required().label("Email"),
         password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().label("Password")
     }


     handleSubmit = (e) => {
       e.preventDefault();
       const { match: { params }, history } = this.props;
       const errors = this.validate();
       this.setState({errors: errors || {} });

       axios({
           method: "post",
           url: `${'http://localhost/authentications/loginWithRightCredential.php'}`,
           data: this.state.data,
           crossDomain: true
       })


       .then(function(response){
           let responseData = JSON.parse(response.config.data);
           let userName = responseData.email;
           localStorage.setItem("userName", userName);
           history.push('/dashboard');
            // if(this.state.redirect) {
            //     // console.log("hello");
            //     // console.log(Redirect);
            //     return <Redirect to="/dashboard" />;
            //     // <Route path="/dashboard" render={() => <Dashboard name={userName} />}/>
            // }
       })

     }

    render() { 
        return ( 
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card align-middle">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput("email", "email", "Email", "your email")}
                                {this.renderInput("password", "password", "Password", "your password")}
                                {this.renderSubmitButton("Login")}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default LoginForm;

