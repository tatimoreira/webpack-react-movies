import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from './style';

function MovieAppBar () {
    
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

export default MovieAppBar;