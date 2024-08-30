<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#selectors">選擇器</a></li>
        <li><a href="#box-model">盒子模型</a></li>
        <li><a href="#positioning">定位</a></li>
        <li><a href="#flexbox">Flexbox</a></li>
        <li><a href="#grid">Grid</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'CSSSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/CSSSkill.html');
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
