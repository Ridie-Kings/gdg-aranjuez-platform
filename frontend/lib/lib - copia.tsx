"use server";
import { cookies, headers } from "next/headers";

import API from "../services"
import { loginSchema, registerSchema } from "./schemas";

export type FormState = {
  success: boolean;
  data: {
    code?: number;
    message?:
    | {
      token: string | undefined;
    }
    | string
    client?: { [key: string]: string };
  };
};

export async function register(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const user = {
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      repeatPassword: formData.get("Repeat password"),
    };

    const result = registerSchema.safeParse(user);

    const formattedErrors: { [key: string]: string } = {}
    result.error?.errors.forEach((error) => {
      formattedErrors[error.path[0]] = error.message;
    })

    if (!result.success)
      return { success: false, data: { client: formattedErrors } }

    const resolvedHeaders = await headers();
    const userAgent = resolvedHeaders.get("user-agent");

    if (!user.username || !user.email || !user.password)
      return { success: false, data: { message: "Nada escrito" } };

    const response = await API.auth.register(
      user.username.toString(),
      user.email.toString(),
      user.password.toString(),
      userAgent ? userAgent : "",
    );

    if (response.success === true) {
      const token = response.data.token;
      const expires = new Date(Date.now() + 7 * 60 * 60 * 24 * 1000);
      const cookiesStored = await cookies();
      cookiesStored.set("session", token, { expires, httpOnly: true });
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
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const result = loginSchema.safeParse(user);

    if (!result.success) {
      return { success: false, data: { message: result.error.message } }
    }

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
      const token = response.data.token;
      const expires = new Date(Date.now() + 7 * 60 * 60 * 24 * 1000);
      const cookiesStored = await cookies();
      cookiesStored.set("session", token, { expires, httpOnly: true });
    }
    return response;
  } catch (error) {
    return { success: false, data: { message: error as string } };
  }
}

export type sessionType =
  | {
    token: string | undefined;
    id: string;
    email?: string;
    username?: string;
  }
  | null
  | undefined;

export async function getSession() {
  const existedCookies = await cookies();
  const session = existedCookies.get("session")?.value;

  if (!session) return;

  try {
    const decoded = atob(session.split(".")[1]);
    const parsed = JSON.parse(decoded);

    return { token: session, id: parsed.id, email: parsed.email, username: parsed.username };
  } catch (error) {
    console.error("Error parsing session", error);
    return null;
  }
}

// export async function updateSession(request: NextRequest) {
//   if (request.url.includes("user/")) {
//     const parse = request.url.split("/");
//     const id = parse[parse.length - 1];

//     const session = await getSession();
//     try {
//       if (id === session?.id) {
//         return NextResponse.redirect(new URL("/profil", request.url));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

  // if (request.url.includes("/logout")) {
  //   try {
  //     await logout();
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   } catch (error) {
  //     console.error("Erreur lors de la déconnexion:", error);
  //   }
  // }

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
// }
