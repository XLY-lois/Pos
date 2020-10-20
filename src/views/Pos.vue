<template>
  <div class="Pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="点餐" name="first">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称">
              </el-table-column>
              <el-table-column prop="count" label="数量" width="60">
              </el-table-column>
              <el-table-column prop="price" label="金额" width="70">
              </el-table-column>
              <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="7"> 产品栏 </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Pos",
  data() {
    return {
      msg: "Hello this is pos",
      activeName: "first",
      tableData: [{

          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {

          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {

          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {

          goodsName: '甜筒',
          price: 8,
          count:1
        }]
    };
  },
  mounted() {
    var orderHeight = document.body.clientHeight;
    // console.log(orderHeight)
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
</style>
