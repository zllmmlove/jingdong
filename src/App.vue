<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe608;</span>
      秦皇岛职业技术学院5号楼511
      <span class="iconfont position__notice">&#xe60d;</span>
    </div>
  </div>
  <div class="dockor">
    <div class="dockor__item dockor__item--active">
      <div class="iconfont">&#xe69b;</div>
      <div class="dockor__title">首页</div>
    </div>
    <div class="dockor__item">
      <div class="iconfont">&#xe6e6;</div>
      <div class="dockor__title">购物车</div>
    </div>
    <div class="dockor__item">
      <div class="iconfont">&#xe671;</div>
      <div class="dockor__title">订单</div>
    </div>
    <div class="dockor__item">
      <div class="iconfont">&#xe62f;</div>
      <div class="dockor__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/viriables.scss";
@import "./style/mixins.scss";
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;
}
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.02rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    top: 0.17rem;
    right: 0;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.dockor {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
