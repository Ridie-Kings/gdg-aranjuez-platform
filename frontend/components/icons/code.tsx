"use client";
import { motion } from "framer-motion";

export default function Code({
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
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={className}
            width={size ? size : "37"}
            height={size ? size : "37"}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color ? color : "#FFFFFF"} // Establece el color blanco como predeterminado
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
        </motion.svg>
    );
}
