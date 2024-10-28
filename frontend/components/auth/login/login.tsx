"use client"
import Skull from "@/components/icons/skull";
import Buttons from "@/components/elements/buttons/buttons";
import Link from "next/link";
import Ghost from "@/components/icons/ghost";
import Eye from "@/components/icons/eye";
import CloseEye from "@/components/icons/closeEye";
import { useActionState, useEffect, useState } from "react";
import { FormState, login } from "@/lib/lib";
import FirstConnection from "@/components/auth/login/firstConnection/firstConnection";

export default function Login() {

    const [see, setSee] = useState<boolean>(false)
    const [first, setFirst] = useState<boolean>(false)

    const [formState, formAction] = useActionState(login, {
        success: false,
        data: { token: "", message: "" },
    } as FormState);

    useEffect(() => {
        if (formState.success) {
            setFirst(true);
        } else {
            console.log("not success to login");
        }
    }, [formState])

    return (
        <>
            {first ? (
                <FirstConnection />
            ) : (
                <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
                    <Skull size="90px" className="animate-bounce" />
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-4xl text-white font-display">CODECRYPT</p>
                        <p className="text-sm text-customGray">Regístrate si te atreves...</p>
                    </div>
                    <form
                        action={formAction}
                        className="flex flex-col w-1/2 lg:w-1/3 border border-customOrange p-8 gap-5 rounded-md text-customGray"
                    >
                        <div className="flex relative items-center w-full">
                            <Ghost size="25px" className="absolute m-2" />
                            <input
                                type="input"
                                name="email"
                                className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        <div className="flex relative items-center w-full">
                            {see ?
                                <Eye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee(!see)} /> :
                                <CloseEye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee(!see)} />}
                            <input
                                type={see ? "input" : "password"}
                                name="password"
                                className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="flex place-content-between">
                            <div className="flex gap-2">
                                <input
                                    type="checkbox"
                                />
                                <p className="text-customGray text-sm">Recuérdame</p>
                            </div>
                        </div>
                        <Buttons color="black" text="Entra a la cripta" height="35px" />
                        <p className="text-sm text-center text-customGray">
                            ¿No eres miembro? <Link href={"/register"} className="text-customOrange">Adéntrate en los secretos Cripta</Link>
                        </p>
                    </form>
                </div >
            )}
        </>
    )
}