import Avatar from '../avatar/avatar';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

interface Comment {
    id: string;
    user: { name: string, avatar: string };
    content: string;
    timeAgo: string;
    topic: string;
    replies?: number;
}

interface ForoProps {
    comments: Comment[];
}

export default function ForoContent({ comments }: ForoProps) {
    return (
        <div className="p-6 m-8 rounded-xl">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold  text-orange-400 flex items-center gap-3">
                    <span className="text-4xl text-shadow-glow">🔥</span>
                    Actividad Reciente
                </h1>
                <Link 
                    href="/foro/nuevo"
                    className="flex items-center gap-2 bg-customOrange text-black px-4 py-2 rounded-lg font-bold hover:bg-orange-500 transition-all duration-300 hover:scale-105"
                >
                    <PlusCircle size={20} />
                    Nuevo Tema
                </Link>
            </div>
            <div className="p-6 rounded-xl border-2 border-customOrange bg-gray-900/50 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-orange-400 flex items-center gap-3 mb-6">
                    🗣️ Discusiones Recientes
                </h2>
                <div className="space-y-6">
                    {comments.map(comment => (
                        <Link 
                            href={`/foro/discusion/${comment.id}`}
                            key={comment.id}
                            className="block"
                        >
                            <div className="bg-gray-900/80 flex items-start gap-6 border border-orange-800 rounded-xl p-6 hover:shadow-[0_0_10px_#FF7518] transition-all duration-300">
                                <Avatar />
                                <div className="flex flex-col w-full space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-customOrange hover:text-orange-400 transition-colors duration-300">
                                            {comment.user.name}
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            <span className="text-customGray text-sm bg-gray-800/80 px-3 py-1 rounded-full">
                                                {comment.replies || 0} respuestas
                                            </span>
                                            <p className="text-customGray text-sm bg-gray-800 px-3 py-1 rounded-full">
                                                {comment.timeAgo}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-customGray text-sm bg-gray-800/50 inline-block px-3 py-1 rounded-full w-fit">
                                        {comment.topic}
                                    </p>
                                    <p className="text-white text-base leading-relaxed pt-2">
                                        {comment.content}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}