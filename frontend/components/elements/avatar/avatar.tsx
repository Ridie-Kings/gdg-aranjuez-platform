import Image from "next/image";
import Link from "next/link";
import MenuAvatar from "@/components/elements/avatar/menuAvatar/menuAvatar";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Avatar({
    onClick,
    link,
}: {
    onClick?: () => void;
    link?: string;
}) {
    const [open, setOpen] = useState<boolean>(false);
    const avatarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

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
                    ref={avatarRef} 
                    initial={{ left: 0 }}
                    animate={{
                        left: open ? ['0px', '-100px', '-100px'] : 0,
                    }}
                    className="flex flex-col items-center relative cursor-pointer"
                >
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
    );
}

