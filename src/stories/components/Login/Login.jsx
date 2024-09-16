import React, {useState} from "react";
import User from "./User";
import Password from "./Password";
import Button from "./Button";
import styles from "./Login.module";


const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    return (

        <div classname={styles.loginContainer}>
        <User onUserChange={setUser}/>
        <Password onUserChange={setPassword}/>
        <Button />
        
        </div>
    )
};

export default Login;