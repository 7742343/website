<template>
  <div class="zhineng">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>软件下载</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>

          <span>人工智能交易软件</span>
        </div>
        <div class="upapp">
          <ul>
            <li>
              <div class="li_div">
                <p>
                  甄选全球
                  <span>优秀经纪商</span>
                </p>

                <div class="bott">
                  <p>
                    <i class="el-icon-check"></i>
                    易得量化
                  </p>
                  <p>
                    <i class="el-icon-check"></i>
                    安全省心
                  </p>
                  <p>
                    <i class="el-icon-check"></i>
                    快速便捷
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="anzhuo">
                <div class="hline"></div>
                <div class="bord"></div>

                <p>安卓下载</p>
                <div class="erweima">
                  <img src="../assets/zhineng/timg.jpg" alt />
                </div>
                <div class="tzxz">
                  <p>及时通知</p>
                  <p class="ptwo">随时下载</p>
                </div>
              </div>
            </li>
            <li>
              <div class="apple">
                <div class="hline"></div>
                <div class="bord"></div>

                <p>苹果下载</p>
                <div class="erweima">
                  <img src="../assets/zhineng/timg.jpg" alt />
                </div>
                <div class="tzxz">
                  <p>随时查看</p>
                  <p class="ptwo">扫码下载</p>
                </div>
              </div>
            </li>
            <li>
              <div class="pc">
                <div class="hline"></div>
                <div class="bord"></div>

                <p>Windows访问</p>
                <div class="erweima">
                  <img src="../assets/zhineng/timg.jpg" alt />
                </div>
                <div class="tzxz">
                  <p>及时通知</p>
                  <p class="ptwo">随时下载</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="thenapp">
        <div class="uptu">
          <img src="../assets/appimg/tubiao.png" alt />
        </div>
        <div class="appupdata">
          <p>
            软件下载
            <span>人工智能交易软件</span>
          </p>
        </div>
        <div class="iphonetu">
          <img src="../assets/appimg/tietu.png" alt />
          <div class="quan">
            <p>
              安全
              <span>省心</span>
            </p>
          </div>
          <div class="quan2">
            <p>
              快速
              <span>便捷</span>
            </p>
          </div>
          <div class="quan3">
            <p>
              即使
              <span>通知</span>
            </p>
          </div>
        </div>

        <div class="dianjixiazai">
          <div class="appleup">
            <el-button type="primary" class="appbutton">
              <img src="../assets/appimg/apple.png" alt />
              <p>iPhone下载</p>
            </el-button>
          </div>
          <div class="anzhuoup">
            <el-button type="primary" class="appbutton">
              <img src="../assets/appimg/anzhuo.png" alt />
              <p>Android下载</p>
            </el-button>
          </div>
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
    height: 730px;
    .body {
      background: url("../assets/appimg/upappback.png") no-repeat !important;
      background-size: 100% 100%;
      // height: 630px;
      .thenapp {
        width: 90%;
        margin: 0 auto;
        display: block !important;
        .dianjixiazai {
          width: 115%;
          margin-left: -2rem;
          background: white;
          display: flex;
          justify-content: space-around;
          .appleup {
            margin-left: 1rem;
            position: relative;
            margin-top: 1rem;
            .appbutton {
              img {
                width: 25px;
                height: 30px;
              }
              background: rgba(15, 11, 46, 1);
              padding: 5px 25px;
              border-radius: 6px;
              border: 0;
              font-size: 1rem;
              p {
                position: relative;
                bottom: 0.5rem;
                left: 0.5rem;
                display: inline;
              }
            }
          }
          .anzhuoup {
            position: relative;
            margin-top: 1rem;
            .appbutton {
              img {
                width: 25px;
                height: 30px;
              }
              background: #2e65f3;
              padding: 5px 25px;
              border-radius: 6px;
              border: 0;
              font-size: 1rem;
              p {
                position: relative;
                bottom: 0.6rem;
                left: 0.5rem;
                display: inline;
              }
            }
          }
        }
        .iphonetu {
          position: relative;
          img {
            margin-top: 1rem;
            width: 250px;
            height: 430px;
            margin-left: 1rem;
          }
          .quan {
            color: white;
            position: absolute;
            right: 25px;
            top: 30px;
            text-align: center;
            line-height: 75px;
            width: 75px;
            height: 75px;
            background: rgba(85, 141, 236, 0.3);
            border-radius: 50%;
            p {
              line-height: 20px;
              span {
                display: block;
              }
            }
          }
          .quan2 {
            color: white;
            position: absolute;
            left: 25px;
            top: 30%;
            text-align: center;
            line-height: 75px;
            width: 75px;
            height: 75px;
            background: rgba(85, 141, 236, 0.3);
            border-radius: 50%;
            p {
              line-height: 20px;
              span {
                display: block;
              }
            }
          }
          .quan3 {
            color: white;
            position: absolute;
            right: 25px;
            bottom: 20%;
            text-align: center;
            line-height: 75px;
            width: 75px;
            height: 75px;
            background: rgba(85, 141, 236, 0.3);
            border-radius: 50%;
            p {
              line-height: 20px;
              span {
                display: block;
              }
            }
          }
        }
        .uptu {
          img {
            margin-top: 10%;
            width: 100px;
          }
        }
        .appupdata {
          margin: 0 auto;
          width: 50%;
          display: flex;
          p {
            margin: 0 auto;
            font-size: 1.2rem;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgb(255, 255, 255);
          }
          span {
            display: block;
            font-size: 1rem;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
          }
        }
      }
      .thenpc {
        display: none;
      }
    }
  }
}

