"use client";
import { useState } from 'react';
import { Bell, MessageCircle, Star, ArrowLeft, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface Notification {
    id: string;
    type: 'message' | 'mention' | 'like';
    content: string;
    timeAgo: string;
    read: boolean;
    link: string;
}

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: '1',
            type: 'message',
            content: 'Allan_coc respondió a tu discusión sobre recursividad',
            timeAgo: '2 minutos',
            read: false,
            link: '/foro/discusion/1'
        },
        {
            id: '2',
            type: 'mention',
            content: '@mati-mate te mencionó en una discusión',
            timeAgo: '1 hora',
            read: false,
            link: '/foro/discusion/2'
        },
        {
            id: '3',
            type: 'like',
            content: 'Tu respuesta sobre arrays en JavaScript recibió 5 likes',
            timeAgo: '3 horas',
            read: true,
            link: '/foro/discusion/3'
        }
    ]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'message':
                return <MessageCircle className="text-blue-400" size={20} />;
            case 'mention':
                return <Bell className="text-purple-400" size={20} />;
            case 'like':
                return <Star className="text-yellow-400" size={20} />;
            default:
                return <Bell className="text-orange-400" size={20} />;
        }
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    };

    const deleteNotification = (id: string) => {
        setNotifications(prev => prev.filter(notif => notif.id !== id));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Link 
                href="/home" 
                className="inline-flex items-center gap-2 text-customOrange hover:text-orange-400 mb-6 transition-colors duration-300"
            >
                <ArrowLeft size={20} />
                Volver al Inicio
            </Link>

            <div className="bg-gray-900/80 border-2 border-customOrange rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-orange-400">Notificaciones</h1>
                        {unreadCount > 0 && (
                            <span className="bg-orange-500 text-black text-sm font-bold px-2 py-1 rounded-full">
                                {unreadCount} nuevas
                            </span>
                        )}
                    </div>
                    {unreadCount > 0 && (
                        <button
                            onClick={markAllAsRead}
                            className="text-sm text-orange-400 hover:text-orange-300 transition-colors duration-300"
                        >
                            Marcar todas como leídas
                        </button>
                    )}
                </div>

                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`group relative flex items-start gap-4 p-4 rounded-lg border transition-all duration-300 ${
                                notification.read 
                                    ? 'bg-gray-900/60 border-orange-800/30' 
                                    : 'bg-gray-900/80 border-orange-500/50 shadow-[0_0_10px_#FF7518]'
                            }`}
                        >
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                {getIcon(notification.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <Link 
                                    href={notification.link}
                                    className="block text-white hover:text-orange-400 transition-colors duration-300"
                                >
                                    <p className="text-sm leading-relaxed">{notification.content}</p>
                                    <span className="text-xs text-customGray mt-1 block">
                                        {notification.timeAgo}
                                    </span>
                                </Link>
                            </div>
                            <button
                                onClick={() => deleteNotification(notification.id)}
                                className="opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-400 transition-all duration-300"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}

                    {notifications.length === 0 && (
                        <div className="text-center py-8">
                            <Bell className="mx-auto text-orange-400/50 mb-3" size={32} />
                            <p className="text-customGray">No tienes notificaciones</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}