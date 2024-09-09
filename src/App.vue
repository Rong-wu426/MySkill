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
  bottom: 0;
  left: 0;
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 1rem;
  color: #000000;
}

p {
  margin: 0; 
  display: flex; 
  justify-content: center; 
  align-items: center;
}

</style>