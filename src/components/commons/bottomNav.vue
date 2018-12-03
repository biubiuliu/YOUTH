<template>
    <div id="bottomNav" class="es-wrap">
        <footer class="es-footer bottomNav">
            <div class="copyright">
                <div class="container">
                    Powered by <a href="http://www.zhiyu.com/" target="_blank">zhiyu v7.5.12</a> ©2014-2018
                    <div class="mts">
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
      import {
          delAtive
      } from '../../../static/assets/libs/echo.js/1.7.0/navMobile.js'
      export default {
          created() {
              //移动端侧边导航
              this.delAtive
          },
          methods: {
              delAtive,
          }
      }
</script>
<style lang="scss" scoped>

</style>
