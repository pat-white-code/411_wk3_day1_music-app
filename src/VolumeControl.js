import React, {Component} from 'react';
import {Card, Typography, Slider, Grid, CardContent, CardActionArea} from '@material-ui/core';

class VolumeControl extends Component {
  state = { 
    sliderValue: 50
  }
  onVolumeChange = (_, value) => {
    this.setState({
      sliderValue: value
    })
  }
  handleLess = () => {
    this.setState({ sliderValue: this.state.sliderValue - 10 });
  }
  handleMore = () => {
    this.state.sliderValue > 60 && this.props.onHighVol()
    this.setState({ sliderValue: this.state.sliderValue + 10 });
  }

  componentDidUpdate(_, prevState) {
    if((prevState.sliderValue < 80) && (this.state.sliderValue > 70)){
      this.props.onHighVol()
    }
  }

  volumeChange = e => {
    this.setState({sliderValue: e.target.value})
    console.log(e)
  }

  render() { 
    return ( 
      <div>
        <Card>
          <CardContent>
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
                <Slider value={this.state.sliderValue} step={10}  onChange={this.onVolumeChange} marks min={0} max={100}/>
              </Grid>
              <Grid item><button onClick={this.handleMore}>more</button></Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default VolumeControl;