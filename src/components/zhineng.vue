<template>
  <div class="zhineng">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>智能交易</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>

          <span>系统推荐优质策略，无需编程随意编写属于自己的策略</span>
        </div>
        <div class="imgs">
          <div class="huadiv">
            <img src="../assets/zhineng/hua.png" alt class="hua" />
          </div>
          <div class="pctudiv">
            <img src="../assets/zhineng/tuceng.png" alt class="pctu" />
          </div>
          <div class="updiv">
            <img src="../assets/zhineng/ren.png" alt class="up" />
          </div>
          <div class="apptudiv">
            <img src="../assets/zhineng/phoneys.png" alt class="apptu" />
          </div>
          <div class="renwudiv">
            <img src="../assets/zhineng/renwu.png" alt class="renwu" />
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="appzhineng">
          <p>
            智能交易
            <span>
              系统推荐优质策略，无需编程
              随意编写属于自己的策略
            </span>
          </p>
        </div>
        <div class="appimg">
          <div class="klineapp"></div>
          <div class="phoneimg"></div>
          <!-- <img src="../assets/appimg/kline.png" alt class="klineapp" />
          <img src="../assets/appimg/phone.png" alt class="phoneimg" />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heads from "./head/head";
export default {
  name: "zhineng",
  data() {
    return {};
  }
  // components: { heads }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$type: screen;
$proto: max-width;
$value2: 500px;

@media #{$type} and ($proto: $value2) {
  .zhineng {
    height: 440px !important;
    .body {
      margin-top: 0;
      .thenpc {
        display: none;
      }
      .thenapp {
        width: 90%;
        margin: 0 auto;
        display: block !important;
        .appzhineng {
          margin: 0 auto;
          width: 60%;
          display: flex;
          p {
            font-size: 1.2rem;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
          span {
            display: block;
            font-size: 1rem;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: rgba(177, 198, 230, 1);
          }
        }
        .appimg {
          position: relative;
          height: 270px;
          .phoneimg {
            float: right;
            margin-right: -2rem;
            width: 278px;
            height: 481px;
            background: url("../assets/appimg/phone.png") no-repeat;
            background-size: 100%;
          }
          .klineapp {
            height: 200px;
            background: url("../assets/appimg/kline.png") no-repeat;
            background-size: 100%;
            z-index: 10;
            width: 50%;
            position: absolute;
            top: 40%;
            left: 5%;
          }
        }
      }
    }
  }
}

.zhineng {
  $type: screen;
  $proto: max-width;
  $value: 800px;

  @media #{$type} and ($proto: $value) {
    height: 600px;
  }
  height: 1200px;
  overflow: hidden;
  .body {
    .thenapp {
      display: none;
    }

    $type: screen;
    $proto: max-width;
    $value: 800px;
    @media #{$type} and ($proto: $value) {
      .heads {
        span {
          font-size: 1em !important;
        }
      }
    }
    position: relative;
    clear: both;
    margin-top: 43px;
    height: 100%;
    background: url("../assets/zhineng/juxing.png") no-repeat;
    background-size: 100% 100%;
    .thenpc {
      .heads {
        .biaoqiantou {
          display: flex;
          justify-content: center;
          align-items: center;
          .hou {
            margin-bottom: 10px;
            margin-left: 5px;
          }
          .qian {
            margin-right: 5px;
            margin-bottom: 10px;
          }
          p {
            font-size: 25px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            margin-top: 0;
            margin-bottom: 10px;
          }
        }
        span {
          font-size: 20px;
          font-family: MicrosoftYaHeiLight;
          font-weight: 300;
          color: #b1c6e6;
        }
      }
      .imgs {
        position: relative;
        margin-top: 140px;
        width: 100%;
        .huadiv {
          position: absolute;
          width: 10%;
          left: 4%;
          bottom: 0%;
          img {
            width: 100%;
          }
        }
        .pctudiv {
          position: relative;
          left: 13%;
          width: 55%;
          img {
            width: 100%;
          }
        }
        .updiv {
          width: 10%;
          position: absolute;
          top: -18%;
          right: 39.5%;
          img {
            width: 100%;
          }
        }
        .apptudiv {
          width: 18%;
          position: absolute;
          top: 0;
          right: 14%;
          z-index: 10;
          img {
            width: 100%;
          }
        }
        .renwudiv {
          width: 13%;
          position: absolute;
          right: 5%;
          bottom: 15%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
