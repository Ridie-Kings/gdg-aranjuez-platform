import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteReturn {
    isLoading: boolean;
}

export function useProtectedRoute(isProtected: boolean = true): ProtectedRouteReturn {
    const { isAuthenticated, isLoading } = useAuth()
    // const router = useRouter()

    useEffect(() => {
        if (!isLoading) {
            if (isProtected && !isAuthenticated) {
                console.log(3);
                // router.replace('/login')
            } else if (!isProtected && isAuthenticated) {
                console.log(3);
                // router.replace('/home')
            }
        }
    }, [isAuthenticated, isLoading, isProtected])

    return { isLoading }
}