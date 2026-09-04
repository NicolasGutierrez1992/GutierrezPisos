/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gutierrezpisos.com.ar" }],
        destination: "https://gutierrezpisos.com.ar/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
