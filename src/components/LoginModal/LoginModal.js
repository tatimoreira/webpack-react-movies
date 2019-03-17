import React, {useState} from 'react';

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.log(userName, password);
    return(
        <div>
            <form>
                <label formHtml="userName">User Name</label>
                <input
                    name="userName"
                    value={userName}
                    onChange={({target}) => setUserName(target.value)}
                ></input>
                <label formHtml="password">Password</label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                ></input>
            </form>
        </div>
    );
}
export default Login;