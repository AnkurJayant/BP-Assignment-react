import React from 'react';
import './Login.css'
import logo from './media_logo.jpg'
import fire from './config/Fire';
import ReactDOM from 'react-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""

        }
        this.handleChange=this.handleChange.bind(this)
        this.login=this.login.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]:[e.target.value]
        });
        
    }

    login(e) {
        e.preventDefault();
        console.log(String(this.state.email))
        fire.auth().signInWithEmailAndPassword(String(this.state.email),String(this.state.password)).then((u)=>{
        }).catch((error) => {
            console.log(error.message);
            let errormessage=document.getElementById('message')
            errormessage.innerHTML=error
          });
      }    
      signup=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(String(this.state.email), String(this.state.password)).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
            let errormessage=document.getElementById('message')
            errormessage.innerHTML=error
          })
      }
      render(){
        return(
            <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                <img src={logo} id="icon" alt="User Icon" />
                </div>

                <form>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="login" className="fadeIn second"  placeholder="Email goes here..." aria-describedby="emailHelp"/>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="password" className="fadeIn third" placeholder="Password goes here..."/>                    
                    <input onClick={this.login} type="submit" className="fadeIn second" value="Log In"/>
                    <input onClick={this.signup} type="submit" className="fadeIn second" value="Sign Up"/>
                    <p id="message"></p>
                </form>

                <div id="formFooter">
                <a className="underlineHover" href="#">Admin Login</a>
                </div>

            </div>
            </div>        
    );
}
}

export default Login;