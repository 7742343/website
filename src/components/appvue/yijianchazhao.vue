<template>
  <div class="chazhao">
    <div class="body">
      <div class="yjcz">
        <h3>一键查找</h3>
        <div class="sousuo">
          <img src="../../assets/appimg/sousuo.png" alt />
          <el-input placeholder="请输入产品名称" v-model="input"></el-input>
          <div style="width:20px;"></div>
          <el-button type="primary" class="button" @click="cack">搜索</el-button>
        </div>

        <div class="czjg" v-if="this.ack.length">
          <p>{{ack[0].name}}</p>
          <p>
            最新价:
            <span>{{ack[0].point}}</span>
          </p>
          <p>
            涨幅:
            <span class="zhangfu">{{ack[0].lasthq.changeRate}}%</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chazhao",
  data() {
    return {
      input: "",
      list: [],
      ack: []
    };
  },
  methods: {
    back() {
      let msg = JSON.stringify({});
      this.$post("get_menu", msg).then(res => {
        for (var i = 0; i < res.msg.length; i++) {
          for (var j = 0; j < res.msg[i].item.length; j++) {
            res.msg[i].item[j].lasthq = JSON.parse(res.msg[i].item[j].lasthq);
          }
        }
        for (let i = 0; i < res.msg.length; i++) {
          for (let j = 0; j < res.msg[i].item.length; j++) {
            this.list.push(res.msg[i].item[j]);
          }
        }
      });
    },
    cack() {
      this.ack = [];
      this.list.forEach(item => {
        if (this.input == item.name || this.input == item.code) {
          this.ack.push(item);
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
<style lang="scss" scoped>
.chazhao {
  .body {
    width: 90%;
    margin: 0 auto;
    .yjcz {
      .sousuo {
        position: relative;

        display: flex;
        justify-content: space-around;
        img {
          z-index: 10;
          width: 25px;
          height: 25px;
          position: absolute;
          top: 8px;
          left: 5px;
        }
        /deep/ input {
          padding-left: 35px !important;
        }
        .button {
          background: #2e65f3;
        }
      }
      h3 {
        text-align: left;
      }
      .czjg {
        display: flex;
        justify-content: space-between;
        p {
          color: #8f9eab;
          span {
            color: #4a6174;
          }
          .zhangfu {
            color: red;
          }
        }
      }
    }
  }
}
</style>
