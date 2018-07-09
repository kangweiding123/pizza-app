<template>
    <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="router">
                <MenuItem name="historyLink">
                    <Icon type="document-text"></Icon>
                    新闻信息
                </MenuItem>
                <MenuItem name="contactLink">
                    <Icon type="chatbubbles"></Icon>
                    联系我们
                </MenuItem>
                <MenuItem name="orderingGuidLink">
                    <Icon type="heart"></Icon>
                    点餐文档
                </MenuItem>
                <MenuItem name="deliveryLink">
                    <Icon type="heart-broken"></Icon>
                    快递信息
                </MenuItem>
            </Menu>
        </Sider>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
        </Content>
    </Layout>
</template>

<script>
    export default {
        name: "About",
        methods: {
            router: function (name) {
                this.$router.push({name})
            }
        }
    }
</script>

<style scoped>

</style>