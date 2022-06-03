<template>
  <Card title="店铺信息">
    <ARow style="display: flex">
      <ACol span="8">
        <BasicForm @register="register" />
      </ACol>
      <ACol span="8">
        <a-button type="link"><Icon icon="ant-design:plus-square-outlined" />创建店铺</a-button>
        <a-button type="link" :disabled="!shopId">
          <Icon icon="ant-design:edit-outlined" />修改店铺</a-button
        >
      </ACol>
    </ARow>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { Card, Row, Col } from 'ant-design-vue';

  import { Icon } from '/@/components/Icon';

  export default defineComponent({
    components: { BasicForm, Card, Icon, ARow: Row, ACol: Col },
    emits: ['change'],
    setup(props, { emit }) {
      const shopId = ref<string | undefined>(undefined);
      const schemas: FormSchema[] = [
        {
          field: 'field',
          component: 'Select',
          label: '选择店铺',
          colProps: {
            span: 24,
          },
          componentProps: {
            placeholder: '请选择店铺',
            options: [
              {
                label: '11',
                value: '2342',
              },
            ],
            onChange: (e) => {
              console.log(e);
              shopId.value = e;
              emit('change', e);
            },
          },
        },
      ];

      const [register] = useForm({
        labelWidth: 100,
        schemas,
        actionColOptions: {
          span: 24,
        },
        showActionButtonGroup: false,
      });

      return {
        register,
        shopId,
      };
    },
  });
</script>
