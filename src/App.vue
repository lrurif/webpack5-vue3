<script setup>
  import { ref } from "vue"
  let a = ref(123)
  let add = () => {
    a.value++
  }
</script>
<template>
  <div>
    {{a}}hhahahhaassffaaaas
    <button @click="add">点击</button>
    <router-link to="/about">关于</router-link>
    <router-link to="/my">我的</router-link>
    <router-view></router-view>
  </div>
</template>
