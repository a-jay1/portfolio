/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for better development experience
    swcMinify: true, // Use SWC for faster builds and minification
    images: {
      domains: ['aj-ay.netlify.app'], // Allow external domains for optimized images (replace 'example.com' with your domain)
    },
    webpack(config) {
      // Add custom webpack rules
      config.module.rules.push({
        test: /\.svg$/, // Match SVG files
        use: ['@svgr/webpack'], // Use SVGR for transforming SVGs into React components
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  