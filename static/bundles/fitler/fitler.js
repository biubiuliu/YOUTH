    //跳转课程详情页
    function comingclicked(cId) {
          this.$router.push("/course/" + cId);      
      }
      //课程分类
    function artcileClasscli(artclass) {
        this.thisid = this.articleClass[artclass].cId;
        this.$router.push("/explore/" + this.thisid);
      }
      //资讯栏目分类
    function artcileNewsCli(artNews) {
        this.thisid = this.articleNews[artNews].columnId;
        this.$router.push("/article/" + this.thisid);
        
      }
    //跳转资讯首页详情页
    function articleHomeDetail(articleId) {
      this.$router.push("/detail/" + articleId);
      console.log('跳转热门图片资讯详情页',articleId)
    }
    //资讯热门资讯详情页
    function articleHotDetail(hotArtI) {
      this.$router.push("/detail/" + hotArtI);
    }
    //跳转热门资讯详情页
    function articleDetail(hotart) {
      this.thisid = this.hotarticle[hotart].articleId;
  
      this.$router.push("/detail/" + this.thisid);
    }
    // //跳转热门图片资讯详情页
    // function articleDetailImg(articleId) {
    //   this.$router.push("/detail/" + articleId);
    // }
     //跳转最新资讯详情页
    function articleNewDetail(newart) {
      this.thisid = this.newarticle[newart].articleId;
      this.$router.push("/detail/" + this.thisid);
    }
    //跳转教师详情页
    function teacherDetail(index) {
      this.thisid = this.teacher[index].userId;
      this.$router.push("/user/" + this.thisid);
    }
    //跳转开始考试详情页
    function startTestDetail(id,cid) {
      this.$router.push({
        path:"/startTest",
        query:{
          cid:cid,
          id:id
          }
      });  
    }
    //跳转开始考试结果页
    function resultDetail(tid,eid) {
      this.$router.push({ 
        path:"/result",
        query:{
        testTid:tid,//试卷id
        eid:eid//考试记录id
        }
    })
  }
    //跳转考试详情页
    function testDetail(index) {
      let testTarget  = this.$router.resolve("/test/" + index);
      window.open(testTarget.href, '_blank');   
    }
    //继续学习
    function learnDetail(id,cid) {
        let courseLearnTarget = this.$router.resolve({
        path:"/courseLearn",
        query:{
          cid:cid,
          id:id
          }
      });  
      window.open(courseLearnTarget.href, '_blank');     
    }
     //最热
      
export {
    comingclicked,
    artcileClasscli,
    artcileNewsCli,
    articleDetail,
    teacherDetail,
    articleNewDetail,
    articleHomeDetail,
    articleHotDetail,
    startTestDetail,
    testDetail,
    learnDetail,
    articleDetailImg,
    resultDetail


}
