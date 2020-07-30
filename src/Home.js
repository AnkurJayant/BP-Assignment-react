import React from 'react'
import fire from './config/Fire'
import Tile from './Tile'
import media from './media.json'
import videoLogo from './media_logo.jpg'

import './Home.css'
class Home extends React.Component{    
    constructor(props){
        super(props);
        this.state={            
            legit:false,
            TilesArray:null,
            tileComponents:null,
            searchResults:null
        }
        this.initTiles=this.initTiles.bind(this)
    }
    componentDidMount(){           
        console.log("skgh",this.props)    
        this.initTiles()
    }
    
    logout=()=>{
        fire.auth().signOut();
    }
    
    search=(e)=>{
        let key=e.target.value      
        console.log(key)  

        if(key===""){
            this.initTiles();
        }else{
            this.initTiles(key)
        }
    }
    initTiles(searchTile){
        let tileComponents;
        if(!searchTile){
                tileComponents=media.media.map(file=>{
                    let tiletemp=file.content.map(x=><Tile title={x.title} fileType={file.type} dur={x.dur} thumbnail={videoLogo}/>)
                    return tiletemp
                    }
                )  
                this.setState({TilesArray:tileComponents},()=>{
                    let tilescomp=[] 
                    if(this.state.TilesArray){
                        this.state.TilesArray.map(jsonArray=>{jsonArray.map(tile=>{
                            tilescomp.push(tile)
                        })})
                    }    
                    this.setState({tileComponents:tilescomp})
                }
            )
        }else{
                tileComponents=media.media.map(file=>{
                    let tiletemp=file.content.map(x=>{
                        if(x.title.indexOf(searchTile)!==-1){
                            return(<Tile title={x.title} fileType={file.type} dur={x.dur} thumbnail={videoLogo}/>)
                        }                    
                    })
                    return tiletemp
                    }
                )  
                this.setState({TilesArray:tileComponents},()=>{
                    let tilescomp=[] 
                    if(this.state.TilesArray){
                        this.state.TilesArray.map(jsonArray=>{jsonArray.map(tile=>{
                            tilescomp.push(tile)
                        })})
                    }    
                    this.setState({tileComponents:tilescomp})
                }
            )
        }    
    }

    render(){  
        
            return(
                <div className="Main">
                    <div className="topBar">
                        <div className="appLogo">
                            <img className="logo" src={videoLogo}></img>
                            <p className="appName">MediaBook</p>
                        </div>
                    </div>
                    <input className="searchBar" type="text" placeholder="Search your media here..." onKeyUp={this.search}></input>                
                    <div className="Tiles">
                        {this.state.tileComponents}
                    </div>
                                    
                    <h1>You're home </h1>
                    <input onClick={this.logout} type="submit" className="logout" value="Log out?"/>
                </div>
            );
    
          
    }
}

export default Home;