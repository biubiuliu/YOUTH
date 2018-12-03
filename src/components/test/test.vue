<template>
    <div id="test">        
      <div id="content-container" class="container">
        <div class="es-section testpaper-heading">
            <div class="testpaper-titlebar clearfix">
                <h1 class="testpaper-title">{{obtainArr.name}} <br><small class="text-sm"></small></h1>
                  <div class="testpaper-status"> 
                    <div class="label label-primary testpaper-status-doing">答题中</div>
                  </div>
                </div>
                <div class="testpaper-description"><p> {{obtainArr.qualified}} 分及格</p> 
              </div>
              <div class="testpaper-metas" v-if="obtainArr.time==0">
                  共 {{obtainArr.number}} 题，总分 {{obtainArr.total}} 分 ，及格为 {{obtainArr.qualified}} 分 ，不限时间 。
              </div>
              <div class="testpaper-metas" v-else>
                  共 {{obtainArr.number}} 题，总分 {{obtainArr.total}} 分 ，及格为 {{obtainArr.qualified}} 分 ，请在 {{obtainArr.time}} 分钟内作答 。
              </div>

            </div>

        <div class="row">
          <div class="col-md-9 prevent-copy">
            <div class="testpaper-body" >
              <form id='teacherCheckForm' autocomplete="off">
                  <div class="panel panel-default testpaper-question-block" id="testpaper-questions-single_choice">
                  <div class="panel-heading"><strong class="">单选题</strong>
                    <small class="text-muted">
                      共{{obtainArr.singleCount}}题，共{{obtainArr.singleCount * obtainArr.singlescore}}分    
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
									<input type="radio" class="radioOrCheck" v-model="testlist.sanswer[index-1]"
															 :value="single.tId+'|'+sList.a_id"
                                :id="sList.a_id"
                                :ref="sList.a_id"
															/>				
										<label style="width:80%" :for="sList.a_id" 	@click="optionsFun(single.tId,sList.a_id)">
												{{sList.content}}
										</label>
							</li>
            </ul>
          </div>
          </div>  
        </div>
      </div>
                  <div class="panel panel-default testpaper-question-block" id="testpaper-questions-more_choice">
                  <div class="panel-heading"><strong class="">多选题</strong>
                    <small class="text-muted">
                      共{{obtainArr.choiceCount}}题，共{{obtainArr.choiceCount * obtainArr.choicescore}}分    
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
									<input type="checkbox" class="radioOrCheck" name="answer1"
                               :value="item.tId+'|'+cList.a_id"
                               :id="cList.a_id"
                               v-model="testlist.canswer"
															/>
		
										<label style="width:80%" :for="cList.a_id" @click="optionsFun(item.tId,cList.a_id)">{{cList.content}}
										</label>
							</li>                            

            </ul>
          </div>

          </div>  
        </div>
      </div>
       <div class="panel panel-default testpaper-question-block" id="testpaper-questions-determine">
          <div class="panel-heading"><strong class="">判断题</strong>
              <small class="text-muted">
                  共{{obtainArr.judgeCount}}题，共{{obtainArr.judgeCount * obtainArr.judgescore}}分             
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
                
                  <input type="radio" data-type="determine" :id="judge.tId+'0'" :value="judge.tId+'|'+0" v-model="testlist.janswer[index-1]" @click="optionsFun(judge.tId)">
                  <label class="radio-inline " :for="judge.tId+'0'">正确</label>
                
                  <input type="radio" data-type="determine" :id="judge.tId+'1'" :value="judge.tId+'|'+1"  v-model="testlist.janswer[index-1]" @click="optionsFun(judge.tId)">
                  <label class="radio-inline " :for="judge.tId+'1'">错误</label>
              </div>
            </div> 
          </div>
          </div>
        </div>
    </form>

    </div>
  </div>
  <div class="col-md-3">
      <div class="testpaper-card" data-spy="affix" data-offset-top="200" data-offset-bottom="200">
    <div class="panel panel-default">
	<div class="panel-heading">
					<span class=" testpaper-card-timer" id="time_show" data-time="360">
            <label v-if="obtainArr.time==0"><div style="display:none"><span id="remainminite" ref="menuItem"></span>:<span id="remainsecond" ref="second"></span></div></label>
            <label v-else>
                <span id="remainminite" ref="menuItem"></span>:<span id="remainsecond" ref="second"></span>
             </label>
          </span>
              
						<button class="btn btn-sm btn-default pull-right" id="suspend" data-url="/test/2/suspend" data-goto="/my/quiz">稍后再做</button>
			<button id="pause" class="btn btn-sm btn-default pull-right" data-toggle="modal" data-backdrop="static" data-target="#modal" data-url="/test/pause">暂停</button>
		  					</div> 
            <p class="label label-success">单选题</p> 
	            <div class="panel-body">
        
                <span data-anchor="#question3" :id="sTnumber.tId" class="btn btn-default btn-index pull-left "  v-for="(sTnumber,index) in obtainArr.singleList" :key="index  ">
                  {{index+++1}}
                </span>
      </div>
           <p class="label label-success">多选题</p> 
	            <div class="panel-body">
        
                <span data-anchor="#question3"  :id="cTnumber.tId"  class="btn btn-default btn-index pull-left "  v-for="(cTnumber,index) in choiceList" :key="index ">
                  {{index+++1}}
                </span>
      </div>
             <p class="label label-success">判断题</p> 
	            <div class="panel-body" >
        
                <span data-anchor="#question3" :id="JTnumber.tId" class="btn btn-default btn-index pull-left " v-for="(JTnumber,index) in obtainArr.judgeList" :key="index">
                  {{index+++1}}
                </span>
      </div>
               
	<div class="panel-footer">
				<button class="btn btn-success btn-block do-test" id="finishPaper"  data-toggle="modal" data-target="#myModal" @click="optionsFun()">
          我要交卷
        </button>
			</div>
