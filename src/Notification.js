import React, { Component } from 'react';
import {Typography, Paper} from '@material-ui/core';
import moment from 'moment';

class Notification extends Component {
  state = { 
    readStatus: false
  }
  onRead = (createdAt) => {
    this.setState({ readStatus: true });
    this.props.onReadNotification(createdAt)
  }

  render() { 
    const {notification} = this.props;

    return ( 
      <Paper key={notification.createdAt} onClick={()=>this.onRead(notification.createdAt)}>
          {!this.state.readStatus && (
            <Typography>'*UNREAD*'</Typography>
          )}
          <Typography>{notification.message}</Typography>
          <Typography>{moment(notification.createdAt).fromNow()}</Typography>
        </Paper>
    );
  }
}

export default Notification;