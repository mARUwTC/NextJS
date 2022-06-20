/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const menu = require('./lib/menu.js');

module.exports = (phase, { defaultConfig }) => {
  return {
      env: {
          menu: menu.get('pages'),
      },
  };
};

module.exports = nextConfig
