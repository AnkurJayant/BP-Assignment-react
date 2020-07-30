import React from 'react';
import './App.css';
import fire from './config/Fire'
import Home from './Home'
import Login from './Login'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:{},
    }
    this.authListener=this.authListener.bind(this)
  }
  authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user:user})
      }else{
        this.setState({user:null})
      }
    })      
  }
  componentDidMount(){
    this.authListener();   
  }

  render(){        
      return (
        <div className="App" style={{background:"white"}}>
          {this.state.user ? (<Home/>):(<Login/>)}
        </div>
      );
    
  }

}

export default App;
