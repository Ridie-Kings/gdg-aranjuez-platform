import Danger from '@/components/icons/danger';
import Garbage from '@/components/icons/garbage';
import React from 'react';

export default function SuppAccount() {
    return (
        <div className="w-full max-w-4xl mx-auto p-12 bg-gray-900  rounded-xl shadow-lg space-y-6">
            {/* Encabezado Zona de Peligro */}
            <div className="flex items-center gap-4 mb-6">
                <Danger size="26" className="text-customRed" />
                <p className="font-display text-2xl text-customRed">Zona de Peligro</p>
            </div>

            {/* Mensaje de advertencia */}
            <p className="text-base text-gray-300">
                Una vez que elimines tu cuenta, no hay vuelta atrás. Tu alma se perderá para siempre en el vacío.
            </p>

            {/* Botón de eliminar cuenta */}
            <button className="flex items-center justify-center w-full max-w-xs py-3 px-6 bg-customRed text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md">
                <Garbage size="24" className="mr-3" />
                Eliminar Cuenta
            </button>
        </div>
    );
}
