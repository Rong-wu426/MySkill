<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#html-elements">HTML 元素</a></li>
        <li><a href="#doctype">DOCTYPE</a></li>
        <li><a href="#headings">標題</a></li>
        <li><a href="#paragraphs">段落</a></li>
        <li><a href="#break">換行</a></li>
        <li><a href="#links">連結</a></li>
        <li><a href="#images">圖片</a></li>
        <li><a href="#text-formatting">文字格式</a></li>
        <li><a href="#other-elements">其他元素</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'HTMLSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/HTMLSkill.html');
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
