/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              replaceAttrValues: {
                "#1a1311": "currentColor",
                "#000000": "currentColor",
                "#ffffff": "currentColor"
              },
              dimensions: false
            }
          }
        ],
        as: "*.js"
      }
    }
  }
};

export default nextConfig;
