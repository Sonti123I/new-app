import { createServerFn } from "@tanstack/react-start";
import { parse } from "cookie";
import { redirect } from "@tanstack/react-router";


// Fetch cookies server-side
export const getCookies = createServerFn({ method: "GET" }).handler(async (ctx) => {
  const cookieHeader = ctx.request.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);
  return { cookies, token: cookies["token"] || null };
});

export async function authMiddleware(ctx: any) {
  const cookiesData = await getCookies();
  const isAuthenticated = !!cookiesData?.token;
  const currentPath = ctx.location?.pathname || "/";

  const unprotectedRoutes = ["/login", "/signup"];
  const protectedRoutes = ["/dashboard", "/profile"];


  if (isAuthenticated && unprotectedRoutes.includes(currentPath) && currentPath !== "/dashboard") {
    throw redirect({ to: "/dashboard" });
  }


  if (!isAuthenticated && protectedRoutes.includes(currentPath) && currentPath !== "/login") {
    throw redirect({ to: "/" });
  }

  if (currentPath === "/") {
    if (isAuthenticated) throw redirect({ to: "/dashboard" });
    else throw redirect({ to: "/" });
  }

  return null;
}

