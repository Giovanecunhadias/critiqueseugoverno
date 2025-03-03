import db from "@/lib/db";

export default async function Posts() {
    const postslist = await db.posts.findMany({
        include: {
            user: { select: { name: true } }, // Inclui o nome do usuário no post
        },
    });

    return (
        <div className="flex flex-col gap-4 pt-2">
            {postslist.map((post) => (
                <div key={post.id} className="flex w-full justify-center items-center">
                    <div className="flex flex-col items-center bg-white w-[40vw] h-fit rounded-md p-4">
                        <h1 className="text-5xl font-bold text-red-900 w-fit h-fit">
                            {post.title}
                        </h1>
                        <p className="text-xl text-black w-fit h-fit">{post.content}</p>
                        <p className="text-md text-gray-500">
                            Postado por: {post.user?.name || "Usuário desconhecido"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
