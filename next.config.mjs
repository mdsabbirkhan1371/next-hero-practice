/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.themealdb.com',
      'imgbb.com',
      'i.ibb.co.com', // Corrected this domain
    ], // Add the allowed domains here
  },
};

export default nextConfig;
