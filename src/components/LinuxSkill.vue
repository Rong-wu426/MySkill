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
import '@/assets/css/Skill.css';

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
      
      this.$nextTick(() => {
        window.scrollTo(0, 0);
        
        const thead = document.querySelector('.content thead');
        const tbody = document.querySelector('.content tbody');
        if (thead && tbody) {
          tbody.style.width = `${thead.offsetWidth}px`;
        }
      });
    } catch (error) {
      console.error('Error loading HTML:', error);
    }
  }
}
</script>
