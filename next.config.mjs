/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.wallpapersafari.com',
          },
        ],
      },
    
};

export default nextConfig;
