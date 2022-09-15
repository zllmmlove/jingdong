<template>
  <div class="toast">{{ msg }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "ToastVue",
  props: ["msg"]
};
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ""
  });
  const showToast = (msg) => {
    toastData.show = true;
    toastData.toastMessage = msg;
    setTimeout(() => {
      toastData.show = false;
      toastData.toastMessage = "";
    }, 2000);
  };
  const { show, toastMessage } = toRefs(toastData);
  return { show, toastMessage, showToast };
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
