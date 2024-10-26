"use server";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import API from "./services"

export type FormState = {
  success: boolean;
  data: {
    code?: number;
    message:
    | {
      token: string | undefined;
    }
    | string;
  };
};

export async function register(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const user = {
      email: formData.get("Email"),
      username: formData.get("Username"),
      password: formData.get("Password"),
      repeatPassword: formData.get("Repeat password"),
    };
    const resolvedHeaders = await headers();
    const userAgent = resolvedHeaders.get("user-agent");

    if (!user.username || !user.email || !user.password)
      return { success: false, data: { message: "case pas ecrit" } };

    const response = await API.auth.register(
      user.username.toString(),
      user.email.toString(),
      user.password.toString(),
      userAgent ? userAgent : "",
    );

    if (response.success === true) {
      const token = response.data.message.token;
      const expires = new Date(Date.now() + 7 * 60 * 60 * 24 * 1000);
      const res = NextResponse.json(response);
      res.cookies.set("session", token, { expires, httpOnly: true });
    }
    return response;
  } catch (error) {
    return { success: false, data: { message: error as string } };
  }
}

export async function login(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const user = {
      email: formData.get("Email"),
      password: formData.get("Password"),
    };

    if (!user.email || !user.password)
      return { success: false, data: { message: "case pas ecrit" } };

    const resolvedHeaders = await headers();
    const userAgent = resolvedHeaders.get("user-agent");

    const response = await API.auth.login(
      user.email.toString(),
      user.password.toString(),
      userAgent ? userAgent : "",
    );

    if (response.success === true) {
      const token = response.data.message.token;
      const expires = new Date(Date.now() + 7 * 60 * 60 * 24 * 1000);

      const res = NextResponse.json(response);
      res.cookies.set("session", token, { expires, httpOnly: true });
    }
    return response;
  } catch (error) {
    return { success: false, data: { message: error as string } };
  }
}

export async function logout() {
  cookies().delete("session");
}

export type sessionType =
  | {
    token: string | undefined;
    id: string;
  }
  | null
  | undefined;

export async function getSession() {
  const session = cookies().get("session")?.value;

  if (!session) return;

  try {
    const decoded = atob(session.split(".")[1]);
    const parsed = JSON.parse(decoded);

    return { token: session, id: parsed.id };
  } catch (error) {
    console.error("Error parsing session", error);
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  if (request.url.includes("user/")) {
    let parse = request.url.split("/");
    let id = parse[parse.length - 1];

    const session = await getSession();
    try {
      if (id === session?.id) {
        return NextResponse.redirect(new URL("/profil", request.url));
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (request.url.includes("/logout")) {
    try {
      await logout();
      return NextResponse.redirect(new URL("/login", request.url));
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  }
  // try {
  //     if (!request.cookies.get('session')?.value) {
  //         switch (request.nextUrl.pathname) {
  //             case '/profil':
  //                 return { redirect: '/' };
  //                 break;
  //             // Add more cases as needed
  //         }
  //     } else {
  //         switch (request.nextUrl.pathname) {
  //             case '/login':
  //             case '/register':
  //                 redirect('/');
  //                 break;
  //             // Add more cases as needed
  //         }
  //     }
  // } catch (error) {
  //     console.error('Error occurred in updateSession:', error);
  //     // Handle the error accordingly, such as logging, sending a response, etc.
  // }
}
