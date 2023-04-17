<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enter" @mouseleave="le">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" @click="goSearch" v-show="show">
            <div class="all-sort-list2">
              <div class="item bo" v-for="(item, index) in category.slice(0, 15)">
                <h3 @mouseenter="btn(index)" :class="{ active: currentIndex === index }" @mouseleave="leave">
                  <a :data-categoryName="item.categoryName" :data-category1Id="item.categoryId">{{ item.categoryName
                  }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem" v-for="(iten, inden) in item.categoryChild" :key="iten.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="iten.categoryName" :data-category2Id="iten.categoryId">{{ iten.categoryName
                        }}</a>
                      </dt>
                      <dd>
                        <em v-for="(ite, inde) in iten.categoryChild">
                          <a :data-categoryName="ite.categoryName" :data-category3Id="ite.categoryId">{{ ite.categoryName
                          }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import throttle from 'lodash/throttle'
// import { query } from 'express';
export default {
  data() {
    return {
      currentIndex: -1,
      show: true
    }
  },
  name: "typeNav",
  mounted() {
    // 挂载完毕后要判断是否在search页面
    if (this.$route.path !== "/home") {
      this.show = false
    }
  },
  methods: {
    // 使用节流
    btn: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    leave() {
      this.currentIndex = -1
    },
    // 使用事件委派对a标签进行监听
    goSearch(event) {
      // 获取被点击得元素
      let element = event.target
      //  对element对象进行结构
      let { categoryname, category1id, category2id, category3id } = element.dataset
      // console.log(element.dataset);
      if (categoryname) {
        // 路由配置
        let location = { name: "search" }
        let query = { categoryName: categoryname }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        if(this.$route.params) {
          location.params=this.$route.params
          location.query = query
          
          this.$router.push(location)
          console.log(location);
        }
      }
    },
    enter() {
      this.show = true
    },
    le() {
      // 判断，除了home显示外，其他页面鼠标离开都隐藏
      if (this.$route.path !== "/home") {
        this.show = false
      }
    }
  },
  computed: {
    ...mapState({
      category: (state) => state.Home.category
    })
  }
}
</script>

<style scoped lang="less">
.type-nav {
  &:hover a {
    cursor: pointer;
  }

  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }

    .sort-enter {
      height: 0px;
    }

    .sort-enter-to {
      height: 461px;
    }

    .sort-enter-active {
      transition: all .5s linear;
    }
  }
}

// 动画


.active {
  background-color: skyblue;
}
</style>