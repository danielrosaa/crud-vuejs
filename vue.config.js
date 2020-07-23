module.exports = {
  publicPath: "/crud-vuejs",
  outputDir: "./docs",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_variables.scss";
          @import "@/assets/css/global.scss";
        `
      }
    }
  }
};
