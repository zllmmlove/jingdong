<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBack">&#xe697;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe699;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true"></ShopInfo>
  </div>
</template>

<script>
import ShopInfo from "@/components/ShopInfo.vue";
import { useRouter } from "vue-router";
export default {
  name: "ShopView",
  components: {
    ShopInfo
  },
  setup() {
    const item = {
      _id: "1",
      name: "沃尔玛",
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "VIP尊享满89元减4元运费券"
    };
    const router = useRouter();
    const handleBack = () => {
      router.back();
    };
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
  margin: 0.2rem 0 0.16rem 0;
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
