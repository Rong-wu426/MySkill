<template>
  <div>
    <aside class="sidebar">
      <ul>
        <li><a href="/">主頁</a></li>
        <li v-for="skill in visibleSkills" :key="skill.id">
          <a href="#" @click.prevent="scrollToId(skill.id)">{{ skill.title }}</a>
        </li>
      </ul>
    </aside>
    <main class="content">
      <div v-html="htmlContent"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SkillComponent',
  props: {
    skillName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      skills: [],
      htmlContent: ''
    };
  },
  async created() {
    try {
      const response = await fetch('/html-subtitle.json');
      if (response.ok) {
        this.skills = await response.json();
      } else {
        console.error('Failed to load skills JSON');
      }
    } catch (error) {
      console.error('Error loading skills JSON:', error);
    }

    // 根据传递的 skillName 加载对应的 HTML 文件
    this.loadHtml(`${this.skillName}Skill.html`);
  },
  methods: {
    async loadHtml(file) {
      const skillPath = `/html/${file}`;
      try {
        const response = await fetch(skillPath);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const htmlContent = await response.text();
        this.htmlContent = htmlContent;

        // 更新技能的可见性，检查 HTML 文件中是否存在对应的 id
        const visibleSkills = this.skills.map(skill => ({
          ...skill,
          visible: htmlContent.includes(`id="${skill.id}"`)
        })).filter(skill => skill.visible);

        // 根据 HTML 文件中的 ID 顺序排序 skills 数组
        const idsInHtmlOrder = Array.from(htmlContent.matchAll(/id="([^"]+)"/g))
                                    .map(match => match[1]);
        this.skills = visibleSkills.sort((a, b) => {
          return idsInHtmlOrder.indexOf(a.id) - idsInHtmlOrder.indexOf(b.id);
        });

      } catch (error) {
        console.error('Error loading HTML:', error);
        this.htmlContent = '<p>技能内容未找到</p>';
      }
    },
    scrollToId(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  computed: {
    visibleSkills() {
      return this.skills;
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/Skill.css';
</style>
