<template>
  <div id="app">
  <header v-if="isdoc">
    <div class="contain">
      Hello<span class="user">Liqing</span> <a href="">Login</a> <a href="">Register</a>
      <div class="text-right">
        <span>Home</span><span>Shopping Bag</span><span>Fdvorice</span><span>SiteNavigation</span>
      </div>
    </div>
  </header>
  <div class="top-nav" v-if="isdoc">
    
  </div>
  <div class="topnav" v-if="isdoc">
    <div class="contain">
      <ul>
        <li>
          <router-link to="/home">
            <div class="border"></div>
            HOME
          </router-link>
        </li>
        <li>
          <router-link to="/ptoducts">
            <div class="border"></div>
            PTODUCTS
          </router-link>
        </li>
        <li>
          <router-link to="/aa">
            <div class="border"></div>
            ARCHIVES
          </router-link>
        </li>
        <li>
          <router-link to="/aa">
            <div class="border"></div>
            CONTACT
          </router-link>
        </li>
        <li>
          <router-link to="/photo">
            <div class="border"></div>
            PHOTO
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <router-view :params="isdoc"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isdoc: this.meta === 1 ? false : true 
    }
  }
}
</script>

<style lang='less'>
@import './css/common.less';
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.top-nav{
  width: 100%;
  background-color: #E83712;
  height: 60px;
}
.topnav{
  background-color: #333333;
  height: 40px;
}
header{
  background-color: #f5f5f5;
  height: 26px;
  font-size: 12px;
  line-height: 26px;
  span{
    display: inline-block;
    margin-left: 5px;
  }
  a{
    margin-left: 12px;
  }
  .text-right{
    float: right;
    span{
      margin-left: 12px;
    }
  }
}
ul {
  list-style-type: none;
  padding: 0 200px;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  color: white;
  font-size: 24px;
  line-height: 35px;
  a{
    width: 100%;
    display: block;
    padding:0 5px;
    text-align: center;
    height: 35px;
    color: white;
    &.router-link-active{
      background-color: #E83712;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}

a {
  color: #42b983;
  text-decoration: none;
}
.border{
  margin: 0 20%;
  box-sizing: border-box;
  width: 60%;
  height: 2px;
  background-color: #333333;
}
</style>
