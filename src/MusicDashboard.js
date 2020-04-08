import React, {Component} from 'react';
import {Grid, Container} from '@material-ui/core';
import './dashboard.css';
import OnlineToggle from './OnlineToggle';
import VolumeControl from "./VolumeControl";
import SoundQuality from './SoundQuality';
import NotificationDisplay from './NotificationDisplay';
import moment from 'moment';
import SoundQualityHooks from './SoundQualityHooks';

class MusicDashboard extends Component {
  state = { 
    notifications: [],
    notificationCount: 0
  }

  onReadNotification = id => {
    console.log('ID',id)
    let updatedNote = this.state.notifications.filter(notification => notification.id === id)[0];
    let otherNotifications = this.state.notifications.filter(notification => notification.id !== id);
    updatedNote.readStatus = true;
    // put notifications back in previous order
    let updatedNotifications = [...otherNotifications, updatedNote].sort((a, b)=>{return a.id - b.id})
    this.setState({notifications: updatedNotifications})
  }

  onOffline = () => {
    this.setState({
      notifications: [...this.state.notifications, 
        {
          message: "Your application is offline. You won't be able to share or stream music to other devices.",
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
          readStatus:false,
          id: this.state.notificationCount + 1
      }],
      notificationCount: this.state.notificationCount + 1
    })
  }
  onHighVol = () => {
    this.setState({
      notifications: [...this.state.notifications, 
        {
          message: "Listening to music at a high volume could cause long-term hearing loss.",
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
          readStatus:false
      }]
    })
  }
  onLowQuality = () => {
    this.setState({
      notifications: [...this.state.notifications, 
        {
          message: "Music quality is degraded. Increase quality if your connection allows it.",
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
          readStatus:false
      }]
    })
  }

  render() { 
    return (
      <div>
        <div className="dashboard">
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <Grid item lg><OnlineToggle onOffline={this.onOffline}/></Grid>
              <Grid item lg><VolumeControl onHighVol={this.onHighVol}/></Grid>
              <Grid item lg><SoundQuality onLowQuality={this.onLowQuality}/></Grid>
              <Grid item lg><SoundQualityHooks onLowQuality={this.onLowQuality}/></Grid>
            </Grid>
          </Container>
        </div>
          <NotificationDisplay 
            onReadNotification={this.onReadNotification} 
            notifications={this.state.notifications}/>
      </div>
    );
  }
}

export default MusicDashboard;