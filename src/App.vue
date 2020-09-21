<template>
  <div id="app">
   <router-view/>
  </div>
</template>
<script>
/**这是入口页面 */
export default {
  name:'App',
}
</script>
<style lang="scss">
body{
  background:silver;
}
*{
  margin:0;
  padding: 0;
}
ul{
  margin:0;
  padding: 0;
  list-style-type: none;
}

</style>
