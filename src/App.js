import React, {Component} from 'react';
import './App.css';
import MusicDashboard from './MusicDashboard';
import {AppBar, Typography} from '@material-ui/core';
import LogIn from './LogIn';
import NotificationDisplay from './NotificationDisplay'

class App extends Component {
  state = { 
    loggedIn: true
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
        <LogIn 
          logIn = {this.logIn}
        />
        :
        <div>
          <MusicDashboard />
        </div>
      }
      </div>
    );
  }
}

export default App;
