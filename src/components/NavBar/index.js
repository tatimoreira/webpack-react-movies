import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

/*const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    divider: {
        borderRight: '0.02em solid #393A48',
        padding: '1.9em'
    },
    signIn_button: {
        borderRadius: '16px',
        color: '#2E74C4'
    },
    navBar: {

    }
};*/

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    divider: {
        borderRight: '0.02em solid #393A48',
        padding: '1.9em'
    },
    signIn_button: {
        borderRadius: '16px',
        color: '#2E74C4'
    }
  });

const MovieAppBar = (props) => {
    
    const classes  = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    
                    <Typography variant="h6" color="inherit" className={classes.grow}></Typography>
                    <Button >Top rated</Button>
                    <Button color="inherit">Movies</Button>
                    <Button color="inherit">Discover</Button>
                    <span className={classes.divider}></span>
                    <Button color="inherit" >Login</Button>
                    <Button variant="contained" className={classes.signIn_button}>Sing up</Button>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default (MovieAppBar);