<template>
  <div id="app">
      <Layout>
          <Header>
              <appHeader></appHeader>
          </Header>
          <Content :style="{padding: '0 50px'}">
              <Card>
                  <div style="min-height: 200px;">
                      <router-view></router-view>
                  </div>
              </Card>
          </Content>
          <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
      </Layout>
  </div>
</template>

<script>

import appHeader from "./components/Header";
export default {
  name: 'app',
  components: {
      appHeader
  }
}
</script>

<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 600px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .ivu-layout-content{
        margin-top: 50px;
    }
    .ivu-card.ivu-card-bordered{
        height: 500px;
    }
</style>
