<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#select">SELECT 語句</a></li>
        <li><a href="#insert">INSERT INTO</a></li>
        <li><a href="#update">UPDATE 語句</a></li>
        <li><a href="#delete">DELETE 語句</a></li>
        <li><a href="#joins">JOIN 語句</a></li>
        <li><a href="#create-table">CREATE TABLE</a></li>
        <li><a href="#alter-table">ALTER TABLE</a></li>
        <li><a href="#drop-table">DROP TABLE</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'MySQLSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/MySQLSkill.html');
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
