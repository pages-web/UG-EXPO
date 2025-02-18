module.exports = {
  // Enable React Strict Mode (optional but useful for debugging)
  reactStrictMode: true,

  // Configure external domains for image optimization
  images: {
    domains: [
      "https://www.elegantthemes.com/blog/wp-content/uploads/2015/02/custom-trackable-short-url-feature.png",
      "https://images.unsplash.com",
      "anotherdomain.com",
    ], // Add any external image domains here
  },

  // Add custom Webpack configuration (optional)
  webpack(config, { isServer }) {
    if (!isServer) {
      // Example of custom webpack config for client-side builds
      config.resolve.fallback = { fs: false };
    }
    return config;
  },

  // Other possible configurations (e.g., redirects, rewrites, etc.)
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://example.com/api/:path*",
      },
    ];
  },
};
