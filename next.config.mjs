/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16+ no longer supports `eslint` config here.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
