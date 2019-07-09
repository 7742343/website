<template>
  <div class="frombd">
    <el-form ref="form" :model="form" :rules="rules" label-width="0">
      <div class="up">
        <div class="youname">
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="您的姓名" id="younames"></el-input>
          </el-form-item>
        </div>

        <div class="phone">
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="输入电话号码" id="youphones"></el-input>
          </el-form-item>
        </div>
      </div>

      <div class="neirong">
        <el-input type="textarea" :rows="5" v-model="form.desc" placeholder="输入内容"></el-input>
      </div>

      <div class="yes">
        <el-button type="primary" @click="onSubmit">发送邮件</el-button>
      </div>
    </el-form>
    <div class="lianxi">
      <div class="lxdh">
        <img src="../../assets/appimg/dianhua.png" alt />
        <p>联系电话</p>
        <p>18161324898</p>
      </div>
      <div class="lxyx">
        <img src="../../assets/appimg/youxiang.png" alt />
        <p>邮箱号码</p>
        <p>540522826@qq.com</p>
      </div>
      <div class="lxdh">
        <img src="../../assets/appimg/dizhi.png" alt />
        <p>地址</p>
        <p>成都高新九兴大道</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        phone: null,
        desc: null
      },
      rules: {
        name: [
          { required: true, message: "请输入您的名称", trigger: "blur" },
          {
            min: 2,
            max: 5,
            message: "推荐长度在 2 到 5 个字符",
            trigger: "blur"
          }
        ],
        phone: [
          { required: true, message: "请输入您的联系方式", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form.name); //客户留的姓名
      console.log(this.form.phone); //联系方式
      console.log(this.form.desc); //客户留言
      this.form.name = null;
      this.form.phone = null;
      this.form.desc = null;

      this.$message({
        message: "已收到您的反馈",
        type: "success"
      });
    }
  }
};
</script>



<style lang="scss" scoped>
.frombd {
  .lianxi {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: PingFang-SC-Medium;
    img {
      width: 49px;
      height: 49px;
    }
    p {
      margin: 5px;
      font-size: 0.8rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .lxdh {
      width: 30%;
    }
  }

  width: 94%;
  margin: 0 auto;
  .up {
    width: 100%;
    height: 45px;
    .youname {
      /deep/.el-form-item__content {
        margin: 0 !important;
      }
      /deep/ input {
        height: 45px;
      }
    }
    .phone {
      /deep/ input {
        height: 45px;
      }
    }
  }
  .neirong {
    margin-top: 90px;
    clear: both;
    width: 100%;
  }
  .yes {
    margin: 0 auto;
    margin-top: 25px;
    .el-button--primary {
      width: 35%;
      background: #2e65f3;
      border-radius: 4px;
      border: 0;
      font-size: 1rem;
    }
  }
}
</style>
