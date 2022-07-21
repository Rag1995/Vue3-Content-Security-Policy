# 我流 Vue3 Content Security Policy 配置

1. facebook like box plugin
1. google map
1. youtube

## index.html
```
<meta http-equiv="Content-Security-Policy" content="<%= htmlWebpackPlugin.options.httpEquivContent %>">
```

### vue.config.js
```
chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].httpEquivContent = `script-src 'self' 'unsafe-inline' ${
        process.env.NODE_ENV === "production" ? "" : "'unsafe-eval'"
      } https://*.googleapis.com https://*.gstatic.com *.google.com https://*.ggpht.com *.googleusercontent.com https://connect.facebook.net; img-src https://i.imgur.com 'self' https://*.googleapis.com https://*.gstatic.com *.google.com  *.googleusercontent.com data:; frame-src *.google.com https://youtube.com https://www.youtube.com https://www.facebook.com; connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com  data: blob:; font-src https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`;;

      return args;
    });
  },
```

### 注意！
在 Vue 的開發環境
script-src 必須允許 'unsafe-eval'
不然會跑不動，所以用環境參數區隔
```
script-src ${ process.env.NODE_ENV === "production" ? "" : "'unsafe-eval'" }
```

### Content Security Policy的規則

我參考了以下網站

https://csplite.com/csp/test40/

https://developers.google.com/maps/documentation/javascript/content-security-policy
