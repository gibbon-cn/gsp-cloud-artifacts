--**********************************************************************************
                             --值映射-start
--**********************************************************************************
--1.值映射定义
create table if not exists GSPValueMapping(
    ID varchar(22) not null,
    SysOrgID varchar(22) null,
    Code varchar(64) not null,
    Name varchar(128) not null,
    Description varchar(200) null,
    IsExact boolean,
    Accessibility boolean,
    DefaultStrategy int,
    DefaultValue varchar(128) null,
    IsBatchMapping boolean,
    Creator varchar(256) not null,
    CreatedTime timestamp(6) not null,
    LastModifier varchar(256) not null,
    LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPGSPValueMapping PRIMARY KEY (ID)
);
--2.值映射列
create table if not exists GSPVmColumn(
    ID varchar(22) not null,
    VmID varchar(22) not null,
    Code varchar(64) not null,
    ColText varchar(128) not null,
    DataType int,
    EditMode int,
    HelpID varchar(22) null,
    Direction int,
    HelpColumn int,
    HelpFilter varchar(8000) null,
    GroupFilter varchar(4000) null,
    Creator varchar(256) not null,
    CreatedTime timestamp(6) not null,
    LastModifier varchar(256) not null,
    LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPVmColumn PRIMARY KEY (ID)
);
--3.值映射组织关系
create table if not exists GSPVmOrgRelation(
    ID varchar(22) not null,
    VmID varchar(22) null,
    SysOrgID varchar(22) null,
    Creator varchar(256) not null,
    CreatedTime timestamp(6) not null,
    LastModifier varchar(256) not null,
    LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPVmOrgRelation PRIMARY KEY (ID)
);
--4.值映射设置列表
create table if not exists GSPVmValueList(
    ID varchar(22) not null,
    VmID varchar(22) not null,
    SrcCol01 varchar(100) null,
    SrcCol02 varchar(100) null,
    SrcCol03 varchar(100) null,
    SrcCol04 varchar(100) null,
    SrcCol05 varchar(100) null,
    SrcCol06 varchar(100) null,
    SrcCol07 varchar(100) null,
    SrcCol08 varchar(100) null,
    SrcCol09 varchar(100) null,
    SrcCol10 varchar(100) null,
    SrcColExpression text null,
    TarCol varchar(100) null,
    Creator varchar(256) not null,
    CreatedTime timestamp(6) not null,
    LastModifier varchar(256) not null,
    LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPVmValueList PRIMARY KEY (ID)
);
--5.值映射匹配未命中列表
create table if not exists GSPVmUnmatchedValues(
    ID varchar(22) not null,
    VmID varchar(22) not null,
    SrcCol01 varchar(100) null,
    SrcCol02 varchar(100) null,
    SrcCol03 varchar(100) null,
    SrcCol04 varchar(100) null,
    SrcCol05 varchar(100) null,
    SrcCol06 varchar(100) null,
    SrcCol07 varchar(100) null,
    SrcCol08 varchar(100) null,
    SrcCol09 varchar(100) null,
    SrcCol10 varchar(100) null,
    Creator varchar(256) not null,
    CreatedTime timestamp(6) not null,
    LastModifier varchar(256) not null,
    LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPVmUnmatchedValues PRIMARY KEY (ID)
);   
--**********************************************************************************
                             --值映射-end
--**********************************************************************************

--**********************************************************************************
                             --时间戳-start
--**********************************************************************************
--GSP删除记录表
create table if not exists GSPDelData(
  ID varchar(22) not null,
  TableName varchar(30) not null,
  DataID varchar(22) not null,
  ConfigKey1 varchar(1024) null,
  ConfigKey2 varchar(1024) null,
  ConfigKey3 varchar(1024) null,
  Operator varchar(256) not null,
  DeletedTime timestamp(6) not null,
  CONSTRAINT PK_GSPDelData PRIMARY KEY (ID)
);
--删除记录配置表
create table if not exists GSPDelDataConf(
  ID varchar(22) not null,
  BizObjID varchar(22)  null,
  BizEntityID varchar(22)  null,
  Description varchar(40) not null,
  DataTableName varchar(30) not null,
  IsAnnual boolean default (false),
  DelTableName varchar(30) not null,
  AnnualCol varchar(30)  null,
  EnableRecord boolean default (false),
  Creator varchar(256) not null,
  CreatedTime timestamp(6) not null,
  LastModifier varchar(256) not null,
  LastModifiedTime timestamp(6) not null,
  CONSTRAINT PK_GSPDelDataConf PRIMARY KEY (ID)
);
--删除记录字段映射表
create table if not exists GSPDelFieldMapping(
  ID varchar(22) not null,
  ConfigID varchar(22) not null,
  DataCol varchar(30) not null,
  DataColType int not null default (2),
  DelCol varchar(30) not null,
  EnableRecord boolean default (true),
  Creator varchar(256) not null,
  CreatedTime timestamp(6) not null,
  LastModifier varchar(256) not null,
  LastModifiedTime timestamp(6) not null,
  CONSTRAINT PK_GSPDelFieldMapping PRIMARY KEY (ID)
);
--**********************************************************************************
                             --时间戳-end
