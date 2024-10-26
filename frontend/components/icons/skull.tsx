import { motion } from "framer-motion"

export default function skull({
    color,
    size,
    className
}: {
    color?: string,
    size?: string,
    className?: string
}) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 20 }}
            className={className} width={size ? size : "107"} height={size ? size : "109"} viewBox="0 0 107 109" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_33_291)">
                <path d="M55.7293 75.7913L53.5002 71.333L51.271 75.7913H55.7293Z" stroke={color ? color : "#FF7518"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M66.8752 98.0838C68.0576 98.0838 69.1916 97.6141 70.0277 96.778C70.8638 95.9419 71.3335 94.8079 71.3335 93.6255V89.1671C73.0129 89.1661 74.6579 88.6908 76.0791 87.7959C77.5002 86.901 78.6398 85.623 79.3665 84.109C80.0933 82.595 80.3776 80.9064 80.1869 79.2379C79.9962 77.5693 79.3381 75.9886 78.2885 74.6776C83.3976 69.739 86.9152 63.387 88.3901 56.436C89.865 49.4849 89.23 42.2518 86.5666 35.6641C83.9031 29.0763 79.3326 23.4343 73.4412 19.4615C67.5498 15.4887 60.606 13.3662 53.5002 13.3662C46.3944 13.3662 39.4506 15.4887 33.5591 19.4615C27.6677 23.4343 23.0972 29.0763 20.4338 35.6641C17.7704 42.2518 17.1354 49.4849 18.6103 56.436C20.0852 63.387 23.6027 69.739 28.7118 74.6776C27.6622 75.9886 27.0041 77.5693 26.8134 79.2379C26.6227 80.9064 26.9071 82.595 27.6338 84.109C28.3606 85.623 29.5001 86.901 30.9213 87.7959C32.3424 88.6908 33.9874 89.1661 35.6668 89.1671V93.6255C35.6668 94.8079 36.1366 95.9419 36.9727 96.778C37.8088 97.6141 38.9428 98.0838 40.1252 98.0838H66.8752Z" stroke="#FF7518" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M66.8748 57.9587C69.3371 57.9587 71.3332 55.9626 71.3332 53.5003C71.3332 51.0381 69.3371 49.042 66.8748 49.042C64.4126 49.042 62.4165 51.0381 62.4165 53.5003C62.4165 55.9626 64.4126 57.9587 66.8748 57.9587Z" stroke="#FF7518" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40.1248 57.9587C42.5871 57.9587 44.5832 55.9626 44.5832 53.5003C44.5832 51.0381 42.5871 49.042 40.1248 49.042C37.6626 49.042 35.6665 51.0381 35.6665 53.5003C35.6665 55.9626 37.6626 57.9587 40.1248 57.9587Z" stroke="#FF7518" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_33_291" x="-4" y="0" width="115" height="115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_291" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_33_291" result="shape" />
                </filter>
            </defs>
        </motion.svg>
    )
}