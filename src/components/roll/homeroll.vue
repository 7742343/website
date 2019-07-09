<template>
  <div class="homeroll">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data" :key="item.higePoint">
          <div class="thenjinrong">
            <div class="hengsheng">
              <div class="left">
                <div class="quan">
                  <p>{{item.code}}</p>
                </div>
                <div class="zi">
                  <p>{{item.name}}</p>
                  <p>{{item.point}}</p>
                </div>
              </div>
              <div class="right">
                <p>
                  {{item.lasthq.changeRate}}%
                  <!-- <span></span> -->
                </p>
                <div class="appkline">
                  <appkline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->
      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import appkline from "../kline/appkline";
export default {
  name: "Slider",
  data() {
    return {
      data: []
    };
  },
  components: { appkline },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 如果需要分页器  pagination: '.swiper-pagination', // 如果需要前进后退按钮   nextButton: '.swiper-button-next',
      // prevButton: ".swiper-button-prev", // 如果需要滚动条        scrollbar: '.swiper-scrollbar',
      // direction: "vertical" // 垂直切换选项
      freeMode: true,
      observer: true,
      observeParents: true
    });
  },
  methods: {
    back() {
      let msg = JSON.stringify({});
      this.$post("get_menu", msg).then(res => {
        for (var i = 0; i < res.msg.length; i++) {
          for (var j = 0; j < res.msg[i].item.length; j++) {
            res.msg[i].item[j].lasthq = JSON.parse(res.msg[i].item[j].lasthq);
          }
        }
        for (let j = 0; j < res.msg[0].item.length; j++) {
          this.data.push(res.msg[0].item[j]);
        }
      });
      console.log(this.data);
    }
  },
  created() {
    this.back();
  }
};
</script>

<style lang="scss">
.homeroll {
  .homeroll .swiper-slide {
    width: 300px !important;
  }
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .swiper-wrapper {
    height: 100px;
  }
  .swiper-slide {
    text-align: center;
    background: #1c2143;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    .thenjinrong {
      width: 100%;
      height: 100%;
      .hengsheng {
        display: flex;
        height: 100%;
        justify-content: space-around;
        .left {
          display: flex;
          width: 50%;
          align-items: center;
          .quan {
            margin-top: 5px;
            margin-left: 5px;
            width: 55px;
            height: 55px;
            background: linear-gradient(
              0deg,
              rgba(7, 42, 94, 1),
              rgba(24, 62, 117, 1)
            );
            border-radius: 50%;
            p {
              color: white;
              margin-top: 20px;
              font-size: .7rem;
              margin-left: 0;
            }
          }
          .zi {
            color: white;
            height: 70px;
            p {
              text-align: left;
              margin-bottom: 0;
              font-size: 1rem;
              margin-left: 10px;
              margin-top: 10px;
            }
          }
        }
        .right {
          display: flex;
          position: relative;
          p {
            margin-top: 13px;
            color: rgba(25, 207, 163, 1);
          }
          .appkline {
            position: absolute;
            top: -100px;
            left: -80px;
          }
        }
      }
    }
  }
}
</style>