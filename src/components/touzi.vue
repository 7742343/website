<template>
  <div class="touzi">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>投资学苑</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>
          <span>聪明的交易者都在这里</span>
        </div>
        <div class="bott">
          <div class="up">
            <p></p>

            <div class="shanghai">
              <div class="shanghai2">
                <div class="imgs">
                  <img src="../assets/imgtwo/shanghai.png" />
                </div>
                <div class="ziti">
                  <p>上海期货交易所</p>
                </div>
                <div class="ziti2">
                  <p>
                    棕榈油、焦炭、豆粕、豆油、黄大豆一号、黄大豆二号、焦煤、铁矿石、豆粕期货期权
                    <span>交易时间:21：00—次日23:30</span>
                  </p>
                </div>
              </div>
              <div class="names">
                <p>上海期货交易所</p>
              </div>
            </div>

            <div class="zhengzhou">
              <div class="zhengzhou2">
                <div class="imgs">
                  <img src="../assets/imgtwo/zhengzhou.png" />
                </div>
                <div class="ziti">
                  <p>郑州期货交易所</p>
                </div>
                <div class="ziti2">
                  <p>
                    棕榈油、焦炭、豆粕、豆油、黄大豆一号、黄大豆二号、焦煤、铁矿石、豆粕期货期权
                    <span>交易时间:21：00—次日23:30</span>
                  </p>
                </div>
              </div>
              <div class="names">
                <p>郑州期货交易所</p>
              </div>
            </div>

            <div class="dalian">
              <div class="dalian2">
                <div class="imgs">
                  <img src="../assets/imgtwo/dalian.png" />
                </div>
                <div class="ziti">
                  <p>大连期货交易所</p>
                </div>
                <div class="ziti2">
                  <p>
                    棕榈油、焦炭、豆粕、豆油、黄大豆一号、黄大豆二号、焦煤、铁矿石、豆粕期货期权
                    <span>交易时间:21：00—次日23:30</span>
                  </p>
                </div>
              </div>
              <div class="names">
                <p>大连期货交易所</p>
              </div>
            </div>
          </div>
          <div class="float">
            <div class="jichu">
              <div class="jichuname">
                <p>金融科技基础知识</p>
              </div>
              <div class="whatisjr">
                <h4>什么是金融科技？</h4>
                <p>
                  科技产业与金融产业的融合，对于易程序而言，主要是将计算机科技运用到衍生品交易中，
                  通过基于CTP的交易通道和交易软件的体系建设,为客户提供程序化交易的解决方案，
                  为其实现个性化交易提供服务。
                </p>
              </div>
              <div class="whatisjr">
                <h4>金融科技依托基础是什么？</h4>
                <p>可以依托先进的交易科技平台以及强大的IT技术团队和金融工程团队。</p>
              </div>
              <div class="whatisjr">
                <h4>什么是API接口？</h4>
                <p>
                  应用程序接口（是一组定义、程序及协议的集合，通过 API 接口实现计算机软件之间的相互通信）。
                  API接口是连接电子交易平台，向广大客户开放的一个接口。客户可直接或通过交易终端软件连接API接口。
                  （实现程序化交易的接口）
                </p>
              </div>
              <div class="whatisjr">
                <h4>易得量化可以提供哪些API接口？</h4>
                <p>易得量化可提供综合交易平台（CTP）的完全开放的API接口，国内外的所以产品的行情以及交易的开放性接口。</p>
              </div>
            </div>
            <div class="imgss">
              <img src="../assets/zhineng/tuceng1.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="apptouzi">
          <p>
            投资学苑
            <span>聪明的交易者都在这里</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heads from "./head/head";
