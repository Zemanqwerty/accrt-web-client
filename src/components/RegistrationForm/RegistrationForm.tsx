import React, {FC, memo, useContext, useState} from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router";
import styles from './RegistrationForm.module.scss'

interface ModalType {
    toggle: () => void;
}

const RegistrationForm: FC<ModalType> = (props) => {
    
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context)


    return (
        <>
            <div className={styles.registrationFormWrapper}>
                <h1>REGISTRATION</h1>
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
                <button className={styles.registrationButton} onClick={() => {
                    store.registration(username, password);
                    // props.toggle()
                    }
                }>Registration</button>
            </div>
        </>
    )
}

export default observer(RegistrationForm);