
create table if not exists GSPSecurityEntry
(
	ID		varchar(36)   	not null,
	Ex1	varchar(50)   null,	
	Ex2	varchar(100)  	null,
	Ex3	varchar(100)  	null,
Ex4	varchar(50)   null,	
Ex5	varchar(50)   null,	
ExtType varchar(50)   not null,	
AuthType   int   	NOT NULL,
AuthObjIds varchar(256) null ,
AuthObjNames varchar(256)null ,
TenantId   int   	NULL,
	Creator varchar(256) not null ,
  	CreatedTime timestamp(6) not null default (now()),
  	LastModifier varchar(256) null ,
  	LastModifiedTime timestamp(6) null,
	CONSTRAINT PK_GSPSecurityEntry primary key  (ID)
);

create table if not exists GSPOperationEntry
(
	ID		varchar(36)   	not null,
	EntryID	varchar(36)   not null,	
	ActionID	varchar(50)   not null,	
 OperationID varchar(50)   not null,	
	Ex1	varchar(100)   null,	
	Ex2	varchar(100)  	null,
	Ex3	varchar(100)  	null,
  Note	varchar(100)   null,	
   TenantId   int   	NULL,
	Creator varchar(256) not null ,
  	CreatedTime timestamp(6) not null default (now()),
  	LastModifier varchar(256) null ,
  	LastModifiedTime timestamp(6) null
);
create table if not exists GSPAuthFieldEntry
(
	ID		varchar(36)   	not null,
	EntryID	varchar(36)   not null,	
	FieldID	varchar(50)   not null,	
  AuthFieldID varchar(50)   not null,	
	AuthObjID	varchar(50)   null,	
   TenantID   int   	NULL,
	Creator varchar(256) not null ,
  	CreatedTime timestamp(6) not null default (now()),
  	LastModifier varchar(256) null ,
  	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAuthOperationEntry
(
	ID		varchar(36)   	not null,
	EntryID	varchar(36)   not null,	
	AuthFieldEntryId varchar(36)   not null,	
	ActionID	varchar(50)   not null,	
  OperationID varchar(50)   not null,	
  Ex1	varchar(100)   null,	
	Ex2	varchar(100)  	null,
	Ex3	varchar(100)  	null,
	  Note	varchar(100)   null,	
  TenantID   int   	NULL,
	Creator varchar(256) not null ,
  CreatedTime timestamp(6) not null default (now()),
  LastModifier varchar(256) null ,
  LastModifiedTime timestamp(6) null
);


-----------------权限结果模板表--------------------------------------
create table if not exists gspauresultTemplate
(
	id		varchar(36)   	not null,
    packageId varchar(36)   	not null,
	authorizationid	varchar(36)   not null,	
	authField	varchar(36)  	not null,
	authOpId	varchar(36)  	null,
	aodata	varchar(36)  	null,
	ruledata	varchar(4000)  	null,
	fieldaccessflag varchar(1)  	null,/**2--只读3--读写，2、3同时存在表示2**/
	assid1  varchar(36)  	null,
	assid2  varchar(36)  	null,
	assid3  varchar(36)  	NULL,
	groupId  varchar(2) NULL
    

);

--1.GSPAuobjField-- 
create table if not exists GSPAuthField
(
	ID		varchar(36)   	not null,
	Code	varchar(50)   not null,	
	Name_CHS	varchar(100)  	null,
	Name_EN	varchar(100)  	null,
	Type   int   	NOT NULL DEFAULT(0),
	IsGlobal bool NOT NULL DEFAULT('f'),
	Path	varchar(40)  	not null,
	Layer   int   	NOT  null,
	IsDetail    bool NOT NULL DEFAULT('f'),
    ParentID varchar(36)    	null,
	SortOrder int   	not null,
	SysInit  bool NOT NULL DEFAULT('f'),
	DataSourceID varchar(36)   null,
	DataSourceType char(1) null,
	DataFetcherSerialize text  null,
	AoFetcherType int NOT NULL DEFAULT(0),
	PartitionTable varchar(36)   null,
	IsYear bool NOT NULL DEFAULT('f'),
	State char(1)  null,
	Note varchar(100)   null,	
	Creator varchar(256) not null ,
  	CreatedTime timestamp(6) not null default (now()),
  	LastModifier varchar(256) null ,
  	LastModifiedTime timestamp(6) null,
	CONSTRAINT PK_GSPAuthField primary key  (ID)
);

create table if not exists GSPAuthFieldGroup
(
	ID		varchar(36)   	not null,
	AuthField varchar(36)   not null,	
	GroupAuthField	varchar(36)  	not null,
	RefElementID	varchar(50)  	null,
	GroupVariable	varchar(36)  	null,
  	HelpColumns	varchar(500)  	null,
	IsAuGroup	bool NOT NULL DEFAULT('f'),
	Creator varchar(256) not null ,
	CreatedTime timestamp(6) not null default (now()),
	LastModifier varchar(256) null ,
	LastModifiedTime timestamp(6) null ,
	CONSTRAINT PK_GSPAuthFieldGroup primary key (ID)
);
create index if not exists IDX_GSPAuthFieldGroup on GSPAuthFieldGroup(AuthField,GroupAuthField);


--GSPAuthOperation-- 
create table if not exists GSPAuthOperation
(
	ID		varchar(36)   	not null,
	Code	varchar(50)     not null,	
	Name_CHS	varchar(100)  null,
	Name_EN	varchar(100)  	null,
    ParentID varchar(36)    	null,
	SortOrder int   	not null,
	SysInit  bool NOT NULL DEFAULT('t'),
	State char(1) null,
	Note varchar(100)   null,	
	Creator varchar(256) not null ,
	CreatedTime timestamp(6) not null default (now()),
	LastModifier varchar(256) null ,
	LastModifiedTime timestamp(6) null ,
	CONSTRAINT PK_GSPAuthOperation primary key (ID)
);


--GSPAuthorization-- 
create table if not exists GSPAuthorization
(
	ID		varchar(36)   	not null,
	Code	varchar(50)   not null,	
	Name_CHS	varchar(100)  	null,
	Name_EN	varchar(100)  	null,
	Type   int   	not NULL DEFAULT(1),
	BusinessID varchar(36)    	null,
  	ParentID varchar(36)    	null,
	SortOrder int   	not null,
	SysInit  bool NOT NULL DEFAULT('f'),
	Note varchar(100)   null,	
	Creator varchar(256) not null ,
 	CreatedTime timestamp(6) not null default (now()),
  	LastModifier varchar(256) null ,
  	LastModifiedTime timestamp(6) null,
	CONSTRAINT PK_GSPAuthorization primary key (ID) 
);


create table if not exists GSPAuthPermission
(
	ID		varchar(36)   	not null,
	AuthorizationId varchar(36)   	not null,
	AuthField	 varchar(36)   not null,	
    AuthOpId	 varchar(36)   not null,			
	Note	varchar(100)  null,
	Creator varchar(256) not null ,
	CreatedTime timestamp(6) not null default (now()),
	LastModifier varchar(256) null ,
	LastModifiedTime timestamp(6) null 
);
create index if not exists IDX_GSPAuthPermission  on GSPAuthPermission(AuthorizationId,AuthField,AuthOpId);

create table if not exists GSPAuthEntry
(
	ID		varchar(36)   	not null,
	AuthorizationId varchar(36)   	not null,
	AuthField	varchar(36)   not null,	
	Ctrlobj	char(1)   not null,	
	State	char(1) DEFAULT('0')  not null,	
	Creator varchar(256) not null ,
	CreatedTime timestamp(6) not null default (now()),
	LastModifier varchar(256) null ,
	LastModifiedTime timestamp(6) null 
);
create index if not exists IDX_GSPAuthEntry on GSPAuthEntry(AuthorizationId,AuthField);


create table if not exists GSPOperation
(
	ID		varchar(36)   	not null,
	Code	varchar(50)   not null,	
	Name_CHS	varchar(100)   null,
	Name_EN varchar(100)  null ,
	Type   int   	not NULL DEFAULT(0),
  	ParentID varchar(36)    	null,
	BusinessID varchar(36)    	null,
	SortOrder int   	NOT null,
	SysInit  bool NOT NULL DEFAULT('f'),
	Note varchar(100)   null,	
	Creator varchar(256) not null ,
  	CreatedTime timestamp(6) not null default (now()),
  	LastModifier varchar(256) null ,
  	LastModifiedTime timestamp(6) null ,
	CONSTRAINT PK_GSPOperation primary key (ID)
);


create table if not exists GSPAuResultRule
(
ID		varchar(36)   	null,
  PackageID varchar(36)   	not null,
  OwnerID	varchar(36)   not null,	
  AuthorizationID varchar(36)   not null,	
  AuthField	varchar(36)  	not null,
  AuthOpId	varchar(36) not null,	
  Assignflag int not null default(3)
);
create index if not exists IDX_GSPAuresultRule  on GSPAuresultRule(AuthorizationID,AuthField,AuthOpId);

------------------------------StartSysManager-------------------------------------------
--GSPUser--
create table if not exists GSPUser (
ID varchar(36) not null ,
Code varchar(36) not null ,
TenantID int null,
Name_CHS varchar(120)  null ,
FirstName_CHS varchar(40)  null ,
MiddleName_CHS varchar(40)  null ,
LastName_CHS varchar(40)  null ,
Name_EN varchar(120)  null ,
FirstName_EN varchar(40)  null ,
MiddleName_EN varchar(40)  null ,
LastName_EN varchar(40)  null ,
UserType int not null ,
UserGroup varchar(36) not null ,
SysOrgID varchar(36) not null ,
SecLevel varchar(15) null ,
SysInit boolean not null DEFAULT(false) ,
Note varchar(256) null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPUser primary key (ID)
);
create index if not exists IDX_GSPUser_ID on GSPUser(ID);
create index if not exists IDX_GSPUser_TenantID01 on GSPUser(TenantID);
create index if not exists IDX_GSPUser_TenantID02 on GSPUser(TenantID,Code);
create index if not exists IDX_GSPUser_SysOrgID on GSPUser(SysOrgID);

--GSPUserextend--
create table if not exists GSPUserExtend(
ID varchar(36) not null ,
UserID varchar(36) not null ,
Email varchar(100)  null ,
Phone varchar(20) null ,
MobilePhone varchar(20) null ,
Address varchar(126) null,
QQ varchar(20) null ,
WeChat varchar(20) null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPUserExtend primary key (ID)   
);
--GSPUserLimit--
create table if not exists GSPUserLimit(
ID varchar(36) not null ,
UserID varchar(36) not null ,
State int null ,
ValidFrom timestamp(6) null ,
ValidTo timestamp(6) null ,
WeekLimit varchar(10) null,
HourLimit varchar(30) null ,
IsLock boolean null ,
LockTime timestamp(6) null ,
NotLoginMaxDays int null  ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
constraint PK_GSPUserLimit primary key (UserID)
);
--GSPRole--
create table if not exists GSPRole (
ID varchar(36) not null ,
Code varchar(36) not null ,
Name_CHS varchar(100) null ,
Name_EN varchar(100)  null ,
RoleGroup varchar(36) not null ,
SysInit boolean not null default(false) ,
State int not null default(0),
ValidFrom timestamp null ,
ValidTo timestamp null ,
Note varchar(256) null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPRole primary key (ID) 
);
--GSPPosition--
create table if not exists GSPPosition(
ID varchar(36) not null ,
Code varchar(36) not null ,
Name_CHS varchar(100) null ,
Name_EN varchar(100)  null ,
SysInit boolean not null default(false),
PosType int not null ,
PosGroup varchar(36) not null ,
Note varchar(256) null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPPosition primary key (ID)  
);
--GSPUserGroup--
create table if not exists GSPUserGroup (
ID varchar(36) not null ,
Code varchar(100) not null ,
Name_CHS varchar(100) null ,
Name_EN varchar(100)  null ,
SysInit boolean not null default(false),
Path varchar(40) null,
Layer int null,
IsDetail boolean not null default(true),
ParentID varchar(36) null,
SortOrder int null,
Note varchar(256) null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
constraint PK_GSPUserGroup primary key (ID)
);

--GSPPosGroup--
create table if not exists GSPPosGroup (
ID varchar(36) not null ,
Code varchar(100) not null ,
Name_CHS varchar(100) null ,
Name_EN varchar(100)  null ,
SysInit boolean not null default(false),
Path varchar(40) null,
Layer int null,
IsDetail boolean not null default(true),
ParentID varchar(36) null,
SortOrder int null,
Note varchar(256) null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
constraint PK_GSPPosGroup primary key (ID)
);

--GSPRoleGroup--
create table if not exists GSPRoleGroup (
ID varchar(36) not null ,
Code varchar(100) not null ,
Name_CHS varchar(100) null ,
Name_EN varchar(100)  null ,
SysInit boolean not null default(false),
Path varchar(40) null,
Layer int null,
IsDetail boolean not null default(true),
ParentID varchar(36) null,
SortOrder int null,
Note varchar(256) null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
constraint PK_GSPRoleGroup primary key (ID)
);

--GSPsysOrg--
create table if not exists GSPSysOrg(
ID varchar(36) not null ,
Code varchar(64) not null ,
Name_CHS varchar(100) null ,
Name_EN varchar(100)  null ,
ShortName_CHS varchar(100) null ,
ShortName_EN varchar(100)  null ,
ShortPinYin varchar(100) null ,
NodeType int null,
Path varchar(40) null,
Layer int null,
IsDetail boolean not null default(true),
ParentID varchar(36) null,
SortOrder int null,
Source varchar(20) null,
Note varchar(256) null,
Creator varchar(256) null,
CreatedTime timestamp(6) NOT null default(now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPSysOrg primary key (ID)   
);

--GSPSysObjRelation--
create table if not exists GSPSysObjRelation
 (
TableName varchar(36) not null ,
SubjectField varchar(36) not null ,
ObjectField varchar(36) not null ,
SubjectType varchar(36) not null ,
ObjectType varchar(36) not null ,
SubjectTable varchar(36) not null ,
ObjectTable varchar(36) not null ,
SubjectTableIDField varchar(36) not null ,
ObjectTableIDField varchar(36) not null ,
SubjectTableCodeField varchar(36) not null ,
ObjectTableCodeField varchar(36) not null ,
SubjectTableNameField varchar(36) not null ,
ObjectTableNameField varchar(36) not null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default (now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPSysObjRelation primary key (TableName)
);
--GSPUserPos--
create table if not exists GSPUserPos (
ID varchar(36) not null ,
UserID varchar(36) not null ,
PositionID varchar(36) not null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default (now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
CONSTRAINT PK_GSPUserPos primary key (UserID,PositionID) 
);
create index if not exists IDX_GSPUserPos_UserID on GSPUserPos(UserID);
create index if not exists IDX_GSPUserPos_PositionID on GSPUserPos(PositionID);
--GSPPosRole--
create table if not exists GSPPosRole (
ID varchar(36) not null ,
PositionID varchar(36) not null ,
RoleID varchar(36) not null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default (now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
CONSTRAINT PK_GSPPosRole primary key (PositionID,RoleID) 
);
create index if not exists IDX_GSPPosRole_PositionID on GSPPosRole(PositionID);
create index if not exists IDX_GSPPosRole_RoleID on GSPPosRole(RoleID);

--GSPUserRole--
create table if not exists GSPUserRole (
ID varchar(36) not null ,
UserID varchar(36) not null ,
RoleID varchar(36) not null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null default (now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPUserRole primary key (UserID,RoleID)
);

--GSPRoleOp--
create table if not exists GSPRoleOp (
ID varchar(36) not null ,
RoleID varchar(36) not null ,
OperationID varchar(36) not null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null default (now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPRoleOp primary key (RoleID,OperationID) 
);
create index if not exists IDX_GSPRoleOp_RoleID on GSPRoleOp(RoleID);
create index if not exists IDX_GSPRoleOp_OperationID on GSPRoleOp(OperationID);
--GSPOwnerCanAssOp--
create table if not exists GSPOwnerCanAssOp
 (
ID varchar(36) not null ,
OwnerID varchar(36) not null ,
OperationID varchar(36) not null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null default (now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
CONSTRAINT PK_GSPOwnerCanAssOp primary key (OwnerID,OperationID) 
);
create index if not exists IDX_GSPOwnerCanAssOp_OwnerID on GSPOwnerCanAssOp(OwnerID);
create index if not exists IDX_GSPOwnerCanAssOp_OperationID on GSPOwnerCanAssOp(OperationID);
--GSPUserPosOrg--
create table if not exists GSPUserPosOrg
 (
ID varchar(36) not null ,
UserID varchar(36) not null ,
PositionID varchar(36) not null ,
OrgID varchar(36) not null ,
Orgcode varchar(50) not null ,
OrgName varchar(100) not null ,
OrgTypeID varchar(36) not null ,
OrgTypeName varchar(50) not null ,
Creator varchar(256) not null ,
CreatedTime timestamp(6) not null  default (now()),
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null,
CONSTRAINT PK_GSPUserPosOrg primary key (UserID,PositionID,OrgID) 
);
create index if not exists IDX_GSPUserPosOrg_UserID on GSPUserPosOrg(UserID);
create index if not exists IDX_GSPUserPosOrg_PositionID on GSPUserPosOrg(PositionID);
---------------------------------------ENDSysManager-----------------------------


create table if not EXISTS GSPPackageUser
(
	ID		varchar(36)   	not null,
  	PackageID varchar(36)   	not null,
	OwnerID	varchar(36)   not null,	
	Extend1	varchar(36)  	null,
	Extend2	varchar(36)  	null,
	Extend3	varchar(36)  	null,
	Creator varchar(256) not null ,
	CreatedTime timestamp(6) not null default (now()),
	LastModifier varchar(256) null ,
	LastModifiedTime timestamp(6) null,
	CONSTRAINT PK_GSPPackageUser primary key (ID)
);
create index if not exists IDX_GSPPackageUser_OwnerID  on GSPPackageUser(OwnerID);

create table if not EXISTS GSPPackagePosition
(
	ID		varchar(36)   	not null,
  	PackageID varchar(36)   	not null,
	OwnerID	varchar(36)   not null,	
	Extend1	varchar(36)  	null,
	Extend2	varchar(36)  	null,
	Extend3	varchar(36)  	null,
	Creator varchar(256) not null ,
	CreatedTime timestamp(6) not null default (now()),
	LastModifier varchar(256) null ,
	LastModifiedTime timestamp(6) null 
);
create index if not exists IDX_GSPPackagePosition  on GSPPackagePosition(OwnerID);
--------------------------------------------------------------
------------------------------è¨?T?áê?------------------------


create table if not exists GSPUState(
    ID varchar(50) not null,
    MkID varchar(36),
    UserID varchar(36) not null,
    UserCode varchar(255) not null,
    FunctionID varchar(36),
    EntryTime timestamp(6),
    WorkstationInfo varchar(255) not null,
    ServerInfo varchar(255),
    ServerName varchar(255),
    CreatedTime timestamp(6) not null,
    LastModifiedTime timestamp(6) null,
    LoginType varchar(36) not null,
    CONSTRAINT PK_GSPUstate PRIMARY KEY (ID)
);

create table if not exists GSPUstateFunction (
    ID            varchar(36) not null,
    SessionID     varchar(36) not null,           
    UserID        varchar(36) not null,           
    FunctionID    varchar(36) not null,          
    FunctionCode  varchar(36) not null,           
    CONSTRAINT PK_GSPUstateFunction PRIMARY KEY (ID)
);

create table if not exists GSPUstateClearLog (
    ID            varchar(36) not null,
    SessionID     varchar(36) not null,           
    UserID        varchar(36) not null,           
    Reason    int not null,          
    ClearTime  timestamp(6) not null,           
    CONSTRAINT PK_GSPUstateClearLog PRIMARY KEY (ID)
);


-- ----------------------------
-- Table structure for GSPfunc
create table if not exists GSPFunc (
ID varchar(36)   NOT NULL,
Code varchar(36)  not null,
Name_CHS varchar(36),
TenantID int,
IsModule BOOLEAN not null,
IsDetail BOOLEAN not null,
IsSysmenu BOOLEAN not null,
ParentID varchar(36) not null ,
SortOrder int not null ,
BizObjectID varchar(36)  ,
BizopID varchar(36) ,
Icon varchar(36) ,
Invokingconfig text ,
IsWorkStation BOOLEAN,
FuncType varchar(36) ,
MenuType varchar(36) default ('None'),
Path varchar(36) not null,
Layer varchar(36) not null,
CreatedTime timestamp(6) not null  default (now()),
Creator varchar(256) not null,
LastModifiedTime timestamp(6) not null default (now()),
LastModifier varchar(256) null,
Description varchar(36),  
Name_EN varchar(100),          
CONSTRAINT PK_GSPFunc PRIMARY KEY (ID)
);

-- ----------------------------
-- Table structure for GSPUserConfig
create table if not exists GSPUserConfig (
ID varchar(36) not null,
UserID varchar(36) not null,
TenantID int,
ConfigName varchar(36),
TextValue text,
ConfigKey1 varchar(36),
ConfigKey2 varchar(36),
ConfigKey3 varchar(36),
StringValue varchar(256),
BoolValue int,
ObjectValue varchar(256),
IsSysInit int,
TypeID varchar(36),
CreatedTime timestamp(6) not null default (now()),
Creator varchar(256) not null,
LastModifier varchar(256) null ,
LastModifiedTime timestamp(6) null ,
Description varchar(36),
CONSTRAINT PK_GSPUserConfig PRIMARY KEY (ID)
);


create table if not exists GSPAuthenAccount
(
    ID varchar(36) not null,
    UserID varchar(36) not null,
    AccountID varchar(36) not null,
    TenantID int not null,
    AuthenstrategyName varchar(50) not null,
    AuthenstrategyID varchar(36) not null,           
	CONSTRAINT PK_GSPAuthenAccount PRIMARY KEY (ID)
);


create table if not exists GSPAuthenType
(
    ID varchar(36) not null,
    Code varchar(36) not null,
    Name varchar(50) not null,
    TenantID int not null,
    IsActive int not null,
    LoginUIDesign varchar(2000),
    LoginUIScript varchar(2000),
    SysManagerUIDesign varchar(2000),
    SysManagerUIScript varchar(2000),
    CreatedTime timestamp(6) not null  default (now()),
    Creator varchar(256) not null ,
    LastModifier varchar(256) null ,
    LastModifiedTime timestamp(6) null,
	CONSTRAINT PK_GSPAuthenType PRIMARY KEY (ID) 
);


create table if not exists GSPAuthenStrategy
(
    ID varchar(36) not null,
    AuthenStrategyId varchar(36) not null,
    Name varchar(50) not null,
    AuthenTypes varchar(200) not null,
    Relationships varchar(200) not null,
    TenantID int not null,
    CreatedTime timestamp(6) not null  default (now()),
    Creator varchar(256) not null ,
    LastModifier varchar(256) null ,
    LastModifiedTime timestamp(6) null,
	CONSTRAINT PK_GSPAuthenStrategy PRIMARY KEY (ID)  
);

create table if not exists GSPUserPassword
(
    ID varchar(36) not null,
    UserID varchar(36) not null,
    AccountID varchar(36) not null,
    Password varchar(50) not null,
    TenantID int not null,
    CreatedTime timestamp(6) not null  default (now()),
    Creator varchar(256) not null ,
    LastModifier varchar(256) null ,
    LastModifiedTime timestamp(6) null,
    Validtime varchar(36) not null,
    Isnextmodifypassword int not null,
	PasswordChangeTime timestamp(6) null,
	CONSTRAINT PK_GSPUserPassword PRIMARY KEY (ID)
);

create table if not exists GSPToken
(
    ID varchar(36) not null ,
    UserID varchar(36) not null,
    TokenType varchar(36) not null,
    Token varchar(36) not null,
    TenantID int not null,
    Createtime date not null,
    Validspan varchar(36) not null,
    ValidType varchar(36) not null,
	CONSTRAINT PK_GSPToken PRIMARY KEY (ID)
);

create table if not exists GSPAuthenMapping
(
    ID varchar(36) not null,
    UserID varchar(36) not null,
    ExternalAccountID varchar(36) not null,
    ExternalAccountType varchar(36) not null,
    TenantID int not null,
	CreatedTime timestamp(6) not null  default (now()),
    Creator varchar(256) not null ,
    LastModifier varchar(256) null ,
    LastModifiedTime timestamp(6) null,
	CONSTRAINT PK_GSPAuthenmapping PRIMARY KEY (ID)  
);
