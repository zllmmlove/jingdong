<template>
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
</template>

<script>
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "../../effects/cartEffects";
export default {
  name: "ProductList",

  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { productList, shopName } = useCommonCartEffect(shopId);
    return { productList, shopName };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
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
</style>
