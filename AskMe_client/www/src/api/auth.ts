import { IUser } from "../types/IUser";
import { instance } from "./instance"



export const regHandler = async (username: string, email: string, fullname: string, gender: string, password: string): Promise<IUser> => {
    const res = await instance.post('auth/registration', {
        username,
        email,
        fullname,
        gender,
        password
    });

    return res.data;
}