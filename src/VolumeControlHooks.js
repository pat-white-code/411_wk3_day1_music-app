import React, {useState, useRef, useEffect} from 'react';
import {Card, Typography, Slider, CardContent} from '@material-ui/core';

const VolumeControlHooks = props => {
  const [sliderValue, setSliderValue] = useState(50)

  const onVolumeChange = (_, value) => {
    setSliderValue(value)
  }

  const prevVolumeRef = useRef();
  useEffect(() => {
    prevVolumeRef.current = sliderValue;
  });
  const prevVolume = prevVolumeRef.current;

  useEffect(()=>{
    if(prevVolume < 80 && sliderValue > 70) {
      props.onHighVol()
    }
  })

  return ( 
    <div>
      <Card raised>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            Master Volume
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            This controls the Value
          </Typography>
          <Slider value={sliderValue} onChange={onVolumeChange} step={10} marks min={0} max={100}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default VolumeControlHooks;