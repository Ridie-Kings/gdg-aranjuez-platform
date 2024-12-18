"use client"
import { motion } from "framer-motion"

export default function Linkedin({
    color,
    size,
    className,
    onClick,
}: {
    color?: string,
    size?: string,
    className?: string,
    onClick?: () => void,
}) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ ease: "easeOut", duration: 20 }}
            xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width={size ? size : "37"} height={size ? size : "37"} viewBox="0 0 24 24" fill={color ? color : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
        </motion.svg>
    )
}
