# ArticleCard 文章卡片

文章卡片用于博客文章列表展示。

## 基础用法

```vue preview
<template>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
    <ArticleCard
      title="使用 React 构建现代化博客"
      excerpt="本文将介绍如何使用 React 和 TypeScript 构建一个功能完整的博客系统..."
      coverImage="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
      category="教程"
      author="张三"
      date="2024-01-15"
    />
    <ArticleCard
      title="CSS 动画实战技巧"
      excerpt="深入探讨 CSS 动画的各种技巧..."
      coverImage="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=200&fit=crop"
      category="CSS"
      author="李四"
      date="2024-01-10"
    />
  </div>
</template>

<script setup>
import { ArticleCard } from '../../src/components'
</script>
```

## 紧凑模式

```vue preview
<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <ArticleCard
      variant="compact"
      title="JavaScript 性能优化"
      coverImage="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=200&fit=crop"
      date="2024-01-08"
    />
    <ArticleCard
      variant="compact"
      title="Node.js 最佳实践"
      coverImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop"
      date="2024-01-05"
    />
  </div>
</template>

<script setup>
import { ArticleCard } from '../../src/components'
</script>
```

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 变体 | `'default' \| 'horizontal' \| 'featured' \| 'compact'` | `'default'` |
| title | 标题 | `string` | - |
| excerpt | 摘要 | `string` | - |
| coverImage | 封面图 | `string` | - |
| category | 分类 | `string` | - |
| author | 作者 | `string` | - |
| authorAvatar | 作者头像 | `string` | - |
| date | 日期 | `string` | - |
| tags | 标签 | `ReactNode` | - |
| href | 链接 | `string` | - |
