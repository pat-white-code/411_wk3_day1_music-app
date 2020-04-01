import React, {Component} from 'react';
import {Card, Typography, Slider, Grid} from '@material-ui/core';

class VolumeControl extends Component {
  state = { 
    sliderValue: 50
  }
  onVolumeChange = e => {
    this.setState({
      sliderValue: e.target.value
    })
  }
  handleLess = e => {
    this.setState({ sliderValue: this.state.sliderValue - 10 });
  }
  handleMore = e => {
    this.setState({ sliderValue: this.state.sliderValue + 10 });
  }

  volumeChange = e => {
    this.setState({sliderValue: e.target.value})
    console.log(e)
  }

  render() { 
    return ( 
      <div>
        <Card>
          <Typography>
            Master Volume
          </Typography>
          <Typography>
            This controls the Value
          </Typography>
          <Grid container spacing={2}>
            <Grid item><button onClick={this.handleLess}>less</button></Grid>
            <Grid item xs>
            {/* *******Couldn't get this to work :( wouldnt event.target.value was null and got error about controlled/uncontrolled components.
            
            <Slider
              value={this.state.sliderValue}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
              onChange={this.volumeChange}
      /> */}
              <Slider value={this.state.sliderValue} onChange={this.onVolumeChange}/>
            </Grid>
            <Grid item><button onClick={this.handleMore}>more</button></Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default VolumeControl;