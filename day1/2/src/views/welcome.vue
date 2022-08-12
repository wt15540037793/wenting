<template>
    <div>
        <p>后台管理系统</p>
        <h1 class="toubu"><img src="../assets/logo.png" alt=""></h1>
        <el-container style="height: 800px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu router>
                    <el-submenu index="users">
                        <template slot="title">首页</template>
                        <el-menu-item index="/users">用户管理</el-menu-item>
                        <el-menu-item index="/tabbers">tab标签页</el-menu-item>
                        <el-menu-item index="/gjhua">国际化</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>

        </el-container>
    </div>
</template>

<script>
export default {
    name: 'P6Welcome',

    data() {
        return {
        };
    },
    created() {
    },

    methods: {
    },
};
</script>

<style scoped>
p{
    font-size: 20px;
    color: black;
    margin-left: -1300px;
}
.toubu {
    position: relative;
    justify-content: space-between;
    padding: 0 30px;
    height: 30px;
    top: -30px;
}
img{
    width: 40px;
    position: absolute;
    right: 50px;
    top: -30px;
}
img:hover{
    width: 120px;
}
</style>