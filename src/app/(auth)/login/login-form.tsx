'use client'
import loginAction from "./loginAction";
import Form  from "next/form";
import { useActionState } from "react";	
export default function  LoginForm() {
    const styleInput = 'p-1 rounded-md focus:outline-none font-normal';
    const wrappedLoginAction = async (state: any, formData: FormData) => {
        const result = await loginAction(formData);
        return { error: result.message, success: result.success, message: result.message };
    };
    const [state, formAction, isPending] = useActionState(wrappedLoginAction, null);
    return(
        <>
        {state?.success === false &&(
            <p className="text-red-500">{state?.message}</p>
        )}
        <Form action={formAction} className="flex flex-col bg-red-900 rounded-md p-4  font-bold border-indigo-700 gap-[0.2rem]">
                    {/* FUI JANTAR */}

                    <label htmlFor="email">Email:</label>
                    <input name="email" id="email" className={styleInput} type="email" required />

                    <label htmlFor="password">Senha:</label>
                    <input name="password" id="password" className={styleInput} type="password" required />

                    <button  type="submit" className="w-full bg-blue-500 p-1 rounded-lg flex items-center justify-center">Entrar</button>
        </Form>
        </>
    )
}