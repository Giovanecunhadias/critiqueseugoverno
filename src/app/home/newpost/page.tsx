import PostForm from "./post-form";
import { auth } from "@/auth";
import {redirect} from "next/navigation";
export default async function NewPost (){
    const session = await auth();
    if(!session){
        return redirect('/login')
    }
    return(
        <PostForm/>
    )
}