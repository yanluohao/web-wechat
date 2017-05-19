<template>
  <div id="login">
    <input type="text" placeholder="请输入你的用户名" v-model="username" @keyup.enter="saveName">
  </div>
</template>

<script>
export default {
  data(){
      return {
          username:""
      }
  },
  methods:{
      saveName(){
          console.log("enter");
          var name=this.username.trim();
          this.$emit("register",name);
      }
  }
}
</script>

<style>
#login input{
    position:fixed;
    width:200px;
    height:30px;
    line-height:30px;
    font-size:16px;
    top:50%;
    left:50%;
    margin:-15px 0 0 -100px;
}
</style>
