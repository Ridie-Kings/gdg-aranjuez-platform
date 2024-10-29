"use client";
import { motion } from "framer-motion";

export default function Ghost({
    size = "37",       // Tamaño predeterminado de 37
    className,
}: {
    size?: string,
    className?: string,
}) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={className}
            width={size}
            height={size}
            viewBox="0 0 37 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13.875 15.833H13.8913" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.125 15.833H23.1413" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4998 3.16699C15.2288 3.16699 12.0918 4.50151 9.77885 6.87697C7.46591 9.25243 6.1665 12.4742 6.1665 15.8337V34.8337L10.7915 30.0837L14.6457 34.042L18.4998 30.0837L22.354 34.042L26.2082 30.0837L30.8332 34.8337V15.8337C30.8332 12.4742 29.5338 9.25243 27.2208 6.87697C24.9079 4.50151 21.7708 3.16699 18.4998 3.16699Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
    );
}
