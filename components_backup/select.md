# Select 下拉选择

下拉选择框用于从多个选项中选择一个。

## 基础用法

```vue preview
<template>
  <div style="width: 200px;">
    <Select>
      <SelectTrigger placeholder="请选择" />
      <SelectContent>
        <SelectItem value="option1">选项 1</SelectItem>
        <SelectItem value="option2">选项 2</SelectItem>
        <SelectItem value="option3">选项 3</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup>
import { Select, SelectTrigger, SelectContent, SelectItem } from '../../src/components'
</script>
```

## API

### SelectTrigger Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| label | 标签 | `string` | - |
| placeholder | 占位符 | `string` | - |
| required | 是否必填 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
