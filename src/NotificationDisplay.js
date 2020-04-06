import React from 'react';
import {Typography, Badge} from '@material-ui/core';
import Notification from './Notification';
import MailIcon from '@material-ui/icons/Mail';

const NotificationDisplay = (props) => {
  return ( 
    <div>
      <Typography color="primary" gutterBottom variant='h2'>
        Notification Center
      </Typography>
      <Badge color="secondary" badgeContent={props.notifications.length} showZero>
        <MailIcon />
      </Badge>
      <div className="notification-display">
        {props.notifications.map((notification, index) => (
          <Notification 
            key={index}
            notification={notification}
            onReadNotification = {props.onReadNotification} />
        ))}
      </div>
    </div>
  );
}


export default NotificationDisplay;