export default {
  name: "touzi",
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
  .touzi {
    .body {
      .thenapp {
        display: block !important;
        .apptouzi {
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
      }

      .thenpc {
        display: none;
      }
    }
  }
}

.touzi {
  overflow: hidden;
  .body {
    $type: screen;
    $proto: max-width;
    $value: 800px;
    @media #{$type} and ($proto: $value) {
      .float {
        .imgss {
          width: 40% !important;
          top: 7rem !important;
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
      .bott {
        width: 100%;
        margin-top: 50px;
        .up {
          .shanghai {
            .names {
              p {
                color: #2e65f3;
                height: 0;
              }
              position: relative;
              top: 40px;
              width: 120px;
              right: 50px;
            }
            width: 17px;
            height: 17px;
            background: #2e65f3;
            border-radius: 50%;
            position: relative;
            top: 40%;
            left: 10%;
            .shanghai2 {
              z-index: 50;
              .ziti2 {
                span {
                  display: block;
                  margin-top: 10px;
                  font-size: 12px;
                  margin-left: 10px;
                  color: #6182b7;
                }
                p {
                  height: 0;
                }
                padding: 0 10px;
                text-align: left;
                font-size: 15px;
                font-family: MicrosoftYaHeiLight;
                font-weight: 300;
                color: rgba(102, 102, 102, 1);
                line-height: 20px;
              }
              .ziti {
                margin-top: 35px;
                p {
                  height: 30px;
                  background: white;
                  font-size: 18px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                }
              }
              .imgs {
                margin: 0 auto;
                margin-top: 40px;
                width: 54px;
                height: 48px;
                border: 1px solid white;
                border-radius: 50%;

                img {
                  margin-top: 3px;
                  width: 40px;
                }
              }
              width: 200px;
              height: 300px;
              background: white;
              border: 1px solid rgb(236, 234, 234);
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
              position: absolute;
              right: -123px;
              top: -142px;
              display: none;
            }
          }
          .shanghai:hover ~ .dalian {
            .dalian2 {
              display: none;
            }
          }
          .shanghai:hover {
            .shanghai2 {
              display: block;
            }
          }

          .dalian {
            .names {
              p {
                color: #2e65f3;
                height: 0;
              }
              position: relative;
              top: 40px;
              width: 120px;
              right: 50px;
            }
            width: 17px;
            height: 17px;
            background: #2e65f3;
            border-radius: 50%;
            position: relative;
            top: 14%;
            left: 50%;
            .dalian2 {
              z-index: 10;
              .ziti2 {
                span {
                  display: block;
                  margin-top: 10px;
                  font-size: 12px;
                  margin-left: 10px;
                  color: #6182b7;
                }
                p {
                  height: 0;
                }
                padding: 0 10px;
                text-align: left;
                font-size: 15px;
                font-family: MicrosoftYaHeiLight;
                font-weight: 300;
                color: rgba(102, 102, 102, 1);
                line-height: 20px;
              }
              .ziti {
                margin-top: 35px;
                p {
                  height: 30px;
                  background: white;
                  font-size: 18px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                }
              }
              .imgs {
                margin: 0 auto;
                margin-top: 40px;
                width: 54px;
                height: 48px;
                border: 1px solid white;
                border-radius: 50%;

                img {
                  margin-top: 3px;
                  width: 40px;
                }
              }
              width: 200px;
              height: 300px;
              background: white;
              border: 1px solid rgb(236, 234, 234);
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
              position: absolute;
              right: -100px;
              top: -142px;
              display: block;
            }
          }
          .dalian:hover {
            .dalian2 {
              display: block;
            }
          }

          .zhengzhou {
            .names {
              p {
                color: #2e65f3;
                height: 0;
              }
              position: relative;
              top: 40px;
              width: 120px;
              right: 50px;
            }
            width: 17px;
            height: 17px;
            background: #2e65f3;
            border-radius: 50%;
            position: relative;
            top: 27%;
            left: 90%;
            .zhengzhou2 {
              z-index: 10;
              .ziti2 {
                span {
                  display: block;
                  margin-top: 10px;
                  font-size: 12px;
                  margin-left: 10px;
                  color: #6182b7;
                }
                p {
                  height: 0;
                }
                padding: 0 10px;
                text-align: left;
                font-size: 15px;
                font-family: MicrosoftYaHeiLight;
                font-weight: 300;
                color: rgba(102, 102, 102, 1);
                line-height: 20px;
              }
              .ziti {
                margin-top: 35px;
                p {
                  height: 30px;
                  background: white;
                  font-size: 18px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(101, 112, 123, 1);
                }
              }
              .imgs {
                margin: 0 auto;
                margin-top: 40px;
                width: 54px;
                height: 48px;
                border: 1px solid white;
                border-radius: 50%;
                img {
                  margin-top: 3px;
                  width: 40px;
                }
              }
              width: 200px;
              height: 300px;
              background: white;
              border: 1px solid rgb(236, 234, 234);
              box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
              position: absolute;
              right: -60px;
              top: -142px;
              display: none;
            }
          }
          .zhengzhou:hover ~ .dalian {
            .dalian2 {
              display: none;
            }
          }
          .zhengzhou:hover {
            .zhengzhou2 {
              display: block;
            }
          }
          p {
            position: relative;
            top: 50%;
            width: 100%;
            height: 1px;
            background: rgb(233, 231, 231);
          }
          width: 80%;
          margin: 0 auto;
          height: 250px;
        }
        .float {
          margin-top: 50px;
          .imgss {
            width: 28%;
            position: absolute;
            top: 6rem;
            right: 0px;
            img {
              width: 100%;
            }
          }
          position: relative;
          width: 100%;
          background: url("../assets/zhineng/juxing.png") no-repeat;
          background-size: 100% 100%;
          text-align: left;
          .jichu {
            margin: 0 auto;
            width: 70%;
            .whatisjr {
              color: #65707b;
              p {
                width: 70%;
                font-size: 15px;
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: #6182b7;
                line-height: 28px;
              }
            }
            .jichuname {
              p {
                font-size: 25px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
              }
            }
          }
        }
      }
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
    }
    clear: both;
    margin-top: 43px;
    height: 100%;
    background-size: 100% 100%;
  }
}
</style>
