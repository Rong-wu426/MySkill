<template>
  <div id="app">
    <router-view />
    <footer>
      <p>
        &copy; 吳佳蓉. 版權所有
      </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer {
  margin-top: auto; /* Pushes the footer to the bottom */
  background-color: #f1f1f1;
  padding: 10px;
  border-top: 1px solid #ddd;
}

p {
  font-size: 1rem;
  color: #000000;
  margin: 0; 
}
</style>
