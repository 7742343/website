<template>
  <div class="chanping">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>产品服务</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>
          <span>为用户创造更多价值</span>
        </div>
        <div class="bott">
          <div class="jiaoyi">
            <p>1. 交易产品（恒生指数期货）</p>
            <p>2. 程序化软件搭建</p>
          </div>
          <div class="jianjie">
            <h3>简介:</h3>
            <p>
              恒生指数，由香港恒生银行全资附属的恒生指数服务有限公司编制，
              是以香港股票市场中的50家上市股票为成份股样本，
              以其发行量为权数的加权平均股价指数，是反映香港股市价幅动趋势最有影响的一种股价指数。
              该指数于1969年11月24日首次公开发布，基期为1964年7月31日．基期指数定为100。
            </p>
          </div>
          <div class="guize">
            <h3>规则:</h3>
            <p>1.交易单位：每指数点20港币</p>
            <p>2.最小变动价位：一个指数点</p>
            <p>
              3.交易时间：交易日上午9:15-12:00，下午13:00-16:30，晚上17:15-01:00（T+1）
              开市前时段：8:45-9:15,12:30-13:00（到期合约在最后交易日的收市时间为16:00）
            </p>
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="appchanping">
          <p>
            产品服务
            <span>为用户创造更多价值</span>
          </p>
        </div>
        <div class="zi">
          <div class="up">
            <p>1. 交易产品（恒生指数期货）</p>
            <p>2. 程序化软件搭建</p>
          </div>
          <div class="np">
            <p>规则:</p>
            <p>1.交易单位：每指数点20港币</p>
            <p>2.最小变动价位：一个指数点</p>
            <p>
              3.交易时间：交易日上午9:15-12:00，下午13:00-16:30，晚上17:15-01:00
              开市前时段：8:45-9:15,12:30-13:00（到期合约在最后交易日的收市
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heads from "./head/head";
export default {
  name: "chanping",
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
  .chanping {
    height: 300px;
    .body {
      height: 100%;
      background: url("../assets/appimg/chanping.png") no-repeat;
      background-size: 100% 100%;
      .thenapp {
        width: 90%;
        margin: 0 auto;
        height: 100%;
        display: block !important;
        .appchanping {
          margin: 0 auto;
          width: 50%;
          display: flex;
          p {
            margin: 0 auto;
            font-size: 1.2rem;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgb(255, 255, 255);
            margin-top: 20px;
          }
          span {
            display: block;
            font-size: 1rem;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
          }
        }
        .zi {
          text-align: left;
          font-size: 0.8rem;
          font-family: PingFang-SC-Medium;
          color: rgba(255, 255, 255, 1);
          line-height: 12px;
          .up {
          }
          .np {
            line-height: 15px;
          }
        }
      }
      .thenpc {
        display: none;
      }
    }
  }
}

.chanping {
  // height: 970px;
  overflow: hidden;
  .body {
    $type: screen;
    $proto: max-width;
    $value: 800px;
    @media #{$type} and ($proto: $value) {
      .heads {
        p {
          color: white !important;
        }
        span {
          font-size: 1rem !important;
        }
      }
    }

    .thenapp {
      display: none;
    }
    .thenpc {
      .bott {
        color: white;
        .guize {
          width: 70%;
          text-align: left;
          padding-bottom: 50px;
        }
        .jianjie {
          margin-top: 50px;
          text-align: left;
          p {
            font-family: MicrosoftYaHei;
            font-weight: 400;
            line-height: 30px;
          }
        }
        width: 60%;
        margin: 0 auto;
        .jiaoyi {
          margin-top: 30px;
          p {
            text-align: left;
          }
        }
      }
      .heads {
        .biaoqiantou {
          padding-top: 30px;
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
            color: white;
            margin-top: 0;
            margin-bottom: 10px;
          }
        }

        span {
          font-size: 20px;
          font-family: MicrosoftYaHeiLight;
          font-weight: 300;
          color: #e8e8e8;
        }
      }
    }

    @media screen and (min-width: 750px) {
      clear: both;
      height: 100%;
      background: url("../assets/zhineng/backgroundimg.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
