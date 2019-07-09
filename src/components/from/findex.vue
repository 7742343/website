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
  width: 100%;
  $type: screen;
  $proto: max-width;
  $value: 800px;

  @media #{$type} and ($proto: $value) {
    // .neirong {
    //   width: 83% !important;
    // }
  }

  .up {
    width: 100%;
    display: flex;
    height: 45px;
    justify-content: space-between;
    .youname {
      /deep/.el-form-item__content {
        margin: 0 !important;
      }
      height: 50px;
      width: 45%;
      /deep/ input {
        height: 45px;
      }
    }
    .phone {
      height: 50px;
      width: 45%;
      /deep/ input {
        height: 45px;
      }
    }
  }
  .neirong {
    margin-top: 25px;
    clear: both;
    width: 100%;
  }
  .yes {
    margin-top: 25px;
    width: 20%;
    .el-button--primary {
      background: #2e65f3;
      border-radius: 4px;
    }
  }
}
</style>
