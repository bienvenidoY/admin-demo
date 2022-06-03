<template>
  <Description
    :title="title"
    :collapseOptions="{
      canExpand: true,
      helpMessage: '近30天内数据总和，系统会随机分配到近30天内的时间段',
    }"
    :labelStyle="{ width: '300px' }"
    :column="1"
    :data="mockData"
    :schema="schema"
    class="mt-4"
  >
    <template #action>
      <div class="action">
        <a-button class="ml-2" type="link" size="small">
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
      label: '总销售额',
    },
    {
      field: 'nickName',
      label: '总订单数',
      render: (curVal, data) => {
        return `${data.username}-${curVal}`;
      },
    },
    {
      field: 'phone',
      label: '总销售件数',
    },
    {
      field: 'email',
      label: '总页面浏览数',
    },
    {
      field: 'addr',
      label: '已取消的订单',
    },
    {
      field: 'addr',
      label: '已取消的销售',
    },
    {
      field: 'addr',
      label: '已退货/退款的订单',
    },
    {
      field: 'addr',
      label: '已退货/退款的销售',
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
