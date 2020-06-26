import React, { Component } from 'react';

class Dashboard extends Component {

    state = {};
    
    componentDidMount() {
    const {history} = this.props;
        if(localStorage.getItem("userName") === null) {
                history.push('/');
        }
    }
    
    render() { 
        let userIdentification = localStorage.getItem("userName");
        return ( 
            <h1 className="m-5">
            {userIdentification}
            </h1>
         );
    }
}
 
export default Dashboard;


