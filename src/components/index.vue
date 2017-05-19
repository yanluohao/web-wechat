<template>
    <div id="index">
        这是首页
        <keep-alive>
            <router-view></router-view>        
        </keep-alive>
        <v-foot></v-foot>
    </div>
</template>

<script>
// import header from "./common/header";
import footer from "./common/footer";

export default {
    props:{
        user:Object
    },
    components:{
        "v-foot":footer
    }
}
</script>


<style>

</style>