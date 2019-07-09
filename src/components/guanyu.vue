<template>
  <div class="guanyu">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>关于我们</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>

          <span>权威、专业、及时、智能</span>
        </div>
        <div class="boot">
          <div class="leftone">
            <div class="left2">
              <div class="kaifang">
                <div class="left_kf">
                  <div class="beijingse">
                    <p></p>
                  </div>
                </div>
                <div class="right_kf">
                  <p>
                    开放
                    <span>开放的经营理念和用人理念</span>
                  </p>
                </div>
              </div>

              <div class="chengxin">
                <div class="left_kf">
                  <div class="beijingse">
                    <p></p>
                  </div>
                </div>
                <div class="right_kf">
                  <p>
                    诚信
                    <span>将诚信作为企业经营的基本策略</span>
                  </p>
                </div>
              </div>

              <div class="chuangxin">
                <div class="left_kf">
                  <div class="beijingse">
                    <p></p>
                  </div>
                </div>
                <div class="right_kf">
                  <p>
                    创新
                    <span>不断的创新，才能保持核心竞争力优势策略</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="left"></div>
          </div>

          <div class="right">
            <div class="up">
              <p>
                四川易程讯软件开发有限公司成立于2017年11月，坐落于成都高新区，
                是一家专业从事金融类计算机应用软件开发、网络技术支持;服务于证券市场、期货市场、投资者的综合金融类软件开发商。
              </p>
            </div>
            <div class="jiaoyi">
              <p>建立庞大的交易数据库，实现人工智能程序化交易。</p>
            </div>
            <div class="zhineng">
              <p>
                诞生了人工智能平台，平台与其个人程序化交易相互配合，
                投资者只需要将交易策略给平台中的智能机器人说，
                智能机器人就会将其想法形成一个技术性指标，这种技术性质变是独一无二。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="appguanyu">
          <p>
            关于我们
            <span>权威·专业·及时·智能</span>
          </p>
        </div>
        <div class="zhong">
          <div class="leftone">
            <div class="left2">
              <div class="kaifang">
                <div class="left_kf">
                  <div class="beijingse">
                    <p></p>
                  </div>
                </div>
                <div class="right_kf">
                  <p>
                    开放
                    <span>开放的经营理念和用人理念</span>
                  </p>
                </div>
              </div>

              <div class="chengxin">
                <div class="left_kf">
                  <div class="beijingse">
                    <p></p>
                  </div>
                </div>
                <div class="right_kf">
                  <p>
                    诚信
                    <span>将诚信作为企业经营的基本</span>
                  </p>
                </div>
              </div>

              <div class="chuangxin">
                <div class="left_kf">
                  <div class="beijingse">
                    <p></p>
                  </div>
                </div>
                <div class="right_kf">
                  <p>
                    创新
                    <span>不断的创新，才能保持核心</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="left"></div>
          </div>
          <div class="tu">
            <img src="../assets/appimg/guanyu.png" alt />
            <div class="quan">
              <p>
                交易
                <span>数据库</span>
              </p>
            </div>
            <p>人工智能程序化交易</p>
          </div>
        </div>
        <div class="ziti">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四川易程讯软件开发有限公司成立于2017年11月，坐落于成都高新区，
            是一家专业从事金融类计算机应用软件开发、网络技术支持;
            服务于证券市场、期货市场、投资者的综合金融类软件开发商。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;诞生了人工智能平台，平台与其个人程序化交易相互配合，
            投资者只需要将交易策略给平台中的智能机器人说，
            智能机器人就会将其想法形成一个技术性指标，这种技术性质变是独一无二。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heads from "./head/head";
