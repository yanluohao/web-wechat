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
      saveName(e){
          var name=this.username.trim();
          //手机端调试的时候存在键盘不收缩的情况。所以需要做如下的处理
          e.target.blur();
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
