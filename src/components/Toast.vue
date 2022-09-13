<template>
  <div class="toast">{{ msg }}</div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "ToastVue",
  props: ["msg"]
};
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: ""
  });
  const showToast = (msg) => {
    toastData.showToast = true;
    toastData.toastMessage = msg;
    setTimeout(() => {
      toastData.showToast = false;
      toastData.toastMessage = "";
    }, 2000);
  };
  return { toastData, showToast };
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
}
</style>
