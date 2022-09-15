import { createStore } from "vuex";

const setLocalStorage = (state) => {
  const { cartList } = state;
  const cartListString = () => JSON.stringify(cartList);
  localStorage.cartList = cartListString();
};

const getLocalStorage = () => {
  return localStorage.cartList ? JSON.parse(localStorage.cartList) : {};
};

export default createStore({
  state: {
    cartList: getLocalStorage()
    // cartList: {
    //第一层级是商铺的id
    // shopId: {
    //   shopName:"沃尔玛"
    //   productList:{
    //   //第二层是商品id
    //   //第二层是商品内容以及购物数量
    //     productId: {
    //       imgUrl: "http://www.dell-lee.com/imgs/vue3/tomato.png",
    //       name: "番茄 250g / 份",
    //       oldPrice: 39.6,
    //       price: 33.6,
    //       sales: 10,
    //       _id: "1",
    //       count: 1
    //      }
    //   }
    // },
    // }
  },
  getters: {},
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload;

      let shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {}
      };

      let product = shopInfo.productList[productId];
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
      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo;
      setLocalStorage(state);
      // console.log(state);
      // console.log(shopId, productId, productInfo);
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload;
      const shopInfo = state.cartList[shopId] || {
        shopName: "",
        productList: {}
      };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalStorage(state);
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const productItem = state.cartList[shopId].productList[productId];
      productItem.checked = !productItem.checked;
      setLocalStorage(state);
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
      setLocalStorage(state);
    },
    setCartItemsChecked(state, payload) {
      const shopId = payload.shopId;
      const products = state.cartList[shopId].productList;

      if (products) {
        for (let key in products) {
          let product = products[key];
          product.checked = true;
        }
      }
      setLocalStorage(state);
    }
  },
  actions: {},
  modules: {}
});
