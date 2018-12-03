<template>
  <div id="mylearn">
    <div id="content-container" class="container tabbable">
      <div class="row row-3-9 my-layout">
        <div class="col-md-3">
          <div class="sidenav">
            <ul class="list-group ">
              <li class="list-group-heading">我的学习</li>
              <li class="list-group-item  active ">
                <router-link to="/mylearn">我的课程</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/myQuestion">我的问答</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/myTest">我的考试</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane active " id="myClass">
            <div class="col-md-9 ">
              <div class="panel panel-default panel-col">
                <div class="panel-heading">我的课程</div>
                <div class="panel-body">
                  <ul class="nav nav-pills">
                    <li class="active"><a href="#study" data-toggle="tab" @click="study">学习中</a></li>
                    <li><a href="#learned" data-toggle="tab" @click="learned">已学完</a></li>
                    <li><a href="#collection" data-toggle="tab" @click="collection">收藏</a></li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active " id="study">
                      <ul class="course-grids">
                        <li v-for="(item,index) in List" :key="index" class="course-grid">
                          <router-link :to="'/course/'+item.cid" class="grid-body">
                            <img :src="item.path" class="img-responsive thumb">
                            <span class="course-label"></span>
                            <span class="title">{{item.title}}</span>
                            <div class="learn-status">
                              <div class="mbm"></div>
                              <div class="progress">
                                <div class="progress-bar progress-bar-success" style="width: 50%;"></div>
                              </div>
                              <div class="action"><span class="btn btn-primary btn-sm">继续学习</span></div>
                            </div>
                          </router-link>
                        </li>
                      </ul>
                      <nav class=" text-center">
                        <v-pagination v-show="total>1" :total="total" :page-size="listQuery.pageSize" :current-page='listQuery.page' @pagechange="pagechange"></v-pagination>
                      </nav>
                    </div>
                    <div class="tab-pane" id="learned">
                      <ul class="course-grids">
                        <li v-for="(item,index) in List" :key="index" class="course-grid">
                          <router-link :to="'/course/'+item.cid" class="grid-body">
                            <img :src="item.path" class="img-responsive thumb">
                            <span class="course-label"></span>
                            <span class="title">{{item.title}}</span>
                            <div class="learn-status">
                              <div class="mbm"></div>
                              <div class="progress">
                                <div class="progress-bar progress-bar-success" style="width: 100%;"></div>
                              </div>
                              <div class="action"><span class="btn btn-primary btn-sm">再学一遍</span></div>
                            </div>
                          </router-link>
                        </li>
                      </ul>
                      <nav class=" text-center">
                        <v-pagination v-show="total>1" :total="total" :page-size="listQuery.pageSize" :current-page='listQuery.page' @pagechange="pagechange"></v-pagination>
                      </nav>
                    </div>
                    <div class="tab-pane" id="collection">
                      <ul class="course-grids">
                        <li v-for="(item,index) in List" :key="index" class="course-grid">
                          <router-link :to="'/course/'+item.cid" class="grid-body">
                            <img :src="item.path" class="img-responsive thumb">
                            <span class="course-label"></span>
                            <span class="title">{{item.title}}</span>
                            <div class="learn-status">
                              <div class="mbm"></div>
                              <div class="action"><span class="btn btn-primary btn-sm">开始学习</span></div>
                            </div>
                          </router-link>
                        </li>
                      </ul>
                      <nav class=" text-center">
                        <v-pagination v-show="total>1" :total="total" :page-size="listQuery.pageSize" :current-page='listQuery.page' @pagechange="pagechange"></v-pagination>
                      </nav>
                    </div>
                  </div>
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
    learnList
  } from "@/api/mylearn";
  import pagination from "@/components/articlenav/article/artPage/pagination";
  export default {
    components: {
      "v-pagination": pagination
    },
    data() {
      return {
        userToken: this.$store.getters.token,
        listQuery: {
          page: 1,
          pageSize: 10,
          userToken: this.$store.getters.token,
          type: 0
        },
        total: null,
        List: null
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        learnList(this.listQuery).then(response => {
          this.List = response.data.data.data;
          this.total = response.data.data.total;
          // console.log(this.teacher)
        });
      },
      study() {
        this.listQuery.type = 0;
        this.getList();
      },
      learned() {
        this.listQuery.type = 1;
        this.getList();
      },
      collection() {
        this.listQuery.type = 2;
        this.getList();
      },
      pagechange: function(currentPage) {
        this.listQuery.page = currentPage;
        this.getList();
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
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