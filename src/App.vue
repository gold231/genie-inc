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

.style-chooser .vs__dropdown-toggle {
  padding: 1%;
}
.style-chooser .vs__search::placeholder {
  color: #AAAAAA;
}
.style-chooser .vs__dropdown-toggle
{
  background: #EFF1FC;
  border: none;
  color: #000;
}
.style-chooser .vs__dropdown-menu {
  background-color: white;
}
.style-chooser .vs__selected {
  background-color: #000;
  color: white;
}
.style-chooser .vs__selected > button > svg {
  fill: white;
}
.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}

.dropdown-left.dropdown > button {
  text-align: left;
}

@media (max-width: 767px) {
  .list-p.dropdown > button {
    font-size: 12px;
  }  
}
</style>
