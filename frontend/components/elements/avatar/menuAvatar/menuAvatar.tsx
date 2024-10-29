import { motion } from "framer-motion";
import Link from "next/link";
import { BellIcon, UserIcon, Settings2, LogOut } from "lucide-react";

export default function MenuAvatar({
    open,
}: {
    open: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
                opacity: open ? 1 : 0,
                scale: open ? 1 : 0.95,
            }}
            transition={{ duration: 0.1 }}
            className={`absolute right-0 top-16 w-64 bg-gray-900/95 backdrop-blur-sm border border-orange-800/50 rounded-xl shadow-xl z-50 ${!open && 'pointer-events-none'}`}
        >
            <div className="p-4 border-b border-orange-800/30">
                <div className="flex items-center gap-3">
                    <img
                        src="/images/frankestein.png"
                        alt="Profile"
                        className="w-10 h-10 rounded-full border border-orange-500/50"
                    />
                    <div>
                        <h3 className="text-white font-medium">Allan Mersil</h3>
                        <p className="text-gray-400 text-sm">@AllanTyson</p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <Link href="/profile" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors duration-200">
                    <UserIcon size={18} />
                    <span>Profile</span>
                </Link>
                <Link href="/notificaciones" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors duration-200">
                    <div className="relative">
                        <BellIcon size={18} />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-black text-xs flex items-center justify-center rounded-full">3</span>
                    </div>
                    <span>Notifications</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors duration-200">
                    <Settings2 size={18} />
                    <span>Settings</span>
                </Link>
            </div>

            <div className="p-2 border-t border-orange-800/30">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-200">
                    <LogOut size={18} />
                    <span>Sign out</span>
                </button>
            </div>
        </motion.div>
    );
}