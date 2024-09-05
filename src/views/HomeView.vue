<template>
  <div class="home">
    <HelloWorld msg="吳佳蓉的技能履歷" />
    <h2>技能表</h2>
    <table>
      <thead>
        <tr>
          <th>前端</th>
          <th>後端</th>
          <th>其他</th>
        </tr>
      </thead>
        <tbody>
        <tr>
          <td>
            <div class="skill-container">
              <div v-for="skill in categorizedSkills.frontend" :key="skill.name" class="skill-item">
                <SkillLink :skill="skill" />
              </div>
            </div>
          </td>
          <td>
            <div class="skill-container">
              <div v-for="skill in categorizedSkills.backend" :key="skill.name" class="skill-item">
                <SkillLink :skill="skill" />
              </div>
            </div>
          </td>
          <td>
            <div class="skill-container">
              <div v-for="skill in categorizedSkills.other" :key="skill.name" class="skill-item">
                <SkillLink :skill="skill" />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import SkillLink from "@/components/SkillLink.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    SkillLink
  },
  data() {
    return {
      categorizedSkills: {
        frontend: [
          { name: "HTML", path: "/skill/html", icon: "/logo/HTML-logo.png" },
          { name: "CSS", path: "/skill/css", icon: "/logo/CSS-logo.png" },
          { name: "JavaScript", path: "/skill/javascript", icon: "/logo/Javascript-logo.png" },
          { name: "jQuery", path: "/skill/jquery", icon: "/logo/Jquery-logo.png" },
          { name: "Vue", path: "/skill/vue", icon: "/logo/vue-logo.png" }
        ],
        backend: [
          { name: "Python", path: "/skill/python", icon: "/logo/python-logo.png" },
          { name: "MySQL", path: "/skill/mysql", icon: "/logo/MySQL-logo.png" },
          { name: "SQLite", path: "/skill/sqlite", icon: "/logo/SQLite-logo.png" },
          { name: "C#", path: "/skill/csharp", icon: "/logo/Csharp-logo.png" },
          { name: "Matplotlib", path: "/skill/matplotlib", icon: "/logo/matplotlib-logo.png" },
          { name: "Pandas", path: "/skill/pandas", icon: "/logo/pandas-logo.png" },
          { name: "Seaborn", path: "/skill/seaborn", icon: "/logo/seaborn-logo.png" },
          { name: "TensorFlow", path: "/skill/tensorflow", icon: "/logo/TensorFlow-logo.png" }
        ],
        other: [
          { name: "Git", path: "/skill/git", icon: "/logo/Git-logo.png" },
          { name: "Docker", path: "/skill/docker", icon: "/logo/Docker-logo.png" },
          { name: "Linux", path: "/skill/linux", icon: "/logo/Linux-logo.png" }
        ],
      },
    };
  },
};
</script>

<style scoped>
@import '@/assets/css/Home.css';
</style>
