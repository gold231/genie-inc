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
.tabs.mytabs .card-body {
  padding: 0;
}
.tabs.mytabs .nav-tabs .nav-link.active {
  background-color: #000;
  color: white;
}
.tabs.mytabs .nav-tabs .nav-link {
  border: 1px solid #EBEBEB;
  background-color: #EBEBEB;
  color: #000;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.drop-bold > button {
  font-weight: bold !important;
}
.text-black {
  color: #000;
}
.text-gray-1 {
  color: #6E6C92;
}
.button-bold > button {
  font-weight: bold;
}
</style>
