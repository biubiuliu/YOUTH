<template>
    <div id="findpassword">
        <div id="content-container" class="container">
            <div class="row row-6">
                <div class="col-md-6 col-md-offset-3 ptl">
                <div class="panel panel-default panel-page">
                    <div class="panel-heading">
                    <h2>重设密码</h2>
                    </div>

                    <form id="password-reset-by-mobile-form" class="form-vertical" action="/password/reset/by_sms" method="post">

                    <div class="form-group">
                        <label class="control-label required" for="mobile">手机号码</label>
                        <div class="controls">
                        <input type="text" id="mobile" name="mobile" data-url="/password/reset/check/mobile" class="form-control"
                          required="required"  data-role="mobile">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label required" for="sms_code">短信验证码</label>
                        <div class="controls row">
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="sms-code" name="sms_code" data-explain="输入短信验证码"
                            required="required" data-url="/edu_cloud/sms_check/sms_forget_password">
                        </div>

                        <div class="col-md-4">
                            <a href="#modal" data-toggle="modal" class="btn btn-default btn-sm js-sms-send disabled" data-url="/register/captcha/modal"
                            data-sms-url="/edu_cloud/sms_send">
                            <span id="js-time-left"></span>
                            <span id="js-fetch-btn-text">获取短信验证码</span>
                            </a>
                        </div>

                        <div class="col-md-12 help-block"></div>
                        </div>
                    </div>



                    <div class="form-group">
                        <div class="controls">
                        <button type="submit" class="btn btn-primary btn-block" data-loading-text="提交中...">重设密码</button>
                        </div>
                    </div>

                    <input type="hidden" name="_csrf_token" value="xvAxWdtCB2ntr539k4pyQdXMcCMa1fSI-VOHhH1m9eE">
                    </form>

                </div><!-- /panel -->

                </div>

            </div>
        </div>
      </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#findpassword {
  height: 700px;
}
</style>

