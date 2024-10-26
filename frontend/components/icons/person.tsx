import { motion } from "framer-motion"

export default function person({
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
            onClick={onClick} className={className} width={size ? size : "37"} height={size ? size : "37"} viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M29.2918 33.25V30.0833C29.2918 28.4036 28.6421 26.7927 27.4857 25.605C26.3292 24.4173 24.7607 23.75 23.1252 23.75H13.8752C12.2397 23.75 10.6711 24.4173 9.51467 25.605C8.3582 26.7927 7.7085 28.4036 7.7085 30.0833V33.25" stroke={color ? color : "#A7A3A3"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5002 17.4167C21.9059 17.4167 24.6668 14.5811 24.6668 11.0833C24.6668 7.58553 21.9059 4.75 18.5002 4.75C15.0944 4.75 12.3335 7.58553 12.3335 11.0833C12.3335 14.5811 15.0944 17.4167 18.5002 17.4167Z" stroke={color ? color : "#A7A3A3"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
    )
}
