// next.config.mjs
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "harshavardhanishipping.com" }],
        destination: "https://www.harshavardhanishipping.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;