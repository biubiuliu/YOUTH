<template>
    <div id="avatar" class="es-wrap">
        <div id="content-container" class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="sidenav">
                        <ul class="list-group">
                            <li class="list-group-heading">个人设置</li>
                            
                            <li class="list-group-item ">
                                <router-link to="/settings"><i class="glyphicon glyphicon-user"></i> 基础信息</router-link>
                            </li>
                            <li class="list-group-item active">
                                <router-link to="/avatar"><i class="glyphicon glyphicon-picture"></i> 头像设置</router-link>
                            </li>
                            
                        
                        </ul>
                    </div>
                </div>

          <div class="col-md-9">
             <div class="panel panel-default panel-col">
                 <div class="panel-heading">头像设置</div>
                    <div class="panel-body">
        
                     <form id="settings-avatar-form" class="form-horizontal" method="post">
                        <div class="form-group">
                            <div class="col-md-2 control-label"><b>当前头像</b></div>
                            <div class="controls col-md-8 controls">
                                <img :src="temp.path" width="200" height="200">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-2 control-label">
                            </div>
                            <div class="controls col-md-8 controls">
                                <p class="help-block">你可以上传JPG、GIF或PNG格式的文件，文件大小不能超过<strong>2M</strong>。</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-2 control-label"></div>
                            <div class="controls col-md-8 controls">
                                <a id="upload-picture-btn" class="btn btn-primary" @click="imagecropperShow=true">上传新头像</a>
                            </div>
                        </div>
                     </form>

                 </div>
            </div> 
        </div>

      <image-cropper
      v-show="imagecropperShow"
      :width="300"
      :height="300"
      :key="imagecropperKey"
      url="https://httpbin.org/post"
      lang-type="zh"
      @close="close"
      @crop-upload-success="cropSuccess"/>

            </div>
        </div>
    </div>
</template>
<script>
import ImageCropper from "@/components/ImageCropper";
import { getUserInfo, updateUser } from "@/api/user";

export default {
  name: "AvatarUpload",
  components: { ImageCropper },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      temp: {
        userToken: this.$store.getters.token,
        path: "",
        uid: Number(this.$store.getters.token)
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getUserInfo(this.temp.userToken).then(response => {
        if (response.data.data.path) {
          this.temp.path = response.data.data.path;
        } else {
          this.temp.path =
            "https://xueyuan-images.oss-cn-beijing.aliyuncs.com/user-default.png";
        } // console.log(this.teacher)
      });
    },
    cropSuccess(resData) {
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
      this.image = resData.data;
      this.temp.path = this.image;
      updateUser(this.temp).then(response => {
        alert("头像更新成功");
      });
    },
    close() {
      this.imagecropperShow = false;
    }
  }
};
</script>
<style lang="scss" scoped>
#avatar {
  min-height: 700px;
}
</style>
