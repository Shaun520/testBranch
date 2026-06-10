<template>
  <div id="app">
    <header>
      <h1>Vue3 + Vite 前端项目</h1>
    </header>
    <main>
      <div class="container">
        <h2>欢迎使用前后端分离项目</h2>
        <div class="info-card">
          <p>前端技术栈：Vue3 + Vite</p>
          <p>后端技术栈：Node.js</p>
          <button @click="testConnection">测试后端连接</button>
          <p v-if="message" class="message">{{ message }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')

const testConnection = async () => {
  try {
    const response = await fetch('/api/test')
    const data = await response.json()
    message.value = data.message
  } catch (error) {
    message.value = '连接失败：' + error.message
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh;
}

header {
  background-color: #42b883;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.info-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.info-card p {
  margin: 1rem 0;
  color: #666;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #33a06f;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f0f9ff;
  border-left: 4px solid #42b883;
  color: #0369a1;
}
</style>
