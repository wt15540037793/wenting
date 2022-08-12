<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" mini>搜索</el-button>
        <el-table :data="tableData">
            <el-table-column prop="id" label="ID" width="140">
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="120">
            </el-table-column>
            <el-table-column prop="money" label="账户余额">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="state" label="状态">
            </el-table-column>
            <el-table-column prop="date" label="注册时间">
            </el-table-column>
            <el-table-column prop="" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="swich(scope.row)">编辑</el-button>
                    <el-button type="danger" mini>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="gjswicks()">确 定</el-button>
            </div>
        </el-dialog>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagenum"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import Dates from '../assets/table.json'
export default {
    name: 'MyvueUsers',
    data() {
        return {
            Dates,
            tableData: [],
            input: '',
            dialogFormVisible: false,
            form: {
                name: '',
                address: ''
            },
            ids:0
        };
    },
    mounted() {
        this.getlist()
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pagesize=val
            this.getlist()
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pagenum=val
            this.getlist()
        },
        getlist() {
            // this.$axios.get('tableData',{
            //     params:{
            //         query:this.keyword,
            //         pagenum:this.pagenum,
            //         pagesize:this.pagesize
            //     }
            // })
            // .then(res=>{
            //     console.log(res)
            //     this.tableData=res.data.tableData
            //     this.total=res.data.total
            // })
            this.tableData = this.Dates.list
            console.log(this.Dates.list);
        },
        swich(value) {
            console.log(value);
            this.dialogFormVisible = true
            this.form.name=value.name
            this.form.address=value.address
            this.ids=value.id-1
        },
        gjswicks(){
            this.tableData[this.ids].name=this.form.name
            this.tableData[this.ids].address=this.form.address
            this.dialogFormVisible = false
        }
    },
    watch: {
        input() {
            var arr = []
            this.Dates.list.forEach(item => {
                if (item.name.includes(this.input)) {
                    arr.push(item)
                }
            });
            this.tableData = arr
        }
    }
};
</script>

<style  scoped>
.el-input {
    width: 600px;
}
</style>