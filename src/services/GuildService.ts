import { AxiosResponse } from "axios";
import $api from "../http";
import { Guild } from "../models/Guild";

export default class GuildService {
    static async getGuilds(): Promise<AxiosResponse<Guild[]>> {
        return $api.get<Guild[]>('/guilds/all');
    }
}