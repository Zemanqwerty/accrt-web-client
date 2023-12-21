import React, {FC, memo} from "react";
import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <>
        <div className={styles.footer}>
            FOOTER
        </div>
        </>
    )
};

export default memo(Footer);