import { motion } from "framer-motion"

export default function Brain({
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
            xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width={size ? size : "37"} height={size ? size : "37"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>
        </motion.svg>
    )
}
