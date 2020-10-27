<template>
  <div id="app" class="container-fluid">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="site-info">
            <h1>Jayalekha Ramesh</h1>
            <h3>Vue SpringBoot example</h3>
    </div>
    <nav>
      <router-link class="btn btn-primary" to="/persons">Person</router-link>
      <router-link class="btn btn-primary" to="/books">Books</router-link>
    </nav>
    <br/>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.site-info {
  color: blue;
  margin-bottom: 20px;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
</style>
