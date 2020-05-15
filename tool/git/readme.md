# github 下载的zip文件如何同步

[参考链接](https://www.zhihu.com/question/53072606/answer/954857791)
github 上下载的 zip 压缩包是不带 .git 目录的,git clone --bare 命令创建这个 .git 目录
zip 解压缩目录：D:\github\junit5-master
```shell script
mv .\junit5-master\* junit5
mv .\junit5-master\* junit5
cd junit5
git init
```

