'use server'
import db from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from 'next/navigation';

export default async function postAction(_prevState: any, formData: FormData) {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
        return {
            error: 'Usuário não autenticado.',
            success: false,
        };
    }

    // Obtém o ID do usuário autenticado
    const user = await db.user.findUnique({
        where: { email: session.user.email },
        select: { id: true }, 
    });

    if (!user) {
        return {
            error: 'Usuário não encontrado no banco de dados.',
            success: false,
        };
    }

    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        title: string,
        content: string,
    };

    if (!data.title || !data.content) {
        return {
            error: 'Preencha todos os campos',
            success: false,
        };
    }

    // Criar o post associando ao usuário autenticado
    await db.posts.create({
        data: {
            title: data.title,
            content: data.content,
            userId: user.id, // Correção: usamos `userId`, não `user`
        },
    });

    return redirect('/home/posts');
}
