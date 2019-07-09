<template>
  <div class="index" @scroll.passive="getScroll($event)">
    <div class="head">
      <heads />
    </div>

    <div class="home">
      <a name="sy"></a>
      <homes />
    </div>
    <div class="homeroll">
      <homeroll />
    </div>
    <div class="yjczs">
      <yijianchazhao />
    </div>
    <div class="zhineng">
      <a name="znjy"></a>
      <zhinengs />
    </div>
    <div class="yunduan">
      <a name="ydgd"></a>
      <yunduans />
    </div>
    <div class="updata">
      <a name="rjxz"></a>
      <updatas />
    </div>
    <div class="lianghua">
      <a name="lhzq"></a>
      <lianghuas />
    </div>
    <div class="chanping">
      <a name="cpfw"></a>
      <chanpings />
    </div>
    <div class="touzi">
      <a name="tzxy"></a>
      <touzis />
    </div>
    <div class="roll">
      <rolls />
    </div>
    <div class="jinrongs">
      <jinrongs />
    </div>
    <div class="guanyuwomen">
      <a name="gywm"></a>
      <guanyus />
    </div>
    <div class="lianxi">
      <a name="lxwm"></a>
      <lianxis />
    </div>
    <div class="appfrom">
      <appfrom />
    </div>
    <div class="jiao">
      <jiaos />
    </div>
  </div>
</template>

<script>
import heads from "./head/head";
import homes from "./home";
import yijianchazhao from "./appvue/yijianchazhao";
import zhinengs from "./zhineng";
import updatas from "./updata";
import yunduans from "./yunduan";
import lianghuas from "./lianghua";
import chanpings from "./chanping";
import touzis from "./touzi";
import guanyus from "./guanyu";
import lianxis from "./lianxi";
import jiaos from "./foot/foot";
import kindex from "./kline/kindex";
import rolls from "./roll/roll";
import jinrongs from "./appvue/jinrong";
import appfrom from "./from/appform";
import homeroll from "./roll/homeroll";

export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    homeroll,
    appfrom,
    jinrongs,
    rolls,
    yijianchazhao,
    heads,
    homes,
    zhinengs,
    updatas,
    yunduans,
    lianghuas,
    chanpings,
    touzis,
    guanyus,
    lianxis,
    jiaos,
    kindex
  },
  mounted() {
    //PC版本滚轮坐标
    window.addEventListener("scroll", function() {
      // console.log(document.documentElement.scrollTop); // 滚动高度
      if (document.documentElement.scrollTop < 479) {
        // console.log("首页");
        document.getElementsByClassName("sy")[0].style.color = "#376DBF";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (
        document.documentElement.scrollTop > 480 &&
        document.documentElement.scrollTop < 1739
      ) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#376DBF";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (
        document.documentElement.scrollTop > 1740 &&
        document.documentElement.scrollTop < 2500
      ) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#376DBF";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (
        document.documentElement.scrollTop > 2510 &&
        document.documentElement.scrollTop < 2800
      ) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#376DBF";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (
        document.documentElement.scrollTop > 2810 &&
        document.documentElement.scrollTop < 3500
      ) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#376DBF";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (
        document.documentElement.scrollTop > 3510 &&
        document.documentElement.scrollTop < 4500
      ) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#376DBF";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (
        document.documentElement.scrollTop > 4510 &&
        document.documentElement.scrollTop < 5650
      ) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#376DBF";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (
        document.documentElement.scrollTop > 5650 &&
        document.documentElement.scrollTop < 6000
      ) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#376DBF";
        document.getElementsByClassName("lxwm")[0].style.color = "#9A9A9A";
      } else if (document.documentElement.scrollTop > 6000) {
        document.getElementsByClassName("sy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("znjy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("ydgd")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("rjxz")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lhzq")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("cpfw")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("tzxy")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("gywm")[0].style.color = "#9A9A9A";
        document.getElementsByClassName("lxwm")[0].style.color = "#376DBF";
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index {
  $type: screen;
  $proto: max-width;
  $value: 800px;

  @media #{$type} and ($proto: $value) {
    .head {
      display: none;
    }
  }

  @media screen and (min-width: 750px) {
    .yjczs {
      display: none;
    }
    .roll {
      display: none;
    }
    .jinrongs {
      display: none;
    }
    .appfrom {
      display: none;
    }
    .homeroll {
      display: none;
    }
  }
}
</style>
