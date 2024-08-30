<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#install">安裝 Docker</a></li>
        <li><a href="#dockerfile">Dockerfile</a></li>
        <li><a href="#build">建立映像</a></li>
        <li><a href="#run">運行容器</a></li>
        <li><a href="#ps">查看運行中的容器</a></li>
        <li><a href="#stop">停止容器</a></li>
        <li><a href="#rm">刪除容器</a></li>
        <li><a href="#images">查看映像</a></li>
        <li><a href="#rmi">刪除映像</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'DockerSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/DockerSkill.html');
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
