<template>
  <div class="home">
    <HelloWorld msg="這是吳佳蓉的履歷" />
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
            <ul>
              <li v-for="skill in categorizedSkills.frontend" :key="skill.name">
                <router-link :to="skill.path">
                  <img :src="skill.icon" alt="" class="skill-icon" />
                  {{ skill.name }}
                </router-link>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="skill in categorizedSkills.backend" :key="skill.name">
                <router-link :to="skill.path">
                  <img :src="skill.icon" alt="" class="skill-icon" />
                  {{ skill.name }}
                </router-link>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="skill in categorizedSkills.other" :key="skill.name">
                <router-link :to="skill.path">
                  <img :src="skill.icon" alt="" class="skill-icon" />
                  {{ skill.name }}
                </router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      // Define the categorized skills with their corresponding routes and icons
      categorizedSkills: {
        frontend: [
          { name: "HTML", path: "/html", icon: "/logo/HTML-logo.png" },
          { name: "CSS", path: "/css", icon: "/logo/CSS-logo.png" },
          { name: "JavaScript", path: "/javascript", icon: "/logo/Javascript-logo.png" },
          { name: "jQuery", path: "/jquery", icon: "/logo/Jquery-logo.png" },
          { name: "Vue", path: "/vue", icon: "/logo/vue-logo.png" }
        ],
        backend: [
          { name: "Python", path: "/python", icon: "/logo/python-logo.png" },
          { name: "MySQL", path: "/mysql", icon: "/logo/MySQL-logo.png" },
          { name: "SQLite", path: "/sqlite", icon: "/logo/SQLite-logo.png" }
        ],
        other: [
          { name: "Git", path: "/git", icon: "/logo/Git-logo.png" },
          { name: "Docker", path: "/docker", icon: "/logo/Docker-logo.png" },
          { name: "Linux", path: "/linux", icon: "/logo/Linux-logo.png" },
          { name: "Matplotlib", path: "/matplotlib", icon: "/logo/matplotlib-logo.png" },
          { name: "Pandas", path: "/pandas", icon: "/logo/pandas-logo.png" },
          { name: "Seaborn", path: "/seaborn", icon: "/logo/seaborn-logo.png" },
          { name: "TensorFlow", path: "/tensorflow", icon: "/logo/TensorFlow-logo.png" },
          { name: "C#", path: "/csharp", icon: "/logo/Csharp-logo.png" },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* 添加样式使表格看起来更好 */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  vertical-align: top;
}

th {
  background-color: #f4f4f4;
}

tr {
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.skill-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
</style>
