import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { B as Button } from './button-CcoLo67o.mjs';
import { Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "bg-black text-white" : "bg-transparent text-gray-700 hover:bg-gray-100";
  return /* @__PURE__ */ jsx("header", { className: "w-full bg-white border-b border-gray-200 shadow-sm", children: /* @__PURE__ */ jsx("nav", { className: "max-w-6xl mx-auto flex items-center justify-between p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        className: `rounded-md px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive(
          "/dashboard"
        )}`,
        onClick: () => navigate({ to: "/dashboard" }),
        children: "Dashboard"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        className: `rounded-md px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive(
          "/settings"
        )}`,
        onClick: () => navigate({ to: "/settings" }),
        children: "Settings"
      }
    )
  ] }) }) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Layout, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}

export { RouteComponent as component };
//# sourceMappingURL=_layout-B826hdHL.mjs.map
