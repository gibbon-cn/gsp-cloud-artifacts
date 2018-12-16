
create table if not exists ECPLanguage
(
	ID varchar(36) NOT NULL,
	CODE varchar(36) NOT NULL,
	NAME varchar(128) NOT NULL,
	FIELDSUFFIX varchar(64) NOT NULL,
	SORTORDER int NOT NULL,	
	ENABLED BOOLEAN NOT NULL,
	SYSINIT BOOLEAN NOT NULL,	
	DESCRIPTION varchar(512) NOT NULL,
	LASTMODIFIEDTIME timestamp NOT NULL,
	CONSTRAINT PK_ECPLanguage PRIMARY KEY(ID)
);


/* 创建ECPLangCodeDict表*/
CREATE TABLE if not exists ECPLangCodeDict
(
   ID VARCHAR(36) not null,
   Code VARCHAR(36) not null,
   Name VARCHAR(128) not null,

   CONSTRAINT PK_ECPLangCodeDict PRIMARY KEY(ID)
);

/* 创建ECPRegion表*/
CREATE TABLE if not exists  ECPRegion
(
   ID VARCHAR(36) not null,
   Code VARCHAR(2) not null,
   Name varchar(128) null,
   FullName varchar(256) null,
   CountryCode VARCHAR(8) not null, 
   TimeZoneID varchar(64) null,
   LangCode varchar(16) null,
   DateFormatID varchar(36) null,
   Enabled BOOLEAN null,
   Creator VARCHAR(36) not null,
   CreatedTime TIMESTAMP not null,
   LastModifier VARCHAR(36) not null,
   LastModifiedTime TIMESTAMP not null,

   CONSTRAINT PK_ECPRegion PRIMARY KEY(ID)
);

/* 创建ECPRegionCodeDict表*/
CREATE TABLE if not exists ECPRegionCodeDict
(
   ID VARCHAR(36) not null,
   Code VARCHAR(8) not null,
   Name VARCHAR(128) not null,
   EnName VARCHAR(128) not null,
   CountryCode varchar(8) not null,

   CONSTRAINT PK_ECPRegionCodeDict PRIMARY KEY(ID)
);

/* 创建ECPDataFormat表*/
CREATE TABLE if not exists ECPDataFormat
(
   ID VARCHAR(36) not null,
   TenantID int null,
   Code VARCHAR(36) not null,
   Name VARCHAR(128) null,
   NumberFormat VARCHAR(1024) null,
   DateFormat VarChar(36) null,
   TimeFormat VarChar(36) null,
   AddressFormat VarChar(1024) null,
   Creator VARCHAR(36) not null,
   CreatedDate TIMESTAMP not null,
   LastModifier VARCHAR(36) not null,
   LastModifiedDate TIMESTAMP not null,

   CONSTRAINT PK_ECPDataFormat PRIMARY KEY(ID)
);


/* 创建EcpTimeZone表*/
CREATE TABLE if not exists EcpTimeZone (
	ID varchar(36) NOT NULL,
	Name varchar(128) NULL,
	BaseOffset decimal(20, 8) NULL,
    CONSTRAINT PK_EcpTimeZone PRIMARY KEY(ID)
);

create table if not exists EcpTenant
(
	id int NOT NULL,
	code varchar(36) NOT NULL,
	name_chs varchar(256) NOT NULL,
	name_en varchar(256) NULL,
	name_cht varchar(256) NULL,
	name_es varchar(256) NULL,
	name_pt varchar(256) NULL,
	createdtime timestamp NOT NULL,
	CONSTRAINT PK_EcpTenant PRIMARY KEY (id)
);

create table if not exists EcpAppInstance
(
	tenant_app_instance_id varchar(36) NOT NULL,
	tenant_id int not null,
	tenant_app_no varchar(36) not null,
	description varchar(64) not null,
	tenant_app_instance_status int not null,
    app_portal_url varchar(128) not null,
	data_isolation int not null default 2,
    expired_time timestamp NOT NULL,
	create_time timestamp NOT NULL,
	CONSTRAINT PK_EcpAppInstance PRIMARY KEY (tenant_app_instance_id)
);
Create Unique Index if not exists UDX_EcpAppInstance on EcpAppInstance(tenant_id,tenant_app_no);

create table if not exists EcpInstCluster
(
	cluster_id varchar(36) NOT NULL,
	cluster_name varchar(256) not null,
	base_url varchar(256) not null,
	create_time timestamp NOT NULL,
	CONSTRAINT PK_EcpInstCluster PRIMARY KEY (cluster_id)
);

create table if not exists EcpInstClusterRelation
(
	tenant_app_instance_id varchar(36) NOT NULL,
	cluster_id varchar(36) not null,
	CONSTRAINT PK_EcpInstClusterRelation PRIMARY KEY (tenant_app_instance_id)
);

create table if not exists EcpSUDBMapping
(
	Id varchar(36) NOT NULL,
	AppInstanceId varchar(36) not null,
	SU varchar(36) not null,
	DBConnectionId varchar(36) not null,
	LastModifiedTime timestamp NOT NULL,
	CONSTRAINT PK_EcpSUDBMapping PRIMARY KEY (Id)
);

create table if not exists EcpDbConnection
(
	Id varchar(36) NOT NULL,
	DbType int NOT NULL,
	ConnectionString varchar(512) NOT NULL,
	LastModifiedTime timestamp NOT NULL,
	CONSTRAINT PK_EcpDbConnection PRIMARY KEY (Id)
);

/*临时对象组件管理表*/
create table if not exists GSPTMPObject
(
  SessionID varchar(36) not null,
  UserID varchar(36) not null,
  ObjectName varchar(128) not null,
  ObjectType varchar(3),
  Creator varchar(256) not null,
  CreatedTime timestamp not null
);
Create Unique Index if not exists UDX_GSPTMPObject_ObjectType on GSPTMPObject(ObjectType,UserID,ObjectName,SessionID);

