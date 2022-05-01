import React from 'react';
import './App.css';
import Lorem from './components/Lorem';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Grid, Button, Paper } from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from 'react-dom';



import MySlider from './components/MySlider';




function App() {
  
  // (title, defaultval, min, max)
  var {render, sliderVal} = MySlider("Number of Paragraphs", 5, 1, 10);
  var {render:render1, sliderVal:sliderVal1} = MySlider("Average Words per Sentence", 10, 3, 20);
  var {render:render2, sliderVal:sliderVal2} = MySlider("Average Sentences per Paragraph", 6, 3, 20);
  
  var collection = "";
  function populate(){
    var collection = document.getElementsByClassName("text-wrapper")[0].innerText;
    console.log(collection);
    navigator.clipboard.writeText(collection);
  }
  
  
  //var inner = txt.innerText;
  //console.log(inner);

  
  return (
    <div>
 
    
    <Container maxWidth="sm" className="App">
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Lorem Ipsum Generator
          </Typography>
        
        {render}
        {render1}
        {render2}
        
        <Grid container justify = "center">
        
      
          
     
          <Button variant="contained" color="primary" onClick={populate}>
          Copy to Clipboard
          </Button>
 
          
        
       
        </Grid>

        </Paper>
</Container>
<Lorem paragraphs = {sliderVal} avgw = {sliderVal1} avgs = {sliderVal2} />




     
     
      
        
      </div>
  );
}
export default App;