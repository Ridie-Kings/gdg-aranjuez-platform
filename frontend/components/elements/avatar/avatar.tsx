import Image from "next/image"
import Link from "next/link"
import MenuAvatar from "@/components/elements/avatar/menuAvatar/menuAvatar"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Avatar({
    onClick,
    link,
}: {
    onClick?: () => void,
    link?: string,
}) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            {link ? (
                <Link href={link} className="flex items-center">
                    <Image
                        src="/images/frankestein.png"
                        alt="Profile"
                        width={50}
                        height={50}
                        className="rounded-full border border-customOrange"
                    />
                </Link>
            ) : onClick ? (
                <div onClick={onClick} className="flex items-center">
                    <Image
                        src="/images/frankestein.png"
                        alt="Profile"
                        width={50}
                        height={50}
                        className="rounded-full border border-customOrange"
                    />
                </div>
            ) : (
                <motion.div
                    initial={{ left: 0 }}
                    animate={{
                        left: open ? ['0px', '-100px', '-100px'] : 0
                    }}
                    className="flex flex-col items-center relative cursor-pointer">
                    <Image
                        src="/images/frankestein.png"
                        alt="Profile"
                        width={50}
                        height={50}
                        className="rounded-full border border-customOrange z-10"
                        onClick={() => setOpen(!open)}
                    />
                    <MenuAvatar open={open} />
                </motion.div>
            )}
        </>

    )
}