.zhineng {
  overflow: hidden;
  .body {
    $type: screen;
    $proto: max-width;
    $value: 800px;
    @media #{$type} and ($proto: $value) {
      .upapp {
        width: 100% !important;
        ul {
          li {
            .li_div {
              .bott {
                p {
                  width: 100% !important;
                  font-size: 0.9rem !important;
                }
              }
              p {
                width: 100% !important;
                font-size: 1.2rem !important;
                span {
                  font-size: 1rem !important;
                }
              }
            }
            .anzhuo {
              .erweima {
                img {
                  width: 80px !important;
                }
              }
              .bord {
                width: 4rem !important;
                height: 4rem !important;
              }
            }
            .apple {
              .erweima {
                img {
                  width: 80px !important;
                }
              }
              .bord {
                width: 4rem !important;
                height: 4rem !important;
              }
            }
            .pc {
              .erweima {
                img {
                  width: 80px !important;
                }
              }
              .bord {
                width: 4rem !important;
                height: 4rem !important;
              }
            }
          }
        }
      }
      .heads {
        span {
          font-size: 1em !important;
        }
      }
    }
    .thenpc {
      .upapp {
        padding-bottom: 50px;
        height: 304px;
        width: 55%;
        margin: 0 auto;
        margin-top: 108px;
        ul {
          list-style-type: none;
          height: 304px;
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0;
          li {
            border-radius: 2px;
            width: 22%;
            height: 304px;
            background: rgb(255, 255, 255);
            border-right: 1px solid rgb(235, 232, 232);
            margin-right: 1px;
            display: flex;
            justify-content: center;
            .li_div {
              display: flex;
              justify-content: center;
              flex-direction: column;
              p {
                font-size: 25px;
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: rgba(40, 44, 49, 1);

                margin: 0 auto;
                margin-top: 50px;
                span {
                  display: block;
                  font-size: 20px;
                }
              }
              .bott {
                margin-top: 50px;
                p {
                  i {
                    color: #c40d2b;
                  }
                  margin-top: 5px;
                  font-size: 18px;
                  font-family: MicrosoftYaHeiLight;
                  font-weight: 300;
                  color: rgba(153, 153, 153, 1);
                }
              }
            }
            .anzhuo {
              display: flex;
              justify-content: center;
              flex-direction: column;
              .hline {
                width: 80%;
                margin: 0 auto;
                height: 2px;
                background: #f3994a;
                display: none;
              }
              .bord {
                width: 81px;
                height: 81px;
                background: url("../assets/imgtwo/anzhuo.png") no-repeat;
                background-size: 100% 100%;
                margin: 0 auto;
                margin-top: 10px;
              }
              position: relative;
              p {
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
              }
              .erweima {
                display: none;
                img {
                  width: 100px;
                }
              }
              .tzxz {
                margin-top: 10px;
                p {
                  color: rgba(102, 102, 102, 1);
                  margin: 0 auto;
                  margin-bottom: 15px;
                }
                .ptwo {
                  color: rgba(102, 102, 102, 1);
                  margin: 0 auto;
                  margin-bottom: 15px;
                  margin-top: 20px;
                }
              }
            }
            .apple {
              .hline {
                width: 80%;
                margin: 0 auto;
                height: 2px;
                background: #f3994a;
                display: none;
              }
              display: flex;
              justify-content: center;
              flex-direction: column;
              .bord {
                width: 81px;
                height: 81px;
                background: url("../assets/imgtwo/pingguo.png") no-repeat;
                background-size: 100% 100%;
                margin: 0 auto;
                margin-top: 10px;
              }
              position: relative;
              p {
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
              }
              .erweima {
                display: none;
                img {
                  width: 100px;
                }
              }
              .tzxz {
                margin-top: 10px;
                p {
                  color: rgba(102, 102, 102, 1);
                  margin: 0 auto;
                  margin-bottom: 15px;
                }
                .ptwo {
                  color: rgba(102, 102, 102, 1);
                  margin: 0 auto;
                  margin-bottom: 15px;
                  margin-top: 20px;
                }
              }
            }
            .pc {
              .hline {
                width: 80%;
                margin: 0 auto;
                height: 2px;
                background: #f3994a;
                display: none;
              }
              display: flex;
              justify-content: center;
              flex-direction: column;
              .bord {
                width: 81px;
                height: 81px;
                background: url("../assets/imgtwo/windous.png") no-repeat;
                background-size: 100% 100%;
                margin: 0 auto;
                margin-top: 10px;
              }
              position: relative;
              p {
                font-family: MicrosoftYaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
              }
              .erweima {
                display: none;
                img {
                  width: 100px;
                }
              }
              .tzxz {
                margin-top: 10px;
                p {
                  color: rgba(102, 102, 102, 1);
                  margin: 0 auto;
                  margin-bottom: 15px;
                }
                .ptwo {
                  color: rgba(102, 102, 102, 1);
                  margin: 0 auto;
                  margin-bottom: 15px;
                  margin-top: 20px;
                }
              }
            }
          }

          li:not(:nth-child(1)):hover {
            cursor: pointer;
            height: 344px;
            position: relative;
            bottom: 40px;
            .anzhuo {
              .hline {
                display: block;
              }
              .bord {
                background: url("../assets/imgtwo/anzhuozhong.png") no-repeat;
                background-size: 100% 100%;
              }
            }
            .apple {
              .hline {
                display: block;
              }
              .bord {
                background: url("../assets/imgtwo/pingguozhong.png") no-repeat;
                background-size: 100% 100%;
              }
            }
            .pc {
              .hline {
                display: block;
              }
              .bord {
                background: url("../assets/imgtwo/windouszhong.png") no-repeat;
                background-size: 100% 100%;
              }
            }

            box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);
            /deep/ .erweima {
              display: block;
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
    .thenapp {
      display: none;
    }
    @media screen and (min-width: 750px) {
      margin-top: 43px;
      height: 100%;
      background: url("../assets/zhineng/juxing.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
