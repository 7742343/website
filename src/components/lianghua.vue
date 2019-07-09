<template>
  <div class="lianghua">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>量化交易</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>

          <span>让交易变得更简单</span>
        </div>
        <div class="bott">
          <div class="tuceng">
            <div class="imgs">
              <img src="../assets/zhineng/tuceng27.png" alt />
            </div>

            <div class="ziti">
              <p>
                量化交易是指以先进的数学模型替代人为的主观判断，
                利用计算机技术从庞大的历史数据中海选能带来超额收益的多种“大概率”事件以制定策略，
                极大地减少了投资者情绪波动的影响，避免在市场极度狂热或悲观的情况下作出非理性的投资决策。
              </p>
            </div>
          </div>
          <div class="ulli">
            <ul>
              <li>
                <div class="jilv">
                  <div class="quan"></div>
                  <p>
                    纪律性
                    <span>
                      根据模型的运行结果进行决策，
                      克制人性中贪婪、恐惧等心理。
                    </span>
                  </p>
                </div>
              </li>
              <li>
                <div class="xitong">
                  <div class="quan"></div>
                  <p>
                    系统性
                    <span>定量投资的核心思想包括宏观周期、市场结构、估值、成长、盈利质量</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="taolu">
                  <div class="quan"></div>
                  <p>
                    套路思想
                    <span>定量投资通过全面、系统性的扫描捕捉错误定价、错误估值带来的机会。实现低买高卖获利。</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="applianghua">
          <p>
            量化交易
            <span>让交易变得更简单</span>
          </p>
        </div>
        <div class="thenflex">
          <div class="tu">
            <img src="../assets/appimg/lianghua.png" alt />
          </div>
          <div class="zi">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量化交易是指以先进的数学模型替代人为的主观判断，
              利用计算机技术从庞大的历史数据中海选能带来超额收益的多种“大概率”事件以制定策略，
              极大地减少了投资者情绪波动的影响。
            </p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;避免在市场极度狂热或悲观的情况下作出非理性的投资决策。</span>
          </div>
        </div>
        <div class="silu">
          <div class="jilv">
            <img src="../assets/appimg/jilv.png" alt />
            <p>纪律性</p>
            <span>
              根据模型的运行结果进行决
              策克制人性中贪婪、恐惧等心理
            </span>
          </div>
          <div class="jilv">
            <img src="../assets/appimg/xitong.png" alt />
            <p>系统性</p>
            <span>
              宏观周期、市场周期
              估值、成长、盈利的质量
            </span>
          </div>
          <div class="jilv">
            <img src="../assets/appimg/taoli.png" alt />
            <p>套利思想</p>
            <span>
              通过全面、系统性的扫描捕捉错误定价
              错误估值带来的机会,实现低买来高卖获利
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heads from "./head/head";
export default {
  name: "lianghua",
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
  .lianghua {
    height: 850px !important;
    .body {
      .thenapp {
        width: 90%;
        margin: 0 auto;
        display: block !important;
        .applianghua {
          margin: 0 auto;
          width: 60%;
          display: flex;
          p {
            margin: 0 auto;
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
        .thenflex {
          display: flex;
          align-items: center;
          .tu {
            width: 50%;
            img {
              width: 100%;
            }
          }
          .zi {
            width: 60%;
            text-align: left;
            p {
              font-size: 0.8rem;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(101, 112, 123, 1);
              line-height: 1.5rem;
              margin-bottom: 0;
            }
            span {
              margin-top: 0px;
              font-size: 0.8rem;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(101, 112, 123, 1);
              line-height: 1.5rem;
            }
          }
        }
        .silu {
          .jilv {
            width: 50%;
            margin: 0 auto;
            margin-top: 20px;
            img {
              margin-top: 40px;
              width: 50px;
            }
            p {
              margin: 0;
              font-size: 1rem;
              font-family: PingFang-SC-Bold;
              font-weight: bold;
              color: rgba(39, 62, 87, 1);
              margin-left: 10px;
            }
            span {
              font-size: 0.8rem;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(143, 158, 171, 1);
            }
          }
        }
      }
      .thenpc {
        display: none;
      }
    }
  }
}

.lianghua {
  height: 970px;
  overflow: hidden;
  .body {
    $type: screen;
    $proto: max-width;
    $value: 800px;
    @media #{$type} and ($proto: $value) {
      .qian {
        left: 33% !important;
      }
      .hou {
        left: 62% !important;
      }
      .heads {
        span {
          font-size: 1rem !important;
        }
      }
      .bott {
        .tuceng {
          .imgs {
            width: 40% !important;
            top: 35% !important;
            left: 5% !important;
          }
          .ziti {
            p {
              width: 50% !important;
            }
          }
        }
        .ulli {
          ul {
            width: 100% !important;
            padding: 0 !important;
            li {
              width: 32% !important;
              height: 224px !important;
              .jilv {
                .quan {
                  width: 70px !important;
                  height: 70px !important ;
                  margin-top: -35px !important;
                }
                p {
                  padding: 0 10px !important;
                  left: 0.7rem !important;
                  bottom: 4rem !important;
                  font-size: 1.5rem !important;
                  span {
                    line-height: 20px !important;
                    width: 6rem !important;
                  }
                }
              }
              .xitong {
                .quan {
                  width: 70px !important;
                  margin-top: -35px !important;
                  height: 70px !important ;
                }
                p {
                  padding: 0 10px !important;
                  left: 0.7rem !important;
                  bottom: 4rem !important;
                  font-size: 1.5rem !important;
                  span {
                    line-height: 20px !important;
                    width: 6rem !important;
                  }
                }
              }
              .taolu {
                .quan {
                  width: 70px !important;
                  margin-top: -35px !important;
                  height: 70px !important ;
                }
                p {
                  padding: 0 10px !important;
                  left: 0 !important;
                  bottom: 4rem !important;
                  font-size: 1.5rem !important;
                  span {
                    line-height: 20px !important;
                    width: 7rem !important;
                  }
                }
              }
            }
          }
        }
      }
    }

    .thenapp {
      display: none;
    }
    .thenpc {
      .bott {
        .ulli {
          ul {
            width: 60%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            li {
              cursor: pointer;
              margin-top: 95px;
              width: 25%;
              height: 224px;
              background: white;
              .jilv {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                .quan {
                  width: 102px;
                  height: 102px;
                  background: url("../assets/imgtwo/jilv.png") no-repeat;
                  background-size: 100% 100%;
                  margin: 0 auto;
                  margin-top: -50px;
                }
                p {
                  padding: 0 10%;
                  font-size: 20px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                  span {
                    text-align: left;
                    display: block;
                    margin: 0 auto;
                    margin-top: 10px;
                    height: 28px;
                    font-size: 15px;
                    font-family: MicrosoftYaHeiLight;
                    font-weight: 300;
                    color: rgba(102, 102, 102, 1);
                    line-height: 20px;
                  }
                }
              }
              .xitong {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                .quan {
                  width: 102px;
                  height: 102px;
                  background: url("../assets/imgtwo/xitong.png") no-repeat;
                  background-size: 100% 100%;
                  margin: 0 auto;
                  margin-top: -50px;
                }
                p {
                  padding: 0 10%;
                  font-size: 20px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                  span {
                    text-align: left;
                    display: block;
                    margin: 0 auto;
                    margin-top: 10px;
                    height: 28px;
                    font-size: 15px;
                    font-family: MicrosoftYaHeiLight;
                    font-weight: 300;
                    color: rgba(102, 102, 102, 1);
                    line-height: 20px;
                  }
                }
              }
              .taolu {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                .quan {
                  width: 102px;
                  height: 102px;
                  background: url("../assets/imgtwo/qiandai.png") no-repeat;
                  background-size: 100% 100%;
                  margin: 0 auto;
                  margin-top: -50px;
                }
                p {
                  padding: 0 5%;
                  font-size: 20px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                  span {
                    text-align: left;
                    display: block;
                    margin: 0 auto;
                    margin-top: 10px;
                    height: 28px;
                    font-size: 15px;
                    font-family: MicrosoftYaHeiLight;
                    font-weight: 300;
                    color: rgba(102, 102, 102, 1);
                    line-height: 20px;
                  }
                }
              }
            }
            li:hover {
              .jilv {
                .quan {
                  background: url("../assets/imgtwo/jilvzhong.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
              .xitong {
                .quan {
                  background: url("../assets/imgtwo/xitongzhong.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
              .taolu {
                .quan {
                  background: url("../assets/imgtwo/qiandaozhong.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }
        .tuceng {
          position: relative;
          height: 350px;
          .imgs {
            width: 20%;
            position: absolute;
            top: 15%;
            left: 20%;
            img {
              width: 100%;
            }
          }
          .ziti {
            p {
              width: 30%;
              text-align: left;
              position: absolute;
              left: 44%;
              top: 30%;
              font-family: MicrosoftYaHeiLight;
              font-weight: 300;
              color: #65707b;
              line-height: 1.8rem;
            }
          }
        }
      }
      .heads {
        margin-top: 5%;
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
    }
    @media screen and (min-width: 750px) {
      clear: both;
      margin-top: 43px;
      height: 100%;
      background: url("../assets/zhineng/juxing.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
  