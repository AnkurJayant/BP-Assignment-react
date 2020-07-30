import React from 'react';
import './Tile.css'
import videologo from './video_thumb.png'
class Tile extends React.Component{

      render(){
        return(
                <div class="card" >
                    <img class="card-img-top" src={videologo}  alt="Card image cap"/>
                    <div class="card-body">
                        <p>{this.props.filetype}</p>
                        <h5 class="card-title">{this.props.title}</h5>
                        <p className="dur" style={{color:"#acb4b6"}}>{this.props.dur}</p>
                        <p class="card-text">Some media description to be fetched from the database</p>
                        <a href="#" class="btn btn-primary ">Play</a>
                    </div>
                </div>                    
    );
}
}

export default Tile;