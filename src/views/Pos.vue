<template>
  <div class="Pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <div class="tabs">
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
                    <el-button type="text" size="small" @click="delOne(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="total-div">
                <small> 数量：</small>{{ totalCount }}  &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{ totalPrice }}
              </div>
              <div class="div-btn">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delAll()">删除</el-button>
                <el-button type="success" @click="checkout()">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
            <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="ofter-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li
                v-for="item in oftenGoods"
                v-bind:key="item.id"
                @click="addOrderList(item)"
              >
                <span>{{ item.goodsName }}</span>
                <span class="price">￥{{ item.price }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type tabs">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="item in type0Goods" v-bind:key="item.id"  @click="addOrderList(item)">
                    <span class="foodImg"
                      ><img src="..\assets\img1.jpg" width="100%"
                    /></span>
                    <span class="foodName">{{ item.goodsName }}</span>
                    <span class="foodPrice">￥{{ item.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList">
                  <li v-for="item in type1Goods" v-bind:key="item.id"  @click="addOrderList(item)">
                    <span class="foodImg"
                      ><img src="..\assets\img1.jpg" width="100%"
                    /></span>
                    <span class="foodName">{{ item.goodsName }}</span>
                    <span class="foodPrice">￥{{ item.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                  <li v-for="item in type2Goods" v-bind:key="item.id"  @click="addOrderList(item)">
                    <span class="foodImg"
                      ><img src="..\assets\img1.jpg" width="100%"
                    /></span>
                    <span class="foodName">{{ item.goodsName }}</span>
                    <span class="foodPrice">￥{{ item.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="item in type3Goods" v-bind:key="item.id"  @click="addOrderList(item)">
                    <span class="foodImg"
                      ><img src="..\assets\img1.jpg" width="100%"
                    /></span>
                    <span class="foodName">{{ item.goodsName }}</span>
                    <span class="foodPrice">￥{{ item.price }}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mock from "../mock/mock";

export default {
  name: "Pos",
  data() {
    return {
      msg: "Hello this is pos",
      activeName: "first",
      tableData: [
        //订单栏的表格数据
      ],
      oftenGoods: [],
      type0Goods: [
        //汉堡类
      ],
      type1Goods: [
        //小食类
      ],
      type2Goods: [
        //饮料类
      ],
      type3Goods: [
        //套餐类
      ],
      totalPrice: 0,
      totalCount: 0
    };
  },
  created() {
    //读取常用商品
    this.axios
      .get("/oftenGoods")
      .then((response) => {
        // console.log(response.data);
        this.oftenGoods = response.data;
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
    //读取各种类型的商品
    this.axios
      .get("/typeGoods")
      .then((response) => {
        console.log(response);
        //this.oftenGoods=response.data;
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
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
    addOrderList(goods) {
      this.totalPrice = 0;
      this.totalCount = 0;

      //商品是否已经存在于订单列表中
      let isHave = false; //默认没有
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) isHave = true;
      }
      //根据判断的值编写业务逻辑（有就加数量，没有就把商品添加进去）
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter((o) => o.goodsId == goods.goodsId);
        arr[0].count++;
        //console.log(arr);
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1,
        };
        this.tableData.push(newGoods);
      }
      this.getTotal();
    },
    //在订单栏删除单个商品
    delOne(goods) {
      this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
      //除了传进来的参数之外其他都保留
      this.getTotal();
    },
    //汇总
    getTotal() {
      this.totalCount = 0;
      this.totalPrice = 0;
      if(this.tableData){//订单栏中有值
        //计算总价和总数量
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalPrice = this.totalPrice + (element.price * element.count);
      });
      }
    },
    delAll() {
      this.tableData = [];
      this.totalPrice = 0;
      this.totalCount = 0;
    },
    checkout() {//模拟结账
      if(this.totalCount != 0) {//订单栏有值的时候
        this.tableData = [];
        this.totalPrice = 0;
        this.totalCount = 0;
        this.$message({//弹窗提示
          message: '结账成功！！！',
          type: 'success'
        });
      }else {
        //订单为空时结账
        this.$message.error('订单栏为空,不能结账呢！')
      }
    }
  },
};
</script>
<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.div-btn {
  margin-top: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.price {
  color: #58b7ff;
}
.tabs {
  padding-left: 10px;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.total-div {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
}
</style>
