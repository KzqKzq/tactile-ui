import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: 'docs',
    title: 'Tactile UI',
    description: '灵感源自 Smartisan OS 的拟物化 React 组件库',
    icon: '/logo.svg',
    logo: '/logo.svg',
    plugins: [
        pluginPreview({
            defaultRenderMode: 'preview',
        }),
    ],
    markdown: {
        mdxRs: false,
    },
    globalStyles: path.join(__dirname, 'docs', 'styles', 'custom.css'),
    themeConfig: {
        darkMode: true,
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/kzqkzq',
            },
        ],
        footer: {
            message: `Released under the MIT License. | Copyright © ${new Date().getFullYear()} KZQ. Made with ❤️`,
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/components/' },
            { 
                text: 'npm',
                link: 'https://www.npmjs.com/package/@kzqkzq/tactile-ui',
            },
        ],
        sidebar: {
            '/': [
                { text: '快速开始', link: '/' },
                { text: '组件索引', link: '/components/' },
                {
                    text: '基础组件',
                    items: [
                        { text: 'Button 按钮', link: '/components/button' },
                        { text: 'Input 输入框', link: '/components/input' },
                        { text: 'Checkbox 复选框', link: '/components/checkbox' },
                        { text: 'Radio 单选框', link: '/components/radio' },
                        { text: 'Switch 开关', link: '/components/switch' },
                        { text: 'Slider 滑块', link: '/components/slider' },
                        { text: 'Select 选择器', link: '/components/select' },
                        { text: 'DatePicker 日期选择', link: '/components/datepicker' },
                    ],
                },
                {
                    text: '展示组件',
                    items: [
                        { text: 'Card 卡片', link: '/components/card' },
                        { text: 'Avatar 头像', link: '/components/avatar' },
                        { text: 'Badge 徽标', link: '/components/badge' },
                        { text: 'Tag 标签', link: '/components/tag' },
                        { text: 'Alert 警告', link: '/components/alert' },
                        { text: 'Progress 进度条', link: '/components/progress' },
                        { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
                        { text: 'Spinner 加载', link: '/components/spinner' },
                        { text: 'Separator 分割线', link: '/components/separator' },
                    ],
                },
                {
                    text: '布局组件',
                    items: [
                        { text: 'AspectRatio 比例容器', link: '/components/aspectratio' },
                        { text: 'ScrollArea 滚动区域', link: '/components/scrollarea' },
                        { text: 'Collapsible 折叠面板', link: '/components/collapsible' },
                        { text: 'Accordion 手风琴', link: '/components/accordion' },
                        { text: 'Tabs 选项卡', link: '/components/tabs' },
                    ],
                },
                {
                    text: '覆盖层组件',
                    items: [
                        { text: 'Dialog 对话框', link: '/components/dialog' },
                        { text: 'Drawer 抽屉', link: '/components/drawer' },
                        { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
                        { text: 'ContextMenu 右键菜单', link: '/components/contextmenu' },
                        { text: 'HoverCard 悬浮卡片', link: '/components/hovercard' },
                        { text: 'Tooltip 提示气泡', link: '/components/tooltip' },
                        { text: 'Toast 提示', link: '/components/toast' },
                    ],
                },
                {
                    text: '导航组件',
                    items: [
                        { text: 'Pagination 分页', link: '/components/pagination' },
                        { text: 'Toggle 切换按钮', link: '/components/toggle' },
                    ],
                },
                {
                    text: '业务组件',
                    items: [
                        { text: 'ArticleCard 文章卡片', link: '/components/articlecard' },
                    ],
                },
            ],
        },
    },
});
