"use client";
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Avatar from '@/components/elements/avatar/avatar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NewDiscussionPage() {
    // const router = useRouter();
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic.trim() || !content.trim()) return;
        console.log("foro");
        // router.push('/foro');
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

            <div className="bg-gray-900/80 border-2 border-customOrange rounded-xl p-6">
                <h1 className="text-2xl font-bold text-orange-400 mb-6">Crear Nueva Discusión</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="topic" className="block text-white mb-2">
                            Tema
                        </label>
                        <input
                            type="text"
                            id="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="w-full bg-gray-900/60 border border-orange-800/50 rounded-xl p-4 text-white focus:outline-none focus:border-customOrange transition-colors duration-300"
                            placeholder="Escribe el tema de la discusión..."
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-white mb-2">
                            Contenido
                        </label>
                        <div className="flex gap-4">
                            <Avatar />
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="flex-1 bg-gray-900/60 border border-orange-800/50 rounded-xl p-4 text-white resize-none h-48 focus:outline-none focus:border-customOrange transition-colors duration-300"
                                placeholder="Escribe el contenido de tu discusión..."
                            />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="bg-customOrange text-black px-8 py-3 rounded-lg font-bold hover:bg-orange-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            disabled={!topic.trim() || !content.trim()}
                        >
                            Publicar Discusión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}