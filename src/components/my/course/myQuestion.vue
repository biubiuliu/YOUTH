<template>
  <div id="mylearn">
    <div id="content-container" class="container tabbable">
      <div class="row row-3-9 my-layout">
        <div class="col-md-3">
          <div class="sidenav">
            <ul class="list-group ">
              <li class="list-group-heading">我的学习</li>
              <li class="list-group-item">
                <router-link to="/mylearn">我的课程</router-link>
              </li>
              <li class="list-group-item active">
                <router-link to="/myQuestion">我的问答</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/myTest">我的考试</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane active" id="myQuestion">
            <div class="col-md-9">
              <div class="panel panel-default panel-col">
                <div class="panel-heading">我的问答</div>
                <div class="panel-body">
                  <ul v-for="(item,index) in List" :key="index" class="media-list">
                    <li class="media">
                      <div class="media-body">
                        <div class="mbm">
                          <span class="label label-info" title="问答帖">问</span>
                          <router-link :to="'/course/'+item.cid"><strong>{{item.ask}}</strong></router-link>
                          <span class="label" title="课时262">{{item.cid}}</span>
                        </div>
                        <div class="mbm">
                          <span class="text-muted text-normal">[答] {{item.answer}}</span>
                        </div>
                        <div class="text-muted text-normal">
                          <span>发表于<router-link :to="'/course/'+item.cid" class="link-muted">{{item.title}}</router-link></span>
                          <span class="bullet">•</span>
                          <span>{{item.spot}}浏览</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    questionList
  } from "@/api/mylearn";
  export default {
    data() {
      return {
        userToken: this.$store.getters.token,
        listQuery: {
          page: 1,
          pageSize: 10,
          userToken: this.$store.getters.token
        },
        List: null
      };
    },
    created() {
      //移动端侧边导航
      this.getList();
    },
    methods: {
      getList() {
        questionList(this.listQuery).then(response => {
          this.List = response.data.data.data;
          // console.log(this.teacher)
        });
      }
    }
  };
</script>

<style scoped>
  #mylearn {
    min-height: 700px;
  }
  .classroomPicture {
    width: 24px;
    height: 24px;
  }
</style>