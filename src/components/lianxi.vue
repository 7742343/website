<template>
  <div class="lianxi">
    <div class="body">
      <div class="thenpc">
        <div class="heads">
          <div class="biaoqiantou">
            <div class="qian">
              <img src="../assets/imgtwo/zuobian.png" alt />
            </div>
            <p>联系我们</p>
            <div class="hou">
              <img src="../assets/imgtwo/youbian.png" alt />
            </div>
          </div>

          <span>让我们带你玩转量化交易</span>
        </div>

        <div class="boot">
          <div class="left">
            <h2>发送邮件</h2>
            <div class="fbt">
              <froms />
            </div>
          </div>
          <div class="right">
            <div class="lxdh">
              <div class="quan">
                <img src="../assets/imgtwo/dianhua.png" alt />
              </div>
              <div class="zi">
                <p>
                  联系电话
                  <span>18161324898</span>
                </p>
              </div>
            </div>
            <div class="lxyx">
              <div class="quan">
                <img src="../assets/imgtwo/youxiang.png" alt />
              </div>
              <div class="zi">
                <p>
                  邮箱
                  <span>540522826@qq.com</span>
                </p>
              </div>
            </div>
            <div class="lxdz">
              <div class="quan">
                <img src="../assets/imgtwo/dizhi.png" alt />
              </div>
              <div class="zi">
                <p>
                  地址
                  <span>成都高新区九兴大道10号1幢</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="applianxi">
          <p>
            联系我们
            <span>让我们带你玩转交易</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import heads from "./head/head";
import froms from "./from/findex";
export default {
  name: "lianxi",
  data() {
    return {};
  },
  components: { froms }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$type: screen;
$proto: max-width;
$value2: 500px;
@media #{$type} and ($proto: $value2) {
  .lianxi {
    padding-bottom: 40px !important;
    .body {
      .thenapp {
        display: block !important;
        .applianxi {
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

.lianxi {
  padding-bottom: 80px;
  overflow: hidden;
  .body {
    $type: screen;
    $proto: max-width;
    $value: 800px;

    @media #{$type} and ($proto: $value) {
      .boot {
        flex-direction: column;
        flex-wrap: wrap;
        .left {
          width: 80% !important;
          margin: 0 auto !important;
        }
        .right {
          width: 100% !important;
        }
      }
      .heads {
        span {
          font-size: 1rem !important;
        }
      }
    }
    .thenpc {
      .boot {
        display: flex;
        .right {
          width: 45%;
          margin-left: 10%;
          margin-top: 3rem;
          .lxdh {
            display: flex;
            cursor: pointer;
            text-align: left;
            height: 50px;
            .quan {
              width: 62px;
              height: 62px;
              border-radius: 50%;
              img {
                width: 110%;
                margin-top: 10px;
                margin-left: 10px;
              }
            }
            .zi {
              margin-left: 21px;
              width: 210px;
              p {
                font-size: 19px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
                line-height: 30px;
                margin-top: 10px;
                span {
                  display: block;
                  font-size: 16px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(51, 51, 51, 1);
                  line-height: 35px;
                }
              }
            }
          }
          .lxyx {
            display: flex;
            cursor: pointer;
            text-align: left;
            height: 50px;
            clear: both;
            margin-top: 60px;
            .quan {
              width: 62px;
              height: 62px;
              border-radius: 50%;
              img {
                width: 110%;
                margin-top: 10px;
                margin-left: 10px;
              }
            }
            .zi {
              margin-left: 21px;
              width: 210px;
              p {
                font-size: 19px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
                line-height: 30px;
                margin-top: 10px;
                span {
                  display: block;
                  font-size: 16px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(51, 51, 51, 1);
                  line-height: 35px;
                }
              }
            }
          }
          .lxdz {
            cursor: pointer;
            display: flex;
            text-align: left;
            height: 50px;
            margin-top: 60px;
            .quan {
              width: 62px;
              height: 62px;
              border-radius: 50%;
              img {
                width: 110%;
                margin-top: 10px;
                margin-left: 10px;
              }
            }
            .zi {
              margin-left: 21px;
              width: 210px;
              p {
                font-size: 19px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
                line-height: 30px;
                margin-top: 10px;
                span {
                  display: block;
                  font-size: 16px;
                  font-family: MicrosoftYaHei;
                  font-weight: 400;
                  color: rgba(51, 51, 51, 1);
                  line-height: 35px;
                }
              }
            }
          }
        }
        margin-top: 50px;
        .left {
          width: 25%;
          text-align: left;
          margin-left: 20%;
          .fbt {
            height: 100%;
            margin-top: 40px;
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
    .thenapp {
      display: none;
    }

    position: relative;
    clear: both;
    margin-top: 43px;
    height: 100%;
  }
}
</style>
