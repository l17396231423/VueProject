<template>
 <div>
      <div class="top">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/allgoods">全部商品</router-link></li>
      </ul>
    </div>
 </div>
</template>
<script>

export default{

}
</script>
<style lang="scss">

.top{
    width:100%;
    height: 58px;
    background: black;
    display: flex;
    align-items: center;
}
.top img{
    width:20px;
    height: 20px;
}
.menu{width:100%;height: 74px; background: white;}
.menu ul{width:1180px;display:flex;margin: 0 auto;}
.menu ul li{flex:1;text-align: center;line-height: 74px;}
.menu ul li a{color:#884;text-decoration: none;}
</style>