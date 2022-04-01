<template>
  <div class="footer">
      <div class="footer-content flex1">
          <div class="footer-content-top flex2">
              <div class="footer-content-top-item">
                  <ul>
                      <li>
                          <h3> <i class="el-icon-s-promotion"></i> 关于我们</h3>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                  </ul>
              </div>
              <div class="footer-content-top-item">
                  <ul>
                      <li>
                          <h3> <i class="el-icon-s-custom"></i> 关于我们</h3>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                  </ul>
              </div>
              <div class="footer-content-top-item">
                  <ul>
                      <li>
                          <h3> <i class="el-icon-paperclip"></i> 关于我们</h3>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                  </ul>
              </div>
              <div class="footer-content-top-item">
                  <ul>
                      <li>
                          <h3> <i class="el-icon-location"></i> 关于我们</h3>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                      <li>
                          <h4>
                              走进我们
                          </h4>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="footer-content-bottom">
              <span>
                  Copyright©中国东方航空 沪ICP备 10009470号-9东航、上航、一二三航服务及投诉受理电话：95530 | 投诉受理电子邮件地址：customercare@ceair.com
              </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'vuefooter'
}
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 350px;
        background-color: #223b61;
        margin-top: 100px;
        text-align: center;
        color: #fff;
        box-shadow: 0 0 10px 2px #000;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .footer-content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        flex-direction: column;
        padding: 50px 0 10px 0;
        box-sizing: border-box;
    }

    .footer-content-top-item>ul>li {
        margin: 20px 0;
    }

    .footer-content-top {
        padding: 0 200px;
    }

    h3 {
        font-weight: bold;
        margin-bottom: 30px;
    }

    .footer-content-bottom span {
        font-size: 14px;
    }
</style>