export default {
  name: "guanyu",
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
  .guanyu {
    padding-bottom: 0 !important;
    .body {
      .thenapp {
        width: 90%;
        margin: 0 auto;
        display: block !important;
        .appguanyu {
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
        .zhong {
          display: flex;
          .leftone {
            z-index: 10;
            // width: 400px;
            width: 50%;
            .left2 {
              .kaifang {
                display: flex;
                cursor: pointer;
                margin-top: 20px;
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
                border-radius: 2px;
                .left_kf {
                  .beijingse {
                    p {
                      display: inline-block;
                      width: 30px;
                      height: 30px;
                      margin-top: 5px;
                      background: url("../assets/imgtwo/feiji.png") no-repeat;
                      background-size: 100% 100%;
                    }
                    border-radius: 2px;
                    width: 40px;
                    height: 40px;
                    margin: auto;
                    margin-left: 4px;
                    margin-top: 4px;
                    background: #2e65f3;
                  }
                  width: 20%;
                  height: 100%;
                }
                .right_kf {
                  width: 80%;
                  p {
                    margin-top: 5px;
                    margin-left: 10px;
                    text-align: left;
                    font-size: 1rem;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(101, 112, 123, 1);
                    line-height: 15px;
                    span {
                      display: block;
                      font-size: 12px;
                      font-family: MicrosoftYaHeiLight;
                      font-weight: 300;
                      color: #6182b7;
                      // margin-top: 5px;
                      line-height: 30px;
                    }
                  }
                }
                height: 50px;
                background: rgb(255, 255, 255);
              }
              .kaifang:hover {
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25);
                /deep/ .beijingse {
                  background: #f3994a;
                }
              }
              .chengxin {
                display: flex;
                cursor: pointer;
                margin-top: 10px;
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
                border-radius: 2px;
                .left_kf {
                  .beijingse {
                    p {
                      display: inline-block;
                      width: 30px;
                      height: 30px;
                      margin-top: 5px;
                      background: url("../assets/imgtwo/xunzhang.png") no-repeat;
                      background-size: 100% 100%;
                    }
                    border-radius: 2px;
                    width: 40px;
                    height: 40px;
                    margin-left: 4px;
                    margin: auto;
                    margin-top: 5px;
                    margin-left: 4px;
                    background: #2e65f3;
                  }
                  width: 20%;
                  height: 100%;
                }
                .right_kf {
                  width: 80%;
                  p {
                    margin-top: 5px;
                    margin-left: 10px;
                    text-align: left;
                    font-size: 1rem;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(101, 112, 123, 1);
                    line-height: 15px;
                    span {
                      display: block;
                      font-size: 12px;
                      font-family: MicrosoftYaHeiLight;
                      font-weight: 300;
                      color: #6182b7;
                      // line-height: 30px;
                      margin-top: 5px;
                    }
                  }
                }
                height: 50px;
                background: rgb(255, 255, 255);
              }
              .chengxin:hover {
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25);
                /deep/ .beijingse {
                  background: #f3994a;
                }
              }
              .chuangxin {
                display: flex;
                cursor: pointer;
                margin-top: 10px;
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
                border-radius: 2px;
                .left_kf {
                  .beijingse {
                    p {
                      display: inline-block;
                      width: 30px;
                      height: 30px;
                      margin-top: 5px;
                      background: url("../assets/imgtwo/dengpao.png") no-repeat;
                      background-size: 100% 100%;
                    }
                    border-radius: 2px;
                    width: 40px;
                    margin-left: 4px;
                    height: 40px;
                    margin: auto;
                    margin-top: 5px;
                    margin-left: 4px;
                    background: #2e65f3;
                  }
                  width: 20%;
                  height: 100%;
                }
                .right_kf {
                  width: 80%;
                  p {
                    margin-top: 1px;
                    margin-left: 10px;
                    text-align: left;
                    font-size: 1rem;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(101, 112, 123, 1);
                    // line-height: 18px;
                    span {
                      display: block;
                      font-size: 12px;
                      font-family: MicrosoftYaHeiLight;
                      font-weight: 300;
                      color: #6182b7;
                    }
                  }
                }
                height: 50px;
                background: rgb(255, 255, 255);
              }
              .chuangxin:hover {
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25);
                /deep/ .beijingse {
                  background: #f3994a;
                }
              }
              position: absolute;
              border-radius: 50%;
              width: 195px;
              // height: 200px;
              background: linear-gradient(-50deg, #f0f4fc, #f9fafe);
              top: 60px;
              left: 25px;
            }
            .left {
              border-radius: 50%;
              width: 200px;
              height: 200px;
              background: linear-gradient(
                -50deg,
                rgba(240, 244, 252, 1),
                rgba(249, 250, 254, 1)
              );
            }
          }
          .tu {
            p {
              margin-left: 2rem;
              font-size: 0.7rem;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              margin-top: 10px;
            }
            position: relative;
            img {
              margin-top: 20%;
              width: 12rem;
            }
            .quan {
              position: absolute;
              right: 70px;
              top: 0px;
              text-align: center;
              width: 55px;
              height: 55px;
              background: rgba(85, 141, 236, 0.3);
              border-radius: 50%;
              p {
                color: white;
                font-size: 1rem;
                margin-left: 0rem;

                margin-top: 10px;
                line-height: 15px;
                span {
                  display: block;
                }
              }
            }
          }
        }
        .ziti {
          p {
            font-size: 0.9rem;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(101, 112, 123, 1);
            text-align: left;
          }
        }
      }
      .thenpc {
        display: none;
      }
    }
  }
}

