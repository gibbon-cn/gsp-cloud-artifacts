--**********************************************************************************
                             --WF创建表
--**********************************************************************************
-- 通用属性表
create table if not exists GSPWFGeProperty 
(
    PropName varchar(100),
    PropValue varchar(100) not null,
    CONSTRAINT PK_GSPWFGeProperty PRIMARY KEY(PropName)
);

-- 二进制数据表
create table if not exists GSPWFGeByteArray 
(
    ID varchar(36) ,
    Remark varchar(2000) null,
    Bytes bytea null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFGeByteArray PRIMARY KEY(ID)
);

-- 流程定义表
create table if not exists GSPWFReProcDef
(
    ID varchar(36) ,
    TargetNamespace varchar(2000) null,
    Key varchar(200) null,
    Version int not null,
    Name varchar(100) null,
    Description varchar(2000) null,
    SuspensionState smallint not null,
	ByteArrayId varchar(36) not null,
	BizDefKey varchar(200) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFReProcDef PRIMARY KEY(ID)
);
--create unique index if not exists WFIDXREProcDef1 on WFREProcDef(DefKEY,DefVERSION,TENANTID);

-- 运行时流程实例表
create table if not exists GSPWFRuProcInst
(
    ID varchar(36) ,
    Name varchar(100) null,
    ProcessDefinitionId varchar(36) not null,
    ProcessDefinitionKey varchar(200) null,
    StartUserId varchar(36) null,
    StartActivityDefinitionId varchar(100) not null,
    StartActivityInstanceId varchar(36) not null,
	StartTime timestamp not null,
    SuperProcessInstanceId varchar(36) null,
    SuperActivityInstanceId varchar(36) null,
	BizDefKey varchar(200) null,
    BizInstId varchar(200) null,
    SuspensionState smallint not null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuProcInst PRIMARY KEY(ID)
);

-- 运行时活动实例表
create table if not exists GSPWFRuActInst 
(
    ID varchar(36) ,
    ParentID varchar(36) not null,
    ProcessDefinitionId varchar(36) not null,
    ProcessDefinitionKey varchar(200) null,
	ProcessInstanceID varchar(36) not null,
    ActivityDefinitionID varchar(100) not null,
    ActivityDefinitionName varchar(100) null,
    ActivityType varchar(100) not null,
	BizActivityID varchar(36) null,
	BizActivityName varchar(100) null,
	PreActDefID varchar(100) null,
    PreActInstID varchar(36) null,
	InTranDefID varchar(100) null,
    StartTime timestamp not null,
    IsActive boolean not null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuActInst PRIMARY KEY(ID)
);

-- 运行时工作项表
create table if not exists GSPWFRuWorkItem(
    ID varchar(36) ,
	ActivityInstanceID varchar(36) not null,
	ActivityDefinitionID varchar(36) not null,
	Name varchar(128) not null,
	ProcessInstanceID varchar(36) not null, 
	RootProcInstID varchar(36) not null, 
	ProcessDefinitionId varchar(36) not null, 
	STATE int not null,
	StartedTime timestamp not null,
	Submitter varchar(100) null,
	ProcessInstanceState int not null,
	IsActive boolean not null,	
	RefWorkItemID varchar(36) null,
	WorkItemType int null,
    BizInstId varchar(200) null,
	BizActivityID varchar(36) null,
	BizDefKey varchar(200) null,
	CompletedTime timestamp null,
	Participant varchar(100) null,
	Performer varchar(100) null,
	WorkType varchar(100) null,
	ProcInstDescription varchar(200) null,
	ActualParticipant varchar(100) null,
	Status int null,
	ParentID varchar(36) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuWorkItem PRIMARY KEY(ID)
);
--create unique index WFIDXWFRUWORKITEM1 on WFRUWORKITEM(ID,WORKITEMName);

-- 运行时转移线实例表
create table if not exists GSPWFRuTranInst 
(
    ID varchar(36) ,
    ParentID varchar(36) not null,
    ProcessDefinitionId varchar(36) not null,
    ProcessDefinitionKey varchar(200) null,
	ProcessInstanceID varchar(36) not null,
    StartTime timestamp not null,
	DestActDefID varchar(100) not null,
	DestActInstID varchar(36) null,
	SrcActDefID varchar(100) not null,
	SrcActInstID varchar(36) not null,
    IsActive boolean not null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuTranInst PRIMARY KEY(ID)
);

