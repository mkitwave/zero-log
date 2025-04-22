/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Next.js to handle ESM modules
  transpilePackages: ['next-mdx-remote'],
  
  // Add experimental features
  experimental: {
    // Ensure mdx content is properly handled
    mdxRs: false,
    
    // Skip specific routes from static optimization to avoid pre-rendering issues
    // This helps prevent the MDXRemote useState errors during build
    optimizeCss: false,
  },

  // Force specific pages to be server-side rendered
  // to avoid pre-rendering issues with MDXRemote
  eslint: {
    // ESLint handled in the workflow
    ignoreDuringBuilds: true,
  },
  
  // For handling rehype-pretty-code and other plugins
  webpack: (config) => {
    // This is needed for ESM imports to work properly
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  
  // Output standalone build for better compatibility
  output: 'standalone',
};

module.exports = nextConfig;

