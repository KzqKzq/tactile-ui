# Avatar 头像

头像用于展示用户头像或图标。

## 基础用法

```vue preview
<template>
  <div class="component-showcase">
    <Avatar src="https://i.pravatar.cc/100?u=1" />
    <Avatar src="https://i.pravatar.cc/100?u=2" />
    <Avatar fallback="张" />
    <Avatar fallback="李" />
  </div>
</template>

<script setup>
import { Avatar } from '../../src/components'
</script>
```

## 尺寸和形状

```vue preview
<template>
  <div class="component-showcase">
    <Avatar src="https://i.pravatar.cc/100?u=3" size="sm" />
    <Avatar src="https://i.pravatar.cc/100?u=3" size="md" />
    <Avatar src="https://i.pravatar.cc/100?u=3" size="lg" />
    <Avatar src="https://i.pravatar.cc/100?u=3" size="xl" />
    <Avatar src="https://i.pravatar.cc/100?u=3" shape="square" />
  </div>
</template>

<script setup>
import { Avatar } from '../../src/components'
</script>
```

## 头像组

```vue preview
<template>
  <AvatarGroup max="3">
    <Avatar src="https://i.pravatar.cc/100?u=1" />
    <Avatar src="https://i.pravatar.cc/100?u=2" />
    <Avatar src="https://i.pravatar.cc/100?u=3" />
    <Avatar src="https://i.pravatar.cc/100?u=4" />
    <Avatar src="https://i.pravatar.cc/100?u=5" />
  </AvatarGroup>
</template>

<script setup>
import { Avatar, AvatarGroup } from '../../src/components'
</script>
```

## API

### Avatar Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| src | 图片地址 | `string` | - |
| alt | 替代文本 | `string` | - |
| fallback | 后备内容 | `string` | - |
| size | 尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| shape | 形状 | `'circle' \| 'square'` | `'circle'` |
| status | 状态 | `'online' \| 'offline' \| 'busy' \| 'away'` | - |
| bordered | 是否有边框 | `boolean` | `false` |