-- 运行时流程实例变量表
create table if not exists GSPWFRuVarProcInst(
    ID varchar(36) ,
    ProcessInstanceID varchar(36) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
    TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuVarProcInst PRIMARY KEY(ID)
);
--create unique index WFIDXRUVarProcInst1 on WFRUVarProcInst(ProcessInstanceID,VariableName);

-- 运行时活动实例变量表
create table if not exists GSPWFRuVarActInst (
    ID varchar(36) ,
    ProcessInstanceID varchar(36) not null,
    ActivityInstanceID varchar(36) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
	TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuVarActInst PRIMARY KEY(ID)
);
--create unique index WFIDXRUVarActInst1 on WFRUVarActInst(ActivityInstanceID,VariableName);

-- 运行时任务变量表
create table if not exists GSPWFRuVarTask(
    ID varchar(36) ,
	ProcessInstanceID varchar(36) not null,
	ActivityInstanceID varchar(36) not null,
	TaskID varchar(100) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
    TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuVarTask PRIMARY KEY(ID)
);
--create unique index WFIDXRUVarTask1 on WFRUVarTask(TaskID,VariableName);

-- 运行时活动静态变量表
create table if not exists GSPWFRuVarActDef(
    ID varchar(36) ,
    ProcessInstanceID varchar(36) not null,
	ActivityDefinitionID varchar(100) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
    TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFRuVarActDef PRIMARY KEY(ID)
);
--create unique index WFIDXRUVarActDef1 on WFRUVarActDef(ActivityDefinitionID,ProcessInstanceID, VariableName);

-- 历史流程实例表
create table if not exists GSPWFHiProcInst 
(
	ID varchar(36) ,
    Name varchar(100) null,
    ProcessDefinitionId varchar(36) not null,
    ProcessDefinitionKey varchar(200) null,
    StartUserId varchar(36) null,
    StartActivityDefinitionId varchar(100) not null,
    StartActivityInstanceId varchar(36) not null,
	StartTime timestamp not null,
    SuperProcessInstanceId varchar(36) null,
    SuperActivityInstanceId varchar(36) null,
	BizDefKey varchar(200) null,
    BizInstId varchar(200) null,
    EndActivityDefinitionId varchar(100) null,
    EndActivityInstanceId varchar(36) null,
    EndTime timestamp not null,
    Duration bigint not null,
	IsAborted boolean not null,
    AbortReason varchar(100) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiProcInst PRIMARY KEY(ID)
);

-- 历史活动实例表
create table if not exists GSPWFHiActInst 
(
    ID varchar(36) ,
    ParentID varchar(36) not null,
    ProcessDefinitionId varchar(36) not null,
    ProcessDefinitionKey varchar(200) null,
	ProcessInstanceID varchar(36) not null,
    ActivityDefinitionID varchar(100) not null,
    ActivityDefinitionName varchar(100) null,
    ActivityType varchar(100) not null,
	BizActivityID varchar(36) null,
	BizActivityName varchar(100) null,
	PreActDefID varchar(100) null,
    PreActInstID varchar(36) null,
   	InTranDefID varchar(100) null,
    StartTime timestamp not null,
    EndTime timestamp not null,
    Duration bigint not null,
	IsAborted boolean not null,
    AbortReason varchar(100) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiActInst PRIMARY KEY(ID)
);

--历史转移线实例表
create table if not exists GSPWFHiTranInst 
(
	ID varchar(36) ,
    ParentID varchar(36) not null,
    ProcessDefinitionId varchar(36) not null,
    ProcessDefinitionKey varchar(200) null,
	ProcessInstanceID varchar(36) not null,
    StartTime timestamp not null,
	DestActDefID varchar(100) not null,
	DestActInstID varchar(36) null,
	SrcActDefID varchar(100) not null,
	SrcActInstID varchar(36) not null,
    EndTime timestamp not null,
    Duration bigint not null,
	IsAborted boolean not null,
    AbortReason varchar(100) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiTranInst PRIMARY KEY(ID)
);

