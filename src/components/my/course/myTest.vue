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

              <li class="list-group-item" >
              <router-link to="/myQuestion">我的问答</router-link>
              </li>
              
              <li class="list-group-item active " >
              <router-link to="/myTest">我的考试</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="tab-content">
          <div class="tab-pane active" id="myTest">
            <div class="col-md-9">
              <div class="panel panel-default panel-col">
                <div class="panel-heading">我的考试</div>
                <div class="panel-body">
                  <table class="table table-striped table-hover">	
                    <tbody>
                      <tr v-for="(item,index) in List" :key="index">
                        <td width="55%">
                          {{item.name}}
                          <div>
                            <small class="text-muted">来自课程《{{item.title}}》</small>
                            <small class="text-muted mhs">•</small>
                            <small class="text-muted" title="开始考试时间">{{item.time | parseTime('{y}-{m}-{d} {h}:{i}') }}</small>
                          </div>
                        </td>

                        <td>
                          <span class="text-muted">得分<strong class="text-warning">{{item.mark}}</strong>分</span><br>
                          <small class="text-muted">做对<strong>{{item.correctCount}}</strong>题 / 共<strong>{{item.count}}</strong>题</small>
                        </td>
                        <td>
                          <button class="btn btn-default btn-sm" @click="startTestDetail(item.c_id,item.cid)" > 再做一次</button> 
                          <a class="btn btn-link btn-sm" @click="resultDetail(item.tid,item.eid)" > 查看结果</a>
                        </td>
                      </tr>
                    </tbody>
                  </table> 
                </div> 
                <nav class=" text-center">
                  <v-pagination v-show="total>10" :total="total" :page-size="listQuery.pageSize" :current-page='listQuery.page' @pagechange="pagechange"></v-pagination>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
  </div>
</template>

<script>
import { testList } from "@/api/mylearn";
import { parseTime } from "@/utils";
import { startTestDetail,resultDetail } from "../../../../static/bundles/fitler/fitler";
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
        userToken: this.$store.getters.token
      },
      total: null,
      List: null,

    };
  },
  created() {
    this.getList();
  },
  methods: {
    startTestDetail,
    resultDetail,
    getList() {
      testList(this.listQuery).then(response => {
        this.List = response.data.data.data;
        this.total = response.data.data.total;
        console.log(response.data.data)
      });
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