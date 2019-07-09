<template>
  <div class="jinrong">
    <h2>金融科技基础知识</h2>
    <el-carousel indicator-position="outside" height="150px">
      <el-carousel-item v-for="item in lint" :key="item.id">
        <div class="thenjinrong">
          <!-- <h2>{{item.name}}</h2> -->
          <p class="thenthat">{{item.that}}</p>
          <p class="thendaan">{{item.daan}}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lint: [
        {
          id: 1,
          name: "金融科技基础知识",
          that: "什么是金融科技？",
          daan:
            "科技产业与金融产业的融合，对于易程序而言，主要是将计算机科技运用到衍生品交易中，通过基于CTP的交易通道和交易软件的体系建设,为客户提供程序化交易的解决方案，为其实现个性化"
        },
        {
          id: 2,
          name: "金融科技基础知识",
          that: "金融科技依托基础是什么？",
          daan: "可以依托先进的交易科技平台以及强大的IT技术团队和金融工程团队。"
        },
        {
          id: 3,
          name: "金融科技基础知识",
          that: "什么是API接口？",
          daan:
            "应用程序接口（是一组定义、程序及协议的集合，通过 API 接口实现计算机软件之间的相互通信）。API接口是连接电子交易平台，向广大客户开放的一个接口。客户可直接或通过交易终端软件连接API接口。（实现程序化交易的接口）"
        }
      ]
    };
  }
};
</script>

<style scoped>
.jinrong {
  text-align: left;
  background: url("../../assets/appimg/touzi.png") no-repeat;
  background-size: 100% 100%;
}
.jinrong h2 {
  margin-left: 20px;
  margin-bottom: 0;
}
.thendaan {
  margin-top: 0px;
  font-size: 0.8rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: #6182b7;
  line-height: 25px;
}
.thenthat {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #65707b;
  font-size: 1.3rem;
}
.thenjinrong {
  width: 90%;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>