-- 历史流程实例变量表
create table if not exists GSPWFHiVarProcInst(
    ID varchar(36) ,
    ProcessInstanceID varchar(36) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
    TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiVarProcInst PRIMARY KEY(ID)
);
--create unique index WFIDXHiVarProcInst1 on WFHiVarProcInst(ProcessInstanceID,VariableName);

-- 历史活动实例变量表
create table if not exists GSPWFHiVarActInst (
    ID varchar(36) ,
    ProcessInstanceID varchar(36) not null,
	ActivityInstanceID varchar(36) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
    TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiVarActInst PRIMARY KEY(ID)
);
--create unique index WFIDXHiVarActInst1 on WFHiVarActInst(ActivityInstanceID,VariableName);

-- 历史任务变量表
create table if not exists GSPWFHiVarTask(
    ID varchar(36) ,
	ProcessInstanceID varchar(36) not null,
	ActivityInstanceID varchar(36) not null,
	TaskID varchar(100) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
	TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiVarTask PRIMARY KEY(ID)
);
--create unique index WFIDXHiVarTask1 on WFHiVarTask(TaskID,VariableName);

-- 历史活动静态变量表
create table if not exists GSPWFHiVarActDef (
    ID varchar(36) ,
    ProcessInstanceID varchar(36) not null,
	ActivityDefinitionID varchar(100) not null,
    VariableName varchar(100) not null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
	TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiVarActDef PRIMARY KEY(ID)
);
--create unique index WFIDXHiVarActDef1 on WFHiVarActDef(ActivityDefinitionID,ProcessInstanceID, VariableName);

-- 历史变量详情表
create table if not exists GSPWFHiVarDetail 
(
    ID varchar(36) ,
	Scope smallint not null,
	VariableId varchar(36) not null,
    Revision bigserial,
    VariableName varchar(100) not null,
    ProcessInstanceID varchar(36) not null,
	ActivityInstanceID varchar(36)  null,
	TaskID varchar(36)  null,
	ActivityDefinitionID varchar(100)  null,
    VariableType varchar(100) not null,
    BytesValue bytea null,
    TextValue varchar(2000) null,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
    CONSTRAINT PK_GSPWFHiVarDetail PRIMARY KEY(ID)
);
--create index WFIDXHiVarDetail1 on WFHiVarDetail(VarInstID);

CREATE TABLE if not exists GSPWFBizResourceDef
   (	
    ID varchar(36) not null, 
	DefID varchar(36) not null, 
	Code varchar(36), 
	DefType char(1) not null, 
	DefCode text not null, 
	DefName varchar(100) not null, 
	InputType char(1), 
	EnumList text, 
	SmartHelp varchar(36), 
	MultiSelect char(1), 
	HelpFilter varchar(2048) default null, 
	DevLayer varchar(2) default null, 
	IsUse varchar(2) default null, 
	ContentInfo text, 
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
	 CONSTRAINT PK_GSPWFBizResourceDef PRIMARY KEY (ID));

CREATE TABLE if not exists GSPWFProcessAssignResult
(	
	ID varchar(36) not null, 
	ProcDefKey varchar(36) not null, 
	FormKey varchar(36) not null, 
	Dimension1 varchar(36) null,
	Dimension2 varchar(36) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
	 CONSTRAINT PK_GSPWFProcessAssignResult PRIMARY KEY (ID)
);

CREATE TABLE if not exists GSPWFSchema (
	ID varchar(64) NOT NULL ,
	Code varchar(64) NOT NULL ,
	Name varchar(128) NOT NULL ,
	XmlContent bytea NOT NULL ,
	Description varchar(256) NULL ,
	BizProcessID varchar(36) NULL ,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
	CONSTRAINT PK_GSPWFSchema PRIMARY KEY (ID)
);

