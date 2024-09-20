<template>
  <div id="app">
    <router-view />
    <footer>
      &copy; 吳佳蓉. 版權所有
    </footer>
  </div>
</template>

<style>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.content {
  flex: 1;
}

footer {
  width: 100%;
  position: fixed;
  top: 0;
  right: 20px;
  display: block; 
  padding: 0;
  margin: 0 auto;
  font-size: 1rem;
  color: #000000;
  text-align: right;
}

</style>