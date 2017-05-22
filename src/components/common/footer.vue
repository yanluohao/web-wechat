<template>
    <div id="footer">
        <ul>
            <li>
                <router-link to="/index">
                    <span class="iconfont icon-weixin"></span>
                    <span>微信</span>
                </router-link>
            </li>
            <li>
                <router-link to="/contact">
                    <span class="iconfont icon-tongxunlu"></span>
                    <span>通讯录</span>
                </router-link>
            </li>
            <li>
                <router-link to="/discovery">
                    <span class="iconfont icon-444"></span>
                    <span>发现</span>            
                </router-link>
            </li>
            <li>
                <router-link to="/user">
                    <span class="iconfont icon-iconfontwohover"></span>
                    <span>我</span>        
                </router-link>    
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style scoped>

#footer{
    width:100%;
    height:50px;
    border-top:1px solid #ccc;
    position:absolute;
    bottom:0;
}

#footer ul{
    display:flex;
    font-size:0;
    padding-top:5px;
}

#footer ul li{
    display:inline-block;
    flex:1;
    text-align:center;
    font-size:12px;
}

#footer ul li span{
    display:block;
}

#footer ul li .iconfont{
    font-size:24px;
}

#footer ul li a.active{
    color:#51c332;
}
</style>