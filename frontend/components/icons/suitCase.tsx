"use client";
import { motion } from "framer-motion";

export default function SuiteCase({
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
            stroke={color ? color : "#FFFFFF"} // Color blanco predeterminado
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
            <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
            <path d="M10 20h4" />
            <circle cx="16" cy="20" r="2" />
            <circle cx="8" cy="20" r="2" />
        </motion.svg>
    );
}
