import React, {FC} from "react";
import styles from './LoginRegistrationSwitch.module.scss'

interface PromptTypes {
    showLogin: () => void;
    showRegistration: () => void;
}

const LoginRegistrationSwitch: FC<PromptTypes> = (prompt) => {
    return (
        <>
            <div className={styles.switchBlock}>
                <button onClick={() => prompt.showLogin()} className={styles.switchButton}>Login</button>
                <button onClick={() => prompt.showRegistration()} className={styles.switchButton}>Registration</button>
            </div>
        </>
    )
}

export default LoginRegistrationSwitch;