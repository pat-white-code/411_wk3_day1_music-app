import React, {Component} from 'react';
import {Grid, Container} from '@material-ui/core';
import './dashboard.css';
import OnlineToggle from './OnlineToggle';
import VolumeControl from "./VolumeControl";
import SoundQuality from './SoundQuality';
import NotificationDisplay from './NotificationDisplay';
import moment from 'moment';

class MusicDashboard extends Component {
  state = { 
    notifications: [],
  }

  // FIXME:
  // onReadNotification = createdAt => {
  //   let updatedIndex = this.state.notifications.indexOf(notification => notification.createdAt === createdAt)
  //   this.state.notification[updatedIndex].readNotification()
  //   this.setState({ notifications: [...this.state.notifications] });
  // }

  onOffline = () => {
    this.setState({
      notifications: [...this.state.notifications, 
        {
          message: "Your application is offline. You won't be able to share or stream music to other devices.",
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
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
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item lg><OnlineToggle onOffline={this.onOffline}/></Grid>
            <Grid item lg><VolumeControl onHighVol={this.onHighVol}/></Grid>
            <Grid item lg><SoundQuality onLowQuality={this.onLowQuality}/></Grid>
          </Grid>
        </Container>
        <NotificationDisplay 
          onReadNotification={this.onReadNotification} 
          notifications={this.state.notifications}/>
      </div>
    );
  }
}

export default MusicDashboard;