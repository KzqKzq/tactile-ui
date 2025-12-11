# Dialog 对话框

对话框用于重要信息确认或需要用户关注的内容。

## 基础用法

```vue preview
<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>打开对话框</Button>
    </DialogTrigger>
    <DialogContent title="对话框标题">
      <DialogBody>
        这是对话框的内容区域，可以放置任意内容。
      </DialogBody>
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="ghost">取消</Button>
        </DialogClose>
        <Button variant="primary">确定</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogTrigger, DialogContent, DialogBody, DialogFooter, DialogClose, Button } from '../../src/components'
</script>
```

## API

### DialogContent Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题 | `string` | - |
| description | 描述 | `string` | - |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| showCloseButton | 显示关闭按钮 | `boolean` | `true` |
