import Image from "next/image";
import Link from "next/link";
import MenuAvatar from "@/components/elements/avatar/menuAvatar/menuAvatar";
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
                        className="rounded-full border border-customOrange hover:border-orange-400 transition-colors duration-200"
                    />
                </Link>
            ) : onClick ? (
                <div onClick={onClick} className="flex items-center">
                    <Image
                        src="/images/frankestein.png"
                        alt="Profile"
                        width={50}
                        height={50}
                        className="rounded-full border border-customOrange hover:border-orange-400 transition-colors duration-200"
                    />
                </div>
            ) : (
                <div ref={avatarRef} className="relative">
                    <div 
                        onClick={() => setOpen(!open)}
                        className="cursor-pointer"
                    >
                        <Image
                            src="/images/frankestein.png"
                            alt="Profile"
                            width={50}
                            height={50}
                            className="rounded-full border border-customOrange hover:border-orange-400 transition-colors duration-200"
                        />
                    </div>
                    <MenuAvatar open={open} />
                </div>
            )}
        </>
    );
}