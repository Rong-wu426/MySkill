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
            <div v-for="skill in categorizedSkills.frontend" :key="skill.name">
              <SkillLink :skill="skill" />
            </div>
          </td>
          <td>
            <div v-for="skill in categorizedSkills.backend" :key="skill.name">
              <SkillLink :skill="skill" />
            </div>
          </td>
          <td>
            <div v-for="skill in categorizedSkills.other" :key="skill.name">
              <SkillLink :skill="skill" />
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
          { name: "SQLite", path: "/skill/sqlite", icon: "/logo/SQLite-logo.png" }
        ],
        other: [
          { name: "Git", path: "/skill/git", icon: "/logo/Git-logo.png" },
          { name: "Docker", path: "/skill/docker", icon: "/logo/Docker-logo.png" },
          { name: "Linux", path: "/skill/linux", icon: "/logo/Linux-logo.png" },
          { name: "Matplotlib", path: "/skill/matplotlib", icon: "/logo/matplotlib-logo.png" },
          { name: "Pandas", path: "/skill/pandas", icon: "/logo/pandas-logo.png" },
          { name: "Seaborn", path: "/skill/seaborn", icon: "/logo/seaborn-logo.png" },
          { name: "TensorFlow", path: "/skill/tensorflow", icon: "/logo/TensorFlow-logo.png" },
          { name: "C#", path: "/skill/csharp", icon: "/logo/Csharp-logo.png" }
        ],
      },
    };
  },
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

td {
  vertical-align: middle;
}

td ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center; 
}

td ul li {
  display: inline-block; 
  margin: 10px 20px;
  text-align: center; 
}


.router-link-active {
  color: #42b983;
  font-weight: bold;
}

.router-link-active img {
  border: 2px solid #42b983;
  border-radius: 50%;
}

.skill-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

a:hover {
  color: #42b983;
}

a:hover .skill-icon {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
