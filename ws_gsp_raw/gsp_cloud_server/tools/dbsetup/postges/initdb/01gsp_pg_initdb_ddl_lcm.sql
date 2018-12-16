--**********************************************************************************
                             --开发证书-start
--**********************************************************************************
-- ----------------------------
-- Table structure for gsplcmcertdevmodule
-- ----------------------------
CREATE TABLE IF NOT EXISTS GSPLCMCertDevModule (
  ID varchar(36) NOT NULL,
  CertID varchar(36) NOT NULL,
  DevModuleID varchar(36) NOT NULL,
  CONSTRAINT PK_GSPLCMCertDevModule PRIMARY KEY(ID)
);

-- ----------------------------
-- Table structure for gsplcmcertificate
-- ----------------------------
CREATE TABLE IF NOT EXISTS GSPLCMCertificate (
  ID varchar(36) NOT NULL,
  Code varchar(1024) NOT NULL,
  Name varchar(1024) NOT NULL,
  NameSpace varchar(60),
  DevLevelType char(1),
  Type char(1),
  State char(1),
  ValidBefore timestamp(6),
  Mail varchar(320),
  Phone varchar(12),
  Note varchar(1024),
  DeveloperID varchar(36),
  LevelCode numeric(2,1),
  CreatedTime timestamp(6),
  ProductID varchar(36),
  PublicKey bytea,
  WorkflowInstance varchar(36),
  WorkflowState char(1),
  PreviousVersion varchar(36),
  PrivateKey bytea,
  CONSTRAINT PK_GSPLCMCertificate PRIMARY KEY(ID)
);

-- ----------------------------
-- Table structure for gsplcmcertmanager
-- ----------------------------
CREATE TABLE IF NOT EXISTS GSPLCMCertManager (
  ID varchar(36) NOT NULL,
  CertID varchar(36) NOT NULL,
  EmpID varchar(36) NOT NULL,
  CONSTRAINT PK_GSPLCMCertManager PRIMARY KEY(ID)
);

-- ----------------------------
-- Table structure for gsplcmcertuser
-- ----------------------------
CREATE TABLE IF NOT EXISTS GSPLCMCertUser (
  ID varchar(36) NOT NULL,
  CertID varchar(36) NOT NULL,
  EmpID varchar(36) NOT NULL,
  CONSTRAINT PK_GSPLCMCertUser PRIMARY KEY(ID)
);
--**********************************************************************************
                             --开发证书-end
--**********************************************************************************


-- ----------------------------
-- Table structure for GSPBusinessObject
-- ----------------------------
create table if not exists GSPBusinessObject
(
	ID varchar(36) NOT NULL,
	Code varchar(256) not null,
	Name varchar(256) not null,
    Description varchar(1024),
    Sysinit char not null,
    ParentID varchar(36),
    SortOrder int not null,
	IsDetail char(1) not null, 
    type int not null,
    layer int not null,
	CONSTRAINT PK_GSPBusinessObject PRIMARY KEY (ID)
);


create table if not exists GSPBOSUMapping
(
	ID varchar(36) NOT NULL,
    BusinessObjectID varchar(36) NOT NULL,
    SUName varchar(256) NOT NULL,
	CONSTRAINT PK_GSPBOSUMapping PRIMARY KEY (ID)
);

create table if not exists GSPBOProjectMapping
(
	ID varchar(36) NOT NULL,
    BusinessObjectID varchar(36) NOT NULL,
    ProjectName varchar(256) NOT NULL,
	CONSTRAINT PK_GSPBOProjectMapping PRIMARY KEY (ID)
);


create table if not exists GSPSUInfo
(
	ID varchar(36) NOT NULL,
    applicationname varchar(256) NOT NULL,
    serviceunitname varchar(256) NOT NULL,
    applicationpath varchar(1024) NOT NULL,
    configpath varchar(1024) NOT NULL,
	CONSTRAINT PK_GSPSUInfo PRIMARY KEY (ID)
);
--**********************************************************************************
                             --业务对象-end
--**********************************************************************************

-- ----------------------------
-- Table structure for GSPDatabaseObject
-- ----------------------------
create table if not exists GSPDatabaseObject(
    ID    varchar(36)  not null,
    Code  varchar(256) not null,
    Name  varchar(256) not null,
    BusinessObjectID varchar(36) null,
    Type  int  not null,
    IsI18nObject char(1) not null,
    IsFiscalTable char(1) not null,
    TenantIDColumnCode varchar(256),
    Version varchar(36) not null,
    Content text not null,
    CONSTRAINT PK_GSPDatabaseObject primary key (ID)
);
--**********************************************************************************
                             --业务对象-end
--**********************************************************************************
--**********************************************************************************
                             --工作空间-start
--**********************************************************************************
-- ----------------------------
-- Table structure for GSPWorkSpace
-- ----------------------------
create table if not exists GSPWorkSpace(
    ID    varchar(36)  not null,
    Name  varchar(256) not null,
    Status int not null,
	AccountID varchar(36) not null,
    Creator varchar(36) not null,
    CreatedTime timestamp(6),
    LastModifier varchar(36) not null,
    LastModifiedTime timestamp(6),
    CONSTRAINT PK_GSPWorkSpace primary key (ID)
);
--**********************************************************************************
                             --工作空间-end
--**********************************************************************************
