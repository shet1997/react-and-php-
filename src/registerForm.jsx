import React from 'react';
import Form from './component/form';
import Joi from 'joi-browser';
import axios from 'axios';

class RegisterForm extends Form {
    state = { 
        data: {
            username: '',
            email: '',
            password: '',
            phone: '',
            gender: ''
        },
        errors: {}
     }

     schema = {
         username: Joi.string().required().label("Username"),
         email: Joi.string().email().required().label("Email"),
         phone: Joi.string().max(10).label("Phone"),
         gender: Joi.string().required().label("Gender"),
         password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().label("Password")
     }


     handleSubmit = (e) => {
         e.preventDefault();
         const { match: history } = this.props;
        const errors = this.validate();
        this.setState({errors: errors || {}});

        axios({
            method: 'post',
            url: `${'http://localhost/authentications/regiInsertToDatabase.php'}`,
            data: this.state.data,
            crossDomain : true,
        })
 
        .then(function (response) {
            //handle success
            console.log(response)
            history.push('/dashboard');
        })
 
     }

    render() { 
        return ( 
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card align-middle">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput("text", "username", "Username", "your username")}
                                {this.renderInput("email", "email", "Email", "your email")}
                                {this.renderInput("password", "password", "Password", "your password")}
                                {this.renderInput("number", "phone", "Phone", "your phone")}
                                {this.renderSelectInput("gender", "Gender")}
                                {this.renderSubmitButton("Register")}
                            </form>
                        </div>
                    </div>
                </div>
          </div>
         );
    }
}
 
export default RegisterForm;
