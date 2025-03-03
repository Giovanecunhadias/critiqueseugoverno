'use server'

import { signIn } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect-error";


export default async function loginAction( formData: FormData) {
    try{await signIn('credentials', {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        redirect: true,
        redirectTo: '/home',
    }
    )
        return{success: true};
    }catch(e: any){
        if(isRedirectError(e)){
            throw e
        }
        if(e.type === 'CredentialsSignin'){ return{success: false, message: 'Suas crendencias incorretas'}};
       return{success: false, message: 'Ocorreu um erro'}
    }
}