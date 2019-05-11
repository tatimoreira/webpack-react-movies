import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useModal } from "react-modal-hook";
import {useStyles} from './style';
import { connect } from "react-redux";

import LoginModal from '../LoginModal';

function MovieAppBar () {

    const [showLoginModal, hideLoginModal] = useModal(
        ({ in: open, onExited }) => (
          <LoginModal
            open={open}
            onExited={onExited}
            onClose={hideLoginModal}
          />
        )
      );
    
    const classes  = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}></Typography>
                    <Button >Top rated</Button>
                    <Button >Movies</Button>
                    <Button >Discover</Button>
                    <span className={classes.divider}></span>
                    <Button  onClick={showLoginModal}>Login</Button>
                    <Button variant="contained" className={classes.signIn_button}>Sing up</Button>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default MovieAppBar;