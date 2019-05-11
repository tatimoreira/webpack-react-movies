import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import { ThemeProvider, useTheme } from '@material-ui/styles';

export default createMuiTheme({

  palette: {
    type: "dark",
    primary: {
      light: '#63ccff',
      main: '#2B2C3C',
      dark: '#006db3',
      accent: 'white',
    },
    secondary:{
      main: '#2E74C4',
    },
    textPrimary:{
      main: 'white',
    },
  },
  typography: {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    fontSize: 20,
    color: 'red',
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        textTransform: 'none',
        flexGrow: 1
      }
    },
    MuiDialog : {
      paper: {
        backgroundColor: '#2B2C3C',
      }
    },
    MuiFormControl: {
      root:{
        backgroundColor: '#3E3F52',
      },
    },
    MuiInputLabel: {
      root:{
        color: '#808080'
      }
    },
    MuiInputBase : {
      root:{
        color: '#808080'
      }
    },
    MuiFormLabel: {
      root:{
        color: '#808080'
      },
    },
    MuiDialogTitle: {
      root:{
        marginLeft: '30%'
      },
    },
  }
});