import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: {
      //第一层级是商铺的id
      // shopId: {
      //   //第二层是商品id
      //   //第二层是商品内容以及购物数量
      //   productId: {
      //     imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
      //     name: "番茄 250g / 份",
      //     oldPrice: 39.6,
      //     price: 33.6,
      //     sales: 10,
      //     _id: "1",
      //     count: 1
      //   }
      // },
    }
  },
  getters: {},
  mutations: {
    addItemToCart(state, payload) {
      const { shopId, productId, productInfo, num } = payload;

      let shopInfo = state.cartList[shopId];
      if (!shopInfo) {
        shopInfo = {};
      }
      let product = shopInfo[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count = product.count + num;
      if (num > 0) {
        product.checked = true;
      }
      if (product.count < 0) {
        product.count = 0;
      }
      shopInfo[productId] = product;
      state.cartList[shopId] = shopInfo;
      // console.log(state);
      // console.log(shopId, productId, productInfo);
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const productItem = state.cartList[shopId][productId];
      productItem.checked = !productItem.checked;
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId] = {};
    },
    setCartItemsChecked(state, payload) {
      const shopId = payload.shopId;
      const products = state.cartList[shopId];

      if (products) {
        for (let key in products) {
          let product = products[key];
          product.checked = true;
        }
      }
    }
  },
  actions: {},
  modules: {}
});
