
<div align="right">
  <a href="./README.md">English</a> | <strong>简体中文</strong>
</div>

<h1 align="center">
  <img src="https://raw.githubusercontent.com/KzqKzq/tactile-ui/main/docs_site/docs/public/logo.svg" alt="Tactile UI Logo" width="120">
  <br>
  Tactile UI
</h1>

<p align="center">
  <strong>一款注重触感与真实体验的拟物化 React 组件库</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@kzqkzq/tactile-ui">
    <img src="https://img.shields.io/npm/v/@kzqkzq/tactile-ui?style=flat-square&color=c1272d" alt="npm version">
  </a>
  <a href="https://github.com/KzqKzq/tactile-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@kzqkzq/tactile-ui?style=flat-square" alt="license">
  </a>
  <a href="https://github.com/KzqKzq/tactile-ui">
    <img src="https://img.shields.io/github/stars/KzqKzq/tactile-ui?style=flat-square" alt="stars">
  </a>
</p>

<p align="center">
  <a href="#特性">特性</a> •
  <a href="#安装">安装</a> •
  <a href="#快速上手">快速上手</a> •
  <a href="#文档">文档</a>
</p>

> [!IMPORTANT]
> **免责声明**：本项目仅供个人学习、测试与交流使用，请勿用于生产环境。作者不对任何因使用本项目而产生的问题承担责任。

---

## 🎨 特性

- **拟物化设计**：精心调配的阴影、纹理和光效，还原真实触感。
- **现代化技术栈**：基于 React 19 和 Radix UI 构建。
- **类型安全**：完全使用 TypeScript 编写，提供优秀的开发体验。
- **开箱即用**：提供 30+ 常用组件，覆盖大多数业务场景。
- **暗色模式**：内置暗色模式支持，自动适配系统主题。

## 📦 安装

使用你喜欢的包管理器安装：

```bash
# npm
npm install @kzqkzq/tactile-ui

# pnpm
pnpm add @kzqkzq/tactile-ui

# yarn
yarn add @kzqkzq/tactile-ui
```

## 🚀 快速上手

1. 引入样式文件（建议在项目入口处）：

```tsx
import '@kzqkzq/tactile-ui/style.css';
```

2. 使用组件：

```tsx
import { Button, Card, CardBody } from '@kzqkzq/tactile-ui';

function App() {
  return (
    <Card>
      <CardBody>
        <h2>Hello, Tactile UI!</h2>
        <Button variant="primary">点击体验</Button>
      </CardBody>
    </Card>
  );
}
```

## 📖 文档

完整文档请参考我们项目中的 `docs_site` 目录，或者覆盖查看我们的[在线文档](https://kzqkzq.github.io/tactile-ui/)。

本地运行文档：

```bash
cd docs_site
pnpm install
pnpm dev
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。
