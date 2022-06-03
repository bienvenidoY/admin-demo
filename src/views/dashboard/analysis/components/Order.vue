<template>
  <Description
    :title="title"
    :collapseOptions="{
      canExpand: true,
      helpMessage: '系统自动生成总订单数据40条，即将拨款订单数20条',
    }"
    :labelStyle="{ width: '300px' }"
    :column="1"
    :data="mockData"
    :schema="schema"
    class="mt-4"
  >
    <template #action>
      <div class="action">
        <a-button class="ml-4" type="link" size="small">
          <Icon icon="ant-design:edit-outlined" />编辑</a-button
        >
      </div>
    </template>
  </Description>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { Icon } from '/@/components/Icon';

  const mockData: Recordable = {
    username: 'test',
    nickName: 'VB',
    age: '123',
    phone: '15695909xxx',
    email: '190848757@qq.com',
    addr: '厦门市思明区',
    sex: '男',
    certy: '3504256199xxxxxxxxx',
    tag: 'orange',
  };
  const schema: DescItem[] = [
    {
      field: 'username',
      label: '总订单数',
    },
    {
      field: 'nickName',
      label: '即将拨款订单数',
    },
  ];
  export default defineComponent({
    components: { Description, Icon },
    props: {
      title: {
        type: String,
        default: '',
      },
    },
    setup() {
      const [register] = useDescription({
        title: 'useDescription',
        data: mockData,
        schema: schema,
      });
      const [register1] = useDescription({
        title: '无边框',
        bordered: false,
        data: mockData,
        schema: schema,
      });
      return { mockData, schema, register, register1 };
    },
  });
</script>
<style lang="less" scoped>
  .action {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }
</style>
