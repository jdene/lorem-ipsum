import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import { render } from 'react-dom';
import { LoremIpsum } from 'react-lorem-ipsum';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function Lorem(props) {
  return (
    <Container maxWidth="md" className="App">
    <Paper>
        <div className="text-wrapper">
  <LoremIpsum p={props.paragraphs} avgWordsPerSentence={props.avgw} avgSentencesPerParagraph={props.avgs} />
         </div>
  </Paper>
  </Container>
  )
}

export default Lorem