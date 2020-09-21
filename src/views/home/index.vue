<template>
  <div>
    <div class="banner">
      <el-carousel height="415px">
        <el-carousel-item v-for="(item,i) in lunbo" :key="i">
          <img :src="item.picUrl" alt />
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div v-for="(item,i) in allList" :key="i">
      <div class="ad" v-if="item.type==1">
        <ul>
          <li v-for="(ad,i) in item.panelContents" :key="i">
            <img :src="ad.picUrl" alt />
          </li>
        </ul>
      </div>

      <div class="hotdetail" v-if="item.type==2">
        <div class="hotdetail_menu">{{item.name}}</div>
        <div class="hotdetail_main">
          <ul>
            <li v-for="(hotDetail,i) in item.panelContents" :key="i">
              <img :src="hotDetail.picUrl" alt />
              {{hotDetail.productName}}
              <p>{{hotDetail.salePrice}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="selectDetail"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allList: [],
      lunbo: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("http://api.mm2018.com:8090/api/goods/home")
        .then((res) => {
          this.allList = res.data.result;
          this.lunbo = this.allList[0].panelContents;
        });
    },
  },
};
</script>
<style lang="scss">
.banner {
  width: 1180px;
  height: 415px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.ad {
  width: 1180px;
  height: 180px;
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid #dedede;
  overflow: hidden;
  ul {
    width: 100%;
    display: flex;
    li {
      flex: 1;
      img {
        width: 100%;
      }
    }
  }
}
.hotdetail {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  border: 1px solid #dedede;
  background: white;
  overflow: hidden;
  border-radius: 10px;
  .hotdetail_menu {
    height: 51px;
    border-bottom: 1px solid #dedede;
    line-height: 51px;
    text-indent: 30px;
  }
  .hotdetail_main {
    width: 100%;
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        p {
          color: black;
        }
        img {
          display: block;
          width: 170;
          margin: 30px auto;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
}
</style>