<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/home">
          HOME
          <div class="border"></div>
        </router-link>
      </li>
      <li>
        <router-link to="/ptoducts">
          PTODUCTS
          <div class="border"></div>
        </router-link>
      </li>
      <li>
        <router-link to="/ptoducts">
          ARCHIVES
          <div class="border"></div>
        </router-link>
      </li>
      <li>
        <router-link to="/ptoducts">
          CONTACT
          <div class="border"></div>
        </router-link>
      </li>
      <li>
        <router-link to="/ptoducts">
          PHOTO
          <div class="border"></div>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  },
  methods: {
    getThis: function () {
      this.message = this.message.split('').sort().join('')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
.border{
  transition: all 0.2s linear;
  height: 2px;
  width: 0;
  background-color: #42b983;
}
a:hover > .border{
  width: 100%;
}
</style>
