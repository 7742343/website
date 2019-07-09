<template>
  <div class="heads">
    <div class="head">
      <!-- 导航栏 -->

      <div class="ulli">
        <ul class="ul_li">
          <li>
            <a>
              <img src="../../assets/logo.png" alt="图片没了" />
            </a>
          </li>
          <li>
            <a href="#sy" class="sy">首页</a>
          </li>
          <li>
            <a href="#znjy" class="znjy">智能交易</a>
          </li>
          <li>
            <a href="#ydgd" class="ydgd">云端跟单</a>
          </li>
          <li>
            <a href="#rjxz" class="rjxz">软件下载</a>
          </li>
          <li>
            <a href="#lhzq" class="lhzq">量化专区</a>
          </li>
          <li>
            <a href="#cpfw" class="cpfw">产品服务</a>
          </li>
          <li>
            <a href="#tzxy" class="tzxy">投资学苑</a>
          </li>
          <li>
            <a href="#gywm" class="gywm">关于我们</a>
          </li>
          <li>
            <a href="#lxwm" class="lxwm">联系我们</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "heads",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.heads {
  .head {
    .ulli {
      background: white;
      z-index: 999;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      height: 43px;
      ul {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        margin-top: 5px;
        li {
          color: #9a9a9a;
        }
        a {
          text-align: center;
          display: block;
          color: rgba(154, 154, 154, 1);
          text-decoration: none;
          line-height: 10px;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
