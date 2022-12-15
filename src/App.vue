<template>
<router-view></router-view>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding :0;
  margin: 0;
}
.logo {
  width: 200px;
  border-radius: 100px;
}

.form input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid orange;
}

.form button {
  width: 320px;
  height: 40px;
  border: 1px solid orange;
  color: orange;
  background-color: black;
  cursor: pointer;
}
</style>
