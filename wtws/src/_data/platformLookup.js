const platforms = require("./platforms.json");

module.exports = Object.fromEntries(
  platforms.map(platform => [platform.name, platform])
);