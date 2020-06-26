import React, { Component } from 'react';

class Logout extends Component {
    state = {  }

    handleLogout = () => {
        const { match: { params }, history } = this.props;
        localStorage.removeItem("userName");
        history.push("/");
    }
    render() { 
        return ( 
            <button className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
         );
    }
}
 
export default Logout;