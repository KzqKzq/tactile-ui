# Separator 分割线

分割线用于分隔内容区域。

## 基础用法

```vue preview
<template>
  <div>
    <p>上方内容</p>
    <Separator />
    <p>下方内容</p>
  </div>
</template>

<script setup>
import { Separator } from '../../src/components'
</script>
```

## 带标签

```vue preview
<template>
  <div>
    <p>上方内容</p>
    <Separator label="或者" />
    <p>下方内容</p>
  </div>
</template>

<script setup>
import { Separator } from '../../src/components'
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| orientation | 方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| label | 标签文本 | `string` | - |
| decorative | 是否装饰性 | `boolean` | `true` |
