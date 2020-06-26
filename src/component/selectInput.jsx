import React from 'react';

const SelectInput = ({ name, label, onChange, errors, value }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select className="form-control" id={name} name={name} onChange={onChange} errors={errors} value={value}>
                    <option value="select">select</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
            </select>
            {errors && <div className="alert alert-danger">{errors}</div>}
        </div>
     );
}
 
export default SelectInput;