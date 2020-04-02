import React, {Component} from 'react';
import { Card, Typography, Select, MenuItem } from '@material-ui/core';

class SoundQuality extends Component {
  state = { 
    level: 3
  }

  handleChange = e => {
    e.target.value === 1 && this.props.onLowQuality()
    this.setState({ level: e.target.value });
  }


  render() { 
    return ( 
      <Card>
        <Typography>
          Sound Quality
        </Typography>
        <Typography>
          Control the quality of your sound
        </Typography>
        <Select onChange={this.handleChange} defaultValue={3}>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </Card>
    );
  }
}

export default SoundQuality;