<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="top__header__back iconfont" @click="handleBackClick">
          &#xe697;
        </div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">秦皇岛职业技术学院5号楼511</div>
        <div class="top__receiver__info">
          <div class="top__receiver__info__name">瑶妹 （女士） 13123123123</div>
        </div>
        <div class="top__receiver__icon iconfont">&#xe697;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">{{ shopName }}</div>
      <div class="products__list">
        <templete v-for="item in productList" :key="item._id">
          <div class="products__item" v-if="item.count > 0">
            <img class="products__item__img" :src="item.imgUrl" alt="" />
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span class="products__item__single">
                  <span class="products__item__yen"
                    >&yen;{{ item.price }}x{{ item.count }}</span
                  >
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen"
                    >&yen;{{ (item.price * item.count).toFixed(2) }}</span
                  >
                </span>
              </p>
            </div>
          </div>
        </templete>
      </div>
    </div>
    <div class="order">
      <div class="order__price">
        实付金额 <b>￥{{ calculations.price }}</b>
      </div>
      <div class="order__btn">提交订单</div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useCommonCartEffect } from "../../effects/cartEffects";
export default {
  name: "OrderConfirmation",
  setup() {
    const Router = useRouter();
    const route = useRoute();
    const shopId = route.params.id;
    const { productList, shopName, calculations } = useCommonCartEffect(shopId);
    const handleBackClick = () => {
      Router.back();
    };
    return { productList, shopName, calculations, handleBackClick };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    color: #fff;
    text-align: center;
    font-size: 0.16rem;
    &__back {
      position: absolute;
      font-size: 0.22rem;
      left: 0.18rem;
    }
  }
  &__receiver {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    &__title {
      line-height: 0.22rem;
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: #333;
    }
    &__address {
      line-height: 0.2rem;
      padding: 0 0.4rem 0 0.16rem;
      font-size: 0.14rem;
      color: #333;
    }
    &__info {
      padding: 0.06rem 0 0 0.16rem;
      &__name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #666;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: #666;
      font-size: 0.16rem;
    }
  }
}
.products {
  margin: 0.16rem 0.18rem 0.2rem 0.18rem;
  background: #fff;
  &__title {
    padding: 0.16rem 0.16rem 0 0.16rem;
    font-size: 0.16rem;
    color: #333;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.16rem;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #ed3b3b;
    }

    &__total {
      text-align: right;
      flex: 1;
      color: #000;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}
.order {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  line-height: 0.49rem;
  background: #fff;
  &__price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: #333;
  }
  &__btn {
    width: 0.98rem;
    background: #4fb0f9;
    color: #fff;
    text-align: center;
    font-size: 0.14rem;
  }
}
</style>
