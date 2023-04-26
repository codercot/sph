<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>

      <div class="cart-body">
        <ul class="cart-list" v-for="(cart, index) in  cartInfoLists ">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cart.isChecked == 1" @change="shopIsChecked(cart, $event)">
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl">
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>

          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="handle('sub', -1, cart)">-</a>

            <input autocomplete="off" type="text" minnum="1" class="itxt" :value="cart.skuNum"
              @change="handle('input', $event.target.value, cart)">
            <a href="javascript:void(0)" class="plus" @click="handle('add', 1, cart)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuPrice * cart.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCart(cart)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllCheck" @change="isAllChecked">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCheckShop">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import throttle from "lodash/throttle";
export default {
  name: 'ShopCart',
  mounted() {
    this.getData()
  },
  computed: {
    ...mapGetters(['cartInfoList']),
    // 在进行一次计算
    cartInfoLists() {
      return this.cartInfoList.cartInfoList || []
    },

    totalPrice() {
      let sum = 0
      this.cartInfoLists.forEach(item => {
        sum += item.skuPrice * item.skuNum
      })
      return sum
    },
    isAllCheck() {
      return this.cartInfoLists.every(item => item.isChecked == "1")
    }
  },
  methods: {
    getData() {
      // 获取购物车列表数据
      this.$store.dispatch("getGowList")
    },
    // 对数量进行更改(要进行节流，防止用户操作过快)
    handle: throttle(async function (type, num, cart) {
      // 根据不同的类型进行不同的判断
      switch (type) {
        case "add":
          num = 1
          break;
        case "sub":
          num = cart.skuNum > 1 ? -1 : 0
          break;
        case "input":
          if (isNaN(num) || num < 1) {
            num = 0
          } else {
            // 小数
            num = parseInt(num) - cart.skuNum
          }
          break;
      }
      // 获取num后发送请求 让服务器存储修改后的数据
      try {
        await this.$store.dispatch("getGou", { id: cart.skuId, num: num })
        // 这里还要发送获取购物车列表数据进行重新展示，因为上面的请求只负责向服务器存数据
        // 下面这个用来获取购物车列表数据
        this.getData()
      } catch (error) {
        alert(Error.message)
      }
    }, 1500),
    // 移除购物车
    async deleteCart(cart) {
      try {
        await this.$store.dispatch("deleteShopCart", cart.skuId)
        this.getData()
      } catch (error) {
        alert(Error.message)
      }
    },

    // 修改购物车选择状态
    async shopIsChecked(cart, event) {
      let checked = event.target.checked ? "1" : "0"
      try {
        await this.$store.dispatch("shopIsChecked", { id: cart.skuId, isChecked: checked })
        this.getData()
      } catch (error) {
        alert(error.message)
      }
    },

    // 删除购物车中所选商品 派发事件，让仓库删
    async deleteAllCheckShop() {
      await this.$store.dispatch("deleteCheckShop")
      this.getData()
    },

    // 全选框修改
    async isAllChecked(event) {
      let isChecked = event.target.checked ? "1" : "0"
      await this.$store.dispatch("allChecked", isChecked)

      this.getData()
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      &>div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        &>li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;

        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>