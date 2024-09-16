import React from "react";
import styles from "./Login.module";

const Password = () => {

    const onUserComplete = (e) => {
        onUserChange(e.target.value);
    }

    return (

        <div classname={styles.passwordContainer}>
            Password:
            <input type='text' 
            onChange={onUserComplete}/>
        </div>
    )
};

export default Password;