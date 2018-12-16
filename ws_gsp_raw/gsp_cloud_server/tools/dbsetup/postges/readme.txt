Windows系统：
1.如果安装.Net Core SDK的环境直接点击运行createdb-win.cmd，但是要求NetCore SDK的版本为2.1.401；

Linux系统：
1.如果安装.Net Core SDK且版本为2.1.401，打开命令窗口运行：./createdb-linux.sh或者sh createdb-linux.sh；

功能说明：
[1]、新建数据库实例执行SQL脚本
     默认使用postgres账号登录数据库，然后根据输入的数据库名称和账号名称进行创建database和user，默认schema名称和user名称一致

[2]、使用已有的数据库实例和账号执行SQL脚本
     根据提示输入已有的数据库和账号，需要保证账号具有superuser权限。连接成功后会检测当前数据库中是否包含和user名称一致的schema
     如果包含，则先删后增进行初始，如果不包含，则创建后再进行初始

[3]、注册数据库实例
     更新main.json中的数据库连接信息和ecpdbconnection表中su连接信息为当前库

注意：注册新的数据库实例后需要清理Redis缓存后才能生效