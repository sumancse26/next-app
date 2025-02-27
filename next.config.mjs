/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [], // add local image from folders
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ], // add remote image domains
    formats: ["image/avif", "image/webp"],
    qualities: [75, 50, 25],
  },
};

export default nextConfig;
