'use client';

import { ChangeEvent, useRef, useState, useTransition } from "react";
import { useActionState } from "react";
import registerAction from "./registerAction";
import Form from "next/form";

export default function RegisterForm() {
  const styleInput = 'p-1 rounded-md bg-white focus:outline-none font-normal text-black';
  const [state, formAction, isPending] = useActionState(registerAction, null);

  


  const handleSubmit = async (formData: FormData) => {
   

      // Passa o formData para o formAction dentro do contexto correto
      formAction(formData);
    
  };

  return (
    <>
      {state?.success === false && (
        <p className="text-red-500">{state?.message}</p>
      )}

      <Form action={formAction} className="flex flex-col bg-red-900 rounded-md p-4  font-bold border-indigo-700 gap-[0.2rem]" onSubmit={(e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário
        const formData = new FormData(e.target as HTMLFormElement);
        handleSubmit(formData); // Envia os dados do formulário com a imagem
      }}>
        <label htmlFor="name">Nome:</label>
        <input name="name" id="name" className={styleInput} type="text" required />

        <label htmlFor="email">Email:</label>
        <input name="email" id="email" className={styleInput} type="email" required />

        <label htmlFor="phone">Telefone:</label>
        <input name="phone" id="phone" className={styleInput} type="text" required />

        <label htmlFor="password">Senha:</label>
        <input name="password" id="password" className={styleInput} type="password" required />

        
        <button
          type="submit"
          disabled={isPending }
          className="w-full bg-blue-500 p-1 rounded-lg flex items-center justify-center"
        >
          {isPending ? "Registrando..." : "Registrar"}
        </button>
      </Form>
    </>
  );
}
