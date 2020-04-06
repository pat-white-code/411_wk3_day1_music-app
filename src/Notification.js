import React, { useState } from 'react';
import {Typography, makeStyles, Card, Button} from '@material-ui/core';
import moment from 'moment';
import './animate.css';

const useStyles = makeStyles({
  root: {
    padding: 10,
    maxWidth: 500,
    maxHeight: 100,
  }
});

const Notification = (props) => {
  // const [readStatus, setReadStatus] = useState(false)

  // const onRead = (id) => {
  //   setReadStatus(true)
  //   // FIXME: this.props.onReadNotification(createdAt)
  // }


  const {notification} = props;
  const classes = useStyles();

  return ( 
    <Card className={`${classes.root} animated fadeIn faster`} key={notification.createdAt} onClick={()=>{props.onReadNotification(notification.id)}}>
        {!props.notification.readStatus && (
          <div>
            <Typography color='secondary' variant='button'>Unread</Typography>
            <Button color='secondary' variant='button'>Unread</Button>
          </div>
        )}
        <Typography>{notification.message}</Typography>
        <Typography>{moment(notification.createdAt).fromNow()}</Typography>
      </Card>
  );
}

export default Notification;