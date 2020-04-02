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
      {props.notifications.map(notification => (
        <Notification 
          onReadNotification={props.onReadNotification}
          notification={notification} />
      ))}
    </div>
  );
}


export default NotificationDisplay;


{/* <Paper key={notification.createdAt}>
          {!notification.readStatus && (
            <Typography>'****'</Typography>
          )}
          <Typography>{notification.message}</Typography>
          <Typography>{moment(notification.createdAt).fromNow()}</Typography>
        </Paper> */}