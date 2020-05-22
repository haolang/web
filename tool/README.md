### 新建html文件，快速创建模板
在空白html文件中输入 "!" 然后按Tab键


### 快捷键
自定义快捷键
1. 命令模式
ctrl + alt + p

### 借助paste image 插件 以github作为图床粘贴图片
- 在github和本地均可以使用**相对地址**展示图片

- paste image 插件设置如下

![2020-04-20-22-32-58.png](img/2020-04-20-22-32-58.png)
![2020-04-20-22-33-18.png](img/2020-04-20-22-33-18.png)

其他地方默认设置

- 粘贴时自动生成如下格式文本
```
![2020-04-20-22-30-44.png](img/2020-04-20-22-30-44.png)
```

![2020-04-20-22-30-44.png](img/2020-04-20-22-30-44.png)


# 在webstrom中 配置 autoprefixer 

需要修改 

// Default browsers query
在 ***npm\node_modules\autoprefixer\node_modules\browserslist 文件夹下的 index.js 文件中
browserslist.defaults = [
  '> 1%',
  'last 2 versions',
  'Firefox ESR'
]

使用命令
postcss.cmd -u autoprefixer -o F:\www\studing\web\test.css F:\www\studing\web\test.css
地址需要替换 '\' 为 '/',否则报错 **Input Error: You must pass a valid list of files to parse**