.guanyu {
  padding-bottom: 80px;
  overflow: hidden;
  .body {
    $type: screen;
    $proto: max-width;
    $value: 800px;
    @media #{$type} and ($proto: $value) {
      .boot {
        flex-direction: column;
        .right {
          margin-top: 1.8em !important;
          width: 80% !important ;
          margin-right: 10% !important;
        }
      }
      .heads {
        span {
          font-size: 1rem !important;
        }
      }
    }
    .thenapp {
      display: none;
    }
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
      .boot {
        width: 80%;
        margin: 0 auto;
        position: relative;
        display: flex;
        .right {
          width: 45%;
          margin-top: 20px;
          margin-left: 7%;
          .zhineng {
            p {
              margin-top: 40px;
              font-size: 14px;
              text-align: left;
              font-family: MicrosoftYaHeiLight;
              font-weight: 300;
              color: rgba(102, 102, 102, 1);
              line-height: 25px;
            }
          }
          .jiaoyi {
            p {
              margin-top: 40px;
              font-size: 14px;
              text-align: left;
              font-family: MicrosoftYaHeiLight;
              font-weight: 300;
              color: rgba(102, 102, 102, 1);
              line-height: 18px;
            }
          }
          .up {
            p {
              font-size: 18px;
              text-align: left;
              line-height: 27px;
              font-weight: 400;
              color: rgba(101, 112, 123, 1);
            }
          }
        }
        .leftone {
          width: 400px;
          .left2 {
            .kaifang {
              display: flex;
              cursor: pointer;
              margin-top: 20px;
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
              border-radius: 2px;
              .left_kf {
                .beijingse {
                  p {
                    display: inline-block;
                    width: 35px;
                    height: 37px;
                    margin-top: 10px;
                    background: url("../assets/imgtwo/feiji.png") no-repeat;
                    background-size: 100% 100%;
                  }
                  border-radius: 2px;
                  width: 55px;
                  height: 55px;
                  margin: auto;
                  margin-top: 4px;
                  background: rgb(0, 25, 253);
                }
                margin-top: 4px;
                margin-left: 4px;
                width: 20%;
                height: 100%;
              }
              .right_kf {
                width: 70%;
                p {
                  margin-top: 10px;
                  margin-left: 10px;
                  text-align: left;
                  font-size: 19px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                  line-height: 18px;
                  span {
                    display: block;
                    font-size: 12px;
                    font-family: MicrosoftYaHeiLight;
                    font-weight: 300;
                    color: #6182b7;
                    margin-top: 5px;
                    line-height: 30px;
                  }
                }
              }
              margin-left: 20px;
              width: 300px;
              height: 70px;
              background: rgb(255, 255, 255);
            }
            .kaifang:hover {
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25);
              /deep/ .beijingse {
                background: #f3994a;
              }
            }

            .chengxin {
              display: flex;
              cursor: pointer;
              margin-top: 10px;
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
              border-radius: 2px;
              .left_kf {
                .beijingse {
                  p {
                    display: inline-block;
                    width: 35px;
                    height: 37px;
                    margin-top: 10px;
                    background: url("../assets/imgtwo/xunzhang.png") no-repeat;
                    background-size: 100% 100%;
                  }
                  border-radius: 2px;
                  width: 55px;
                  height: 55px;
                  margin: auto;
                  margin-top: 1px;
                  background: rgb(0, 25, 253);
                }
                margin-left: 4px;
                margin-top: 4px;
                width: 20%;
                height: 100%;
              }
              .right_kf {
                width: 70%;
                p {
                  margin-top: 10px;
                  margin-left: 10px;
                  text-align: left;
                  font-size: 19px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                  line-height: 18px;
                  span {
                    display: block;
                    font-size: 12px;
                    font-family: MicrosoftYaHeiLight;
                    font-weight: 300;
                    color: #6182b7;
                    line-height: 30px;
                    margin-top: 5px;
                  }
                }
              }
              margin-left: 20px;
              width: 300px;
              height: 70px;
              background: rgb(255, 255, 255);
            }
            .chengxin:hover {
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25);
              /deep/ .beijingse {
                background: #f3994a;
              }
            }
            .chuangxin {
              display: flex;
              cursor: pointer;
              margin-top: 10px;
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
              border-radius: 2px;
              .left_kf {
                .beijingse {
                  p {
                    display: inline-block;
                    width: 35px;
                    height: 37px;
                    margin-top: 10px;
                    background: url("../assets/imgtwo/dengpao.png") no-repeat;
                    background-size: 100% 100%;
                  }
                  border-radius: 2px;
                  width: 55px;
                  height: 55px;
                  margin: auto;
                  margin-top: 1px;
                  background: rgb(0, 25, 253);
                }
                margin-top: 4px;
                margin-left: 4px;
                width: 20%;
                height: 100%;
              }
              .right_kf {
                width: 70%;
                p {
                  margin-top: 10px;
                  margin-left: 10px;
                  text-align: left;
                  font-size: 19px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                  line-height: 18px;
                  span {
                    display: block;
                    font-size: 12px;
                    font-family: MicrosoftYaHeiLight;
                    font-weight: 300;
                    color: #6182b7;
                  }
                }
              }
              margin-left: 20px;
              width: 300px;
              height: 70px;
              background: rgb(255, 255, 255);
            }
            .chuangxin:hover {
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25);
              /deep/ .beijingse {
                background: #f3994a;
              }
            }

            position: absolute;
            border-radius: 50%;
            width: 340px;
            height: 315px;
            background: linear-gradient(-50deg, #f0f4fc, #f9fafe);
            top: 30px;
            left: 50px;
          }
          .left {
            border-radius: 50%;
            width: 340px;
            height: 315px;
            background: linear-gradient(
              -50deg,
              rgba(240, 244, 252, 1),
              rgba(249, 250, 254, 1)
            );
          }
        }
      }
    }

    position: relative;
    clear: both;
    margin-top: 43px;
    height: 100%;
  }
}
</style>
