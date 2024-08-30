<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#introduction">簡介</a></li>
        <li><a href="#installation">安裝</a></li>
        <li><a href="#basic-plot">基本繪圖</a></li>
        <li><a href="#histogram">直方圖</a></li>
        <li><a href="#scatter-plot">散點圖</a></li>
        <li><a href="#box-plot">箱型圖</a></li>
        <li><a href="#pair-plot">對角線圖</a></li>
        <li><a href="#heatmap">熱力圖</a></li>
        <li><a href="#customization">自定義</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'SeabornSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/SeabornSkill.html');
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
