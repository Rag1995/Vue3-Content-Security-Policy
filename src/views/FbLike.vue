<template>
  <h1>登入 Facebook 帳號後才看得到</h1>
  <div id="fb-root"></div>
  <div
    class="fb-like"
    data-href="https://developers.facebook.com/docs/plugins/"
    data-width="100"
    data-layout="standard"
    data-action="like"
    data-size="small"
    data-share="false"
  ></div>
</template>

<script setup>
import { onMounted } from "vue";
import { loadSDK } from "../mixin/loadSDK";

onMounted(() => {
  loadSDK(
    "fb",
    "https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v14.0"
  ).then(() => {});
});
</script>
