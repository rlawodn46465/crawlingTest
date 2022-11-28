const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.op.gg/champions",
      pathRewrite: {
        '^/api':''
      },
      changeOrigin: true
    })
  )
}