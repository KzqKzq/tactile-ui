import { useState } from 'react';
import './styles/global.css';
import './App.css';

// Import all components
import {
  Button,
  Switch,
  Slider,
  Checkbox,
  RadioGroup,
  RadioItem,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Progress,
  CircularProgress,
  SimpleTooltip,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Badge,
  Avatar,
  AvatarGroup,
  Alert,
  Separator,
  Skeleton,
  SkeletonUser,
  SkeletonCard,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Spinner,
  DotsSpinner,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerBody,
  DrawerFooter as DrawerFoot,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DatePicker,
  // Blog components
  ToastProvider,
  useToast,
  ScrollArea,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Tag,
  TagGroup,
  Pagination,
  ArticleCard,
} from './components';

// Icons for Toggle demo
const BoldIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
  </svg>
);

const ItalicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
  </svg>
);

const UnderlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
  </svg>
);

// Icons for DropdownMenu demo
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LogOutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

// Toast demo component
function ToastDemo() {
  const { addToast } = useToast();

  return (
    <div className="demo-row">
      <Button onClick={() => addToast({ title: '操作成功', description: '文章已保存', variant: 'success' })}>
        成功提示
      </Button>
      <Button variant="secondary" onClick={() => addToast({ title: '提示信息', description: '这是一条信息提示', variant: 'info' })}>
        信息提示
      </Button>
      <Button variant="danger" onClick={() => addToast({ title: '操作失败', description: '请检查网络连接', variant: 'error' })}>
        错误提示
      </Button>
    </div>
  );
}

