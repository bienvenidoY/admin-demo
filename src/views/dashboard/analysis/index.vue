<template>
  <div class="p-4">
    <ShopContainer class="enter-y" @change="changeShop" />
    <div class="enter-y" v-if="!!shopId">
      <!--  财务-我的收入  -->
      <Earning title="财务-我的收入" />
      <!--  订单-我的订单  -->
      <Order title="订单-我的订单" />
      <!--  数据-商业分析  -->
      <Analysis title="数据-商业分析" />
    </div>
    <div class="flex items-center justify-center h-72 w-full" v-else>
      <AEmpty description="未选择店铺" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  import Analysis from './components/Analysis.vue';
  import Order from './components/Order.vue';
  import Earning from './components/Earning.vue';
  import ShopContainer from './components/ShopContainer.vue';
  import { Empty } from 'ant-design-vue';
  const AEmpty = Empty;
  const loading = ref(true);
  const shopId = ref<string | undefined>(undefined);
  function changeShop(value) {
    shopId.value = value;
  }
  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
