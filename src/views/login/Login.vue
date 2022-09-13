<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="text"
        placeholder="请输入手机号"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegister">立即注册</div>
    <ToastVue v-if="toastData.showToast" :msg="toastData.toastMessage" />
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { post } from "../../utils/request.js";
import ToastVue, { useToastEffect } from "@/components/Toast.vue";

export default {
  name: "LoginVue",
  components: { ToastVue },
  setup() {
    const router = useRouter();
    const data = reactive({
      username: "",
      password: ""
    });
    const { toastData, showToast } = useToastEffect();

    const handleLogin = async () => {
      try {
        const result = await post("/api/user/login", {
          username: data.username,
          password: data.password
        });
        // console.log(result);
        if (result?.errno === 0) {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        } else {
          showToast("登陆失败");
        }
        // .then(() => {
        //   localStorage.isLogin = true;
        //   router.push({ name: "Home" });
        // })
        // .catch(() => {
        //   alert("失败");
        // });
      } catch (e) {
        showToast("请求失败");
      }
    };
    const handleRegister = () => {
      router.push({ name: "Register" });
    };
    return { handleLogin, handleRegister, data, toastData };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  height: 4rem;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.3rem 0.16rem 0.3rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      line-height: 0.48rem;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.3rem 0.16rem 0.3rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
