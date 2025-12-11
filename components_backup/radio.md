# Radio 单选框

单选框用于在多个选项中选择一个。

## 基础用法

```vue preview
<template>
  <RadioGroup v-model="value">
    <RadioItem value="option1" label="选项 1" />
    <RadioItem value="option2" label="选项 2" />
    <RadioItem value="option3" label="选项 3" />
  </RadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioItem } from '../../src/components'
const value = ref('option1')
</script>
```

## API

### RadioGroup Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 选中值 | `string` | - |
| defaultValue | 默认值 | `string` | - |
| onValueChange | 改变回调 | `(value: string) => void` | - |
| orientation | 方向 | `'vertical' \| 'horizontal'` | `'vertical'` |
| disabled | 是否禁用 | `boolean` | `false` |

### RadioItem Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 值 | `string` | - |
| label | 标签 | `string` | - |
| description | 描述 | `string` | - |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| disabled | 是否禁用 | `boolean` | `false` |
