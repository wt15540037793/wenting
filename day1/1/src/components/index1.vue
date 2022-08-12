<template>
    <div>
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="#2944CB" text-color="#fff" active-text-color="#fff">
                    <el-menu-item index="1">
                        <el-image style="width: 50px; height: 50px"
                            src="http:\/\/120.53.31.103:84\/uploads\/image\/2020-06-15\/PbaW7AwkOQV8OQrGR6Wa6lkv8vbdPxaJ3BGOSQ5I.jpeg">
                        </el-image>
                    </el-menu-item>
                    <el-menu-item index="1" class="yh"><i class="el-icon-user-solid"></i>用户</el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-delete-solid"></i>教学</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-delete-solid"></i>题库</el-menu-item>
                    <el-menu-item index="4"><i class="el-icon-delete"></i>运营</el-menu-item>
                    <el-menu-item index="5"><i class="el-icon-s-good"></i>营销</el-menu-item>
                    <el-menu-item index="6"><i class="el-icon-s-cooperation"></i>商品</el-menu-item>
                    <el-menu-item index="7"><i class="el-icon-printer"></i>财务</el-menu-item>
                    <el-menu-item index="8"><i class="el-icon-printer"></i>统计</el-menu-item>
                    <el-menu-item index="9"><i class="el-icon-reading"></i>系统</el-menu-item>
                    <el-submenu index="2-4" class="sssss">
                        <template slot="title">
                            <el-image style="width: 50px; height: 50px"
                                src="http:\/\/120.53.31.103:84\/uploads\/image\/2020-06-15\/PbaW7AwkOQV8OQrGR6Wa6lkv8vbdPxaJ3BGOSQ5I.jpeg">
                            </el-image>
                            <i class="el-icon-caret-bottom"></i>
                        </template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-col :span="12">
                        <el-menu default-active="/index1" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose" background-color="#fff" text-color="#000" active-text-color="#2944CB"
                            router>
                            <el-menu-item index="/">
                                <i class="el-icon-menu"></i>
                                <span slot="title">学员管理</span>
                            </el-menu-item>
                            <el-menu-item index="/index1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">讲师管理</span>
                            </el-menu-item>
                            <el-menu-item index="/a">
                                <i class="el-icon-menu"></i>
                                <span slot="title">助教管理</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-aside>
                <el-main class="main">
                    <p class="p">讲师管理</p>
                    <div class="div2">
                        <el-form ref="form" label-width="80px">
                            <el-form-item label="学员状态">
                                <el-select v-model="model" placeholder="请选择">
                                    <el-option label="禁用" value="禁用"></el-option>
                                    <el-option label="启用" value="启用"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        学生姓名<el-input v-model="input" class="input input1" placeholder="请输入学生关键字"></el-input>
                        手机号<el-input v-model="input1" class="input input2" placeholder="请输入手机号"></el-input>
                        <el-button @click="ssmc"><i class="el-icon-search"></i>搜索</el-button>
                        <el-button @click="cz"><i class="el-icon-switch-button"></i>重置</el-button>
                    </div>
                    <div class="div3">
                        <el-button type="primary">新增学员</el-button>
                        <el-button type="primary">批量导入</el-button>
                        <el-button type="primary">批量导出</el-button>
                        <el-button type="primary">查看报告</el-button>
                    </div>
                    <template>
                        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" height="600"
                            style="width: 100%" @selection-change="handleSelectionChange">
                            <el-table-column type="selection">
                            </el-table-column>
                            <el-table-column prop="nickname" label="学生姓名">
                                <template slot-scope="scope">
                                    <el-image style="width: 100px; height: 100px" :src="scope.row.avatar"></el-image>
                                    <span class="spans">{{ scope.row.nickname }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="mobile" label="手机号">
                            </el-table-column>
                            <el-table-column prop="status" label="状态" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="created_at" label="创建时间" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column fixed="right" label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">详细-</el-button>
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑-</el-button>
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">禁用-</el-button>
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">删除-</el-button>
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">重置密码</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                    <div class="block">
                        <a class="aa" href="javaScript:;">导出所选</a>
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="pagesize" :page-sizes="[1, 2, 5, 11]" :page-size="pagenum"
                            layout="total, sizes, prev, pager, next, jumper" :total="total">
                        </el-pagination>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: '',
            activeIndex: '1',
            activeIndex2: '1',
            input: '',
            input1: '',
            tableData: [],
            tableData2: [],
            multipleSelection: [],
            pagesize: 1,
            pagenum: 11,
            total: 0,
            flag1: false,
            flag2: false,
            flag3: false,
        }
    },
    mounted() {
        this.xr()
    },
    methods: {
        ssmc() {
            console.log(this.model);
            console.log(this.tableData);
            if (this.input != '' || this.input1 != '' || this.model != '') {
                let obj = {
                    nickname: this.input,
                    mobile: this.input1,
                    status: this.model,
                }
                let a = this.tableData.filter(ele => {
                    return ele.nickname.includes(obj)
                })
                console.log(a);
            } else {
                if (this.input != '') {
                    this.tableData = this.tableData.filter(ele => {
                        return ele.nickname.includes(this.input)
                    })
                }
                if (this.input1 != '') {
                    this.tableData = this.tableData.filter(ele => {
                        return ele.mobile.includes(this.input1)
                    })
                }
                if (this.model != '') {
                    this.tableData = this.tableData2.filter(ele => {
                        return ele.status.includes(this.model)
                    })
                }
            }
        },
        cz() {
            this.input = ''
            this.input1 = ''
            this.model = ''
            this.xr()
        },
        xr() {
            this.$axios.get('/list.json').then(res => {
                console.log(res);
                this.tableData2 = res.data
                this.tableData2 = this.tableData2.filter(ele => {
                    return ele.created_at = '2020/06/15 21:32:08'
                })
                this.tableData2 = this.tableData2.filter(ele => {
                    if (ele.status == 1) {
                        return ele.status = '启用'
                    } else {
                        return ele.status = '禁用'
                    }
                })
                this.total = this.tableData2.length
                this.tableData = this.tableData2
                var index1 = (this.pagesize - 1) * this.pagenum
                var index2 = this.pagesize * this.pagenum
                this.tableData = this.tableData2.slice(index1, index2)

            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pagenum = val
            var index1 = (this.pagesize - 1) * this.pagenum
            var index2 = this.pagesize * this.pagenum
            this.tableData = this.tableData2.slice(index1, index2)
            xr()
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pagesize = val
            var index1 = (this.pagesize - 1) * this.pagenum
            var index2 = this.pagesize * this.pagenum
            this.tableData = this.tableData2.slice(index1, index2)
            xr()
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleClick(row) {
            console.log(row);
        },
    },
}
</script>
<style>
.el-menu-vertical-demo {
    height: 850px;
}

.aa {
    float: left;
    line-height: 20px;
}

.el-submenu__title {
    margin-right: -1000px;
}

.cell {
    position: relative;
}

.el-image {
    margin-right: 0;
}

.spans {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.el-table__header-wrapper {
    line-height: 30px !important;
}

.div3 {
    line-height: 50px;
    text-align: left;
}

.input2 {
    margin-right: 20px;
}

.div2 {
    line-height: 70px;
    text-align: left;
}

.el-input {
    line-height: 40px !important;
}

.el-form {
    display: inline-block;
}

.input1 {
    margin-right: 20px;
}

.el-form-item__content {
    width: 300px;
}

.input {
    width: 200px;
}

.main {
    padding: 0 !important;
}

.p {
    margin: 0;
    padding: 0;
    width: 100%;
    line-height: 50px;
    text-align: left;
    border-bottom: 2px solid #000;
}

.yh {
    margin-left: 400px !important;
}

.el-col {
    width: 100%;
}

body {
    margin: 0;
}

.el-header {
    padding: 0 !important;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>