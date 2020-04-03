import React from 'react';
import {Typography, Paper} from '@material-ui/core';
import Notification from './Notification';

const NotificationDisplay = (props) => {
  return ( 
    <div>
      <Paper>
        <Typography>
          Notification Center
        </Typography>
      </Paper>
      {props.notifications.map((notification, index) => (
        <Notification 
          key={index}
          notification={notification} />
      ))}
    </div>
  );
}


export default NotificationDisplay;