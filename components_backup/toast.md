# Toast 消息提示

Toast 用于全局展示操作反馈信息。

## 基础用法

点击按钮触发不同类型的消息提示。

```vue preview
<template>
  <div class="component-showcase">
    <Button @click="showSuccess">成功提示</Button>
    <Button @click="showError" variant="danger">错误提示</Button>
    <Button @click="showInfo" variant="secondary">信息提示</Button>
  </div>
</template>

<script setup>
import { Button, useToast } from '../../src/components'

const { addToast } = useToast()

const showSuccess = () => {
  addToast({
    variant: 'success',
    title: '操作成功',
    description: '文章已保存'
  })
}

const showError = () => {
  addToast({
    variant: 'error',
    title: '操作失败',
    description: '请检查网络连接'
  })
}

const showInfo = () => {
  addToast({
    variant: 'info',
    title: '提示',
    description: '这是一条信息提示'
  })
}
</script>
```

## 使用方法

1. 在应用根组件包裹 `ToastProvider`
2. 使用 `useToast` hook 获取 `addToast` 方法

```tsx
// App.tsx
import { ToastProvider } from 'smartisan-ui'

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  )
}
```

```tsx
// 在组件中使用
import { useToast } from 'smartisan-ui'

function MyComponent() {
  const { addToast } = useToast()
  
  const handleClick = () => {
    addToast({
      variant: 'success',
      title: '成功',
      description: '操作已完成'
    })
  }
}
```

## API

### ToastProvider Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| duration | 持续时间(ms) | `number` | `5000` |

### addToast Options

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 类型 | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` |
| title | 标题 | `string` | - |
| description | 描述 | `string` | - |
| action | 操作按钮 | `ReactNode` | - |
