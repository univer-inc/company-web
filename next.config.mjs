import withTwin from "./withTwin.mjs";

/**
 * @type {import('next').NextConfig}
 */
export default withTwin({
  reactStrictMode: true,
  optimizeFonts: false,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
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
      ]
    });

    return config;
  }
});
