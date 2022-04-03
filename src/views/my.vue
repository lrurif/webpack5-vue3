<script setup>
  import useUserStore from "@/store/modules/user"
  import { storeToRefs } from "pinia"
  const userStore = useUserStore();
  const { userName } = storeToRefs(userStore)
  const change = () => {
    userStore.updateName("哈哈哈哈")
  }
</script>
<template>
  <div>
    我的内容
    {{ userName }}
    <button @click="change">点击</button>
  </div>
</template>
