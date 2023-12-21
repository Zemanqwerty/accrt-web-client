import React, {FC, memo, useContext} from "react";
import styles from './Header.module.scss';
import Store from "../../store/store";
import { Context } from "../..";
import useModal from "../../hooks/useModal";
import LoginForm from "../../components/LoginForm";
import ModalWindow from "../../components/ModalWindow";
import AuthModal from "../../components/AuthModal";
import { observer } from "mobx-react-lite";
import { Link, BrowserRouter } from "react-router-dom";

const Header: FC = () => {

    const {store} = useContext(Context);

    const { isOpen, toggle } = useModal();

    return (
        <>
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.headerLogo}>

                </div>
                <div className={styles.headerMenu}>
                    {/* <BrowserRouter> */}
                        <ul>
                            <li>
                                <Link to="/" className={styles.menuEl}>Community</Link>
                            </li>
                            <li>
                                <Link to="/teams" className={styles.menuEl}>Teams</Link>
                            </li>
                        </ul>
                    {/* </BrowserRouter> */}
                </div>
                <div className={styles.headerLogin}>
                    {store.isAuth
                        ? <div onClick={toggle} className={styles.userInfo}>{store.user.username}</div>
                        : <div onClick={toggle} className={styles.loginButton}>Login</div>
                    }
                </div>
            </div>
        </div>
        <ModalWindow isOpen={isOpen} toggle={toggle}>
            <AuthModal toggle={toggle}/>
        </ModalWindow>
        </>
    )
};

export default observer(Header);