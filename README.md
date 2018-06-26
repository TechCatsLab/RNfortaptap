# RNfortaptap
## gradle版本号
* gradle-3.5-all
* gradle:2.2.3
# MAC上配置React-Native-Android过程中的遇到的问题
## 命令行
1.adb
* 在环境变量配置完成后，输入`adb`后，可能会报错`adb:command not found`.这是因为没有在PATH下配置adb，具体配置方式如下：

 1. 在系统根目录下输入
 `cd /Users/a8/Library/Android/sdk/platform-tools`
在`platform-tools`下即可看到有adb文件，再输入`pwd`获取当前`platform-tools`路径，先复制好。
 2. 配置`bash_profile`
 输入`vi ~/.bash_profile`进入配置环境变量。输入i进入编辑模式，修改PATH如下：
`PATH=".;$PATH:/Users/a8/Library/Android/sdk/platform-tools:$JAVA_HOME/bin:$PATH:$NVM_DIR"`
其中`/Users/a8/Library/Android/sdk/platform-tools`就是刚我们复制好的adb所在路径，记得不同的path之间用`:`分隔.
按`ESC`退出编辑模式，再按`Shift + :`输入`wq!`保存退出
再次输入`. ~/.bash_profile`保存我们刚编辑的内容。
 3. 验证
 再次输入`adb devices`这时就不会再出现`command not found`了
## tips:
1. `adb kill-server`断开连接
2. `adb start-server`重新连接
## 效果图
<img src='http://pax19zugp.bkt.clouddn.com/taptap1.png' />
