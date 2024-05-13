const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
const API_ENDPOINT = 'https://app.ecwid.com/api/v3/58958138'

const apiProxy = createProxyMiddleware({
  target: API_ENDPOINT,
  changeOrigin: true,
  pathRewrite: {
    [`^/api`]: '',
  },
})

app.use('/api', apiProxy)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`)
})
