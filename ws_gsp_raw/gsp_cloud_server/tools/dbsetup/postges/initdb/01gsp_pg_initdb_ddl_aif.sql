--**********************************************************************************
                             --AIF创建表
--**********************************************************************************
create table if not exists GSPAifBeEvent 
(
	ID varchar(200) not null primary key,
	Name varchar(200) null,
	MetadataPackageName varchar(200) null,
	MetadataID varchar(36) null,
	SuName varchar(200) not null,
	Description varchar(2000) null,
	BeMetadataPackageName varchar(200) not null,
	BeMetadataID varchar(36) not null,
	BeType varchar(200) not null,
	BeEventRouterComponentID varchar(200) null,
	BeEventAgentComponentID varchar(200) null,
	--EnableExpression text null,
	--BeFlowchartExpression text null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeAction 
(
	ID varchar(200) not null primary key,
	Name varchar(200) null,
	MetadataPackageName varchar(200) null,
	MetadataID varchar(36) null,
	SuName varchar(200) not null,
	Description varchar(2000) null,
	BeMetadataPackageName varchar(200) not null,
	BeMetadataID varchar(36) not null,
	BeType varchar(200) not null,
	BeActionAgentComponentID varchar(200) null,
	BizActionType int not null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeAssociation
(
	ID varchar(36) not null primary key,
	SrcBeType varchar(200) not null,
	TarBeType varchar(200) not null,
	RelationName varchar(200) not null,
	SrcPrimaryValue varchar(36) not null,
	TarPrimaryValue varchar(36) not null,
	SrcObject varchar(200) not null,
	TarObject varchar(200) not null,
	SrcForeignKey varchar(36) null,
	TarForeignKey varchar(36) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeCreationRule
(
	ID varchar(36) not null primary key,
	Name varchar(200) null,
	MetadataPackageName varchar(200) null,
	MetadataID varchar(36) null,
	SuName varchar(200) not null,
	Description varchar(2000) null,
	SourceBeMetadataPackageName varchar(200) not null,
	SourceBeMetadataID varchar(36) not null,
	SourceBeType varchar(200) not null,
	SourceBeName varchar(200) not null,
	TargetBeMetadataPackageName varchar(200) not null,
	TargetBeMetadataID varchar(36) not null,
	TargetBeType varchar(200) not null,
	TargetBeName varchar(200) not null,
	MappingRuleID varchar(36) not null,
	IsEnabled boolean not null,
	TargetURI varchar(200) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeWritebackRule
(
	ID varchar(36) not null primary key,
	Name varchar(200) null,
	MetadataPackageName varchar(200) null,
	MetadataID varchar(36) null,
	SuName varchar(200) not null,
	Description varchar(2000) null,
	SourceBeMetadataPackageName varchar(200) not null,
	SourceBeMetadataID varchar(36) not null,
	SourceBeType varchar(200) not null,
	SourceBeName varchar(200) not null,
	TargetBeMetadataPackageName varchar(200) not null,
	TargetBeMetadataID varchar(36) not null,
	TargetBeType varchar(200) not null,
	TargetBeName varchar(200) not null,
	MappingRuleID varchar(36) not null,
	IsEnabled boolean not null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeCreationProcess
(
	ID varchar(36) not null primary key,
	Name varchar(200) null,
	MetadataPackageName varchar(200) null,
	MetadataID varchar(36) null,
	SuName varchar(200) not null,
	Description varchar(2000) null,
	SourceBeType varchar(200) not null,
	TargetBeType varchar(200) not null,
	BeEventID varchar(200) not null,
	BeActionID varchar(200) not null,
	BeCreationRuleID varchar(36) not null,
	IsEnabled boolean not null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeWritebackProcess
(
	ID varchar(36) not null primary key,
	Name varchar(200) null,
	MetadataPackageName varchar(200) null,
	MetadataID varchar(36) null,
	SuName varchar(200) not null,
	Description varchar(2000) null,
	SourceBeType varchar(200) not null,
	TargetBeType varchar(200) not null,
	BeEventID varchar(200) not null,
	BeActionID varchar(200) not null,
	BeWritebackRuleID varchar(36) not null,
	IsEnabled boolean not null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeFlowchart
(
	ID varchar(200) not null primary key,
	Name varchar(200) null,
	MetadataPackageName varchar(200) null,
	MetadataID varchar(36) null,
	SuName varchar(200) not null,
	Description varchar(2000) null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeFlowchartCreationRule
(
	ID varchar(36) not null primary key,
	FlowchartID varchar(200) not null,
	CreationRuleID varchar(36) not null,
	SourceBeType varchar(200) not null,
	TargetBeType varchar(200) not null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeFlowchartCreationProc
(
	ID varchar(36) not null primary key,
	FlowchartID varchar(200) not null,
	CreationProcID varchar(36) not null,
	BeEventID varchar(200) not null,
	SourceBeType varchar(200) not null,
	TargetBeType varchar(200) not null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

create table if not exists GSPAifBeFlowchartWritebackProc
(
	ID varchar(36) not null primary key,
	FlowchartID varchar(200) not null,
	WritebackProcID varchar(36) not null,
	BeEventID varchar(200) not null,
	SourceBeType varchar(200) not null,
	TargetBeType varchar(200) not null,
	Creator varchar(256) null,
	CreatedTime timestamp(6)  null,
	LastModifier varchar(256) null,
	LastModifiedTime timestamp(6) null
);

--**********************************************************************************
                             --AIF创建表End
--**********************************************************************************