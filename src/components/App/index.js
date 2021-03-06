import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import theme from '../Style/Theme'
import HomePage from '../HomePage'
import Login from '../LoginModal'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
	return  (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	) 
}