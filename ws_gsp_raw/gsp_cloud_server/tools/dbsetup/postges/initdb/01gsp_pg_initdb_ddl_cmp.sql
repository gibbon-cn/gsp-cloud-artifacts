
-- GSPEbsEvent实体表
create table if not exists  GSPEbsEvent
(
	ID varchar(100)   not null,
	Code	varchar(800)   null,	
	Name	varchar(200)   null,
	ServiceUnit   varchar(200) 	null,
	Description   varchar(2000)  	 null,
	NeedResponse  varchar(5) not null ,
	IsSystem  varchar(5) ,
	CONSTRAINT PK_GSPEbsEvent PRIMARY KEY(ID)
);


-- GSPEbsSub实体表
create table if not exists  GSPEbsSubscriber
(
	ID	  varchar(100)   not null,
	Code	  varchar(200)   not null,	
	Name	  varchar(400)  not null,
	InvokeInfo	varchar(800)  not null,
	ServiceUnit     varchar(200)  not null,
	Description varchar(2000)   null,
	Compensable varchar(5)  not null ,
	CONSTRAINT PK_GSPEbsSubscriber PRIMARY KEY(ID)
);


-- GSPEbsPubSub实体表
create table if not exists  GSPEbsPubSub
(
	ID	  varchar(100)   not null,
	EventID	  varchar(100)  not null,	
	SubscriberID  varchar(100)  not null,
	MappingID varchar(100)    null,
	CONSTRAINT PK_GSPEbsPubSub PRIMARY KEY(ID)
);


-- GSPEbsPubLog实体表
create table if not exists  GSPEbsPubLog
(
	ID	  varchar(100)   not null,
	EventID	  varchar(100)  not null,
	SubContextID	 varchar(100)   null,	
	ParentEventID	varchar(100)   null,
	Content    text 	not null,
	CreatedTime   timestamp(6) not null default (now()),
	ConfirmInfo  varchar(200) null ,
	CancelInfo  varchar(200) null ,
	TenantID varchar(36) null,
	ConfirmArgs varchar(500) null,
	CancelArgs varchar(500) null,
	IsNeedResponse varchar(5) not null,
	InstanceID varchar(36) null,
	UserID varchar(36) null,
	CONSTRAINT PK_GSPEbsPubLog PRIMARY KEY(ID)
);


-- GSPEbsPubStatus实体表
create table if not exists  GSPEbsPubStatus
(
	ID	 varchar(100)   not null,
	Status	 varchar(15)   not null,	
	CreatedTime   timestamp(6) not null default (now()),
	LastSendTime  timestamp(6) not null ,
	NextSendTime  timestamp(6) not null ,
	RetryCount  int not null ,
	ErrorMessage  text null ,
	TenantID varchar(36) null,
	InstanceID varchar(36) null,
	UserID varchar(36) null,
	CONSTRAINT PK_GSPEbsPubStatus PRIMARY KEY(ID)
);



-- GSPEbsRespLog实体表
create table if not exists  GSPEbsRespLog
(
	ID	  varchar(100)   not null,
	PubLogId	  varchar(100)  not null,
	SubscriberID	  varchar(100)  not null,
	Result	varchar(5)  not null,
	SubLogID varchar(100)  not null,
	CreatedTime   timestamp(6) not null default (now()),
	TenantID varchar(36) null,
	InstanceID varchar(36) null,
	UserID varchar(36) null,
	CONSTRAINT PK_GSPEbsRespLog PRIMARY KEY(ID)
);


-- GSPEbsSubLog实体表
create table if not exists  GSPEbsSubLog
(
	ID	  varchar(100)   not null,
	EventID	  varchar(100)   not null,	
	SubscriberID	  varchar(100)  not null,
	PubLogId varchar(100)  not null,
	Content text null,
	CompensateInfo varchar(200)  null,
	CompensateContent text  null ,
	ExecResult varchar(200) null ,
	ErrorInfo  text null ,
	NeedResponse  varchar(5) not null ,
	CreatedTime   timestamp(6) not null default (now()),
	TenantID varchar(36) null,
	InstanceID varchar(36) null,
	UserID varchar(36) null,
	CONSTRAINT PK_GSPEbsSubLog PRIMARY KEY(id)
);


create table if not exists  GSPCodeRuleFlow
(
	Id  varchar(100)   not null,
	RuleId varchar(100)    null,	
	Dimension varchar(500)  null,
	MaxNumber	int   null,
    PRIMARY KEY(Id)
);

create table if not exists  GSPCodeRuleBroken
(
	Id  varchar(100)   not null,
	RuleId varchar(100)    null,	
	Dimension varchar(500)  null,
	Code varchar(500)  null,
    PRIMARY KEY(Id)
);
