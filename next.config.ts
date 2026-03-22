import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev'
      }
    ]
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

//export default nextConfig;

export default withNextIntl(nextConfig);
