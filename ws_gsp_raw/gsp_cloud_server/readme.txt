Windows系统：
点击运行startup-win.cmd，但是要求NetCore SDK的版本为2.1.401；


Linux系统：
打开命令窗口运行：./startup-linux.sh或者sh startup-linux.sh；


说明：
通过传入命令来支持启动那种协议，默认都启用
启动IPv4：dotnet Inspur.Ecp.Caf.Communication.Service.dll ipv4
启动IPv6：dotnet Inspur.Ecp.Caf.Communication.Service.dll ipv6

版本：
2.1.401