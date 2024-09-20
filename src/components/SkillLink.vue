<template>
  <div class="skill-link">
    <router-link :to="skill.path" class="skill-link-content">
      <img :src="skill.icon" alt="" class="skill-icon" />
      <span v-if="showName" class="skill-name">{{ skill.name }}</span>
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
    },
    showName: {
      type: Boolean,
      default: true
    }
  }
}
</script>


