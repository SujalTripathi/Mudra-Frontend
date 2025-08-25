/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this 'images' configuration block
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;