"use client"
import Skull from "@/components/icons/skull";
import Buttons from "@/components/elements/buttons/buttons";
import Link from "next/link";
import { useEffect, useState } from "react";
import Ghost from "@/components/icons/ghost";
import Person from "@/components/icons/person";
import Eye from "@/components/icons/eye";
import CloseEye from "@/components/icons/closeEye";
import { useFormState } from "react-dom";
import { FormState } from "@/lib";
import { register } from "@/lib";
import { registerSchema, RegisterFormData } from "@/lib/schemas";

export default function Register() {

    const [see, setSee] = useState<boolean>(false)
    const [see1, setSee1] = useState<boolean>(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const [formState, formAction] = useFormState(register, {
        success: false,
        data: { token: "", message: "" },
    } as FormState);

    useEffect(() => {


    }, [formState]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: RegisterFormData = {
            email: formData.get("email") as string,
            username: formData.get("username") as string,
            password: formData.get("password") as string,
            repeatPassword: formData.get("Repeat password") as string,
        }

        const result = registerSchema.safeParse(data);
        if (!result.success) {
            const formattedErrors: { [key: string]: string } = {};
            result.error.errors.forEach((error) => {
                formattedErrors[error.path[0]] = error.message;
            });
            setErrors(formattedErrors);
            return;
        }

        formAction(formData);
        console.log(formData.forEach((value, key) => console.log(key, value)));
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
            <Skull size="90px" className="animate-bounce" />
            <div className="flex flex-col items-center justify-center">
                <p className="text-4xl text-white font-display">CODECRYPT</p>
                <p className="text-sm text-customGray">Register if you dare...</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-1/3 border border-customOrange p-8 gap-5 rounded-md text-customGray">
                <div className="flex flex-col relative items-center w-full">
                    <div>
                    <Ghost size="25px" className="absolute m-2" />
                    <input
                        type="input"
                        name="email"
                        className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                        placeholder="Email"
                    />
                    </div>
                    <div>
                    {errors.email && <p className="mt-2 text-red-500 text-sm">{errors.email}</p>}
                    </div>
                </div>
                <div className="flex flex-col relative items-center w-full">
                    <div>
                    <Person size="25px" className="absolute m-2" />
                    <input
                        type="input"
                        name="username"
                        className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                        placeholder="Username"
                    />
                    </div>
                    <div>
                    {errors.username && <p className="mt-2 text-red-500 text-sm">{errors.username}</p>}
                    </div>
                </div>
                <div className="flex flex-col relative items-center w-full">
                    <div>
                    {see ? (
                        <Eye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee(!see)} />
                    ) : (
                        <CloseEye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee(!see)} />
                    )}
                    <input
                        type={see ? "input" : "password"}
                        name="password"
                        className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                        placeholder="Password"
                    />
                    </div>
                    <div>
                    {errors.password && <p className="mt-2 text-red-500 text-sm">{errors.password}</p>}
                    </div>
                </div>
                <div className="flex flex-col relative items-center w-full">
                    <div>
                    {see1 ? (
                        <Eye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee1(!see1)} />
                    ) : (
                        <CloseEye size="25px" className="absolute m-2 cursor-pointer" onClick={() => setSee1(!see1)} />
                    )}
                    <input
                        type={see1 ? "input" : "password"}
                        name="Repeat password"
                        className="bg-transparent border border-customOrange rounded p-2 pl-10 w-full"
                        placeholder="Confirm Password"
                    />
                    </div>
                    <div>
                    {errors.repeatPassword && <p className="mt-2 text-red-500 text-sm">{errors.repeatPassword}</p>}
                    </div>
                </div>
                <Buttons color="black" text="Enter the Crypt" height="35px" />
                <p className="text-sm text-center text-customGray">
                    Already a member? <Link href={"/login"} className="text-customOrange">Join the Dark Side</Link>
                </p>
            </form>
        </div>
    );
}