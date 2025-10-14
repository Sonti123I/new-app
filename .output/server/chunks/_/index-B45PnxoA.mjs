import { jsx, Fragment } from 'react/jsx-runtime';

function Settings() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { children: "This is settings page" }) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col bg-gray-50", children: /* @__PURE__ */ jsx("main", { className: "flex-grow p-6", children: /* @__PURE__ */ jsx(Settings, {}) }) });
}

export { RouteComponent as component };
//# sourceMappingURL=index-B45PnxoA.mjs.map
