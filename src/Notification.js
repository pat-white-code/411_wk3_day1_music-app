import React, { Component } from 'react';
import {Typography, Paper} from '@material-ui/core';
import moment from 'moment';

class Notification extends Component {
  state = { 
    readStatus: false
  }
  onRead = () => {
    this.setState({ readStatus: true });
    // FIXME: this.props.onReadNotification(createdAt)
  }

  render() { 
    const {notification} = this.props;

    return ( 
      <Paper key={notification.createdAt} onClick={this.onRead}>
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