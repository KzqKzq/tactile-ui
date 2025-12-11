# Checkbox 复选框

复选框用于多选场景。

## 基础用法

```vue preview
<template>
  <div class="component-showcase-vertical">
    <Checkbox label="选项 A" />
    <Checkbox label="选项 B" :defaultChecked="true" />
    <Checkbox label="选项 C" description="这是一个带描述的选项" />
  </div>
</template>

<script setup>
import { Checkbox } from '../../src/components'
</script>
```

## 尺寸

```vue preview
<template>
  <div class="component-showcase">
    <Checkbox size="sm" label="小" />
    <Checkbox size="md" label="默认" />
    <Checkbox size="lg" label="大" />
  </div>
</template>

<script setup>
import { Checkbox } from '../../src/components'
</script>
```

## 不确定状态

```vue preview
<template>
  <Checkbox label="全选" :checked="indeterminate ? 'indeterminate' : false" />
</template>

<script setup>
import { Checkbox } from '../../src/components'
const indeterminate = true
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked | 是否选中 | `boolean \| 'indeterminate'` | - |
| defaultChecked | 默认选中 | `boolean` | `false` |
| onCheckedChange | 状态改变回调 | `(checked: boolean) => void` | - |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| label | 标签文本 | `string` | - |
| description | 描述文本 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
