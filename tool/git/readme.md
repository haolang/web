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
>.git 文件保护git提交信息，基本流程为下载github .git文件夹，拷贝.git文件夹到解压缩目录

# webstorm 上传代码到gitee
[参考链接](https://www.jianshu.com/p/1f1e29ea7660)
