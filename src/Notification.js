import React from 'react';
import {Typography, makeStyles, Card, CardActionArea, CardContent, Badge} from '@material-ui/core';
import moment from 'moment';
import './animate.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  }
});

const Notification = (props) => {
  const {notification} = props;
  const classes = useStyles();

  return ( 
    <Badge color="primary" badgeContent={!notification.readStatus ? 'new' : 0} anchorOrigin={{horizontal: 'left', vertical: 'top'}}>
      <Card raised className={`${classes.root} animated fadeIn faster`} key={notification.createdAt} onClick={()=>{props.onReadNotification(notification.id)}}>
        <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant={'h6'}>{notification.message}</Typography>
              <Typography variant={'body2'}>{moment(notification.createdAt).fromNow()}</Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    </Badge>
  );
}

export default Notification;