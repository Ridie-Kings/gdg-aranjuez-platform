import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteReturn {
    isLoading: boolean;
}

export function useProtectedRoute(isProtected: boolean = true): ProtectedRouteReturn {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading) {
            if (isProtected && !isAuthenticated) {
                router.replace('/login')
            } else if (!isProtected && isAuthenticated) {
                router.replace('/home')
            }
        }
    }, [isAuthenticated, router, isLoading, isProtected])

    return { isLoading }
}