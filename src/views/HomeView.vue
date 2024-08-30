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
/* 表格樣式 */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid #ddd;
  padding: 16px; /* 增加內邊距 */
  vertical-align: top;
  font-size: 22px; /* 增大字體 */
  line-height: 1.5; /* 增加行高 */
}

th {
  background-color: #4CAF50; /* 綠色背景 */
  color: white;
  font-weight: bold;
  text-align: center;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

td {
  background-color: #f9f9f9; /* 淺灰色背景 */
}

/* 列表樣式 */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding: 12px; /* 增加內邊距 */
  border-radius: 4px;
  transition: background-color 0.3s ease;
  background-color: #e3f2fd; /* 淺藍色背景 */
  font-size: 22px; /* 增大字體 */
  line-height: 1.5; /* 增加行高 */
  overflow: hidden; /* 防止溢出 */
  text-overflow: ellipsis; /* 溢出處理 */
}

li:hover {
  background-color: #bbdefb; /* 更深的藍色背景 */
}

.skill-icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  table {
    font-size: 14px; /* 在小屏幕上稍微縮小字體 */
  }

  .skill-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}
</style>
