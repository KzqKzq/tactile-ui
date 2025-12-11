# Collapsible 折叠

可展开和收起的内容区域。

## 基础用法

```vue preview
<template>
  <Collapsible style="width: 300px;">
    <CollapsibleTrigger>点击展开/收起</CollapsibleTrigger>
    <CollapsibleContent>
      <p style="padding: 16px;">
        这是可折叠的内容区域，点击上方按钮可以展开或收起。
      </p>
    </CollapsibleContent>
  </Collapsible>
</template>

<script setup>
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../src/components'
</script>
```

## API

### Collapsible Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 变体 | `'default' \| 'minimal'` | `'default'` |
| open | 是否展开 | `boolean` | - |
| defaultOpen | 默认展开 | `boolean` | `false` |
| onOpenChange | 状态改变回调 | `(open: boolean) => void` | - |
