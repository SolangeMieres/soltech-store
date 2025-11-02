const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    config.resolve.alias["@components"] = path.resolve(__dirname, "components");
    config.resolve.alias["@styles"] = path.resolve(__dirname, "styles");
    config.resolve.alias["@data"] = path.resolve(__dirname, "data");
    return config;
  },
};
