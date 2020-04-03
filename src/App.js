import React, {Component} from 'react';
import './App.css';
import MusicDashboard from './MusicDashboard';
import {AppBar, Typography, Toolbar} from '@material-ui/core';
import LogIn from './LogIn';

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
        <Toolbar>
          <Typography>
            Music Dashboard
          </Typography>
        </Toolbar>
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
