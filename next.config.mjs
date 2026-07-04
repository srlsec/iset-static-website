/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    // Avoids a Windows dev-only bug in Next.js 15.5+ devtools (segment-explorer-node).
    devtoolSegmentExplorer: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Prevents intermittent webpack chunk corruption on Windows during HMR.
      config.cache = false;
    }
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iameonline.com',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
