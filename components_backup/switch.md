# Switch 开关

开关用于切换单个选项的启用/禁用状态。

## 基础用法

```vue preview
<template>
  <div class="component-showcase-vertical">
    <Switch />
    <Switch label="启用通知" />
    <Switch label="深色模式" :defaultChecked="true" />
  </div>
</template>

<script setup>
import { Switch } from '../../src/components'
</script>
```

## 尺寸

```vue preview
<template>
  <div class="component-showcase">
    <Switch size="sm" label="小" />
    <Switch size="md" label="默认" />
    <Switch size="lg" label="大" />
  </div>
</template>

<script setup>
import { Switch } from '../../src/components'
</script>
```

## 禁用状态

```vue preview
<template>
  <div class="component-showcase">
    <Switch disabled label="禁用未选中" />
    <Switch disabled :defaultChecked="true" label="禁用已选中" />
  </div>
</template>

<script setup>
import { Switch } from '../../src/components'
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked | 是否选中（受控） | `boolean` | - |
| defaultChecked | 默认是否选中 | `boolean` | `false` |
| onCheckedChange | 状态改变回调 | `(checked: boolean) => void` | - |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| label | 标签文本 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
