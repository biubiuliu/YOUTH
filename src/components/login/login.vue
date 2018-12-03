<template>
    <div id="login">
        <div id="content-container" class="container">
            <div class="es-section login-section">
                <div class="logon-tab clearfix">
                <a class="active">登录帐号</a>
                <router-link to="/findpassword">找回密码</router-link>
                </div>
                <div class="login-main">
                <form class="form-vertical" ref="loginForm" :rules="loginRules">
                    <div class="form-group mbl">
                    <label class="control-label" for="login_username">帐号</label>
                    <div class="controls">
                        <input  class="form-control input-lg"
                                type="text"
                                name="username"
                                required="required"
                                v-model="loginForm.username"
                                placeholder='手机号/用户名' />
                        <div class="help-block"></div>
                    </div>
                    </div>
                    <div class="form-group mbl">
                    <label class="control-label" for="login_password">密码</label>
                    <div class="controls">
                        <input  class="form-control input-lg"
                                type="password" 
                                name="password"
                                required="required"  
                                v-model="loginForm.password"                                                                     
                                placeholder='密码'/>
                    </div>
                    </div>
                    <div class="form-group mbl">
                    <label class="control-label" for="captcha">验证码</label>
                    <div class="controls">
                    <div class="col-xs-6" style="padding-left:0px">
						          <input type="text" v-model="loginForm.validateCode" class="form-control input-lg code" placeholder="验证码" maxlength="5">
						        </div>
                    <div class="col-xs-6">
							        <a title="点击更换验证码" @click="changecode">
								          <img src="http://39.104.77.162/youth-sso/captcha/captchaImage?type=math" class="imgcode" width="80%">
							        </a>
						        </div>
                    </div>
                    </div>

                    <div class="form-group mbl">
                    <div class="controls">
                        <input type="checkbox" name="remember_me" v-model="loginForm.rememberMe" checked="checked" > 记住密码
                    </div>
                    </div>
                    <div class="form-group mbl">
                    <div name="btn" class="btn btn-primary btn-lg btn-block"  @click="handleLogin()" >登录</div>
                    </div>

                    <!-- <input type="hidden" name="_target_path" value="/">
                    <input type="hidden" name="_csrf_token" value="xvAxWdtCB2ntr539k4pyQdXMcCMa1fSI-VOHhH1m9eE"> -->
                </form>

                </div>
            </div>

        </div>

        
    </div>
</template>
<script>
import { isvalidUsername } from "@/utils/validate";

export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "", //用户名
        password: "", //密码
        validateCode: "",
        rememberMe: 0
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    changecode() {
      var ctx = "http://39.104.77.162/youth-sso/";
      var captchaType = "math";
      var url =
        ctx +
        "captcha/captchaImage?type=" +
        captchaType +
        "&s=" +
        Math.random();
      $(".imgcode").attr("src", url);
    },
    //点击登录调用方法
    handleLogin() {
      //判断复选框是否被勾选 勾选则调用配置cookie方法
      if ((this.checked = true)) {
        //传入账号名，密码，和保存天数3个参数
        this.setCookie(this.loginForm.username, this.loginForm.password, 7);
      }
      //   //接口
      //   var url='myserver/user/login';
      //   this.$http.post(url,this.loginForm,{emulateJSON:true})
      //     .then(res=>{
      //       if(res.body=="fail"){
      //        alert("用户名或密码错误,请重新输入");
      //         this.loginForm.username='';
      //         this.loginForm.password='';
      //         return
      //       } else{
      //       alert("登陆成功！")
      //         this.$router.push("/index")
      //       }
      // });
      this.loading = true;
      this.loginForm.rememberMe = Boolean(this.loginForm.rememberMe);
      this.$store
        .dispatch("LoginByUsername", this.loginForm)
        .then(() => {
          this.loading = false;
          this.$router.push({ path: this.redirect || "/" });
          location.reload();
        })
        .catch(() => {
          this.loading = false;
        });
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "username" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "username") {
            this.loginForm.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.loginForm.password = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }
  },
  //页面加载调用获取cookie值
  mounted() {
    this.getCookie();
  }
};
</script>
<style lang="scss" scoped>
#login {
  height: 700px;
}
</style>

