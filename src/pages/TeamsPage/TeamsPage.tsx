import React, {FC, memo, useContext, useEffect, useState} from "react";
import { Guild } from "../../models/Guild";
import GuildService from "../../services/GuildService";
import { Context } from "../..";
import { AxiosResponse } from "axios";

const TeamsPage: FC = () => {

    const {store} = useContext(Context);
    
    const [guilds, setGuilds] = useState<Guild[]>([]);

    useEffect(() => {
      const f = async () => {
        const response = await GuildService.getGuilds();
        console.log(response.data);
        setGuilds(response.data)
      }

      f()
    }, []);

    return (
        <>
        {guilds.map(guild => 
          // console.log('guild ', guild.guildName);
          <div className="">g - {guild.guildName}</div>
        )}
        </>
    )
};

export default memo(TeamsPage);