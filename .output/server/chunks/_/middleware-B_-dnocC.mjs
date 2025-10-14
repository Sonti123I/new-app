import { a as createServerRpc, c as createServerFn } from '../virtual/entry.mjs';
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
import 'react/jsx-runtime';
import '@tanstack/react-router/ssr/server';
import '@tanstack/react-router';

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

export { getCookies_createServerFn_handler };
//# sourceMappingURL=middleware-B_-dnocC.mjs.map
