<template>
  <div class="foot">
    <div class="boot">
      <div class="thenpc">
        <div class="left">
          <div class="imgs">
            <img src="../../assets/zhineng/foot.png" alt />
          </div>
          <div class="zi">
            <p>易得，让您与量化更近</p>
          </div>
          <div class="beian">
            <p>
              备案/许可证编号：
              <span>蜀ICP备17042964号版权所有：四川易程讯软件开发有限公司</span>
            </p>
          </div>
        </div>
        <div class="right">
          <div class="sao">
            <div class="weixin">
              <div class="imgs">
                <img src="../../assets/zhineng/timg.jpg" alt />
              </div>
            </div>
            <p>微信扫一扫</p>
          </div>
          <div class="saoapp">
            <div class="weixin">
              <div class="imgs">
                <img src="../../assets/zhineng/timg.jpg" alt />
              </div>
            </div>
            <p>APP下载</p>
          </div>
        </div>
      </div>
      <div class="thenapp">
        <div class="float">
          <div class="zi">
            <p>
              备案/许可证编号：蜀ICP备17042964号
              版权所有：四川易程讯软件开发有限公司
            </p>
          </div>
          <div class="imgs">
            <img src="../../assets/appimg/timg.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$type: screen;
$proto: max-width;
$value2: 500px;
@media #{$type} and ($proto: $value2) {
  .foot {
    height: 200px !important;
    .boot {
      .thenapp {
        display: block !important;
        .float {
          width: 90%;
          margin: 0 auto;
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          .zi {
            margin-top: 50px;
            width: 65%;
            p {
              text-align: left;
              font-size: 1rem;
              font-family: PingFang-SC-Medium;
              font-weight: 500;
              color: rgba(102, 102, 102, 1);
            }
          }
          .imgs {
            margin-top: 50px;
            width: 110px;
            height: 110px;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              height: 100px;
              width: 100px;
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

.foot {
  width: 100%;
  height: 250px;
  background: #eff5fa;
  $type: screen;
  $proto: max-width;
  $value: 800px;

  @media #{$type} and ($proto: $value) {
    height: 300px;
    .boot {
      flex-direction: column;
      .left {
        width: 80% !important;
        margin-left: 15% !important;
      }
      .right {
        width: 80% !important;
        margin-left: 20%;
        .sao {
          width: 30% !important;
          p {
            margin-left: 0.5rem !important;
          }
          .weixin {
            .imgs {
              img {
                margin-top: 5px !important;
              }
            }
          }
        }
        .saoapp {
          width: 30% !important;
          margin-left: 3rem !important;
          p {
            margin-left: 1rem !important;
          }
          .weixin {
            .imgs {
              img {
                margin-top: 5px !important;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 750px) {
    .boot {
      .thenpc {
        display: flex;
        margin: 0 auto;
        width: 100%;
        .left {
          width: 40%;
          text-align: left;
          margin-left: 20%;
          .zi {
            margin-left: 20px;
            p {
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
            }
          }
          .beian {
            margin-left: 20px;
            p {
              font-size: 15px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 25px;
              span {
                display: block;
              }
            }
          }
          .imgs {
            img {
              margin-top: 60px;
            }
          }
        }
        .right {
          display: flex;
          width: 40%;
          margin-top: 50px;
          // float: left;
          .sao {
            display: flex;
            width: 160px;
            flex-direction: column;
            .weixin {
              background: white;
              .imgs {
                img {
                  margin-top: 5px;
                  width: 90%;
                }
              }
            }
            p {
              text-align: left;
              margin: 0 auto;
              margin-top: 20px;
              width: 80px;
              color: rgba(102, 102, 102, 1);
            }
          }
          .saoapp {
            margin-left: 10%;
            display: flex;
            width: 160px;
            flex-direction: column;
            .weixin {
              background: white;
              .imgs {
                img {
                  margin-top: 5px;
                  width: 90%;
                }
              }
            }
            p {
              text-align: left;
              margin: 0 auto;
              margin-top: 20px;
              width: 80px;
              color: rgba(102, 102, 102, 1);
            }
          }
        }
      }
      .thenapp {
        display: none;
      }
    }
  }
}
</style>
