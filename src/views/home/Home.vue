<template>
  <div class="wrapper">
    <StaticPart />
    <NearBy />
  </div>
  <DockorVue />
</template>
<script>
import StaticPart from "./StaticPart.vue";
import NearBy from "./NearBy.vue";
import DockorVue from "./Dockor.vue";
export default {
  name: "HomeVue",
  components: {
    StaticPart,
    NearBy,
    DockorVue
  }
};
</script>
<style lang="scss">
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.2rem 0.18rem;
}
</style>
