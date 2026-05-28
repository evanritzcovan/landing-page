import path from "node:path";

import type { NextConfig } from "next";

/** LAN host for phone testing in dev — set `NEXT_DEV_ALLOWED_ORIGIN` in `.env.local`. */
const devAllowedOrigin = process.env.NEXT_DEV_ALLOWED_ORIGIN?.trim();

const nextConfig: NextConfig = {
  ...(devAllowedOrigin ? { allowedDevOrigins: [devAllowedOrigin] } : {}),
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
