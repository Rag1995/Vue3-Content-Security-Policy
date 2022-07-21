module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "MyApp title";
      args[0].CSP_Policy = `script-src 'self' 'unsafe-inline' ${
        process.env.NODE_ENV === "production" ? "" : "'unsafe-eval'"
      } https://*.googleapis.com https://*.gstatic.com *.google.com https://*.ggpht.com *.googleusercontent.com https://connect.facebook.net; img-src https://i.imgur.com 'self' https://*.googleapis.com https://*.gstatic.com *.google.com  *.googleusercontent.com data:; frame-src *.google.com https://youtube.com https://www.youtube.com https://www.facebook.com; connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com  data: blob:; font-src https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`;

      return args;
    });
  },
};
