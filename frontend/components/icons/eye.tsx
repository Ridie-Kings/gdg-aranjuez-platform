import { motion } from "framer-motion"

export default function Eye({
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
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 20 }}
            onClick={onClick} className={className} width={size ? size : "37"} height={size ? size : "37"} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3.17888 19.0362C3.0504 18.6901 3.0504 18.3093 3.17888 17.9632C4.43025 14.929 6.55438 12.3346 9.28199 10.5091C12.0096 8.68354 15.2178 7.70898 18.5 7.70898C21.7821 7.70898 24.9903 8.68354 27.7179 10.5091C30.4455 12.3346 32.5697 14.929 33.821 17.9632C33.9495 18.3093 33.9495 18.6901 33.821 19.0362C32.5697 22.0704 30.4455 24.6648 27.7179 26.4903C24.9903 28.3159 21.7821 29.2904 18.5 29.2904C15.2178 29.2904 12.0096 28.3159 9.28199 26.4903C6.55438 24.6648 4.43025 22.0704 3.17888 19.0362Z" stroke={color ? color : "#A7A3A3"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 23.125C21.0543 23.125 23.125 21.0543 23.125 18.5C23.125 15.9457 21.0543 13.875 18.5 13.875C15.9457 13.875 13.875 15.9457 13.875 18.5C13.875 21.0543 15.9457 23.125 18.5 23.125Z" stroke={color ? color : "#A7A3A3"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg >

    )
}
