<template>
  <div class="container">
    <div class="content">
      <div v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/Skill.css';

export default {
  name: 'VueSkill',
  data() {
    return {
      htmlContent: '/html/VueSkill.html'
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
