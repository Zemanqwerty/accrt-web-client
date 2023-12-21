import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/sign-in', {username, password});
    }

    static async registration(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('auth/sign-up', {username, password});
    }

    static async logout(): Promise<void> {
        return $api.get('/auth/logout');
    }
}