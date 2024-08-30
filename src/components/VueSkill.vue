<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#installation">安裝</a></li>
        <li><a href="#basic-usage">基本用法</a></li>
        <li><a href="#directives">指令</a></li>
        <li><a href="#components">組件</a></li>
        <li><a href="#state-management">狀態管理</a></li>
        <li><a href="#routing">路由</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'VueSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/VueSkill.html');
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
