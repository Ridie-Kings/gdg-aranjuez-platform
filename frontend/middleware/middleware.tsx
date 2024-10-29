import { getSession } from "@/lib/lib";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/home"];
const publicRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
    const session = await getSession();

    const { pathname } = request.nextUrl;

    if (session?.token) {
        if (publicRoutes.includes(pathname)) {
            // return NextResponse.redirect(new URL("/home", request.url));
            console.log(2);
        }
        return NextResponse.next();
    }

    if (!session?.token) {
        if (protectedRoutes.includes(pathname)) {
            // return NextResponse.redirect(new URL("/home", request.url));
            console.log(2);
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: [...protectedRoutes, ...publicRoutes]
}