# ContextMenu 右键菜单

在元素上右键点击时显示的菜单。

## 基础用法

```vue preview
<template>
  <ContextMenu>
    <ContextMenuTrigger class="context-menu-trigger">
      在此区域点击右键
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>返回</ContextMenuItem>
      <ContextMenuItem>前进</ContextMenuItem>
      <ContextMenuItem>重新加载</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>另存为...</ContextMenuItem>
      <ContextMenuItem>打印...</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>

<script setup>
import { 
  ContextMenu, 
  ContextMenuTrigger, 
  ContextMenuContent, 
  ContextMenuItem,
  ContextMenuSeparator
} from '../../src/components'
</script>

<style scoped>
.context-menu-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;
  border: 2px dashed rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  user-select: none;
}
</style>
```

## 多级菜单

```vue preview
<template>
  <ContextMenu>
    <ContextMenuTrigger class="context-menu-trigger">
      右键查看多级菜单
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>新建标签页</ContextMenuItem>
      <ContextMenuItem>新建窗口</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuSub>
        <ContextMenuSubTrigger>更多工具</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>保存页面</ContextMenuItem>
          <ContextMenuItem>创建快捷方式</ContextMenuItem>
          <ContextMenuItem>开发者工具</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem danger>关闭</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>

<script setup>
import { 
  ContextMenu, 
  ContextMenuTrigger, 
  ContextMenuContent, 
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent
} from '../../src/components'
</script>

<style scoped>
.context-menu-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;
  border: 2px dashed rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  user-select: none;
}
</style>
```

## API

### ContextMenuItem Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| disabled | 是否禁用 | `boolean` | `false` |
| onSelect | 选择回调 | `(event: Event) => void` | - |
| icon | 图标 | `ReactNode` | - |
| shortcut | 快捷键提示 | `string` | - |
| danger | 是否为危险操作 | `boolean` | `false` |
