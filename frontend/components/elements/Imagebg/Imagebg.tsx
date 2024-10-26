"use client"
import Image from "next/image";

export default function imageBg() {

    return (
        <Image
            src={"/images/bg1.png"}
            width={1000}
            height={1000}
            layout="responsive"
            alt="bg"
            className="fixed bottom-0 left-0 -z-50"
        />
    )
}