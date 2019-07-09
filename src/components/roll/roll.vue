<template>
  <div class="roll">
    <el-carousel :interval="4000" type="card" height="270px">
      <el-carousel-item v-for="item in lint" :key="item.id">
        <div class="thenback">
          <img :src="item.img" />
          <p class="thenname">{{item.name}}</p>
          <p class="thenjianjie">{{item.jianjie}}</p>
          <p class="thendata">{{item.data}}</p>
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
          img: require("../../assets/appimg/dalian.png"),
          name: "大连期货交易所",
          jianjie:
            "棕榈油、焦炭、豆粕、豆油、黄大豆一号、黄大豆二号、焦煤、铁矿石、豆粕期货期权",
          data: "交易时间:21：00—次日23:30"
        },
        {
          id: 2,
          img: require("../../assets/appimg/zhengzhou.png"),
          name: "郑州期货交易所",
          jianjie:
            "棕榈油、焦炭、豆粕、豆油、黄大豆一号、黄大豆二号、焦煤、铁矿石、豆粕期货期权",
          data: "交易时间:21：00—次日23:30"
        },
        {
          id: 3,
          img: require("../../assets/appimg/shanghai.png"),
          name: "上海期货交易所",
          jianjie:
            "棕榈油、焦炭、豆粕、豆油、黄大豆一号、黄大豆二号、焦煤、铁矿石、豆粕期货期权",
          data: "交易时间:21：00—次日23:30"
        }
      ]
    };
  }
};
</script>
<style scoped>
.roll {
  margin-top: 20px;
}
.thenback img {
  margin-top: 10px;
  width: 3rem;
}
.thenname {
  font-size: 1rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(101, 112, 123, 1);
}
.thenjianjie {
  width: 80%;
  margin: 0 auto;
  text-align: left;
  font-size: 1rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  /* line-height: 36px; */
}
.thendata {
  font-size: 0.8rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(97, 130, 183, 1);
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  /* background: rgb(249, 249, 249); */
  background: white;

  border-radius: 6px;
}

.el-carousel__item:nth-child(2n) {
  /* background: rgb(249, 249, 249); */
  background: white;

  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background: rgb(249, 249, 249); */
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
}
</style>