/**
 * Theme Redefine
 * welcome.js
 */

hexo.on("ready", () => {
  const { version } = require("../../package.json");

  const https = require("https");
  const packageName = "hexo-theme-redefine";
  const timeout = 5000; // 5 seconds

  https
    .get(`https://registry.npmjs.org/${packageName}`, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const jsonData = JSON.parse(data);
        hexo.log.info('hullo');
        hexo.log.info(' ________  ___       ________  ________  _________  _____ ______');
        hexo.log.info('|\\   __  \\|\\  \\     |\\   ____\\|\\   __  \\|\\___   ___\\\\   _ \\  _   \\');
        hexo.log.info('\\ \\  \\|\\  \\ \\  \\    \\ \\  \\___|\\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\\\\\__\\ \\  \\');
        hexo.log.info(' \\ \\   __  \\ \\  \\    \\ \\  \\  __\\ \\   _  _\\   \\ \\  \\ \\ \\  \\\\|__| \\  \\');
        hexo.log.info('  \\ \\  \\ \\  \\ \\  \\____\\ \\  \\|\\  \\ \\  \\\\  \\|   \\ \\  \\ \\ \\  \\    \\ \\  \\');
        hexo.log.info('   \\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\__\\\\ _\\    \\ \\__\\ \\ \\__\\    \\ \\__\\');
        hexo.log.info('    \\|__|\\|__|\\|_______|\\|_______|\\|__|\\|__|    \\|__|  \\|__|     \\|__|');
        if (jsonData["dist-tags"].latest > version) {
          console.log(
            `\x1b[33m%s\x1b[0m`,
            `Redefine v${version} is outdated, please update to v${jsonData["dist-tags"].latest}!`,
          );
        }
      });
    })
    .setTimeout(timeout, () => {
      console.log(
        `Timeout: Could not fetch the package information within ${
          timeout / 1000
        } seconds`,
      );
      // continue with code execution here
    })
    .on("error", (error) => {
      console.log(
        `Error: Failed to fetch package information. ${error.message}`,
      );
      hexo.log.info('Hexo says hello!');

      // continue with code execution here
    });
});
