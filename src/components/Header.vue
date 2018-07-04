<template>
    <Menu mode="horizontal" theme="dark" active-name="home" @on-select="hahahha">
        <div class="layout-logo icon">
            <img id="icon_pizza" src="../assets/icon_pizza.png" alt="披萨图标"/>
        </div>
        <div class="layout-logo">
            <p>Pizza订餐系统</p>
        </div>
        <div class="layout-nav">
            <MenuItem name="home">
                <Icon type="home"></Icon>
                主页
            </MenuItem>
            <MenuItem name="menu">
                <Icon type="ios-people"></Icon>
                菜单
            </MenuItem>
            <MenuItem name="admin">
                <Icon type="gear-a"></Icon>
                管理
            </MenuItem>
            <MenuItem name="about">
                <Icon type="information"></Icon>
                关于我们
            </MenuItem>
            <MenuItem name="login">
                <Icon type="log-in"></Icon>
                登陆
            </MenuItem>
            <MenuItem name="register">
                <Icon type="person-add"></Icon>
                注册
            </MenuItem>
        </div>
    </Menu>
</template>


<script>
    export default {
        name: "Header",
        methods: {
            hahahha: function (name) {
                if (name=='home') {
                    this.$router.push('/');
                }else {
                    this.$router.push(name);
                }

            }
        }
    }
</script>

<style scoped>
    #icon_pizza {
        width: 35px;
        height: 35px;
    }

    p {
        line-height: 30px;
        margin: 0;
        color: #fff;
    }

    .layout-logo.icon {
        width: 40px;
    }

</style>