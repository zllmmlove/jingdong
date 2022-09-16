<template>
  <div class="wrapper">
    <TopArea></TopArea>
    <productList></productList>
    <OrderVue></OrderVue>
  </div>
</template>

<script>
import TopArea from "./TopArea.vue";
import productList from "./ProductList.vue";
import OrderVue from "./Order.vue";
export default {
  name: "OrderConfirmation",
  components: { TopArea, productList, OrderVue }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
