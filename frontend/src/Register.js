import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={

      email:'',
      password:'',
      address:'',
      login:'',
      nom : '',
      role_id : 1,
      telephone: ''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event,role){
    var apiBaseUrl = "http://localhost:3200/user/";
    // console.log("values in register handler",role);
    var self = this;
    //To be done:check for empty values before hitting submit
    if(this.state.nom.length>0 && this.state.address.length>0 && this.state.email.length>0 && this.state.password.length>0){
    
      var payload={
      "nom": this.state.nom,
      "telephone":this.state.telephone,
      "address":this.state.address,
      "login":this.state.login,
      "email":this.state.email,
      "password":this.state.password,
      "role_id":this.state.role_id,
      }
      axios.post(apiBaseUrl, payload)
     .then(function (response) {
       console.log(response);
       if(response.data.code == 200){
         console.log("registration successfull");
         alert("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this} appContext={self.props.appContext}/>);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
       else{
         console.log("some error ocurred",response.data.code);
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Input field value is missing");
    }

  }
  render() {
    // console.log("props",this.props);
  
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Entrer votre nom"
             floatingLabelText="Nom"
             onChange = {(event,newValue) => this.setState({nom:newValue})}
             />
           <br/>
           <TextField
             hintText="Entrer votre telephone"
             floatingLabelText="Telephone"
             onChange = {(event,newValue) => this.setState({telephone:newValue})}
             />
           <br/>
           <TextField
             hintText="Entrer votre Adresse"
             floatingLabelText="Adresse"
             onChange = {(event,newValue) => this.setState({address:newValue})}
             />
             <br/>
           <TextField
             hintText="Entrer votre Login"
             floatingLabelText="Login"
             onChange = {(event,newValue) => this.setState({login:newValue})}
             />
           <br/>
           
           <TextField
             type = "email"
             hintText="Entrer votre Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
             <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;