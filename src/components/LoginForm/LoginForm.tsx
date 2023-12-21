import React, {FC, memo, useContext, useState} from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router";
import styles from './LoginForm.module.scss'

interface ModalType {
    toggle: () => void;
}

const LoginForm: FC<ModalType> = (props) => {
    
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context)


    return (
        <>
            <div className={styles.loginFormWrapper}>
                <h1>LOGIN</h1>
                <input
                    className={styles.inputForm}
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="Login..."
                />
                <input
                    className={styles.inputForm}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password..."
                />
                <button className={styles.loginButton} onClick={() => {
                    store.login(username, password);
                    }
                }>Login</button>
            </div>
        </>
    )
}

export default observer(LoginForm);