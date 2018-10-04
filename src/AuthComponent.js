import React from 'react';
//import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
class AuthComponent extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }
 
  render() {
    return (
      <FacebookLogin
        appId="179140646308999"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    )
  }
}
 
export default AuthComponent;