--**********************************************************************************


--**********************************************************************************
                             --MQ
--**********************************************************************************


create table if not exists  GSPMQChannel
(
	ID varchar(36) not null , 
	ChannelID	    varchar(50)   not null,
	BinderName	  varchar(100)  not null,
	ChannelDescr	varchar(512)   null,
	IsSys     boolean 	null,
	Status    int  	not null,
	Creator   varchar(256) not null ,
	CreatedTime  timestamp not null ,
	LastModifier  varchar(256) null ,
	LastModifiedTime  timestamp null,
	CONSTRAINT PK_GSPMQChannel PRIMARY KEY (ChannelID)
);

--支持构件  message  comp 分开
create table if not exists  GSPMQBaseHandler
(
	ID varchar(36) not null , 
	AssemblyInfo	varchar(100)  not null,	
	ClassInfo	varchar(100)  	not null,
	MethodInfo	varchar(100)  	not null,
	ExecuteType     int 	not  null,
	Creator   varchar(256) not null ,
	CreatedTime  timestamp not null , 
	LastModifier  varchar(256) null ,
	LastModifiedTime  timestamp null,
	CONSTRAINT PK_GSPMQBaseHandler PRIMARY KEY (ID)
);


create table if not exists  GSPMQFailedStrategy
(
  ID varchar(36) not null , 
	IsRetry	boolean  not null,	
	RetryTimes	int  null,
	StgType 	int  not null,
	CompensateHandlerID    varchar(22) 	null,
	EnqueueTimes  int  	 null,
	Creator   varchar(256) not null ,
	CreatedTime  timestamp not null ,
	LastModifier  varchar(256) null ,
	LastModifiedTime  timestamp null,
	CONSTRAINT PK_GSPMQFailedStrategy PRIMARY KEY (ID)
);


create table if not exists  GSPMQConsumer
(
	ID varchar(36) not null , 
	ChannelID	varchar(50)   not null,
	SuID	varchar(50)  not null,	
	SubID	varchar(50)   null,	
	BinderName	varchar(100)  	not null,
	MessageHandlerID    varchar(22) not null,
	FailedstgID   varchar(22)  	null,
	Creator   varchar(256) not null ,
	CreatedTime  timestamp not null,
	LastModifier  varchar(256) null ,
	LastModifiedTime  timestamp null,
	CONSTRAINT PK_GSPMQConsumer PRIMARY KEY (ID)
);
create unique index UDX_GSPMQConsumer_ChannelID on GSPMQConsumer(ChannelID,SuID,SubID);


create table if not exists  GSPMQPubSubRelation
(
	ID varchar(36) not null , 
	ChannelId	varchar(50)   not null,
	ConsumerId varchar(22) not null,
  RoutingKey varchar(500) null,
  Dimensions varchar(500) null,
	Creator   varchar(256) not null ,
	CreatedTime  timestamp not null ,
	LastModifier  varchar(256) null ,
	LastModifiedTime  timestamp null,
	CONSTRAINT PK_GSPMQPubSubRelation PRIMARY KEY (ID)
);
create unique index UDX_GSPMQPubSubRelation_ChannelId on GSPMQPubSubRelation(ChannelId,ConsumerId,Dimensions);



--**********************************************************************************
                             --MQ  end
--**********************************************************************************

--**********************************************************************************
                             -- 导入导出日志
--**********************************************************************************

create table if not exists  GSPIEFlowLog
(
	Id	        varchar(36)   not null,
	IERuleID	  varchar(36)   not null,
	UserID	    varchar(36)   not null,
	BeginDate   varchar(50)  null ,
    EndDate     varchar(50)  null ,
	Result     int  	    null,
    MessageInfo   varchar(500)   not null,
	Creator   varchar(256) not null ,
	CreatedTime  timestamp not null ,
	LastModifier  varchar(256) null ,
	LastModifiedTime  timestamp null,
	CONSTRAINT PK_GSPIEFlowLog PRIMARY KEY (Id)
);


create table if not exists  GSPIEFlowStepLog
(
	Id	        varchar(36)   not null,
	FlowLogID	  varchar(36)   not null,
	orderNum	  int  	    null,
	ExecuteType     int  	    null,
	BeginDate   varchar(50)  null ,
    EndDate     varchar(50)  null ,
    Result  int  	    null,
    MessageInfo   varchar(500)   not null,
    UserID varchar(36)   not null,
	Creator   varchar(256) not null ,
	CreatedTime  timestamp not null ,
	LastModifier  varchar(256) null ,
	LastModifiedTime  timestamp null,
	CONSTRAINT PK_GSPIEFlowStepLog PRIMARY KEY (Id)
);

--**********************************************************************************
                             -- 导入导出日志-end
--**********************************************************************************