import { instance } from "./instance"
import IPost from "../types/IPost"

export const createPost = async (author: string, title: string, text: string, images?: string[]) => {
    const res = await instance.post("posts/create", {
        title,
        text
    })

    return res.data
}



export const getPosts = async () => {
    
}