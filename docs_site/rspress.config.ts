import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';

const enablePreview = process.env.RSPRESS_PREVIEW === 'true';

export default defineConfig({
    root: 'docs',
    plugins: enablePreview
        ? [
              pluginPreview({
                  defaultRenderMode: 'pure',
              }),
          ]
        : [],
    markdown: {
        mdxRs: false,
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/components/' },
        ],
        sidebar: {
            '/': [
                { text: '快速开始', link: '/' },
                { text: '组件索引', link: '/components/' },
                {
                    text: '组件',
                    items: [
                        { text: 'Accordion 手风琴', link: '/components/accordion' },
                        { text: 'Alert 警告', link: '/components/alert' },
                        { text: 'ArticleCard 文章卡片', link: '/components/articlecard' },
                        { text: 'AspectRatio 比例容器', link: '/components/aspectratio' },
                        { text: 'Avatar 头像', link: '/components/avatar' },
                        { text: 'Badge 徽标', link: '/components/badge' },
                        { text: 'Card 卡片', link: '/components/card' },
                        { text: 'Checkbox 复选框', link: '/components/checkbox' },
                        { text: 'Collapsible 折叠面板', link: '/components/collapsible' },
                        { text: 'ContextMenu 右键菜单', link: '/components/contextmenu' },
                        { text: 'DatePicker 日期选择', link: '/components/datepicker' },
                        { text: 'Dialog 对话框', link: '/components/dialog' },
                        { text: 'Drawer 抽屉', link: '/components/drawer' },
                        { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
                        { text: 'HoverCard 悬浮卡片', link: '/components/hovercard' },
                        { text: 'Input 输入框', link: '/components/input' },
                        { text: 'Pagination 分页', link: '/components/pagination' },
                        { text: 'Progress 进度条', link: '/components/progress' },
                        { text: 'Radio 单选框', link: '/components/radio' },
                        { text: 'ScrollArea 滚动区', link: '/components/scrollarea' },
                        { text: 'Select 选择器', link: '/components/select' },
                        { text: 'Separator 分割线', link: '/components/separator' },
                        { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
                        { text: 'Slider 滑块', link: '/components/slider' },
                        { text: 'Spinner 加载', link: '/components/spinner' },
                        { text: 'Switch 开关', link: '/components/switch' },
                        { text: 'Tabs 选项卡', link: '/components/tabs' },
                        { text: 'Tag 标签', link: '/components/tag' },
                        { text: 'Toast 提示', link: '/components/toast' },
                        { text: 'Toggle 切换按钮', link: '/components/toggle' },
                        { text: 'Tooltip 提示气泡', link: '/components/tooltip' },
                    ],
                },
            ],
        },
    },
});
