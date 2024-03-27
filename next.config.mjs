/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/api/email",
        destination:
          "https://louis-project-8fy6dkxc6-adotbits-projects.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
