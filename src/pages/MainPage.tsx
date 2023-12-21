import React, {FC, memo, useContext, useState} from "react";
import { Context } from "..";
import LoginForm from "../components/LoginForm";
import { Guild } from "../models/Guild";
import GuildService from "../services/GuildService";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

const MainPage: FC = () => {

    const {store} = useContext(Context);

    return (
        <>
            {store.isAuth ? `User ${store.user.username}` : `unauthorized`}
            MAIN
        </>
    )
}

export default observer(MainPage);
