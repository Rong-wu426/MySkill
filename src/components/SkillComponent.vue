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
  // 使用async/await來做非同步程式設計
  async created() {
    try {
      const response = await fetch('/html-subtitle.json');  // 側邊欄
      if (response.ok) {
        this.skills = await response.json();
      } else {
        console.error('Failed to load skills JSON');
      }
    } catch (error) {
      console.error('Error loading skills JSON:', error);
    }

    // 根據傳遞的技能名稱加載對應的HTML檔
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
        let htmlContent = await response.text();

        htmlContent = `<h1>${this.skillName} 筆記</h1>\n` + htmlContent;

        this.htmlContent = htmlContent;

        // 更新側邊欄的技能在網頁中是否有對應到的id的可見性
        const visibleSkills = this.skills.map(skill => ({
          ...skill,
          visible: htmlContent.includes(`id="${skill.id}"`)
        })).filter(skill => skill.visible);

        // 根據網頁的ID去排順序
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
    // 透過側邊欄自動跳轉到對應的內容
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
