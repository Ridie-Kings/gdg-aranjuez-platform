"use client";
import { useState } from 'react';
import Avatar from '@/components/elements/avatar/avatar';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

interface Comment {
    id: string;
    user: { name: string; avatar: string };
    content: string;
    timeAgo: string;
    replies?: Comment[];
}


export default function DiscusionPage() {
    // const router = useRouter();
    // const { id } = router.query;

    const [newReply, setNewReply] = useState('');
    const [discussion, setDiscussion] = useState<Comment>({
        id: "1",
        user: { name: "Allan_Coc", avatar: "" },
        content: "Para entender la recursividad, primero tengo que entender la recursividad.",
        timeAgo: "2h",
        replies: [
            {
                id: "1",
                user: { name: "DubJ", avatar: "" },
                content: "Mientras estas aprendiendo recursividad, echale un ojo a la recursividad, pero primero aprende de recursividad.",
                timeAgo: "1h"
            }
        ]
    });

    const handleSubmitReply = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReply.trim()) return;

        const newComment = {
            id: Date.now().toString(),
            user: { name: "Tu Usuario", avatar: "" },
            content: newReply,
            timeAgo: "ahora"
        };

        setDiscussion(prev => ({
            ...prev,
            replies: [...(prev.replies || []), newComment]
        }));
        setNewReply('');
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Link 
                href="/foro" 
                className="inline-flex items-center gap-2 text-customOrange hover:text-orange-400 mb-6 transition-colors duration-300"
            >
                <ArrowLeft size={20} />
                Volver al Foro
            </Link>

            <div className="bg-gray-900/80 border-2 border-customOrange rounded-xl p-6 mb-8">
                <div className="flex items-start gap-6">
                    <Avatar />
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-xl font-bold text-customOrange">
                                {discussion.user.name}
                            </h1>
                            <span className="text-customGray text-sm">
                                {discussion.timeAgo}
                            </span>
                        </div>
                        <p className="text-white leading-relaxed">
                            {discussion.content}
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-bold text-orange-400 flex items-center gap-2">
                    <MessageCircle size={24} />
                    Respuestas
                </h2>

                {discussion.replies?.map((reply) => (
                    <div 
                        key={reply.id}
                        className="bg-gray-900/60 border border-orange-800/50 rounded-xl p-6 ml-8"
                    >
                        <div className="flex items-start gap-6">
                            <Avatar />
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-customOrange">
                                        {reply.user.name}
                                    </h3>
                                    <span className="text-customGray text-sm">
                                        {reply.timeAgo}
                                    </span>
                                </div>
                                <p className="text-white leading-relaxed">
                                    {reply.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                <form onSubmit={handleSubmitReply} className="mt-8">
                    <div className="flex gap-4">
                        <Avatar />
                        <textarea
                            value={newReply}
                            onChange={(e) => setNewReply(e.target.value)}
                            placeholder="Escribe tu respuesta..."
                            className="flex-1 bg-gray-900/60 border border-orange-800/50 rounded-xl p-4 text-white resize-none h-32 focus:outline-none focus:border-customOrange transition-colors duration-300"
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-customOrange text-black px-6 py-2 rounded-lg font-bold hover:bg-orange-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            disabled={!newReply.trim()}
                        >
                            Responder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}