<template>
    <div>
        <h1>详情页面</h1>
        <h2>{{detail.productName}}</h2>
        <img :src="detail.productImageBig" alt="" style="width:500px">
        <div v-html="detail.detail"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            detail:{}
        }
    },
    created(){
        //console.log(this.$route.query.productId)
        this.getDate()
    },
    methods:{
        getDate(){
            this.$axios.get(`http://api.mm2018.com:8090/api/goods/productDet?productId=${this.$route.query.productId}`)
            .then(res=>{
                console.log(res.data)
                this.detail=res.data
            })
        }
    }
}
</script>
<style lang="scss">

</style>