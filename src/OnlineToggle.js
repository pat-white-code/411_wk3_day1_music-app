import React, {Component} from 'react';
import {Card, CardContent, Typography, Switch, FormControlLabel} from '@material-ui/core';

class OnlineToggle extends Component {
  state = { 
    isOnline: false
  }

  toggleOnline = () => {
    this.state.isOnline && this.props.onOffline();
    this.setState({isOnline: !this.state.isOnline})
  }



  render() { 
    return ( 
      <Card>
        <CardContent>
          <Typography>
            Online Mode
          </Typography>
          <Typography>
            Is this connected to the internet?
          </Typography>
          <FormControlLabel control={
            <Switch 
              checked={this.state.isOnline}
              onChange={this.toggleOnline} 
              color='primary'
              name='isOnline' />} />
        </CardContent>
      </Card>
    );
  }
}
export default OnlineToggle;