import Ghost from '@/components/icons/ghost';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import Twitter from '@/components/icons/twitter';
import React from 'react';

export default function Social() {
    return (
        <div className="w-full max-w-4xl mx-auto p-12 bg-gray-900 rounded-xl shadow-lg space-y-10">
            {/* Encabezado de Redes Sociales */}
            <div className="flex items-center gap-4 mb-8">
                <Ghost size="55" color="#FF7518" />
                <p className="font-display text-5xl text-white">Redes Sociales</p>
            </div>

            {/* Campos de Redes Sociales */}
            <div className="flex flex-col gap-8">
                {/* Github */}
                <div className="flex flex-col gap-3">
                    <label className="font-bold text-2xl text-customOrange flex items-center gap-4">
                        <Github size="28" />
                        Github
                    </label>
                    <input
                        type="text"
                        className="font-medium border border-customOrange px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow duration-300"
                        placeholder="Tu usuario de Github"
                    />
                </div>

                {/* Twitter */}
                <div className="flex flex-col gap-3">
                    <label className="font-bold text-2xl text-customOrange flex items-center gap-4">
                        <Twitter size="28" />
                        Twitter
                    </label>
                    <input
                        type="text"
                        className="font-medium border border-customOrange px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow duration-300"
                        placeholder="Tu usuario de Twitter"
                    />
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col gap-3">
                    <label className="font-bold text-2xl text-customOrange flex items-center gap-4">
                        <Linkedin size="28" />
                        LinkedIn
                    </label>
                    <input
                        type="text"
                        className="font-medium border border-customOrange px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-customOrange transition-shadow duration-300"
                        placeholder="URL de tu perfil de LinkedIn"
                    />
                </div>
            </div>
        </div>
    );
}
