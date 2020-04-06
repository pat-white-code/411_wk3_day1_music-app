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

  // FIXME:
  // onReadNotification = createdAt => {
  //   let updatedIndex = this.state.notifications.indexOf(notification => notification.createdAt === createdAt)
  //   this.state.notification[updatedIndex].readNotification()
  //   this.setState({ notifications: [...this.state.notifications] });
  // }

  onReadNotification = id => {
    console.log('ID', id)
    let updatedNote = this.state.notifications.filter(notification => notification.id === id)[0];
    console.log('NOTIFICATION', updatedNote)
    let otherNotifications = this.state.notifications.filter(notification => notification.id !== id);
    console.log('OTHER NOTIFICATIONS', otherNotifications)
    updatedNote.readStatus = true;
    this.setState({notifications: [...otherNotifications, updatedNote]})
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

        <div className="notification-display">
          <NotificationDisplay 
            onReadNotification={this.onReadNotification} 
            notifications={this.state.notifications}/>
        </div>
      </div>
    );
  }
}

export default MusicDashboard;