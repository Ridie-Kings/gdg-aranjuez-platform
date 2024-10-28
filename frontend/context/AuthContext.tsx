'use client';
import { FormState, getSession, sessionType, login as apiLogin, register as apiRegister } from "@/lib/lib";
import React, { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from "next/navigation";

interface AuthContextType {
    user: sessionType | null;
    login: (formData: FormData) => Promise<FormState>;
    register: (formData: FormData) => Promise<FormState>;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<sessionType | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
      (async () => {
        const session = await getSession();
        try {
            if (session?.token) {
                setUser(session)
                setIsAuthenticated(true)
            }
        } catch (error) {
            console.log("Error auth:", error);
        } finally {
            setIsLoading(false);
        }
      })()
    }, []);

    const login = async (formData: FormData) => {
        const response = await apiLogin({success: false, data: {code: 0, message: ''}}, formData);
        if (response.success) {
            const session = await getSession()
            setIsAuthenticated(true)
            setUser(session)
            router.push('/home')
        }
        return response
    }

    const register = async (formData: FormData) => {
        const response = await apiRegister({success: false, data: {code: 0, message: ''}}, formData);
        if (response.success) {
            const session = await getSession()
            setIsAuthenticated(true)
            setUser(session)
            router.push('/home')
        }
        return response
    }

    const logout = () => {
        document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        setIsAuthenticated(false)
        setUser(null)
        router.push('/login')
    }


    return (
        <AuthContext.Provider value={{user, login, register, logout, isAuthenticated, isLoading}}>
            {children}
        </AuthContext.Provider>
    )    
};

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}