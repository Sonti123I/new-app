import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, redirect, Outlet, HeadContent, Scripts } from '@tanstack/react-router';
import { jsx, jsxs } from 'react/jsx-runtime';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useTheme } from 'next-themes';
import { Toaster as Toaster$1 } from 'sonner';
import { c as createServerFn, a as createServerRpc } from '../virtual/entry.mjs';
import { parse } from 'cookie';
import './nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'rou3';
import 'srvx';
import 'tiny-invariant';
import 'seroval';
import '@tanstack/react-router/ssr/server';

const appCss = "/assets/app-C-VE4X2T.css";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...props
    }
  );
};
const getCookies_createServerFn_handler = createServerRpc("cdbafd706fde7824e903c20e1f0b48d9be451779ea80cb675266d190ee005805", (opts, signal) => {
  return getCookies.__executeServer(opts, signal);
});
const getCookies = createServerFn({
  method: "GET"
}).handler(getCookies_createServerFn_handler, async (ctx) => {
  const cookieHeader = ctx.request.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);
  return {
    cookies,
    token: cookies["token"] || null
  };
});
function handleAuthentication(cookiesData) {
  return !!(cookiesData == null ? void 0 : cookiesData.token);
}
async function authMiddleware(ctx) {
  var _a;
  const cookiesData = await getCookies();
  const isAuthenticated = handleAuthentication(cookiesData);
  const currentPath = ((_a = ctx.location) == null ? void 0 : _a.pathname) || "/";
  const unprotectedRoutes = ["/login", "/signup"];
  const protectedRoutes = ["/dashboard", "/profile"];
  if (isAuthenticated && unprotectedRoutes.includes(currentPath) && currentPath !== "/dashboard") {
    throw redirect({
      to: "/dashboard"
    });
  }
  if (!isAuthenticated && protectedRoutes.includes(currentPath) && currentPath !== "/login") {
    throw redirect({
      to: "/"
    });
  }
  if (currentPath === "/") {
    if (isAuthenticated) throw redirect({
      to: "/dashboard"
    });
    else throw redirect({
      to: "/"
    });
  }
  return null;
}
const queryClient = new QueryClient();
const Route$5 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "TanStack Start Starter"
    }],
    links: [{
      rel: "stylesheet",
      href: appCss
    }]
  }),
  component: RootComponent,
  beforeLoad: authMiddleware
});
function RootComponent() {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(Toaster, { position: "top-center", richColors: true, closeButton: true })
    ] })
  ] });
}
const $$splitComponentImporter$4 = () => import('./_layout-B826hdHL.mjs');
const Route$4 = createFileRoute("/_layout")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import('./index-DYGtl2kC.mjs');
const Route$3 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import('./index-DbQK-kal.mjs');
const Route$2 = createFileRoute("/login/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import('./index-B45PnxoA.mjs');
const Route$1 = createFileRoute("/_layout/settings/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import('./index-DvEMOLC1.mjs');
const Route = createFileRoute("/_layout/dashboard/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LayoutRoute = Route$4.update({
  id: "/_layout",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const LoginIndexRoute = Route$2.update({
  id: "/login/",
  path: "/login/",
  getParentRoute: () => Route$5
});
const LayoutSettingsIndexRoute = Route$1.update({
  id: "/settings/",
  path: "/settings/",
  getParentRoute: () => LayoutRoute
});
const LayoutDashboardIndexRoute = Route.update({
  id: "/dashboard/",
  path: "/dashboard/",
  getParentRoute: () => LayoutRoute
});
const LayoutRouteChildren = {
  LayoutDashboardIndexRoute,
  LayoutSettingsIndexRoute
};
const LayoutRouteWithChildren = LayoutRoute._addFileChildren(LayoutRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  LoginIndexRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router;
}

export { getRouter };
//# sourceMappingURL=router-Bo0zeljE.mjs.map
