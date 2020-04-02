import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import './dashboard.css';
import OnlineToggle from './OnlineToggle';
import VolumeControl from "./VolumeControl";
import SoundQuality from './SoundQuality';
import NotificationDisplay from './NotificationDisplay';
import moment from 'moment';

class MusicDashboard extends Component {
  state = { 
    notifications: []
  }
  // logIn = () => {
  //   this.setState({ loggedIn: true });
  // }

  onReadNotification = createdAt => {
    let updatedIndex = this.state.notifications.indexOf(notification => notification.createdAt === createdAt)
    this.state.notification[updatedIndex].readNotification()
    this.setState({ notifications: [...this.state.notifications] });
  }

  onOffline = () => {
    this.setState({
      notifications: [...this.state.notifications, 
        {
          message: "Your application is offline. You won't be able to share or stream music to other devices.",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          readStatus:false,
          readNotification(){
            this.readStatus = true
          }
      }]
    })
  }
  onHighVol = () => {
    this.setState({
      notifications: [...this.state.notifications, 
        {
          message: "Listening to music at a high volume could cause long-term hearing loss.",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          readStatus:false
      }]
    })
  }
  onLowQuality = () => {
    this.setState({
      notifications: [...this.state.notifications, 
        {
          message: "Music quality is degraded. Increase quality if your connection allows it.",
          createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
          readStatus:false
      }]
    })
  }

  render() { 
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item lg={4}><OnlineToggle onOffline={this.onOffline}/></Grid>
          <Grid item lg={4}><VolumeControl onHighVol={this.onHighVol}/></Grid>
          <Grid item lg={4}><SoundQuality onLowQuality={this.onLowQuality}/></Grid>
        </Grid>
        <NotificationDisplay 
          onReadNotification={this.onReadNotification} 
          notifications={this.state.notifications}/>
      </div>
    );
  }
}

export default MusicDashboard;