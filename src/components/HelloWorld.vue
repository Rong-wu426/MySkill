<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>歡迎來到佳蓉的技能展示頁面。可以透過點擊以下的連結來檢視筆記。</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "我的技能主页",
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin: 20px;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

p {
  font-size: 1.2em;
  color: #606060;
}

h3 {
  margin: 40px 0 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 10px 0;
}

a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