CREATE TABLE if not exists GSPWFBizLog (
	ID varchar(36) NOT NULL ,
	ParentProcInstID varchar(36) NULL ,
	LastProcessInstanceID varchar(36) NULL ,
	ProcessInstanceID varchar(36) NOT NULL ,
	ActivityInstanceID varchar(36) NULL ,
	ActivityInstanceName varchar(200) NULL ,
	WorkItemID varchar(36) NULL ,
	PerformerID varchar(36) NULL ,
	Performer varchar(128) NOT NULL ,
	LogDate timestamp(6) NOT NULL ,
	LogMessage varchar(1000) NULL ,
	OperationType int NULL ,
	FTAG text null,
	F1 varchar(100) null,
	F2 varchar(100) null,
	F3 varchar(100) null,
	F4 varchar(100) null,
	F5 varchar(100) null,
	F6 varchar(100) null,
	F7 varchar(100) null,
	F8 varchar(100) null,
	F9 varchar(100) null,
	F10 varchar(100) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
	CONSTRAINT PK_GSPWFBizLog PRIMARY KEY (ID)
);

CREATE TABLE if not exists GSPWFBizLogDetail (
	ID varchar(36) NOT NULL ,
	LogID varchar(36) NOT NULL ,
	ItemName varchar(256) NOT NULL ,
	ItemValue varchar(1000) NULL ,
	Creator varchar(256) null,
	CreatedTime timestamp(6) not null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) not null,
	CONSTRAINT PK_GSPWFBizLogDetail PRIMARY KEY (ID)
);



/*
* 任务中心任务表
*/
CREATE TABLE IF NOT EXISTS GSPWFTask (
Id varchar(64) NOT NULL,
Name varchar(128),
State int4 NOT NULL,
StartTime timestamp(6) NOT NULL,
EndTime timestamp(6),
Owner varchar(100) NOT NULL,
Executor varchar(100),
DueDate timestamp(6),
TargetDate timestamp(6),
Description varchar(1024),
TaskType int4,
Priority int4,
CategoryId varchar(128) NOT NULL,
Creator varchar(36),
CreatedTime timestamp not null default (now()),
LastModifier varchar(36),
LastModifiedTime timestamp(6) NOT NULL default (now()),
FStr1 varchar(100),
FStr2 varchar(100),
FStr3 varchar(100),
FStr4 varchar(100),
FTime1 timestamp(6),
FTime2 timestamp(6),
FTime3 timestamp(6),
FTime4 timestamp(6),
FDec1 decimal(20, 8),
FDec2 decimal(20, 8),
FDec3 decimal(20, 8),
FDec4 decimal(20, 8),
FText1 text,
FText2 text,
FText3 text,
FText4 text,
CONSTRAINT PK_GSPWFTask primary key  (ID)
);
/*
* 任务中心任务分类表
*/

CREATE TABLE IF NOT EXISTS GSPWFTaskCategory(
Id varchar(128) NOT NULL,
Code varchar(128) NOT NULL,
Name_CHS varchar(128),
Name_EN varchar(128),
ParentId varchar(64),
SortId int4,
Creator varchar(36),
CreatedTime timestamp(6) NOT NULL,
LastModifier varchar(36),
LastModifiedTime timestamp(6) NOT NULL,
CONSTRAINT PK_GSPWFTaskCategory primary key  (ID)
);
/**
* 任务字段信息
*/

CREATE TABLE IF NOT EXISTS GSPWFTASKField(
Id varchar(24) NOT NULL,
Code varchar(128) NOT NULL,
Title varchar(128) NOT NULL,
FieldType int  NULL,
Width int4,
TargetCode varchar(128) NOT NULL,
Visiable bool NOT NULL DEFAULT('t'),
SortOrder int4,
IsGroup bool NOT NULL DEFAULT('f'),
IsExtend bool NOT NULL DEFAULT('t'),
CategoryId varchar(128) NOT NULL,
CONSTRAINT PK_GSPWFTASKField primary key  (ID)
);
/**
* 任务扩展动作信息
*/

CREATE TABLE IF NOT EXISTS GSPWFTASKACTION(
Id varchar(24) NOT NULL,
Path varchar(1024) NOT NULL,
CategoryId varchar(128) NOT NULL,
CONSTRAINT PK_GSPWFTASKACTION primary key  (ID)
);


--**********************************************************************************
                             --WF创建表End
--**********************************************************************************