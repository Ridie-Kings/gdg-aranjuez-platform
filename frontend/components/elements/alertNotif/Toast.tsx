// components/Toast.tsx
import React from 'react';

type ToastProps = {
    // message: string;
    type: 'success' | 'error';
};

const Toast: React.FC<ToastProps> = ({ type }) => {
    const bgColor = type === 'success' ? 'bg-green-700' : 'bg-red-700';
    const textColor = type === 'success' ? 'text-green-200' : 'text-red-200';

    return (
        <div className={`${bgColor} ${textColor} flex justify-between items-center p-4 rounded shadow-lg mb-4 max-w-md mx-auto`}>
            <span className="font-semibold">
                {type === 'success' ? '¡Respuesta Correcta! 🎃' : '¡Respuesta Incorrecta! 👻'}
            </span>
            <span>
                {type === 'success' ? '+10 puntos' : '¡Inténtalo de nuevo!'}
            </span>
        </div>
    );
};

export default Toast;
