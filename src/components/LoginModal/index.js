import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { useStyles } from './style';

const LoginModal = ({

    onClose,
    ...rest
}) => {

    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.log(userName, password);
    return (
        <Dialog
            className={classes.backGround}
            {...rest}
            onClose={onClose}
            aria-labelledby="person-dialog-slide-title"
        >
            <form >
                <DialogTitle id="person-dialog-slide-title">
                    Log In
                </DialogTitle>
                <DialogContent>
                    <div>
                        <TextField
                            id="username"
                            label="User Name"
                            value={userName}
                            onChange={({ target }) => setUserName(target.value)}
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            margin="normal"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" type="submit" color="secondary">Login</Button>
                    <br />
                </DialogActions>
                <DialogActions>
                    <Typography className={classes.textColor}>
                        Dont have account?
                        <Link href="https://www.w3schools.com" color="secondary">Sign up</Link>
                        <span className={classes.recoverPassword}>Recover password</span>
                    </Typography>
                </DialogActions>


            </form>
        </Dialog >
    );
}
export default LoginModal;