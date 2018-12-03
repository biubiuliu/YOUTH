<template>
    <div id="result">
  <div id="content-container" class="container">
        <div class="es-section testpaper-heading">
  <div class="testpaper-titlebar clearfix">
       <h1 class="testpaper-title">{{achievementArr.title}} <br><small class="text-sm">{{achievementArr.name}}： 交卷时间：{{DATE}} 用时：{{achievementArr.time}}</small></h1>
  </div>
  </div>
  
  <div class="media testpaper-result">
  <div class="testpaper-result-total">
    <div class="well">
      <div class="testpaper-result-total-score">{{achievementArr.mark}}.0 <small>分</small></div>
      <small class="text-muted">总分{{achievementArr.total}}.0分</small>
    </div>
  </div>
  <div class="media-body">
    <div class="table-responsive">
      <table class="table table-bordered table-condensed testpaper-result-table">
        <thead>
            <th></th>
            <th>单选题 <small class="text-muted">({{achievementArr.singleCount}}道)</small></th>
            <th>多选题 <small class="text-muted">({{achievementArr.choiceCount}}道)</small></th>
            <th>判断题 <small class="text-muted">({{achievementArr.judgeCount}}道)</small></th>
        </thead>
          <tbody>
            <tr>
              <th>答对</th>
              <td><span class="text-success">{{sttypeArr0}}<small>道</small></span></td>
              <td><span class="text-success">{{cttypeArr0}} <small>道</small></span></td>
              <td><span class="text-success">{{jttypeArr0}}<small>道</small></span></td>
            </tr>
            <tr>
              <th>答错</th>
              <td> <span class="text-danger">{{sttypeArr1}}<small> 道</small></span></td>
              <td><span class="text-danger"> {{cttypeArr1}}<small>道</small></span></td>
              <td><span class="text-danger"> {{jttypeArr1}}<small>道</small></span></td>
            </tr>
            <tr>
              <th>未答</th>
              <td><span class="text-muted">{{sttypeArr2}}<small>道</small></span></td>
              <td><span class="text-muted">{{cttypeArr2}} <small>道</small></span></td>
              <td><span class="text-muted">{{jttypeArr2}} <small>道</small></span></td>
            </tr>
            <tr>
              <th>得分</th>
              <td><span class="text-score">{{achievementArr.singleScore}} <small>分</small></span></td>
              <td><span class="text-score">{{achievementArr.choiceScore}} <small>分</small></span></td>
              <td><span class="text-score">{{achievementArr.judgeScore}} <small>分</small></span></td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</div>
        <div class="alert alert-success" v-if="(ispass == 0)">恭喜您已通过本次考试。</div>
        <div class="alert alert-danger" v-else>很遗憾您没有通过本次考试,继续加油。</div>
        <div id="testpaper-navbar" class="testpaper-navbar" data-spy="affix" data-offset-top="200">
        <ul class="nav nav-pills clearfix">
            <li>单选题</li>
            <li>多选题</li>
            <li>判断题</li>
        </ul>
      </div>
        <div class="row">
  <div class="col-md-9 prevent-copy">
    <div class="testpaper-body" >
    <form id='teacherCheckForm' autocomplete="off">
                <div class="panel panel-default testpaper-question-block" id="testpaper-questions-single_choice">
                  <div class="panel-heading"><strong class="">单选题</strong>
                    <small class="text-muted">
                      共{{achievementArr.singleCount}}题，共{{achievementArr.singleCount * obtainArr.singlescore}}分    
                    </small>
                  </div>
                  <div class="panel-body"   v-for="(single,index) in obtainArr.singleList" :key="single.tId">
                  <div class="testpaper-question testpaper-question-choice " data-watermark-url="/cloud/testpaper_watermark" id="question3">
              <div class="testpaper-question-body">
            <div class="testpaper-question-stem-wrap clearfix">
          <div class="testpaper-question-seq-wrap">
            <div class="testpaper-question-seq">{{index+++1}}</div>
            <div class="testpaper-question-score">{{obtainArr.singlescore}}.0分</div>
          </div>
              <div class="testpaper-question-stem">
                  <p>{{single.content}}</p><br />
              </div>
          </div>

            <ul class="testpaper-question-choices">          

              <li class="option" v-for="sList in single.list" :key="sList.a_id">

										<label style="width:80%" :for="sList.a_id" 	@click="optionsFun(single.tId,sList.a_id)">
												{{sList.content}}
										</label>
                    
							</li>                           

            </ul>
                <div class="testpaper-question-result">
                      你的答案是 <strong class="text-default" >({{single.answer}})</strong>。<font :class="single.state | statestyleTextFil">{{single.state | stateFiltern}}</font>
                </div>
                  <div class="testpaper-question-analysis well" style="display:none;"> </div>  
                </div>
              </div>           
            </div>
            <div class="testpaper-question testpaper-question-choice " data-watermark-url="/cloud/testpaper_watermark" id="question1">
              </div> 
      </div>
               
         <div class="panel panel-default testpaper-question-block" id="testpaper-questions-more_choice">
                  <div class="panel-heading"><strong class="">多选题</strong>
                    <small class="text-muted">
                      共{{achievementArr.choiceCount}}题，共{{achievementArr.choiceCount * obtainArr.choicescore}}分    
                    </small>
                  </div>
                  <div class="panel-body" v-for="(item,index) in choiceList" :key='item.tId'>
                  <div class="testpaper-question testpaper-question-choice " data-watermark-url="/cloud/testpaper_watermark" id="question3">
              <div class="testpaper-question-body">
            <div class="testpaper-question-stem-wrap clearfix">
          <div class="testpaper-question-seq-wrap">
            <div class="testpaper-question-seq">{{index+++1}}</div>
            <div class="testpaper-question-score">{{obtainArr.choicescore}}.0分</div>
          </div>
              <div class="testpaper-question-stem">
                  <p>{{item.content}}</p><br />
              </div>
          </div>

            <ul class="testpaper-question-choices">            
              <li class="option" v-for="cList in item.list " :key="cList.a_id" >
										<label style="width:80%" :for="cList.a_id" @click="optionsFun(item.tId,cList.a_id)">{{cList.content}}
										</label>
							</li>                            
            </ul>
                <div class="testpaper-question-result" > 
                        你的答案是 <strong class="text-default " >({{item.answer}})</strong>。<font :class="item.state | statestyleTextFil">{{item.state | stateFiltern}}</font>
                </div>
                <div class="testpaper-question-analysis well" style="display:none;"> </div>  
            </div>
          </div>  
        </div>
              <div class="testpaper-question testpaper-question-choice " data-watermark-url="/cloud/testpaper_watermark" id="question1">
              </div> 
      </div>


       <div class="panel panel-default testpaper-question-block" id="testpaper-questions-determine">
          <div class="panel-heading"><strong class="">判断题</strong>
              <small class="text-muted">
                  共{{achievementArr.judgeCount}}题，共{{achievementArr.judgeCount * obtainArr.judgescore}}分             
              </small>
            </div>
            <div class="panel-body">
             <div class="testpaper-question testpaper-question-fill " data-watermark-url="/cloud/testpaper_watermark" id="question7"  v-for="(judge,index) in obtainArr.judgeList" :key="index">
                <div class="testpaper-question-body">
                  <div class="testpaper-question-stem-wrap clearfix">
                    <div class="testpaper-question-seq-wrap">
                      <div class="testpaper-question-seq">{{index+++1}}</div>
                      <div class="testpaper-question-score">{{obtainArr.judgescore}}.0分</div>
                      </div>
                      <div class="testpaper-question-stem">
                         <p>{{judge.content}}</p><br />
                      </div>
                     </div>
                   </div>

              <div class="testpaper-question-footer clearfix">
              <div class="testpaper-question-determine-inputs">
                
                  
                  <label class="radio-inline " :for="judge.tId+'0'">正确</label>
                
                  
                  <label class="radio-inline " :for="judge.tId+'1'">错误</label>
                  
              </div>
              
            </div> 
            <div class="testpaper-question-result">
                  你的答案是 <strong class="text-default">({{judge.answer | answerFiltern}})</strong>。<font :class="judge.state | statestyleTextFil">{{judge.state | stateFiltern}}</font>
              </div>
          </div>
          </div>
        </div>
       </form>
    </div>
  </div>
    <div class="col-md-3">
      <div class="testpaper-card" data-spy="affix" data-offset-top="200">
        <div class="panel panel-default">
          <div class="panel-body">
             <p class="label label-success">单选题</p> 
	            <div class="panel-body">
        
                <span data-anchor="#question3" :id="sTnumber.tId" :class="sTnumber.state | statestyleFilter"  class='btn btn-index pull-left'  v-for="(sTnumber,index) in obtainArr.singleList" :key="index  ">
                  {{index+++1}}
                </span>
      </div>
           <p class="label label-success">多选题</p> 
	            <div class="panel-body">
        
                <span data-anchor="#question3"  :id="cTnumber.tId"  :class="cTnumber.state | statestyleFilter" class="btn btn-index pull-left "  v-for="(cTnumber,index) in choiceList" :key="index ">
                  {{index+++1}}
                </span>
      </div>
             <p class="label label-success">判断题</p> 
	            <div class="panel-body" >
        
                <span data-anchor="#question3" :id="JTnumber.tId" :class="JTnumber.state | statestyleFilter" class="btn btn-index pull-left " v-for="(JTnumber,index) in obtainArr.judgeList" :key="index">
                  {{index+++1}}
                </span>
      </div>
            <div class="testpaper-card-explain clearfix">
                <a href="javascript:;" class="btn btn-success btn-index"></a><small class="text-muted">正确</small>
                <a href="javascript:;" class="btn btn-danger btn-index"></a><small class="text-muted">错误</small>
                <a href="javascript:;" class="btn btn-default btn-index"></a><small class="text-muted">未做</small>
            </div>
          </div>
        <div class="panel-footer">

        </div>
      </div>
     </div>
    </div>
    <div class="timeout-dialog-layout">
      <div id="timeout-dialog" class="modal in" aria-hidden="false" style="display: none;">
        <div class="modal-dialog modal-dialog-small">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">考试结束</h4>
            </div>
            <div class="modal-body">
              <div class="well well-lg">
                <div class="empty">考试已结束，请点击下面的按钮查看结果~</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="/test/3/result" id="show_testpaper_result" class="btn btn-info">查看结果</a>
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
import { achievement,Record,complete} from "../../api/article"

    export default {
          filters:{
            answerFiltern(status) {
                  const statusMap = {
                      1: '错误',
                      0: '正确'
                  }
                  return statusMap[status]
              },
            stateFiltern(status) {
                  const statusMap = {
                      0: '回答正确',
                      1: '回答错误',
                      2: '漏选答案'
                  }
                  return statusMap[status]
              },
            statestyleFilter(status) {
                  const statusMap = {
                      0: 'btn-success',
                      1: 'btn btn-index pull-left btn-danger',
                      2: 'btn btn-index pull-left btn-default'
                  }
                  return statusMap[status]
              },
            statestyleTextFil(status) {
                  const statusMap = {
                      0: 'text-success',
                      1: 'text-danger',
                      2: 'text-default'
                  }
                  return statusMap[status]
              },
          },
        data(){
          return {
            achievementArr:[],
            sttypeArr0:[],
            sttypeArr1:[],
            sttypeArr2:[],
            cttypeArr0:[],
            cttypeArr1:[],
            cttypeArr2:[],
            jttypeArr0:[],
            jttypeArr1:[],
            jttypeArr2:[],
            obtainArr:[],
            choiceList:null,
            testlist:{
              sanswer:[],
              canswer:[],
              janswer:[]
            },
            ispass:'',
            date:'',
            DATE :'',
            userToken:5,
            testId: Number(this.$route.query.testTid),
            eid: Number(this.$route.query.eid),

          }
        },
        created(){
              this.achievementData()
              this.RecordData()
              this.add0()
              
            },
        methods:{
          achievementData(){
            achievement(this.testId,this.eid).then(response=>{
                  this.achievementArr = response.data.data
                  this.ispass = this.achievementArr.state
                  this.date = this.achievementArr.DATE
                  // console.log(this.achievementArr)
                  this.DATE = this.format(this.date)
                  for (let index = 0; index < this.achievementArr.map.length; index++) {
                      const element = this.achievementArr.map[index];
                      if (element.ttype==0 && element.etype == 0) {//单选 答对
                        this.sttypeArr0.push(element.COUNT)
                      this.sttypeArr0 = this.sttypeArr0.join("-")
                      }else if(element.ttype==0 && element.etype == 1){
                          this.sttypeArr1.push(element.COUNT)
                          this.sttypeArr1 = this.sttypeArr1.join("-")
                      }else if(element.ttype==0 && element.etype == 2){
                          this.sttypeArr2.push(element.COUNT)
                          this.sttypeArr2 = this.sttypeArr2.join("-")

                      }
                      if (element.ttype==1 && element.etype == 0) {//多选 答对
                        this.cttypeArr0.push(element.COUNT)
                      this.cttypeArr0 = this.cttypeArr0.join("-")
                      }else if(element.ttype==1 && element.etype == 1){
                          this.cttypeArr1.push(element.COUNT)
                          this.cttypeArr1 = this.cttypeArr1.join("-")
                      }else if(element.ttype==1 && element.etype == 2){
                          this.cttypeArr2.push(element.COUNT)
                          this.cttypeArr2 = this.cttypeArr2.join("-")
                      }
                      if (element.ttype==2 && element.etype == 0) {// 判断答对
                        this.jttypeArr0.push(element.COUNT)
                      this.jttypeArr0 = this.jttypeArr0.join("-")
                      }else if(element.ttype==2 && element.etype == 1){
                          this.jttypeArr1.push(element.COUNT)
                          this.jttypeArr1 = this.jttypeArr1.join("-")
                      }else if(element.ttype==2 && element.etype == 2){
                          this.jttypeArr2.push(element.COUNT)
                          this.jttypeArr2 = this.jttypeArr2.join("-")
                      }
                    }
                  })
               },
                add0(m){
                  return m<10?'0'+m:m 
                },
                format(date){
                  //shijianchuo是整数，否则要parseInt转换
                  var time = new Date(this.date);
                  var y = time.getFullYear();
                  var m = time.getMonth()+1;
                  var d = time.getDate();
                  var h = time.getHours();
                  var mm = time.getMinutes();
                  var s = time.getSeconds();
                  return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
                  
                },
                RecordData(){
                  Record(this.testId,this.eid).then(response=>{
                     this.obtainArr = response.data.data
                      this.choiceList = this.obtainArr.choiceList 
                  })
                }
           
          }
          
    }
</script>

<style scoped>

</style>