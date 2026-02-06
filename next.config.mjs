/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["cdn.pixabay.com", "img.freepik.com", "www.shutterstock.com"],
  },
};

export default nextConfig;