function App() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [progressValue, setProgressValue] = useState(65);
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(true);
  const [selectValue, setSelectValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Smartisan UI</h1>
          <p className="app-subtitle">高度拟物化组件库 · Skeuomorphic Component Library</p>
        </div>
      </header>

      <main className="app-main">
        {/* Button Section */}
        <section className="section">
          <h2 className="section-title">Button 按钮</h2>
          <p className="section-desc">具有3D按压效果的拟物化按钮</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Variants 变体</h3>
                <div className="demo-row">
                  <Button>Default</Button>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Sizes 尺寸</h3>
                <div className="demo-row">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">States 状态</h3>
                <div className="demo-row">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Badge Section */}
        <section className="section">
          <h2 className="section-title">Badge 徽章</h2>
          <p className="section-desc">状态标签和通知指示器</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Variants 变体</h3>
                <div className="demo-row">
                  <Badge>Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Sizes & Dot 尺寸与圆点</h3>
                <div className="demo-row">
                  <Badge size="sm">Small</Badge>
                  <Badge>Medium</Badge>
                  <Badge size="lg">Large</Badge>
                  <Badge variant="primary" dot />
                  <Badge variant="success" dot pulse />
                  <Badge variant="error" dot />
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Avatar Section */}
        <section className="section">
          <h2 className="section-title">Avatar 头像</h2>
          <p className="section-desc">用户头像与状态指示器</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Sizes & Fallback 尺寸与默认</h3>
                <div className="demo-row">
                  <Avatar size="xs" fallback="XS" />
                  <Avatar size="sm" fallback="SM" />
                  <Avatar fallback="MD" />
                  <Avatar size="lg" fallback="LG" />
                  <Avatar size="xl" fallback="XL" />
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Status 状态指示</h3>
                <div className="demo-row">
                  <Avatar fallback="在线" status="online" />
                  <Avatar fallback="离开" status="away" />
                  <Avatar fallback="忙碌" status="busy" />
                  <Avatar fallback="离线" status="offline" />
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Group 头像组</h3>
                <AvatarGroup max={4}>
                  <Avatar fallback="A" />
                  <Avatar fallback="B" />
                  <Avatar fallback="C" />
                  <Avatar fallback="D" />
                  <Avatar fallback="E" />
                  <Avatar fallback="F" />
                </AvatarGroup>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Alert Section */}
        <section className="section">
          <h2 className="section-title">Alert 警告提示</h2>
          <p className="section-desc">全局通知与消息提示</p>

          <div className="demo-column">
            <Alert variant="info" title="信息提示">
              这是一条信息提示，用于展示一般性的信息。
            </Alert>
            <Alert variant="success" title="操作成功">
              您的更改已成功保存。
            </Alert>
            <Alert variant="warning" title="警告">
              请注意，此操作可能会影响其他设置。
            </Alert>
            {showAlert && (
              <Alert variant="error" title="错误" closable onClose={() => setShowAlert(false)}>
                发生了一个错误，请稍后重试。
              </Alert>
            )}
            <Alert variant="info" solid title="实心样式">
              这是实心背景样式的提示框。
            </Alert>
          </div>
        </section>

        {/* Switch Section */}
        <section className="section">
          <h2 className="section-title">Switch 开关</h2>
          <p className="section-desc">真实的拨动开关效果，带LED指示灯</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-row">
                <Switch
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                  label="开启通知"
                />
                <Switch size="sm" defaultChecked label="小尺寸" />
                <Switch size="lg" label="大尺寸" />
                <Switch disabled label="禁用状态" />
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Toggle Section */}
        <section className="section">
          <h2 className="section-title">Toggle 切换按钮</h2>
          <p className="section-desc">可切换状态的按钮与按钮组</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Single Toggle 单个切换</h3>
                <div className="demo-row">
                  <Toggle icon={<BoldIcon />} />
                  <Toggle icon={<ItalicIcon />} defaultPressed />
                  <Toggle label="开启" />
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Toggle Group 切换组</h3>
                <ToggleGroup type="multiple" defaultValue={['bold']}>
                  <ToggleGroupItem value="bold" icon={<BoldIcon />} />
                  <ToggleGroupItem value="italic" icon={<ItalicIcon />} />
                  <ToggleGroupItem value="underline" icon={<UnderlineIcon />} />
                </ToggleGroup>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Slider Section */}
        <section className="section">
          <h2 className="section-title">Slider 滑块</h2>
          <p className="section-desc">金属质感轨道和3D旋钮</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-column">
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  label="音量控制"
                  showValue
                  formatValue={(v) => `${v}%`}
                />
                <Slider
                  defaultValue={[30]}
                  label="亮度"
                  showValue
                  variant="success"
                />
                <Slider size="lg" defaultValue={[75]} />
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Checkbox & Radio Section */}
        <section className="section">
          <h2 className="section-title">Checkbox & Radio 复选框与单选框</h2>
          <p className="section-desc">内凹式复选框和LED指示单选按钮</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Checkbox 复选框</h3>
                <div className="demo-column">
                  <Checkbox
                    checked={checkboxChecked}
                    onCheckedChange={(checked) => setCheckboxChecked(checked as boolean)}
                    label="同意用户协议"
                  />
                  <Checkbox defaultChecked label="记住登录状态" />
                  <Checkbox disabled label="禁用选项" />
                  <Checkbox
                    label="订阅新闻邮件"
                    description="每周接收产品更新和优惠信息"
                  />
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Radio 单选框</h3>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                  <RadioItem value="option1" label="选项一" />
                  <RadioItem value="option2" label="选项二" />
                  <RadioItem value="option3" label="选项三" description="带有描述文字" />
                  <RadioItem value="option4" label="禁用选项" disabled />
                </RadioGroup>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Input Section */}
        <section className="section">
          <h2 className="section-title">Input 输入框</h2>
          <p className="section-desc">纸张质感的内凹输入区域</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-column">
                <Input
                  label="用户名"
                  placeholder="请输入用户名"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="邮箱"
                  type="email"
                  placeholder="example@smartisan.com"
                  helperText="我们不会分享您的邮箱地址"
                />
                <Input
                  label="密码"
                  type="password"
                  placeholder="请输入密码"
                  state="error"
                  helperText="密码长度至少为8位"
                />
                <Textarea
                  label="个人简介"
                  placeholder="介绍一下自己..."
                  rows={3}
                />
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Separator Section */}
        <section className="section">
          <h2 className="section-title">Separator 分隔线</h2>
          <p className="section-desc">3D凹槽效果的分隔线</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-column">
                <p>上方内容</p>
                <Separator spacing="md" />
                <p>下方内容</p>
                <Separator spacing="md" label="或者" />
                <p>带标签的分隔线</p>
                <Separator spacing="md" variant="dashed" />
                <p>虚线样式</p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Skeleton Section */}
        <section className="section">
          <h2 className="section-title">Skeleton 骨架屏</h2>
          <p className="section-desc">内容加载占位符</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Basic 基础</h3>
                <div className="demo-column">
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="60%" />
                </div>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">User 用户</h3>
                <SkeletonUser />
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Card 卡片</h3>
                <SkeletonCard showImage={false} />
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Card Section */}
        <section className="section">
          <h2 className="section-title">Card 卡片</h2>
          <p className="section-desc">多种变体的容器组件</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardHeader title="浮起卡片" subtitle="Raised variant" />
              <CardBody>
                <p>这是一个具有阴影效果的浮起卡片，模拟纸张悬浮效果。</p>
              </CardBody>
              <CardFooter>
                <Button size="sm" variant="ghost">取消</Button>
                <Button size="sm" variant="primary">确认</Button>
              </CardFooter>
            </Card>

            <Card variant="inset">
              <CardHeader title="内凹卡片" subtitle="Inset variant" />
              <CardBody>
                <p>这是一个内凹效果的卡片，模拟表面凹陷。</p>
              </CardBody>
            </Card>

            <Card variant="glass">
              <CardHeader title="玻璃卡片" subtitle="Glass variant" />
              <CardBody>
                <p>这是一个毛玻璃效果的卡片，带有模糊背景。</p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Dialog Section */}
        <section className="section">
          <h2 className="section-title">Dialog 对话框</h2>
          <p className="section-desc">模态对话框与毛玻璃背景</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-row">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>打开对话框</Button>
                  </DialogTrigger>
                  <DialogContent title="确认操作" description="这是一个示例对话框">
                    <DialogBody>
                      <p>您确定要执行此操作吗？此操作无法撤销。</p>
                    </DialogBody>
                    <DialogFooter>
                      <Button variant="ghost">取消</Button>
                      <Button variant="primary">确认</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="primary">大尺寸对话框</Button>
                  </DialogTrigger>
                  <DialogContent title="设置" size="lg">
                    <DialogBody>
                      <div className="demo-column">
                        <Switch label="开启深色模式" />
                        <Switch label="开启通知" defaultChecked />
                        <Slider label="音量" showValue defaultValue={[70]} />
                      </div>
                    </DialogBody>
                    <DialogFooter>
                      <Button variant="ghost">取消</Button>
                      <Button variant="primary">保存</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Tabs Section */}
        <section className="section">
          <h2 className="section-title">Tabs 标签页</h2>
          <p className="section-desc">多种样式的标签页切换</p>

          <div className="demo-column">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Default 默认样式</h3>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">概览</TabsTrigger>
                    <TabsTrigger value="tab2">详情</TabsTrigger>
                    <TabsTrigger value="tab3">设置</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <p>这是概览标签页的内容。</p>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <p>这是详情标签页的内容。</p>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <p>这是设置标签页的内容。</p>
                  </TabsContent>
                </Tabs>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Pills 胶囊样式</h3>
                <Tabs defaultValue="tab1" variant="pills">
                  <TabsList>
                    <TabsTrigger value="tab1">首页</TabsTrigger>
                    <TabsTrigger value="tab2">消息</TabsTrigger>
                    <TabsTrigger value="tab3">我的</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Progress Section */}
        <section className="section">
          <h2 className="section-title">Progress 进度条</h2>
          <p className="section-desc">金属质感进度指示器</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-column">
                <Progress
                  value={progressValue}
                  label="下载进度"
                  showValue
                />
                <Progress value={80} variant="success" label="上传完成" showValue />
                <Progress value={45} variant="warning" size="lg" />
                <Progress indeterminate label="正在加载..." />

                <div className="demo-row" style={{ marginTop: '1rem' }}>
                  <CircularProgress value={progressValue} />
                  <CircularProgress value={85} size={60} strokeWidth={6} />
                  <Button
                    size="sm"
                    onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
                  >
                    +10%
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Tooltip Section */}
        <section className="section">
          <h2 className="section-title">Tooltip 工具提示</h2>
          <p className="section-desc">悬浮提示卡片</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-row">
                <SimpleTooltip content="这是默认样式的提示">
                  <Button>默认提示</Button>
                </SimpleTooltip>
                <SimpleTooltip content="深色背景提示" variant="dark">
                  <Button>深色提示</Button>
                </SimpleTooltip>
                <SimpleTooltip content="强调色提示" variant="accent">
                  <Button variant="primary">强调色提示</Button>
                </SimpleTooltip>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Select Section */}
        <section className="section">
          <h2 className="section-title">Select 下拉选择</h2>
          <p className="section-desc">拟物化下拉选择器</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Basic 基础</h3>
                <Select value={selectValue} onValueChange={setSelectValue}>
                  <SelectTrigger placeholder="请选择城市" />
                  <SelectContent>
                    <SelectItem value="beijing">北京</SelectItem>
                    <SelectItem value="shanghai">上海</SelectItem>
                    <SelectItem value="guangzhou">广州</SelectItem>
                    <SelectItem value="shenzhen">深圳</SelectItem>
                  </SelectContent>
                </Select>
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">With Label 带标签</h3>
                <Select>
                  <SelectTrigger label="选择语言" placeholder="请选择" required />
                  <SelectContent>
                    <SelectItem value="zh">中文</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Spinner Section */}
        <section className="section">
          <h2 className="section-title">Spinner 加载指示器</h2>
          <p className="section-desc">旋转加载动画</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-row">
                <Spinner size="xs" />
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
              <div className="demo-row" style={{ marginTop: '1rem' }}>
                <DotsSpinner size="sm" />
                <DotsSpinner />
                <DotsSpinner size="lg" />
              </div>
            </CardBody>
          </Card>
        </section>

        {/* DropdownMenu Section */}
        <section className="section">
          <h2 className="section-title">DropdownMenu 下拉菜单</h2>
          <p className="section-desc">上下文操作菜单</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-row">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>打开菜单</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem icon={<UserIcon />}>
                      个人资料
                    </DropdownMenuItem>
                    <DropdownMenuItem icon={<SettingsIcon />}>
                      设置
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem icon={<LogOutIcon />} danger>
                      退出登录
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* DatePicker Section */}
        <section className="section">
          <h2 className="section-title">DatePicker 日期选择器</h2>
          <p className="section-desc">日历形式的日期选择</p>

          <div className="demo-grid">
            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">Basic 基础</h3>
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="选择日期"
                />
              </CardBody>
            </Card>

            <Card variant="raised">
              <CardBody>
                <h3 className="demo-title">With Label 带标签</h3>
                <DatePicker
                  label="出生日期"
                  placeholder="选择日期"
                  required
                />
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Drawer Section */}
        <section className="section">
          <h2 className="section-title">Drawer 抽屉</h2>
          <p className="section-desc">侧滑抽屉面板</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-row">
                <Drawer position="right">
                  <DrawerTrigger asChild>
                    <Button>右侧抽屉</Button>
                  </DrawerTrigger>
                  <DrawerContent title="抽屉标题" description="这是一个右侧滑出的抽屉面板">
                    <DrawerBody>
                      <div className="demo-column">
                        <Input label="姓名" placeholder="请输入姓名" />
                        <Input label="邮箱" placeholder="请输入邮箱" type="email" />
                        <Switch label="订阅通知" />
                      </div>
                    </DrawerBody>
                    <DrawerFoot>
                      <Button variant="ghost">取消</Button>
                      <Button variant="primary">保存</Button>
                    </DrawerFoot>
                  </DrawerContent>
                </Drawer>

                <Drawer position="left">
                  <DrawerTrigger asChild>
                    <Button variant="secondary">左侧抽屉</Button>
                  </DrawerTrigger>
                  <DrawerContent title="导航菜单">
                    <DrawerBody>
                      <div className="demo-column">
                        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>首页</Button>
                        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>产品</Button>
                        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>关于我们</Button>
                        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>联系我们</Button>
                      </div>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>

                <Drawer position="bottom">
                  <DrawerTrigger asChild>
                    <Button variant="secondary">底部抽屉</Button>
                  </DrawerTrigger>
                  <DrawerContent title="选择操作">
                    <DrawerBody>
                      <div className="demo-row">
                        <Button>分享</Button>
                        <Button>收藏</Button>
                        <Button>下载</Button>
                      </div>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Accordion Section */}
        <section className="section">
          <h2 className="section-title">Accordion 手风琴</h2>
          <p className="section-desc">可折叠内容面板</p>

          <Card variant="raised">
            <CardBody>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>什么是 Smartisan UI？</AccordionTrigger>
                  <AccordionContent>
                    Smartisan UI 是一个高度拟物化的 UI 组件库，灵感来自锤子科技的设计风格。
                    它基于 RadixUI 构建，提供了完整的可访问性支持。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>如何开始使用？</AccordionTrigger>
                  <AccordionContent>
                    只需要在项目中导入组件即可使用。所有组件都支持 TypeScript，
                    并提供了丰富的自定义选项。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>支持哪些浏览器？</AccordionTrigger>
                  <AccordionContent>
                    支持所有现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。
                    毛玻璃效果在不支持 backdrop-filter 的浏览器中会优雅降级。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </section>

        {/* Blog Components Section */}
        <section className="section">
          <h2 className="section-title">📝 博客组件</h2>
          <p className="section-desc">专为博客场景设计的组件</p>
        </section>

        {/* Toast Section */}
        <section className="section">
          <h2 className="section-title">Toast 消息提示</h2>
          <p className="section-desc">操作反馈提示消息</p>

          <Card variant="raised">
            <CardBody>
              <ToastDemo />
            </CardBody>
          </Card>
        </section>

        {/* Tag Section */}
        <section className="section">
          <h2 className="section-title">Tag 标签</h2>
          <p className="section-desc">文章分类和标签</p>

          <Card variant="raised">
            <CardBody>
              <TagGroup>
                <Tag showIcon>React</Tag>
                <Tag showIcon>TypeScript</Tag>
                <Tag showIcon variant="primary">前端开发</Tag>
                <Tag showIcon variant="solid">热门</Tag>
                <Tag showIcon count={42}>JavaScript</Tag>
                <Tag size="sm">小标签</Tag>
                <Tag size="lg" variant="primary">大标签</Tag>
              </TagGroup>
            </CardBody>
          </Card>
        </section>

        {/* Pagination Section */}
        <section className="section">
          <h2 className="section-title">Pagination 分页</h2>
          <p className="section-desc">文章列表分页导航</p>

          <Card variant="raised">
            <CardBody>
              <div className="demo-column" style={{ gap: '2rem' }}>
                <div>
                  <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--smt-text-secondary)' }}>完整分页</h4>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={20}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* ArticleCard Section */}
        <section className="section">
          <h2 className="section-title">ArticleCard 文章卡片</h2>
          <p className="section-desc">博客文章展示卡片</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            <ArticleCard
              title="使用 React 构建现代化博客系统"
              excerpt="本文将介绍如何使用 React 和 TypeScript 构建一个功能完整的博客系统，包括文章管理、评论系统等功能..."
              coverImage="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
              category="教程"
              author="张三"
              date="2024-01-15"
              tags={
                <TagGroup>
                  <Tag size="sm">React</Tag>
                  <Tag size="sm">TypeScript</Tag>
                </TagGroup>
              }
            />
            <ArticleCard
              title="CSS 动画实战技巧"
              excerpt="深入探讨 CSS 动画的各种技巧，从基础过渡到高级关键帧动画，让你的网页更加生动..."
              coverImage="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop"
              category="CSS"
              author="李四"
              date="2024-01-10"
            />
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--smt-text-secondary)' }}>紧凑模式</h4>
            <div className="demo-column" style={{ gap: '0.75rem' }}>
              <ArticleCard
                variant="compact"
                title="JavaScript 性能优化指南"
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
          </div>
        </section>

        {/* ScrollArea Section */}
        <section className="section">
          <h2 className="section-title">ScrollArea 滚动区域</h2>
          <p className="section-desc">自定义滚动条样式</p>

          <Card variant="raised">
            <CardBody>
              <ScrollArea style={{ height: 200 }}>
                <div style={{ padding: '1rem' }}>
                  {Array.from({ length: 20 }, (_, i) => (
                    <p key={i} style={{ marginBottom: '0.5rem' }}>
                      这是第 {i + 1} 行内容，用于演示滚动区域的效果。
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </CardBody>
          </Card>
        </section>

        {/* Collapsible Section */}
        <section className="section">
          <h2 className="section-title">Collapsible 折叠面板</h2>
          <p className="section-desc">可展开收起的内容区域</p>

          <Card variant="raised">
            <CardBody>
              <Collapsible>
                <CollapsibleTrigger>文章目录</CollapsibleTrigger>
                <CollapsibleContent>
                  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                    <li>1. 介绍</li>
                    <li>2. 安装和配置</li>
                    <li>3. 基础用法</li>
                    <li>4. 高级特性</li>
                    <li>5. 最佳实践</li>
                    <li>6. 常见问题</li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </CardBody>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Smartisan UI · 拟物化组件库</p>
        <p className="footer-sub">Inspired by Smartisan OS · Built with RadixUI · 共 32 个组件</p>
      </footer>
    </div>
  );
}

// Wrap App with ToastProvider
function AppWithProviders() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}

export default AppWithProviders;

