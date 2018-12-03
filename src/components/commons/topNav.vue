<template class="">
  <div id="topNav" class="es-wrap">
    <header class="es-header navbar">
      <div class="navbar-header">
        <div class="visible-xs  navbar-mobile">
          <a href="javascript:;" class="navbar-more js-navbar-more">
            <i class="es-icon es-icon-menu"></i>
          </a>
          <div id="mask" class="html-mask"></div>
          <div id="navMobile" class="nav-mobile">
            <form class="navbar-form" >
              <div class="form-group">
                <input class="form-control js-search " id="navInputMob" placeholder="搜索课程" v-on:input="eve()">
                <button class="button es-icon es-icon-search" @click="sercherMob"></button>
              </div>
            </form>
            <ul class="nav navbar-nav">
              <li class="nav-hover">
                <router-link to="" tag="a">课程<b class="caret"></b></router-link>
                <ul class="dropdown-menu" role="menu">
                  <li v-for="(item ,index) in articleClass" :key="index" @click="artcileClasscli(index)"><a href="javascript:;">{{item.typeName}}</a></li>
                </ul>
              </li>
              <li class="nav-hover">
                <router-link to="" tag="a">资讯<b class="caret"></b></router-link>
                <ul class="dropdown-menu" role="menu">
                  <li v-for="(item,artNews) in articleNews" :key="artNews" @click="artcileNewsCli(artNews)"><a href="javascript:;">{{item.columnName}}</a></li>
                </ul>
              </li>
              <li class="">
                <router-link to="../teacher">教师</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="M_header-back js-back">
          <a><i class="es-icon es-icon-chevronleft"></i></a>
        </div>
        <router-link to="/home" class="navbar-brand" tag="a">
          学分银行
        </router-link>
      </div>
      <nav class="collapse navbar-collapse">
        <ul class="nav navbar-nav clearfix hidden-xs " id="nav">
          <li class="nav-hover">
            <router-link to="/explore/0" tag="a">课程<b class="caret"></b></router-link>
            <ul class="dropdown-menu" role="menu">
              <li v-for="(item ,index) in articleClass" :key="index" @click="artcileClasscli(index)"><a href="javascript:;">{{item.typeName}}</a></li>
            </ul>
          </li>
          <li class="">
            <router-link to="/teacher">教师</router-link>
          </li>
          <li class="nav-hover">
            <router-link to="/article/0" tag="a">资讯<b class="caret"></b></router-link>
            <ul class="dropdown-menu" role="menu">
              <li v-for="(item,artNews) in articleNews" :key="artNews" @click="artcileNewsCli(artNews)"><a href="javascript:;">{{item.columnName}}</a></li>
            </ul>
          </li>
        </ul>
        <div class="navbar-user  left ">
          <ul class="nav user-nav">
            <li v-if="this.$store.getters.token>0" class="user-avatar-li nav-hover">
              <a href="javascript:;" class="dropdown-toggle">
                <img class="avatar-xs" v-if="this.$store.getters.avatar" :src="this.$store.getters.avatar">
                <img class="avatar-xs" v-else src="https://xueyuan-images.oss-cn-beijing.aliyuncs.com/user-default.png" alt="默认图片">
              </a>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="dropdown-header">{{this.$store.getters.name}}</li>
                <li>
                  <router-link to="/settings" tag="a"><i class="es-icon es-icon-setting"></i>个人设置</router-link>
                </li>
                <li v-if="this.$store.getters.roles===13"><a href="http://39.104.77.162:8000/"><i class="es-icon es-icon-dashboard"></i>管理后台</a></li>
                <li class="mobile-switch js-switch-mobile visible-xs">
                  <a href="javascript:;">
                    <i class="es-icon es-icon-qiehuan"></i>切换触屏版</a>
                </li>
                <li class="user-nav-li-logout" style="cursor:pointer"><a @click="logout"><i class="es-icon es-icon-power"></i>退出登录</a></li>
              </ul>
            </li>
            <li v-if="this.userToken>0" class="visible-lg">
              <router-link to="/mylearn"> 我的学习</router-link>
            </li>
            <li v-else class="hidden-xs">
              <router-link to="/login">登录</router-link>
            </li>
          </ul>
          <form class="navbar-form navbar-right hidden-xs hidden-sm" >
            <div class="form-group">
              <input class="form-control js-search " id="navInput" placeholder="搜索课程" v-on:input="eve()">
              <button class="button es-icon es-icon-search"></button>
            </div>
          </form>
        </div>
      </nav>
      <div id="esbar" class="es-bar hidden-xs">
        <!-- 左侧列表 -->
        <div class="es-bar-menu">
          <ul class="bar-menu-sns">
            <li class="popover-btn bar-qq-btn" data-container=".bar-qq-btn" data-title="QQ客服及QQ群" data-content-element="#bar-qq-content">
              <a><i class="es-icon es-icon-qq"></i></a>
            </li>
            <li class="popover-btn bar-phone-btn" data-container=".bar-phone-btn" data-title="电话客服" data-content-element="#bar-phone-content">
              <a><i class="es-icon es-icon-phone"></i></a>
            </li>
            <li class="go-top" style="margin:-10px auto 0 auto;" data-toggle="tooltip" data-placement="left" title="回到顶端">
                    <a href="javascript:;">
                        <i class="es-icon es-icon-keyboardarrowup" style="margin-bottom:-8px"></i>
                        <span class="text-sm">TOP</span>
                    </a>
                </li>
          </ul>
        </div>
        <!-- 学习历史 -->
        <div class="bar-popover-content" style="display:none;">
          <div id="bar-qq-content">
            <div class="row mtm">
              <div class="col-xs-6 mbm text-overflow">
                <a class="link-light" href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDAyMzg2MF8zNzEwMzFfODAwMDIzODYwXzJf" target="_blank"><img class="mrs" src="../../../static/assets/v2/img/bar_qq.png?7.5.12" alt="出现异常啦!" title="点击这里给我发消息"> zhiyu
                </a>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xs-6 mbm">
                <p class="text-overflow">
                  <img class="mrs" src="../../../static/assets/v2/img/bar_qq_group.png?7.5.12" alt=""> ES官方群
                </p>
                <p class="text-overflow">
                  <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=fbd43d95a5d1ebc0bbca9b0798c0f6eda553c8fd7f15f1fedcef9acf642d9e30"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="zhiyu官方11群" title="zhiyu官方11群"></a>
                </p>
              </div>
            </div>
          </div>
          <div id="bar-phone-content">
            <p class="mtm"><i class="es-icon es-icon-accesstime mrm"></i>工作时间：9:00 - 18:00</p>
            <p class="mtm"><i class="es-icon es-icon-phone mrm"></i>之于教育科技深圳有限公司：0571-28022356</p>
            <p class="mtm"><i class="es-icon es-icon-mail mrm"></i>邮箱： <a class="link-light" href="mailto:zhiyu@zhiyu.com">zhiyu@zhiyu.com</a></p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  import Bus from "../../../bus";
   import { delAtive } from '../../../static/assets/libs/echo.js/1.7.0/navMobile.js'
  import {
    classarticle,
    newsArticle
  } from "../../api/article";
  import {
    artcileClasscli,
    artcileNewsCli
  } from "../../../static/bundles/fitler/fitler";
   
  export default {
    data() {
      return {
        userToken: this.$store.getters.token,
        avatar: this.$store.getters.avatar ?
        this.$store.getters.avatar : "https://xueyuan-images.oss-cn-beijing.aliyuncs.com/user-default.png",
        name: this.$store.getters.name,
        searchData: "",
        message: "",
        userInfo: null,
        articleClass: [],
        articleNews: []
      };
    },
    created() {
      this.classarticleData();
      this.newsArticleData();
      this.getUser();
      delAtive()
    },
    methods: {
      sercherMob(){
      delAtive
      },
      eve() {
        var mavVal = $("#navInput").val();
        Bus.$emit("change", mavVal); //Hub触发事件
        var mavValMob = $("#navInputMob").val();
        Bus.$emit("change", mavValMob); //Hub触发事件
        $("#navInputMob").keydown(function() {
                    if (event.keyCode == "13") {//keyCode=13是回车键；数字不同代表监听的按键不同
                       delAtive()
                       console.log('回车+', "111")
                    }
                });
      },
      getUser() {
        if (
          this.$store.getters.token > 0 &&
          this.$store.getters.roles.length === 0
        ) {
          this.$store.dispatch("GetUserInfo").then(res => {
            // console.log(this.$store.getters.avatar);
          });
        }
      },
      artcileClasscli,
      artcileNewsCli,
      classarticleData() {
        classarticle().then(response => {
          this.articleClass = response.data.data;
        });
      },
      logout() {
        this.$store.dispatch("LogOut").then(() => {
          location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
        });
      },
      newsArticleData() {
        newsArticle().then(resonse => {
          this.articleNews = resonse.data.data;
        });
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>

 