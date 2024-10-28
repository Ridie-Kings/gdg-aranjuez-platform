'use client';
import LoginPage from '@/components/auth/login/login' 
import { useProtectedRoute } from '@/hooks/useProtectedRoutes'

export default function Login() {
    const  { isLoading } = useProtectedRoute(false)

    if (isLoading) {
        return <div>Loading...</div>
    }
    
    return <LoginPage />
}