const prod = process.env.NODE_ENV === "production";

module.exports = {
  experimental: { appDir: false },
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};
