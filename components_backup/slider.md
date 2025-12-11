# Slider 滑块

滑块用于在一个范围内选择数值。

## 基础用法

```vue preview
<template>
  <div style="width: 300px;">
    <Slider :defaultValue="[50]" />
  </div>
</template>

<script setup>
import { Slider } from '../../src/components'
</script>
```

## 显示数值

```vue preview
<template>
  <div style="width: 300px;">
    <Slider :defaultValue="[50]" showValue label="音量" />
  </div>
</template>

<script setup>
import { Slider } from '../../src/components'
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 当前值 | `number[]` | - |
| defaultValue | 默认值 | `number[]` | `[0]` |
| onValueChange | 改变回调 | `(value: number[]) => void` | - |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长 | `number` | `1` |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| label | 标签 | `string` | - |
| showValue | 显示数值 | `boolean` | `false` |
| formatValue | 格式化函数 | `(value: number) => string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
