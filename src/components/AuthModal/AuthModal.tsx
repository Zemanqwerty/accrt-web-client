import React, {FC, useContext, useState} from "react";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import AccountBlock from "../AccountBlock";
import LoginRegistrationSwitch from "../LoginRegistrationSwitch";
import styles from './AuthModal.module.scss'

interface ModalType {
    toggle: () => void;
}

const AuthModal: FC<ModalType> = (props) => {

    const [activeAuthBlock, setActiveAuthBlock] = useState(<LoginForm toggle={props.toggle} />);

    const showRegistrationBlock = () => {
        setActiveAuthBlock(<RegistrationForm toggle={props.toggle} />);
    }

    const showLoginBlock = () => {
        setActiveAuthBlock(<LoginForm toggle={props.toggle} />);
    }

    const {store} = useContext(Context)

    return (
        <>
            {store.isAuth
            ? <AccountBlock />
            : activeAuthBlock}
            <br />
            {store.isAuth
            ? <div className={styles.userLogout} onClick={() => store.logout()}>Logout</div>
            : <LoginRegistrationSwitch showLogin={showLoginBlock} showRegistration={showRegistrationBlock} />}
            
        </>
    )
}

export default observer(AuthModal);