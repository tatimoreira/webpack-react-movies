
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { TransitionGroup } from "react-transition-group";
//import { store, createPerson } from "./redux";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from './components/Style/Theme';

import { ModalProvider, useModal } from "react-modal-hook";

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ModalProvider container={TransitionGroup}>
      <App />
    </ModalProvider>
  </MuiThemeProvider>,
  document.getElementById('app')
);

module.hot.accept();