# DatePicker 日期选择器

日期选择器用于选择日期。

## 基础用法

```vue preview
<template>
  <div style="width: 250px;">
    <DatePicker placeholder="选择日期" />
  </div>
</template>

<script setup>
import { DatePicker } from '../../src/components'
</script>
```

## 带标签

```vue preview
<template>
  <div style="width: 250px;">
    <DatePicker label="出生日期" placeholder="选择日期" required />
  </div>
</template>

<script setup>
import { DatePicker } from '../../src/components'
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 选中日期 | `Date \| null` | - |
| defaultValue | 默认日期 | `Date \| null` | - |
| onChange | 改变回调 | `(date: Date \| null) => void` | - |
| placeholder | 占位符 | `string` | `'选择日期'` |
| format | 日期格式 | `string` | `'yyyy-MM-dd'` |
| label | 标签 | `string` | - |
| required | 是否必填 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| minDate | 最小日期 | `Date` | - |
| maxDate | 最大日期 | `Date` | - |
