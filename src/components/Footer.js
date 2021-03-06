import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/dungeon';
class Footer extends Component{
  render(){
    return(
        <button id='toggleMusicButton' className="btn" onClick={this.props.turnOnOffMusic}>Music {this.props.dungeon.musicOn? 'Off':'On'}</button>
    );
  }
}

function mapStateToProps(state){
  return {
    player: state.player,
    dungeon: state.dungeon
  };
}

export default connect(mapStateToProps,actions)(Footer);
