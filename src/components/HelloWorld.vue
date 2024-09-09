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
p {
display: flex;
align-items: center;
justify-content: center;
padding: 0;
margin: 0;
}
</style>
