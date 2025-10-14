import { jsx, jsxs } from 'react/jsx-runtime';

const InstagramLoader = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full h-full", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "animate-spin",
      width: "48",
      height: "48",
      viewBox: "0 0 50 50",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "grad", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#f09433", children: /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "stop-color",
              values: "#f09433;#e6683c;#dc2743;#cc2366;#bc1888;#f09433",
              dur: "4s",
              repeatCount: "indefinite"
            }
          ) }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#bc1888", children: /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "stop-color",
              values: "#bc1888;#f09433;#e6683c;#dc2743;#cc2366;#bc1888",
              dur: "4s",
              repeatCount: "indefinite"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "25",
            cy: "25",
            r: "20",
            stroke: "url(#grad)",
            strokeWidth: "4",
            strokeLinecap: "round",
            fill: "none",
            strokeDasharray: "90 150",
            strokeDashoffset: "0",
            children: /* @__PURE__ */ jsx(
              "animateTransform",
              {
                attributeName: "transform",
                type: "rotate",
                from: "0 25 25",
                to: "360 25 25",
                dur: "1s",
                repeatCount: "indefinite"
              }
            )
          }
        )
      ]
    }
  ) });
};
function Home() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(InstagramLoader, {}) });
}

export { Home as component };
//# sourceMappingURL=index-DYGtl2kC.mjs.map
