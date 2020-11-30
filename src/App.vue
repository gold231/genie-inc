<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Century_Gothic";
  src: local("Century_Gothic"),
   url(./assets/fonts/Century_Gothic.ttf) format("truetype");
}
#app {
  font-family: Century_Gothic, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #FCFCFC;
  margin-top: 60px;
}
</style>
