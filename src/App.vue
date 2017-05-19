<template>
  <div id="app">
    <login v-show="!register" @register="userRegister"></login>
    <index v-show="register" :user="user"></index>
  </div>
</template>

<script>
import login from "./components/login";
import index from "./components/index";

export default {
  name: 'app',
  data(){
    return {
      register:false,
      user:{
        name:""
      }
    }
  },
  methods:{
    userRegister(name){
      this.user.name=name;
      this.register=true;
    }
  },
  components:{
    login,
    index
  }
}
</script>

<style>

</style>
