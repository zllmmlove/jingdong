<template>
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
.dockor {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
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
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
