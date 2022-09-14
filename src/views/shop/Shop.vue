<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBack">&#xe697;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe699;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"></ShopInfo>
    <ShopContent></ShopContent>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
import { get } from "@/utils/request";
import ShopInfo from "@/components/ShopInfo.vue";
import ShopContent from "./Content.vue";

// shop获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute();
  const data = reactive({
    item: {}
  });
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  return { data, getItemData };
};
//路由跳转 跳转到上一个页面
const useBackRouterEffect = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return { handleBack };
};
export default {
  name: "ShopView",
  components: {
    ShopInfo,
    ShopContent
  },
  setup() {
    const { data, getItemData } = useShopInfoEffect();
    getItemData();
    const { item } = toRefs(data);
    const { handleBack } = useBackRouterEffect();

    return { item, handleBack };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0.18rem;
}
.search {
  display: flex;
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: #b7b7b7;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      font-size: 0.14rem;
      background: none;
      height: 0.32rem;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
