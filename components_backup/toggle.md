# Toggle 切换按钮

切换按钮用于二选一或多选一的状态切换。

## 基础用法

```vue preview
<template>
  <div class="component-showcase">
    <Toggle aria-label="Toggle italic">
      <span style="font-style: italic; font-weight: bold;">I</span>
    </Toggle>
  </div>
</template>

<script setup>
import { Toggle } from '../../src/components'
</script>
```

## 切换组 (单选)

```vue preview
<template>
  <ToggleGroup type="single" defaultValue="left">
    <ToggleGroupItem value="left" aria-label="Left aligned">
      左对齐
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Center aligned">
      居中
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Right aligned">
      右对齐
    </ToggleGroupItem>
  </ToggleGroup>
</template>

<script setup>
import { ToggleGroup, ToggleGroupItem } from '../../src/components'
</script>
```

## 切换组 (多选)

```vue preview
<template>
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Bold">
      <strong>B</strong>
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Italic">
      <em>I</em>
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Underline">
      <u>U</u>
    </ToggleGroupItem>
  </ToggleGroup>
</template>

<script setup>
import { ToggleGroup, ToggleGroupItem } from '../../src/components'
</script>
```

## API

### Toggle Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| pressed | 是否按下 | `boolean` | - |
| defaultPressed | 默认按下 | `boolean` | `false` |
| onPressedChange | 状态改变回调 | `(pressed: boolean) => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| variant | 变体 | `'default' \| 'outline'` | `'default'` |

### ToggleGroup Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 类型 | `'single' \| 'multiple'` | `'single'` |
| value | 选中值 | `string \| string[]` | - |
| defaultValue | 默认选中值 | `string \| string[]` | - |
| onValueChange | 改变回调 | `(value: string \| string[]) => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| variant | 变体 | `'default' \| 'outline'` | `'default'` |
