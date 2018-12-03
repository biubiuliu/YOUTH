<template>
    <div id="resetpassword">
      <div id="content-container" class="container">
        <div class="row row-6">
  <div class="col-md-6 col-md-offset-3 ptl">
    <div class="panel panel-default panel-page">
      <div class="panel-heading"><h2>重设密码</h2></div>

        <ul class="nav nav-tabs mbl js-find-password">
          <li class="active js-find-by-email">
            <a style="cursor: pointer;">设置新密码
            </a>
          </li>
                  </ul>

      <form id="password-reset-by-mobile-form" class="form-vertical" action="/password/reset/by_sms" method="post">
        
        <div class="form-group">
          <label class="control-label required" for="mobile">输入密码</label>
          <div class="controls">
            <input type="text" id="mobile" name="mobile" data-url="/password/reset/check/mobile" class="form-control" data-role="mobile">
          </div>
        </div>

        <div class="form-group">
          <label class="control-label required" for="sms_code">再次输入密码</label>
            <div class = "controls" >
              <input type="text" class="form-control" id="sms-code" name="sms_code" data-explain="再次输入密码" required="required">
            </div>
        </div>



        <div class="form-group">
          <div class="controls">
            <button type="submit" class="btn btn-primary" data-loading-text="提交中...">重设密码</button>
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
#login {
  height: 1000px;
}
</style>

