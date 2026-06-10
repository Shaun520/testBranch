const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080

// 中间件
app.use(cors())
app.use(express.json())

// 测试接口
app.get('/test', (req, res) => {
  res.json({
    success: true,
    message: '后端服务连接成功！',
    timestamp: new Date().toLocaleString('zh-CN'),
    server: 'Node.js + Express'
  })
})

// 健康检查接口
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`✅ 后端服务器运行在 http://localhost:${PORT}`)
  console.log(`📡 API 接口地址：http://localhost:${PORT}/api`)
})
