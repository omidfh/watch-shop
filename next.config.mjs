/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bnvnjwwxneywqbotfggf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/watchPics/**",
      },
    ],
  },
};

export default nextConfig;
