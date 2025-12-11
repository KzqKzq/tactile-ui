# Drawer 抽屉

抽屉从屏幕边缘滑出，用于承载更多内容。

## 基础用法

```vue preview
<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button>打开抽屉</Button>
    </DrawerTrigger>
    <DrawerContent position="right">
      <DrawerBody>
        <h3>抽屉内容</h3>
        <p>这是抽屉的内容区域</p>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
</template>

<script setup>
import { Drawer, DrawerTrigger, DrawerContent, DrawerBody, Button } from '../../src/components'
</script>
```

## API

### DrawerContent Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| position | 位置 | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` |
| size | 尺寸 | `'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` |
| title | 标题 | `string` | - |
| description | 描述 | `string` | - |
| showCloseButton | 显示关闭按钮 | `boolean` | `true` |
