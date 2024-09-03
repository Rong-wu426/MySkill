<template>
    <div class="skill-link">
      <router-link :to="skill.path">
        <img :src="skill.icon" alt="" class="skill-icon" />
        {{ skill.name }}
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillLink',
    props: {
      skill: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .skill-link {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 4px;
    background-color: #e3f2fd; /* 浅蓝色背景 */
    transition: background-color 0.3s ease;
  }
  
  .skill-link:hover {
    background-color: #bbdefb; /* 更深的蓝色背景 */
  }
  
  .skill-icon {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    .skill-icon {
      width: 24px;
      height: 24px;
    }
  }
  </style>
  