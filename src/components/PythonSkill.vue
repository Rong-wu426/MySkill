<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><a href="#print-output">列印輸出</a></li>
        <li><a href="#comments">註譯</a></li>
        <li><a href="#variables">變數</a></li>
        <li><a href="#data-types-overview">資料類型概述</a></li>
        <li><a href="#conditionals">條件語句</a></li>
        <li><a href="#loops">循環語句</a></li>
        <li><a href="#functions">函數定義</a></li>
        <li><a href="#classes-objects">類別和物件</a></li>
        <li><a href="#exceptions">異常處理</a></li>
        <li><a href="#file-operations">檔案操作</a></li>
        <li><a href="#modules-package">模組</a></li>
      </ul>
    </div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'PythonSkill',
  data() {
    return {
      htmlContent: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('/html/PythonSkill.html');
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
