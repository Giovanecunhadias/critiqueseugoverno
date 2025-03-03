import Link from "next/link";
import {auth} from "@/auth"
import Form from "next/form";
import logoutAction from "@/src/app/(auth)/(logout)/logoutAction";

export default async function Nav(){  
    const links = ["Home","Posts"];
    const linkStyle = "bg-indigo-500 rounded-md p-2 text-white hover:bg-red-900";
    const session = await auth();
    return(
        <div className="relative">
            <div className="sticky gap-2 bg-white h-16 font-bold text-blue-400 flex justify-center w-full text-center items-center ">
            {links.map((link)=>{
                return ( 
                    <Link className="" key={link} href={`/${link === "Posts" ? "home/posts" : link.toLowerCase()}`}>{link}</Link>
                )
            })}
            
            <div className="flex absolute right-4 items-end gap-2">
                {!session && (
                    <>
                    <Link className={linkStyle} href="/login">Login</Link>
                    <Link className={linkStyle} href="/register">Registro </Link>
                    </>
                    
                )}
                {session && (
                    <>
                    <Form action={logoutAction}><button  className="hover:cursor-pointer" >Logout</button></Form>
                    
                    </>
                )}
                
            </div>
        </div>
        </div>
        
    )
}