<template>
  <div id="setting" class="es-wrap">
    <div id="content-container" class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="sidenav">
            <ul class="list-group">
              <li class="list-group-heading">个人设置</li>
              <li class="list-group-item active">
                <router-link to="/settings"><i class="glyphicon glyphicon-user"></i> 基础信息</router-link>
              </li>
              <li class="list-group-item ">
                <router-link to="/avatar"><i class="glyphicon glyphicon-picture"></i> 头像设置</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="panel panel-default panel-col" id="setting">
            <div class="panel-heading">基础信息</div>
            <div class="panel-body">
              <form ref="dataForm" :model="temp" class="form-horizontal">
                <div class="form-group">
                  <label class="col-md-2 control-label">手机号码</label>
                  <div class="col-md-7 controls">
                    <div class="control-text"> {{temp.telephone}} </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label" prop="userName">真实姓名</label>
                  <div class="col-md-7 controls">
                    <div class="control-text"> {{temp.userName}}</div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label" prop="cid">身份证号码</label>
                  <div class="col-md-7 controls">
                    <div class="control-text"> {{temp.cid}}</div>
                  </div>
                </div>
                <div v-if="temp.userType===2" class="form-group">
                  <label class="col-md-2 control-label">头衔</label>
                  <div class="col-md-7 controls">
                    <input type="text" v-model="temp.title" class="form-control">
                    <div class="help-block" style="display:none;"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-2 control-label">自我介绍</label>
                  <div class="col-md-7 controls">
                    <textarea v-model="temp.signature" class="form-control"> </textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-7 col-md-offset-2">
                    <div data-submiting-text="正在保存" type="submit" class="btn btn-primary" @click="updateData">保存</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    getUserInfo,
    updateUser
  } from "@/api/user";
  export default {
    data() {
      return {
        userToken: Number(this.$store.getters.token),
        total: null,
        temp: {
          telephone: "",
          userName: "",
          cid: "",
          schoolId: "",
          title: "",
          signature: ""
        }
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        getUserInfo(this.userToken).then(response => {
          this.temp = response.data.data;
          // console.log(this.teacher)
        });
      },
      updateData() {
        this.temp.type = 1;
        this.temp.uid = this.userToken;
        updateUser(this.temp).then(() => {
          alert("保存成功");
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  #setting {
    min-height: 700px;
  }
</style>
