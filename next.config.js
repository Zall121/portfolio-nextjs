/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [],
        unoptimized: false,
    },
    // Enable experimental features if needed
    experimental: {
        // appDir is stable in Next.js 14
    },
};

module.exports = nextConfig;
