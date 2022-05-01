import React from 'react'
import { Box, Grid, Button, Paper, Slider, Typography } from '@material-ui/core';
import { useState } from 'react';

function MySlider(title, defaultval, minval, maxval) {

  const [sliderVal, setSliderVal] = useState(defaultval);

  return{ 
    render:(
    <div>

<Grid container justify = "center">
<Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <Slider
  defaultValue={defaultval}
  valueLabelDisplay="auto"
  step={1}
  value={sliderVal}
  marks
  min={minval}
  max={maxval}
  onChange={(_, newValue) => setSliderVal(newValue)}
/>
    </Box>
    </Grid>
    </div>
  ),
  sliderVal
}
}

export default MySlider
