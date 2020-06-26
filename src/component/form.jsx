import React, { Component } from 'react';
import Input from './input';
import SelectInput from './selectInput';
import Joi from 'joi-browser';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     }

     

     validateProperty = ({ name, value }) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return (error) ? error.details[0].message : null;
     }


     handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};  
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({
            data, errors
        });
    }


    validate = () => {
        const errors = {};
        const joiAbortEarly = {abortEarly: false}
        console.log(Joi.validate(this.state.data, this.schema, joiAbortEarly));
        const {error} = Joi.validate(this.state.data, this.schema, joiAbortEarly);
        if(!error) return null;
        for(let item of error.details) {
            errors[item.path[0]] = item.message;
            return errors;
        }

    }


    renderInput(type, name, label, placeholder) {
        const {data, errors} = this.state;
        return(
            <Input 
            type={type}
            name={name} 
            value={data[name]} 
            placeholder={placeholder}
            onChange={this.handleChange} 
            label={label} 
            errors={errors[name]}/>
        );
    }

    renderSelectInput(name, label) {
        const {data, errors} = this.state;
        return(
            <SelectInput 
            name={name}
            label={label}
            value={data[name]} 
            onChange={this.handleChange}
            errors={errors[name]} 
            />
        );
    }

    renderSubmitButton(label){
        return(
            <div className="d-flex justify-content-center">
                <button className="button button2">{label}</button>
            </div>
        )
     }
 }
 
export default Form;