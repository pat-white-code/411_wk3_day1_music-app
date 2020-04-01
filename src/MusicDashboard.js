import React, {Component} from 'react';
import {AppBar, Typography} from '@material-ui/core';
import './dashboard.css';
import OnlineToggle from './OnlineToggle';

class MusicDashboard extends Component {
  state = { 
    loggedIn: false,
    notifications: []
  }
  logIn = () => {
    this.setState({ loggedIn: true });
  }

  render() { 
    return (
      <div>
        <AppBar position='static' className='navbar'>
          <Typography>
            Music Dashboard
          </Typography>
        </AppBar>
      {!this.state.loggedIn ? 
        <div>
          <h1>PLEASE LOG IN</h1>
          <form onSubmit={this.logIn}>
            <input type='text'></input>
          </form>
        </div>
        :
        <div>
          <h1>COMPONENT HERE</h1>
          <OnlineToggle />
          <h1>COMPONENT HERE</h1>
          {/* <VolumeControl /> */}
          <h1>COMPONENT HERE</h1>
          {/* <SoundQauality /> */}
        </div>
      }
      </div>
    );
  }
}

export default MusicDashboard;