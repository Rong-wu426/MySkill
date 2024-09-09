<template>
  <div class="skill-link">
    <router-link :to="skill.path" class="skill-link-content">
      <img :src="skill.icon" alt="" class="skill-icon" />
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


