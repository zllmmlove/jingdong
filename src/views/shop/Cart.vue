<template>
  <div class="mask" v-if="showCart" @click="handleCartShowChange"></div>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <span
            class="product__header__icon iconfont"
            v-html="allChecked ? '&#xe656;' : '&#xe933;'"
          ></span>
          全选
        </div>
        <div class="product__header__clear">
          <span
            class="product__header__clear__btn"
            @click="() => cleanCartProducts(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item__checked iconfont"
            v-html="item.checked ? '&#xe656;' : '&#xe933;'"
            @click="() => changeCartItemChecked(shopId, item._id)"
          ></div>
          <img class="product__item__img" :src="item.imgUrl" alt="" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>

            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => changeCartItemInfo(shopId, item._id, item, -1)"
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="() => changeCartItemInfo(shopId, item._id, item, 1)"
              >+</span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          alt=""
          class="check__icon__img"
          @click="handleCartShowChange"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{ price }}</span>
      </div>
      <div class="check__btn">
        <router-link to="{ name: 'orderCreation' }"> 去结算 </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "./CommonShopCart";

//获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const { changeCartItemInfo } = useCommonCartEffect();
  const store = useStore();
  const cartList = store.state.cartList;
  const total = computed(() => {
    const productList = cartList[shopId]?.productList;
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });

  const price = computed(() => {
    const productList = cartList[shopId]?.productList;
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        if (product.checked) {
          count += product.count * product.price;
        }
      }
    }
    return count.toFixed(2);
  });

  const allChecked = computed(() => {
    const productList = cartList[shopId]?.productList;
    let result = true;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        if (product.count > 0 && !product.checked) {
          result = false;
        }
      }
    }
    return result;
  });

  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || [];
    return productList;
  });

  const changeCartItemChecked = (shopId, productId) => {
    store.commit("changeCartItemChecked", { shopId, productId });
  };

  const cleanCartProducts = (shopId) => {
    store.commit("cleanCartProducts", { shopId });
  };

  const setCartItemsChecked = (shopId) => {
    store.commit("setCartItemsChecked", { shopId });
  };

  return {
    total,
    price,
    productList,
    changeCartItemInfo,
    changeCartItemChecked,
    cleanCartProducts,
    allChecked,
    setCartItemsChecked
  };
};

//展示隐藏购物车逻辑
const toggleCartEffect = () => {
  const showCart = ref(false);
  const handleCartShowChange = () => {
    showCart.value = !showCart.value;
  };
  return { showCart, handleCartShowChange };
};

export default {
  name: "ShopCart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { showCart, handleCartShowChange } = toggleCartEffect();

    const {
      total,
      price,
      productList,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      allChecked,
      setCartItemsChecked
    } = useCartEffect(shopId);
    return {
      total,
      price,
      productList,
      shopId,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      allChecked,
      setCartItemsChecked,
      showCart,
      handleCartShowChange
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.cart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 2;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #fff;
  &__header {
    display: flex;
    height: 0.52rem;
    line-height: 0.52re;
    border-bottom: 0.01rem solid #f1f1f1;
    font-size: 0.14rem;
    color: #333;
    &__all {
      width: 0.64rem;
      margin-left: 0.18rem;
    }
    &__icon {
      display: inline-block;
      vertical-align: top;
      color: #0091ff;
      font-size: 0.2rem;
    }
    &__clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
      &__btn {
        display: inline-block;
        height: 100%;
      }
    }
  }
  &__item {
    position: relative;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    display: flex;
    &__checked {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      color: #0091ff;
      font-size: 0.2rem;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      @include ellipsis;
    }

    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #ed3b3b;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.26rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        border-radius: 50%;
        border: 0.01rem solid #666;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid #666;
        color: #666;
        margin-right: 0.05rem;
      }
      &__plus {
        background: #0091ff;
        color: #fff;
        margin-left: 0.05rem;
      }
    }
  }
}
.check {
  display: flex;
  box-sizing: border-box;
  height: 0.5rem;
  border-top: 0.01rem solid #f1f1f1;
  line-height: 0.5rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      left: 0.46rem;
      top: 0.04rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background: #e93b3b;
      border-radius: 0.1rem;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: #333;
    font-size: 0.12rem;
    &__price {
      color: #e93b3b;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    font-size: 0.14rem;
    text-align: center;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
