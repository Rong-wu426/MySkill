import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PythonSkill from "../components/PythonSkill.vue";
import JavaScriptSkill from "../components/JavaScriptSkill.vue";
import VueSkill from "../components/VueSkill.vue";
import CsharpSkill from "../components/CsharpSkill.vue";
import CSSSkill from "../components/CSSSkill.vue";
import DockerSkill from "../components/DockerSkill.vue";
import GitSkill from "../components/GitSkill.vue";
import HelloWorld from "../components/HelloWorld.vue";
import HTMLSkill from "../components/HTMLSkill.vue";
import jQuerySkill from "../components/jQuerySkill.vue";
import LinuxSkill from "../components/LinuxSkill.vue";
import MatplotlibSkill from "../components/MatplotlibSkill.vue";
import MySQLSkill from "../components/MySQLSkill.vue";
import PandasSkill from "../components/PandasSkill.vue";
import SeabornSkill from "../components/SeabornSkill.vue";
import SQLiteSkill from "../components/SQLiteSkill.vue";
import TensorFlowSkill from "../components/TensorFlowSkill.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/python",
    name: "PythonSkill",
    component: PythonSkill,
  },
  {
    path: "/javascript",
    name: "JavaScriptSkill",
    component: JavaScriptSkill,
  },
  {
    path: "/vue",
    name: "VueSkill",
    component: VueSkill,
  },
  {
    path: "/csharp",
    name: "CsharpSkill",
    component: CsharpSkill,
  },
  {
    path: "/css",
    name: "CSSSkill",
    component: CSSSkill,
  },
  {
    path: "/docker",
    name: "DockerSkill",
    component: DockerSkill,
  },
  {
    path: "/git",
    name: "GitSkill",
    component: GitSkill,
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/html",
    name: "HTMLSkill",
    component: HTMLSkill,
  },
  {
    path: "/jquery",
    name: "jQuerySkill",
    component: jQuerySkill,
  },
  {
    path: "/linux",
    name: "LinuxSkill",
    component: LinuxSkill,
  },
  {
    path: "/matplotlib",
    name: "MatplotlibSkill",
    component: MatplotlibSkill,
  },
  {
    path: "/mysql",
    name: "MySQLSkill",
    component: MySQLSkill,
  },
  {
    path: "/pandas",
    name: "PandasSkill",
    component: PandasSkill,
  },
  {
    path: "/seaborn",
    name: "SeabornSkill",
    component: SeabornSkill,
  },
  {
    path: "/sqlite",
    name: "SQLiteSkill",
    component: SQLiteSkill,
  },
  {
    path: "/tensorflow",
    name: "TensorFlowSkill",
    component: TensorFlowSkill,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
