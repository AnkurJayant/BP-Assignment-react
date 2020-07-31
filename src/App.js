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
      loaded:false
    }
    this.authListener=this.authListener.bind(this)
  }
  authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user:user,loaded:true})
      }else{
        this.setState({user:null,loaded:true})
      }
    })      
  }
  componentDidMount(){
    this.authListener();   
  }

  render(){        
      return (
        <div className="App" style={{background:"white"}}>
          {
          this.state.user && this.state.loaded ? (<Home/>):(<Login/>)            
        }
        </div>
      );
    
  }

}

export default App;
