<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#variables">變數</a></li>
        <li><a href="#data-types">資料型態</a></li>
        <li><a href="#functions">函數</a></li>
        <li><a href="#objects">物件</a></li>
        <li><a href="#arrays">數組</a></li>
        <li><a href="#conditionals">條件語句</a></li>
        <li><a href="#loops">迴圈語句</a></li>
        <li><a href="#events">事件處理</a></li>
        <li><a href="#asynchronous">非同步程式設計</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'JavaScriptSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/JavaScriptSkill.html');
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
