import axios from "axios";
import Post from "../types/Post"




export async function getData():Promise<Post[]>  {


    const response = await axios.get(`http://localhost:4000/post`);

    return response.data

}


export async function postData(newPost:Post) {

    await axios.post(`http://localhost:4000/post`,newPost);
}








