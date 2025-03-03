import {auth} from'@/auth'
import { redirect } from 'next/navigation';
import Nav from "@/components/ui/Nav";
import TypingText from "@/components/ui/TypingText";
export default async function Home (){
    const session = await auth();

    return(
        <></>
    )
}