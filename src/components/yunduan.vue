<template>
  <div class="yunduan">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>云端跟单</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>
          <span>还不了解量化交易？没关系让我们带你玩转量化</span>
        </div>
        <div class="yun">
          <div class="left">
            <ul>
              <li>
                <div class="xue">
                  <div class="tu"></div>
                  <div class="ziti">
                    <p>
                      学生
                      <span>
                        可以跟随稳定盈利策略和老师
                        的交易让盈利变得更简单。
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="shenqing">
                  <div class="tu"></div>
                  <div class="ziti">
                    <p>
                      申请
                      <span>
                        积分到达一定数量将可申请
                        入住本平台，可获得奖金福利。
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="laoshi">
                  <div class="tu"></div>
                  <div class="ziti">
                    <p>
                      老师
                      <span>
                        分享您的策略，让更多的交易者
                        跟随您的交易，将获得奖金福利。
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="jichu">
            <p>云端跟单基础知识</p>
            <div class="thatis">
              <p>
                什么是云端跟单？
                <span>
                  用户将可提交申请成为本平台老师。让更多的交易者，跟随您的策略。
                  同时您将会获得除自身交易之外的奖金福利。学生可以跟盈利稳定的策略和老师的交易，让交易盈利变得更加的简单。
                </span>
              </p>
            </div>
            <div class="thatis2">
              <p>
                怎么申请老师
                <span>
                  通过APP签到和猜涨停获得积分，当累计积分达到数量之后将可
                  在APP内申请成为班平台的老师。
                </span>
              </p>
            </div>
            <div class="tu">
              <img src="../assets/zhineng/yunduangendan.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="appyunduan">
          <p>
            云端跟单
            <span>
              还不了解交易？没关系让我们
              带你玩转量化
            </span>
          </p>
        </div>
        <div class="ulli">
          <ul>
            <li>
              <div class="xuesheng">
                <img src="../assets/appimg/xuesheng.png" alt />
                <p>
                  学生
                  <span>跟随老师交易让盈利变得更简单</span>
                </p>
              </div>
            </li>
            <li>
              <div class="xuesheng">
                <img src="../assets/appimg/shenqing.png" alt />
                <p>
                  申请
                  <span>申请入住本平台可获得奖金福利</span>
                </p>
              </div>
            </li>
            <li>
              <div class="xuesheng">
                <img src="../assets/appimg/laoshi.png" alt />
                <p>
                  老师
                  <span>分享您的策略将获得奖金福利</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="yungenzi">
          <h4>云端跟单基础知识</h4>
          <p>
            <img src="../assets/appimg/yuan.png" alt />
            什么是云端跟单？
            <span>
              用户将可提交申请成为本平台老师。让更多的交易者，跟随您的策略。
              同时您将会获得除自身交易之外的奖金福利。学生可以跟盈利稳定的策略和老师的交易，
              让交易盈利变得更加的简单。
            </span>
          </p>
          <p>
            <img src="../assets/appimg/yuan.png" alt />
            怎么申请老师？
            <span>通过APP签到和猜涨停获得积分，当累计积分达到数量之后将可在APP内申请成为班平台的老师。</span>
          </p>
        </div>
        <div class="apphua">
          <img src="../assets/appimg/hua.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heads from "./head/head";
