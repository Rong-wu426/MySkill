<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#basic-commands">基本命令</a></li>
        <li><a href="#file-management">檔案管理</a></li>
        <li><a href="#vim">Vim編輯器</a></li>
        <li><a href="#process-management">進程管理</a></li>
        <li><a href="#networking">網路指令</a></li>
        <li><a href="#permissions">權限管理</a></li>
        <li><a href="#package-management">軟體包管理</a></li>
        <li><a href="#system-monitoring">系統監控</a></li>
        <li><a href="#others">其他</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
export default {
  name: 'LinuxSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/LinuxSkill.html');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      this.htmlContent = await response.text();
    } catch (error) {
      console.error('Error loading HTML:', error);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 235px; 
  background-color: #282c34;
  color: #e0e0e0;
  padding: 20px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
}

.sidebar ul {
  list-style-type: none;
  padding-left: 0;
}

.sidebar a {
  text-decoration: none;
  color: #e0e0e0;
  font-weight: 600; 
  font-size: 22px; 
  display: block;
  padding: 7px; 
  border-radius: 6px; 
}

.sidebar a:hover {
  background-color: #3b4048;
  color: #ffffff;
}

.content {
  margin-left: 270px; 
  padding: 0px;
  flex: 1;
}

.content h1 {
  font-size: 6rem; 
  color: #333;
  margin-bottom: 30px; 
}

.content h2 {
  font-size: 2rem; 
  color: #333;
  margin-bottom: 25px; 
}

.content h3 {
  font-size: 5rem; 
  color: #444;
  margin-bottom: 20px; 
}

.content p {
  font-size: 1.5rem; 
  color: #666;
  margin-bottom: 30px;
}

.content pre {
  font-size: 1.5rem; 
  background: #fafafa;
  padding: 20px; 
  border-radius: 6px; 
  overflow-x: auto;
  margin-top: 20px; 
  border: 1px solid #ddd;
}

.content code {
  font-family: 'Courier New', Courier, monospace;
  background-color: #f5f5f5;
  padding: 4px 8px; 
  font-size: 3rem; 
}

.content strong {
  color: #333;
  font-weight: bold;
}


</style>
