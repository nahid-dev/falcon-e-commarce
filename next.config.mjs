/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "157.230.240.97"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://157.230.240.97:9999/api/:path*",
      },
    ];
  },
};

export default nextConfig;
