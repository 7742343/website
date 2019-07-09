<template>
  <div class="home">
    <div class="body">
      <div class="thenpc">
        <div class="yide">
          <p>易得&nbsp;&nbsp;量化与您更近</p>
        </div>
        <div class="shixian">
          <p>实现量化交易独一无二的交易策略</p>
          <span>Easy to get you closer to quantization</span>
        </div>
        <div class="sousuo">
          <!-- <i class="el-icon-search"></i> -->
          <img src="../assets/zhineng/sousuo.png" alt />
          <input type="text" />
          <button>搜索</button>
        </div>
        <div class="gupiao">
          <ul>
            <li v-for="item in data" :key="item.buyPoint">
              <div class="li_head">
                <div class="li_div">
                  <p>MHI</p>
                </div>
                <div class="hs1904">
                  <p>
                    {{item.name}}
                    <!-- <span>({{item.code}})</span> -->
                  </p>
                </div>
              </div>

              <div class="zuixinjia">
                <span>最新价:</span>
                <p>{{item.point}}</p>
              </div>
              <div class="zhangfu">
                <span>涨幅:</span>
                <p>
                  {{item.lasthq.changeRate}}%
                  <span>0.89</span>
                </p>
              </div>
              <div class="kline">
                <kindex />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="thenapp">
        <div class="thenup">
          <div class="suiyibian">随意编 开心投 甄选全球优秀经济商</div>
          <div class="shixian">实现第一无二的交易策略</div>
          <div class="yide2">易得 量化与您更近</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import kindex from "./kline/kindex";
