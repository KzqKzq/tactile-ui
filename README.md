
<div align="right">
  <strong>English</strong> | <a href="./README.zh-CN.md">简体中文</a>
</div>

<h1 align="center">
  <img src="https://raw.githubusercontent.com/KzqKzq/tactile-ui/main/docs_site/docs/public/logo.svg" alt="Tactile UI Logo" width="120">
  <br>
  Tactile UI
</h1>

<p align="center">
  <strong>A skeuomorphic React component library focusing on tactile experience</strong>
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
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#documentation">Documentation</a>
</p>

---

## 🎨 Features

- **Skeuomorphic Design**: Carefully tuned shadows, textures, and lighting effects to restore tactile realism.
- **Modern Tech Stack**: Built with React 19 and Radix UI.
- **Type Safe**: Written entirely in TypeScript for an excellent developer experience.
- **Ready to Use**: Provides 30+ common components covering most business scenarios.
- **Dark Mode**: Built-in dark mode support that automatically adapts to system themes.

## 📦 Installation

Install using your preferred package manager:

```bash
# npm
npm install @kzqkzq/tactile-ui

# pnpm
pnpm add @kzqkzq/tactile-ui

# yarn
yarn add @kzqkzq/tactile-ui
```

## 🚀 Quick Start

1. Import style file (recommended at the entry point of your project):

```tsx
import '@kzqkzq/tactile-ui/style.css';
```

2. Use components:

```tsx
import { Button, Card, CardBody } from '@kzqkzq/tactile-ui';

function App() {
  return (
    <Card>
      <CardBody>
        <h2>Hello, Tactile UI!</h2>
        <Button variant="primary">Click Me</Button>
      </CardBody>
    </Card>
  );
}
```

## 📖 Documentation

For full documentation, please refer to the `docs_site` directory in our project, or visit our [Online Documentation](https://kzqkzq.github.io/tactile-ui/).

Running documentation locally:

```bash
cd docs_site
pnpm install
pnpm dev
```

## 🤝 Contributing

Contributions via Issues and Pull Requests are welcome!

## 📄 License

This project is licensed under the [MIT License](LICENSE).
