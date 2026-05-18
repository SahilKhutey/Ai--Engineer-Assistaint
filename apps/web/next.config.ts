import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  async rewrites() {
    return [
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        destination: '/',
      },
    ]
  },
};

export default nextConfig;
