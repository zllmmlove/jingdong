<template>
  <div class="dockor">
    <div
      v-for="(item, index) in dockorList"
      :class="{ dockor__item: true, 'dockor__item--active': index === 0 }"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="dockor__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "dockorVue",
  setup() {
    const dockorList = [
      {
        icon: "&#xe69b;",
        text: "首页",
        to: { name: "Home" }
      },
      {
        icon: "&#xe6e6;",
        text: "购物车",
        to: { name: "CartList" }
      },
      {
        icon: "&#xe671;",
        text: "订单",
        to: { name: "Home" }
      },
      {
        icon: "&#xe62f;",
        text: "我的",
        to: { name: "Home" }
      }
    ];
    return { dockorList };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.dockor {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
