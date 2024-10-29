'use client';
import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useProtectedRoute() {
    const {isAuthenticated} = useAuth()
    // const router = useRouter()

    useEffect(() => {
        if (!isAuthenticated) {
            // router.push('/login')
            console.log(3);
        }
    }, [isAuthenticated])
}