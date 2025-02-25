/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [], // add local image folders
    remotePatterns: [], // add remote image domains
    formats: ["image/avif", "image/webp"],
    qualities: [75, 50, 25],
  },
};

export default nextConfig;
