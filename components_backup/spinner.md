# Spinner 加载

加载指示器用于表示正在加载中的状态。

## 圆形 Spinner

```vue preview
<template>
  <div class="component-showcase">
    <Spinner size="sm" />
    <Spinner />
    <Spinner size="lg" />
  </div>
</template>

<script setup>
import { Spinner } from '../../src/components'
</script>
```

## 点状 Spinner

```vue preview
<template>
  <div class="component-showcase">
    <DotsSpinner size="sm" />
    <DotsSpinner />
    <DotsSpinner size="lg" />
  </div>
</template>

<script setup>
import { DotsSpinner } from '../../src/components'
</script>
```

## API

### Spinner Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| color | 颜色 | `'default' \| 'primary' \| 'white'` | `'default'` |