export default {
  name: "yunduan",
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
  .yunduan {
    height: 650px !important;
    .body {
      .thenapp {
        width: 90%;
        margin: 0 auto;
        display: block !important;
        .appyunduan {
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
        .ulli {
          ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding: 0;
            li {
              width: 30%;
              .xuesheng {
                p {
                  margin-top: 0;
                  font-size: 1rem;
                  font-family: PingFang-SC-Medium;
                  font-weight: 500;
                  color: rgba(51, 51, 51, 1);
                  span {
                    font-size: 0.9rem;
                    font-family: PingFang-SC-Regular;
                    font-weight: 400;
                    color: rgba(151, 159, 181, 1);
                    line-height: 20px;
                    display: block;
                  }
                }
              }
              img {
                width: 45px;
                height: 45px;
              }
            }
          }
        }
        .yungenzi {
          h4 {
            margin-bottom: 5px;
          }
          text-align: left;
          p {
            margin-top: 10px;
            font-size: 1rem;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(97, 130, 183, 1);
            line-height: 25px;
            span {
              display: block;
              color: rgba(101, 112, 123, 1);
            }
          }
        }
        .apphua {
          float: right;
          margin-top: -3rem;
        }
      }
      .thenpc {
        display: none;
      }
    }
  }
}
.yunduan {
  $type: screen;
  $proto: max-width;
  $value: 800px;

  @media #{$type} and ($proto: $value) {
    height: 1000px;
  }
  // height: 1000px;
  overflow: hidden;
  .body {
    $type: screen;
    $proto: max-width;
    $value: 800px;
    @media #{$type} and ($proto: $value) {
      .heads {
        span {
          font-size: 1em !important;
        }
      }
      .yun {
        flex-direction: column;
        .left {
          margin-left: 15% !important;
        }
        .jichu {
          width: 45% !important;
          p {
            width: 100% !important;
          }
          margin-left: 20% !important;
          span {
            width: 100% !important;
          }
          .tu {
            top: 55% !important;
            // bottom: 20% !important;
          }
          .thatis2 {
            p {
              margin-top: 140px !important;
            }
          }
        }
      }
    }
    clear: both;
    margin-top: 43px;
    height: 100%;
    background: url("../assets/zhineng/juxing.png") no-repeat;
    background-size: 100% 100%;
    .thenpc {
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
      .yun {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        .left {
          width: 290px;
          margin-left: 15%;
          margin-top: 15px;

          ul {
            padding: 0;
            list-style-type: none;
            li {
              box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.3);
              width: 100%;
              height: 103px;
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgb(233, 229, 229);
              // opacity: 0.1;
              padding-right: 10px;
              border-radius: 2px;
              margin-bottom: 20px;

              .xue {
                .ziti {
                  margin-left: 5rem;
                  p {
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(77, 77, 77, 1);
                    text-align: left;
                    margin-top: 10px;
                    margin-bottom: 5px;
                    padding-top: 10px;
                    span {
                      display: block;
                      font-size: 14px;
                      font-family: MicrosoftYaHeiLight;
                      font-weight: 300;
                      color: #666666;
                      line-height: 20px;
                      text-align: left;
                      margin-top: 5px;
                    }
                  }
                }
                .tu {
                  width: 53px;
                  height: 53px;
                  background: url("../assets/imgtwo/xuesheng.png") no-repeat;
                  background-size: 100% 100%;
                  margin-left: 10px;
                  margin-top: 10px;
                  float: left;
                  width: 18%;
                }
              }
              .shenqing {
                .ziti {
                  margin-left: 70px;
                  p {
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(77, 77, 77, 1);
                    text-align: left;
                    margin-top: 10px;
                    margin-bottom: 5px;
                    padding-top: 10px;
                    span {
                      display: block;
                      font-size: 14px;
                      font-family: MicrosoftYaHeiLight;
                      font-weight: 300;
                      color: #666666;
                      line-height: 20px;
                      text-align: left;
                      margin-top: 5px;
                    }
                  }
                }
                .tu {
                  width: 53px;
                  height: 53px;
                  background: url("../assets/imgtwo/shenqing.png") no-repeat;
                  background-size: 100% 100%;
                  margin-left: 10px;
                  margin-top: 10px;
                  float: left;
                  width: 47px;
                }
              }
              .laoshi {
                .ziti {
                  margin-left: 70px;
                  p {
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: rgba(77, 77, 77, 1);
                    text-align: left;
                    margin-top: 10px;
                    margin-bottom: 5px;
                    padding-top: 10px;
                    span {
                      display: block;
                      font-size: 14px;
                      font-family: MicrosoftYaHeiLight;
                      font-weight: 300;
                      color: #666666;
                      line-height: 20px;
                      text-align: left;
                      margin-top: 5px;
                    }
                  }
                }
                .tu {
                  width: 53px;
                  height: 53px;
                  background: url("../assets/imgtwo/laoshi.png") no-repeat;
                  background-size: 100% 100%;
                  margin-left: 10px;
                  margin-top: 10px;
                  float: left;
                  width: 47px;
                }
              }
            }
            li:hover {
              box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.15);
              cursor: pointer;
              .xue {
                .tu {
                  background: url("../assets/imgtwo/xueshengzhong.png")
                    no-repeat;
                  background-size: 100% 100%;
                }
              }
              .shenqing {
                .tu {
                  background: url("../assets/imgtwo/shenqingzhong.png")
                    no-repeat;
                  background-size: 100% 100%;
                }
              }
              .laoshi {
                .tu {
                  background: url("../assets/imgtwo/laoshizhong.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }
        .jichu {
          width: 33%;
          text-align: left;
          margin-left: 9%;

          .tu {
            width: 25%;
            position: absolute;
            right: 0;
            top: 10%;

            img {
              width: 100%;
            }
          }

          .thatis {
            p {
              font-size: 17px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: bold;
              color: #65707b;
              text-align: left;
              line-height: 10px;
            }
            span {
              display: block;
              height: 46px;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: #6182b7;
              line-height: 25px;
              margin-top: 15px;
            }
          }
          .thatis2 {
            margin-top: 140px;
            p {
              font-size: 17px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: bold;
              color: #65707b;
              text-align: left;
              line-height: 10px;
            }
            span {
              display: block;
              height: 46px;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: #6182b7;
              line-height: 25px;
              margin-top: 15px;
            }
          }
          p {
            font-size: 25px;
            font-family: MicrosoftYaHei-Bold;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
    .thenapp {
      display: none;
    }
  }
}
</style>
