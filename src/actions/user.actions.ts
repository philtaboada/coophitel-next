'use server';
import { cookies } from "next/headers";
import axios from "axios";

let URL = 'http://localhost:3000'

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
    try {
        const user = await axios.get(`${URL}/auth/${userId}`)

        return user.data
    } catch (error) {
        console.log(error)
    }
}

export const login = async ({ email, password }: signInProps) => {
    try {
        const tokenJWT = await axios.post(`${URL}/auth/login`, { email, password })

        if (tokenJWT.data && tokenJWT.data.token) {
            cookies().set(
                "jwt-token",
                tokenJWT.data.token,
                {
                    path: "/",
                    httpOnly: true,
                    sameSite: "strict",
                    secure: true,
                }
            );

            return 'ok';
        } else {
            throw new Error('Token no recibido');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return 'error';
    }
}

export const SignUp = async ({ password, ...userData }: SignUpParams) => {

    try {
        const tokenJWT = await axios.post(`${URL}/auth/register`, { password, ...userData })

        cookies().set(
            "jwt-token",
            tokenJWT.data.token,
            {
                path: "/",
                httpOnly: true,
                sameSite: "strict",
                secure: true,
            }
        )

        return 'ok'
    } catch (error) {
        console.error('Error', error);
    }
}

export const getLoggedIn = () => {
    return !!cookies().get("jwt-token")
};

export const logoutAccount = async () => {
    try {
        cookies().delete("jwt-token");

        await axios.post(`${URL}/auth/logout`)
    } catch (error) {
        return null;
    }
}