import React from "react";
import styles from "./Login.module";

const User = (onUserChange) => {


    const onUserComplete = (e) => {
        onUserChange(e.target.value);
        console.log(e.target.value);

    }

    return (


        <div classname={styles.userContainer}>
            User: 
            <input type='text'
            onBlur={onUserComplete} 
            />
            
        </div>
    )
}

export default User;