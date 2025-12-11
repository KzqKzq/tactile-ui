# DropdownMenu 下拉菜单

下拉菜单用于展示操作列表。

## 基础用法

```vue preview
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button>打开菜单</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>个人资料</DropdownMenuItem>
      <DropdownMenuItem>设置</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem danger>退出登录</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup>
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator,
  Button 
} from '../../src/components'
</script>
```

## API

### DropdownMenuItem Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| icon | 图标 | `ReactNode` | - |
| shortcut | 快捷键 | `string` | - |
| danger | 危险操作 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
