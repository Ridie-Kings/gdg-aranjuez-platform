"use client"
import Skull from "@/components/icons/skull";
import Buttons from "@/components/elements/buttons/buttons";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import Ghost from "@/components/icons/ghost";
import Person from "@/components/icons/person";
import Eye from "@/components/icons/eye";
import CloseEye from "@/components/icons/closeEye";
import { FormState } from "@/lib/lib";
import { register } from "@/lib/lib";
import { useRouter } from "next/navigation";
import { ZodIssue } from "zod";

export default function Register() {

    const router = useRouter()

    const [see, setSee] = useState<boolean>(false)
    const [see1, setSee1] = useState<boolean>(false)
    const [error, setError] = useState<{ [key: string]: string } | undefined>({})
    const [formInfo, setFormInfo] = useState<{ email: string, username: string, password: string, repeatPassword: string }>({
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
    })

    const [formState, formAction] = useActionState(register, {
        success: false,
        data: { token: "", message: "" },
    } as FormState);

    useEffect(() => {
        if (formState.success) {
            router.push("/login")
        } else {
            setError(formState.data.client)
            console.log(formState.data.message);
        }
    }, [formState])

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
            <Skull size="90px" className="animate-bounce" />
            <div className="flex flex-col items-center justify-center">
                <p className="text-4xl text-white font-display">CODECRYPT</p>
                <p className="text-sm text-customGray">Regístrate si te atreves...</p>
            </div>
            <form action={formAction} className="flex flex-col w-1/2 lg:w-1/3 border border-customOrange p-8 gap-5 rounded-md text-customGray">
                <div className="flex flex-col relative items-center w-full">
                    <div>
                        <Ghost size="25px" className="absolute m-2" />
                        <input
                            type="input"
                            name="email"
                            className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                            placeholder="Correo electrónico"
                            defaultValue={formInfo.email}
                            onChange={(e) => setFormInfo((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>
                    <p className="text-red-500 ">{error?.email}</p>
                </div>
                <div className="flex flex-col relative items-center w-full">
                    <div>
                        <Person size="25px" className="absolute m-2" />
                        <input
                            type="input"
                            name="username"
                            className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                            placeholder="Nombre de usuario"
                            defaultValue={formInfo.username}
                            onChange={(e) => setFormInfo((prev) => ({ ...prev, username: e.target.value }))}
                        />
                    </div>
                    <p className="text-red-500 ">{error?.username}</p>
                </div>
                <div className="flex flex-col relative items-center w-full">
                    <div>
                        {see ?
                            <Eye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee(!see)} /> :
                            <CloseEye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee(!see)} />}
                        <input
                            type={see ? "input" : "password"}
                            name="password"
                            className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                            placeholder="Contraseña"
                            defaultValue={formInfo.password}
                            onChange={(e) => setFormInfo((prev) => ({ ...prev, password: e.target.value }))}
                        />
                    </div>
                    <p className="text-red-500 ">{error?.password}</p>
                </div>
                <div className="flex flex-col relative items-center w-full">
                    <div>
                        {see1 ?
                            <Eye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee1(!see1)} /> :
                            <CloseEye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee1(!see1)} />}
                        <input
                            type={see1 ? "input" : "password"}
                            name="Repeat password"
                            className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                            placeholder="Confirmar contraseña"
                            defaultValue={formInfo.repeatPassword}
                            onChange={(e) => setFormInfo((prev) => ({ ...prev, repeatPassword: e.target.value }))}
                        />
                    </div>
                    <p className="text-red-500 ">{error?.repeatPassword}</p>
                </div>
                <Buttons color="black" text="Registar" height="35px" />
                <p className="text-sm text-center text-customGray">
                    ¿Ya eres miembro? <Link href={"/login"} className="text-customOrange">Ingresa a la cripta</Link>
                </p>
            </form>
        </div>
    );
}