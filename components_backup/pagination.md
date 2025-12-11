# Pagination 分页

分页用于长列表的分页导航。

## 基础用法

```vue preview
<template>
  <Pagination
    :currentPage="currentPage"
    :totalPages="20"
    @page-change="currentPage = $event"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '../../src/components'

const currentPage = ref(1)
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| currentPage | 当前页码 | `number` | - |
| totalPages | 总页数 | `number` | - |
| siblingCount | 相邻页码数 | `number` | `1` |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| onPageChange | 页码改变回调 | `(page: number) => void` | - |