export default {
  name: "home",
  data() {
    return {
      data: []
    };
  },
  components: { kindex },
  methods: {
    back() {
      let msg = JSON.stringify({});
      this.$post("get_menu", msg).then(res => {
        //接收全部数据的时候就把json转换成对象
        for (var i = 0; i < res.msg.length; i++) {
          for (var j = 0; j < res.msg[i].item.length; j++) {
            res.msg[i].item[j].lasthq = JSON.parse(res.msg[i].item[j].lasthq);
          }
        }
        for (let i = 0; i < 4; i++) {
          this.data.push(res.msg[0].item[i]);
        }
      });
    }
  },
  created() {
    this.back();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
$type: screen;
$proto: max-width;
$value: 800px;
$value2: 500px;
@media #{$type} and ($proto: $value2) {
  .home {
    height: auto !important;
    .body {
      clear: both !important;
      // margin-top: 43px !important;
      background: url("../assets/appimg/back3.png") no-repeat !important;
      background-size: 100% !important;
      // height: 100% !important;
      .thenapp {
        display: block !important;
        .thenup {
          padding-bottom: 25px;
          line-height: 30px !important;
          margin-left: 5% !important;
          text-align: left !important;
          // width: 60% !important;
          display: flex !important;
          flex-direction: column;
          .suiyibian {
            margin-top: 10% !important;
            color: #bdbbbb !important;
            font-size: 0.8rem;
          }
          .shixian {
            font-size: 1.2rem;
            color: #ffffff !important;
          }
          .yide2 {
            width: 200px !important;
            text-align: center;
            background: linear-gradient(
              251deg,
              rgba(97, 83, 230, 1),
              rgba(94, 35, 180, 1)
            );
            border-radius: 0px 25px 0px 25px;
            color: #ffffff !important;
          }
        }
      }

      .thenpc {
        //展示移动端页面。隐藏PC
        display: none;
      }
    }
  }
}

.home {
  $type: screen;
  $proto: max-width;
  $value: 800px;
  $value2: 500px;
  height: 970px;
  overflow: hidden;
  .body {
    @media #{$type} and ($proto: $value) {
      // background: #2327a6;
      margin-top: 0 !important;
      .sousuo {
        display: none;
      }
      .gupiao {
        width: 100% !important;

        ul {
          padding: 0;
          width: 100%;
          flex-wrap: wrap;
          //  justify-content: space-around;
          li {
            margin-top: 70px !important;
            margin-left: 1em !important;
            width: 45% !important;
          }
        }
      }
      .yide {
        p {
          font-size: 3em !important;
        }
      }
    }
    .thenapp {
      //隐藏手机端页面
      display: none;
    }
    .thenpc {
      //默认展示PC页面
      .gupiao {
        width: 65%;
        margin: 0 auto;
        height: 143px;
        margin-top: 80px;
        ul {
          display: flex;
          list-style-type: none;
          li {
            margin-top: 50px;
            margin-left: 35px;
            width: 241px;
            height: 143px;
            background: rgba(24, 24, 74, 1);

            .zhangfu {
              clear: both;
              width: 100%;
              color: white;
              display: flex;
              justify-content: space-around;
              span {
                font-size: 15px;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
              }
              p {
                margin-top: 2px;
                display: inline-block;
                font-family: MicrosoftYaHeiLight;
                font-weight: 300;
                font-size: 14px;
                color: rgba(166, 33, 33, 1);
                span {
                  line-height: 18px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  font-size: 14px;
                  color: rgba(166, 33, 33, 1);
                }
              }
            }
            .zuixinjia {
              clear: both;
              width: 100%;
              color: white;
              display: flex;
              justify-content: space-around;
              span {
                margin-left: -0.6rem;
                font-size: 15px;
                color: rgba(255, 255, 255, 1);
                line-height: 26px;
              }
              p {
                margin-top: 2px;
                display: inline-block;
                font-family: MicrosoftYaHeiLight;
                font-weight: 300;
                color: rgba(255, 255, 255, 1);
                span {
                  margin-left: 5px;
                  line-height: 22px;
                  font-size: 13px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                }
              }
            }
            .li_head {
              display: flex;
              justify-content: space-around;
              .li_div {
                p {
                  height: 35px;
                  width: 35px;
                  color: white;
                  line-height: 33px;
                  background: linear-gradient(
                    0deg,
                    rgba(7, 42, 94, 1),
                    rgba(24, 62, 117, 1)
                  );
                  border-radius: 50%;
                }
              }
              .hs1904 {
                line-height: 33px;
                color: white;
                font-size: 18px;
                font-family: MicrosoftYaHei;
                span {
                  font-size: 14px;
                  font-family: MicrosoftYaHeiLight;
                  font-weight: 300;
                  color: rgba(255, 255, 255, 1);
                }
              }
            }
            .kline {
              width: 100%;
              display: none;
            }
          }
          li:hover {
            height: 203px;
            position: relative;
            bottom: 60px;
            .kline {
              display: block;
            }
          }
        }
      }
      .sousuo {
        img {
          position: relative;
          left: 138px;
          top: 7px;
          width: 30px;
        }
        //   width: 100%;
        position: relative;
        margin-top: 18px;
        input {
          padding-left: 40px;
          margin-left: 99px;
          width: 28%;
          height: 50px;
          border: 0px;
          background: rgba(255, 255, 255, 1);
          border-radius: 2px;
          font-size: 20px;
        }
        button {
          cursor: pointer;
          font-size: 15px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: #ffffff;
          position: relative;
          width: 100px;
          height: 52px;
          border: 0px;
          right: 100px;
          background: #f3994a;
          bottom: 1px;
          border-radius: 2px;
        }
      }
      .yide {
        padding-top: 173px;
        p {
          font-size: 55px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 30px;
        }
      }
      .shixian {
        p {
          font-size: 27px;
          font-family: MicrosoftYaHeiLight;
          font-weight: 300;
          color: rgba(133, 158, 196, 1);
          margin-bottom: 0px;
        }
        span {
          display: block;
          font-size: 16px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #4c5b72;
          opacity: 0.49;
          margin-top: 15px;
        }
      }
    }

    clear: both;
    margin-top: 43px;
    background: url("../assets/background.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
  }
}
</style>
