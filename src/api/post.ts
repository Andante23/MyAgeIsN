import axios from "axios";
import Post from "../types/Post"




export async function getData():Promise<Post[]>  {


    const response = await axios.get(`${import.meta.env.VITE_API_SERVER_URL}`);

    return response.data

}


export async function postData(newPost:Post) {

    await axios.post(`${import.meta.env.VITE_API_SERVER_URL}`,newPost);
}








