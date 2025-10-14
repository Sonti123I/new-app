import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { B as Button, c as cn } from './button-CcoLo67o.mjs';
import * as LabelPrimitive from '@radix-ui/react-label';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  var _a;
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = (_a = inputOTPContext == null ? void 0 : inputOTPContext.slots[index]) != null ? _a : {};
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: /* @__PURE__ */ jsx(MinusIcon, {}) });
}
const arrayToUrlString = (key, value) => {
  let arrayUrl;
  arrayUrl = value.map((item) => {
    return `${key}=${item}`;
  });
  return arrayUrl.join("&");
};
const prepareURLEncodedParams = (url, params) => {
  const paramsArray = Object.keys(params).map((key) => {
    const value = params[key];
    if (value && value.length) {
      if (Array.isArray(value)) {
        return arrayToUrlString(key, value);
      }
      return `${key}=${params[key]}`;
    } else if (value) {
      return `${key}=${params[key]}`;
    } else {
      return "";
    }
  }).filter((e) => e.length);
  const paramsURLs = paramsArray.filter((e) => e).join("&");
  if (paramsURLs) {
    return url + "?" + paramsURLs;
  }
  return url;
};
class FetchService {
  constructor(fetchTypeValue = "json") {
    __publicField(this, "authStatusCodes", [401, 403, 404, 422]);
    __publicField(this, "authErrorURLs", [
      "/auth/login"
    ]);
    __publicField(this, "_fetchType");
    this._fetchType = fetchTypeValue;
  }
  configureAuthorization(config) {
    const accessToken = Cookies.get("token") || "";
    config.headers["Authorization"] = "Bearer " + accessToken;
  }
  setHeader(config) {
    config.headers = {};
  }
  setDefaultHeaders(config) {
    config.headers = config.headers || {};
    if (!config.headers["Content-Type"] && !(config.body instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }
  }
  checkToLogOutOrNot(path) {
    return this.authErrorURLs.some(
      (arrayUrl) => path.includes(arrayUrl)
    );
  }
  isAuthRequest(path) {
    return this.authErrorURLs.includes(path);
  }
  async refreshAccessToken() {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      window.location.href = "/";
      return null;
    }
    try {
      const response = await fetch(
        "https://api-ai-salestable.tech-ddc.workers.dev/auth/refresh",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken })
        }
      );
      if (!response.ok) {
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        window.location.href = "/";
        return null;
      }
      const data = await response.json();
      Cookies.set("token", data.access_token);
      return data.access_token;
    } catch (error) {
      window.location.href = "/";
      return null;
    }
  }
  async hit(...args) {
    const [path, config] = args;
    config.headers = config.headers || {};
    if (!config.headers["Content-Type"]) {
      this.setDefaultHeaders(config);
    }
    if (!this.isAuthRequest(path)) {
      this.configureAuthorization(config);
    }
    const url = "https://api-ai-salestable.tech-ddc.workers.dev" + path;
    let response = await fetch(url, config);
    if (!response.ok) {
      if (response.status === 401 && !this.checkToLogOutOrNot(path)) {
        const newToken = await this.refreshAccessToken();
        if (newToken) {
          config.headers["Authorization"] = "Bearer " + newToken;
          response = await fetch(url, config);
          console.log(response);
        }
      }
      if (this.authStatusCodes.includes(response.status) && !this.checkToLogOutOrNot(path)) {
        const contentType2 = response.headers.get("Content-Type") || "";
        let errorData2;
        try {
          errorData2 = contentType2.includes("text/html") ? await response.text() : await response.json();
        } catch {
          errorData2 = { message: response.statusText };
        }
        throw {
          success: false,
          status: response.status,
          data: errorData2,
          message: response.statusText
        };
      }
      const contentType = response.headers.get("Content-Type") || "";
      let errorData;
      try {
        errorData = contentType.includes("text/html") ? await response.text() : await response.json();
      } catch {
        errorData = { message: response.statusText };
      }
      const err = new Error(errorData.message || response.statusText);
      err.data = errorData;
      err.status = response.status;
      throw err;
    }
    if (this._fetchType === "response") {
      return response;
    } else {
      const contentType = response.headers.get("Content-Type") || "";
      if (contentType.includes("text/html")) {
        return {
          success: true,
          status: response.status,
          data: await response.text()
        };
      }
      return {
        success: true,
        status: response.status,
        data: await response.json()
      };
    }
  }
  async post(url, payload) {
    return await this.hit(url, {
      method: "POST",
      body: payload ? JSON.stringify(payload) : void 0
    });
  }
  async postFormData(url, file) {
    return await this.hit(url, {
      method: "POST",
      body: file
    });
  }
  async get(url, queryParams = {}, contentType) {
    if (Object.keys(queryParams).length) {
      url = prepareURLEncodedParams(url, queryParams);
    }
    const config = {
      method: "GET"
    };
    this.setDefaultHeaders(config);
    if (contentType) {
      config.headers["Content-Type"] = contentType;
      config.headers["Accept"] = contentType;
    }
    return this.hit(url, config);
  }
  async delete(url, payload = {}) {
    return this.hit(url, {
      method: "DELETE",
      body: JSON.stringify(payload)
    });
  }
  async deleteWithOutPayload(url) {
    return this.hit(url, {
      method: "DELETE"
    });
  }
  async put(url, payload = {}) {
    return this.hit(url, {
      method: "PUT",
      body: JSON.stringify(payload)
    });
  }
  async patch(url, payload = {}) {
    return this.hit(url, {
      method: "PATCH",
      body: JSON.stringify(payload)
    });
  }
}
const $fetch = new FetchService();
async function userSignin(payload) {
  try {
    const response = await $fetch.post("/auth/email-sign-in", payload);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function verifyWithOtp(payload) {
  try {
    const response = await $fetch.post("/auth/email-sign-in/verify", payload);
    return response;
  } catch (err) {
    throw err;
  }
}
function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpPage, setOtpPage] = useState(false);
  const navigate = useNavigate();
  const emailVerificationMutation = useMutation({
    mutationKey: ["email-verification"],
    mutationFn: async (payload) => {
      const response = await userSignin(payload);
      return response;
    },
    onSuccess: () => {
      toast.success("OTP sent successfully");
      setOtpPage(true);
    }
  });
  const otpVerificationMutation = useMutation({
    mutationKey: ["otp-verification"],
    mutationFn: async (payload) => {
      const response = await verifyWithOtp(payload);
      return response.data;
    },
    onSuccess: (data) => {
      Cookies.set("token", data.data.access_token);
      Cookies.set("refreshToken", data.data.refresh_token);
      toast.success("Login successful!");
      navigate({ to: "/dashboard" });
    }
  });
  const handleEmailMutation = (e) => {
    e.preventDefault();
    emailVerificationMutation.mutateAsync({ email });
  };
  const handleOtpVerificationMutation = async (e) => {
    e.preventDefault();
    const res = await otpVerificationMutation.mutateAsync({ email, otp });
    console.log(res);
  };
  const loading = emailVerificationMutation.isPending || otpVerificationMutation.isPending;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-xl rounded-2xl p-10 w-full max-w-md transition-all duration-300 border border-gray-100", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-center mb-6 text-gray-800", children: otpPage ? "Verify OTP" : "Login with Email" }),
    !otpPage && !loading && /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleEmailMutation,
        className: "flex flex-col gap-5 animate-fadeIn",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-gray-700 font-medium", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "email",
                placeholder: "Enter your email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true,
                className: "h-10 px-3 border-gray-300 focus:ring-2 focus:ring-black/80 rounded-md"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              className: "bg-black hover:bg-gray-900 text-white w-full py-2 rounded-md transition-all duration-300",
              children: "Send OTP"
            }
          )
        ]
      }
    ),
    otpPage && !loading && /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleOtpVerificationMutation,
        className: "flex flex-col items-center gap-6 animate-fadeIn",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-full items-center", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-gray-700 font-medium", children: "Enter OTP" }),
            /* @__PURE__ */ jsx(
              InputOTP,
              {
                maxLength: 4,
                value: otp,
                onChange: setOtp,
                className: "mx-auto",
                children: /* @__PURE__ */ jsxs(InputOTPGroup, { children: [
                  /* @__PURE__ */ jsx(InputOTPSlot, { index: 0 }),
                  /* @__PURE__ */ jsx(InputOTPSlot, { index: 1 }),
                  /* @__PURE__ */ jsx(InputOTPSeparator, {}),
                  /* @__PURE__ */ jsx(InputOTPSlot, { index: 2 }),
                  /* @__PURE__ */ jsx(InputOTPSlot, { index: 3 })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              className: "bg-black hover:bg-gray-900 text-white w-full py-2 rounded-md transition-all duration-300",
              children: "Verify OTP"
            }
          )
        ]
      }
    )
  ] }) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Login, {}) });
}

export { RouteComponent as component };
//# sourceMappingURL=index-DbQK-kal.mjs.map