</div>  </div>
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
              <router-link to="" tag="a"  id="show_testpaper_result" class="btn btn-info">查看结果</router-link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="testpaper-finished-dialog-layout" v-show="isSubmit" id="myModal">
      <div id="testpaper-finished-dialog" class="modal in" aria-hidden="false" style="display:block">
        <div class="modal-dialog modal-dialog-small">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">确认交卷
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </h4>
             
            </div>
            <div class="modal-body">
              <h4 class="text-primary">您真的要交卷吗？</h4>
            </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="submitTest()">确认交卷</button>
              </div>
          </div>
        </div>
      </div>
    </div>

  
      </div>

    </div>
</template>

<script>
import { obtain,handOver} from "../../api/article"
export default {
  filters:{
        statusFiltercn(status) {
        const statusMap = {
            1: '已完成学习了',
            0: '完成试题,不限时间'
        }
        return statusMap[status]
    },
  },
  data(){
    return{
      obtainArr:[],
      handOverArr:[],
      jugdeOptions:[],
      numberTest:1,
      choiceList:null,
      ischecked:undefined,
      isSubmit:false,
      testlist:{
        sanswer:[],
        canswer:[],
        janswer:[]
      },
      temp:{
        judgeIds:"",
        judgeAnswer:"",
        singleIds:"",
        singleAnswer:"",
        choiceIds:"",
        choiceAnswer:"",
        cid:  Number(this.$route.params.id),
        tId: 0,
        userToken:Number(this.$store.getters.token),
        time: ""
      },
      testId: Number(this.$route.params.id),
    }
  },
  created(){
    this.obtainData()
         
  },
  methods:{
    obtainData(){
      obtain(this.testId,this.temp.userToken).then(response=>{
        this.obtainArr = response.data.data
        this.choiceList = this.obtainArr.choiceList 
        this.timingFun(this.obtainArr.time)
        this.temp.time = this.obtainArr.time
        this.temp.tId = this.obtainArr.tId
        //答案初始化
        for (let index = 0; index < this.obtainArr.singleList.length; index++) {
        this.testlist.sanswer[index] = this.obtainArr.singleList[index].tId+"|''"
        }
        for (let index = 0; index < this.obtainArr.judgeList.length; index++) {
        this.testlist.janswer[index] = this.obtainArr.judgeList[index].tId+"|''"
        }
        for (let index = 0; index < this.choiceList.length; index++) {
        this.temp.choiceIds += this.choiceList[index].tId+';'
        this.testlist.canswer[index] = this.choiceList[index].tId+"|kong"
        }
        console.log('canswer', this.testlist.canswer)
      })
    },
    
    optionsFun(id,a_id){
       if (true) {
         $("#"+id).remove("btn-default");
         $("#"+id).addClass("btn-success");
       }
      
    },
    submitTest(){
      // 单选题的答案
      for (let index = 0; index < this.testlist.sanswer.length; index++) {
        const selement = this.testlist.sanswer[index];
        this.temp.singleIds += selement.split("|")[0]+';'
        this.temp.singleAnswer += selement.split("|")[1]+';'
            console.log('selement',  selement)
      }
      this.temp.singleIds = this.temp.singleIds.substring(0, this.temp.singleIds.length - 1);
      this.temp.singleAnswer = this.temp.singleAnswer.substring(0, this.temp.singleAnswer.length - 1);
    console.log('singleIds', this.temp.singleIds)
    console.log('singleAnswer', this.temp.singleAnswer)

    // 判断题的答案
    for (let index = 0; index < this.testlist.janswer.length; index++) {
        const jelement = this.testlist.janswer[index];
        this.temp.judgeIds += jelement.split("|")[0]+';'
        this.temp.judgeAnswer += jelement.split("|")[1]+';'
      }
      this.temp.judgeIds = this.temp.judgeIds.substring(0, this.temp.judgeIds.length - 1);
      this.temp.judgeAnswer = this.temp.judgeAnswer.substring(0, this.temp.judgeAnswer.length - 1);
    // console.log('tag', this.temp.judgeIds)
    // console.log('tag', this.temp.judgeAnswer)
    // 多选题的答案 
    var cList=new Array()
    for (let index = 0; index < this.testlist.canswer.length; index++) {
        const celement = this.testlist.canswer[index];
        if(cList[celement.split("|")[0]] === undefined) {
          cList[celement.split("|")[0]] = ''
        }
        cList[celement.split("|")[0]] += celement.split("|")[1]+','
        
      }
    // 答案排序
    function des(a,b){
      return a-b ;
    }

    for (let i = 0; i < cList.length; i++) {
      if (cList[i] != undefined){
        console.log('cList', cList[i])
        if(cList[i] === 'kong,'){
          cList[i] = "''"
        }else if(cList[i].indexOf("kong,") != -1){
          cList[i] = cList[i].replace("kong,","")
          cList[i] = (cList[i].split(",").sort(des).splice(1)).toString()+','
          console.log('replace', cList[i])
        }else{
          cList[i] = (cList[i].split(",").sort(des).splice(1)).toString()+','
          console.log('paixun', cList[i])
        }
        // this.temp.choiceIds += i + ';'
        this.temp.choiceAnswer += cList[i]+';'
      } 
    }
    // for (let index = 0; index < this.choiceList.length; index++) {
    //   this.temp.choiceIds += ((this.choiceList[index].tId+ ',').split(",").sort(des).splice(1)).toString()+','

    //    console.log('choiceIds',  this.temp.choiceIds)
    // }
    this.temp.choiceIds = this.temp.choiceIds.substring(0, this.temp.choiceIds.length - 1);
    this.temp.choiceAnswer = this.temp.choiceAnswer.substring(0, this.temp.choiceAnswer.length - 1);
     
    // console.log('this.temp.choiceAnswer', (this.temp.choiceAnswer.split(",").sort(des).splice(1)).toString()+',')
    if (this.obtainArr.time === 0){
      this.temp.time = '10:00'
    }else{
      this.temp.time = (Number(this.obtainArr.time) - Number(this.$refs.menuItem.innerText) - 1) + ':' + (60 - this.$refs.second.innerText)
    }
    // console.log('tag', this.temp.time)
  

       handOver(this.temp).then(response=>{
         if (response.data.code !=200){
            alert("提交错误,请检查试卷答案")
         }
         else{
           this.$router.push({ path:"/result",
                query:{
                  tid:this.testId,
                  eid:response.data.data,
                  testTid:this.temp.tId
                  }})
          }
        })
    },
    //倒计时
    timingFun(time){
      if (time != 0) {
      var endtime = new Date();
      endtime.setMinutes(new Date().getMinutes() + time);  //考试时间为10分钟
      function timer(){  
          var nowtime = new Date();        
          var totalsecond = Math.floor((endtime.getTime()-nowtime.getTime())/1000); //计算剩余秒数
          console.log(time)
          
              if(totalsecond<0){  //当剩余秒数为0时提交表单
                this.submitTest(); 
              }
          

          var h,s
          h = Math.floor((time*60-totalsecond)/60)
          s = (time*60-totalsecond)%60;
          s += '';
          s = (s.length==1)?'0'+s:s;
          var costtime = h+':'+s
          var remainhour=Math.floor(totalsecond/3600); //剩余小时
          var remainminite=Math.floor((totalsecond-3600*remainhour)/60);//剩余分钟    
          var remainsecond=Math.floor(totalsecond-3600*remainhour-60*remainminite);//剩余秒数
            // console.log(time-endtime.getTime())
          remainminite < 10 ? $("#remainminite").text("0"+remainminite) : $("#remainminite").text(remainminite);
          remainsecond < 10 ? $("#remainsecond").text("0"+remainsecond) : $("#remainsecond").text(remainsecond);
          return costtime
          
      }  
      setInterval(timer,1000);
      }
    }
    
  },
    watch:{
        $route(to,from){
          this.obtainData()
        }
    }

};
</script>

<style scoped>
</style>