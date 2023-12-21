import axios from "axios";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import { makeAutoObservable } from "mobx";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import GuildService from "../services/GuildService";
import { Guild } from "../models/Guild";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    response: string = '';
    guildsList = [] as Guild[];

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setResponse(message: string) {
        this.response = message;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }



    async login(username: string, password: string) {
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }

    async registration(username: string, password: string) {
        try {
            const response = await AuthService.registration(username, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true});

            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    async getGuildsList() {
        try {
            const response = await GuildService.getGuilds();
            this.guildsList = response.data;
        } catch (e) {
            console.log(e);
        }
    }
}