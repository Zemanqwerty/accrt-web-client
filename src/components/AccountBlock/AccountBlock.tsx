import { observer } from "mobx-react-lite";
import React, {FC, useContext} from "react";
import { Context } from "../..";
import styles from './AccountBlock.module.scss';

const AccountBlock: FC = () => {

    const {store} = useContext(Context)

    return (
        <>
            <div className={styles.userData}>
                {store.user.username}
            </div>
        </>
    )
};

export default observer(AccountBlock);