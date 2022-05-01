import React from 'react'
import Lorem from './components/Lorem';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Grid, Button, Paper } from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import FadeIn from 'react-fade-in';
import {useEffect} from 'react';
import { useRef } from 'react';

function Popup() {
  return (
    <div className="fadebox-container">
    <FadeIn>
    <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    <strong>Text Copied!</strong>
    </Alert>
    </FadeIn>
    </div>
  )
}

export default Popup