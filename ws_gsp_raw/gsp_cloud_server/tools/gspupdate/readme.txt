1、更新补丁改之前，需要将补丁放至服务器下的：tools\gspupdate\data\patches目录下，然后手工关闭dotnet服务。
2、运行patchinstall.cmd脚本，启动补丁安装工具，工具启动后，会自动扫描tools\gspupdate\data\patches目录下可安装的补丁。
3、补丁更新完成后，需要手工启动dotnet服务。
4、目前补丁工具支持以下操作：
  a、删除文件
  b、修改/新增文件
  c、执行安装盘sql