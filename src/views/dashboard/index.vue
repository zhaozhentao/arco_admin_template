<template>
  <a-layout class="layout-demo">
    <a-layout style="padding: 0 16px;">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>

      <a-layout-content>
        <a-table :columns="columns" :data="data" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

export default {
  data() {
    return {
      columns: [
        {title: 'Key', dataIndex: 'key'},
        {title: 'Name', dataIndex: 'name'},
        {title: 'Salary', dataIndex: 'salary'},
        {title: 'Address', dataIndex: 'address'},
        {title: 'Email', dataIndex: 'email'},
      ],
      data: [{
        key: '1',
        name: 'Jane Doe',
        salary: 23000,
        address: '32 Park Road, London',
        email: 'jane.doe@example.com'
      }, {
        key: '2',
        name: 'Alisa Ross',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com'
      }, {
        key: '3',
        name: 'Kevin Sandra',
        salary: 22000,
        address: '31 Park Road, London',
        email: 'kevin.sandra@example.com'
      }, {
        key: '4',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com'
      }, {
        key: '5',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '6',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '7',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '8',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '9',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '10',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '11',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '12',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '13',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '14',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '15',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '16',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }, {
        key: '17',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com'
      }]
    }
  }
}
</script>

<style scoped>
.layout-demo :deep(.arco-layout-content) {
  background: var(--color-bg-3);
  padding: 16px;
  margin-bottom: 16px;
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  line-height: 48px;
}
</style>
