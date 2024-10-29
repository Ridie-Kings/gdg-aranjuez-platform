"use client"
import { motion } from "framer-motion"

export default function Danger({
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
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </motion.svg>
    )
}
