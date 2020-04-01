import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import './dashboard.css';
import OnlineToggle from './OnlineToggle';
import VolumeControl from "./VolumeControl";
import SoundQuality from './SoundQuality';

class MusicDashboard extends Component {
  state = { 
    notifications: []
  }
  logIn = () => {
    this.setState({ loggedIn: true });
  }

  render() { 
    return (
      <div className='dashboard'>
        <Grid container spacing={3}>
          <Grid item lg={4}><OnlineToggle /></Grid>
          <Grid item lg={4}><VolumeControl /></Grid>
          <Grid item lg={4}><SoundQuality /></Grid>
        </Grid>
      </div>
    );
  }
}

export default MusicDashboard;