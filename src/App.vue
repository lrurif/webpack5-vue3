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
    <el-button @click="add">点我修改</el-button>
    <router-link to="/about">关于</router-link>
    <router-link to="/my">我的</router-link>
    <router-view></router-view>
  </div>
</template>
