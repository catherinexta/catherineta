import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './index.css';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4353FF',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#4F3EF5',
      contrastText: '#FFF'
    },
    error: {
      main: '#6772E5'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    useNextVariants: true,
    fontWeightMedium: 400
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
