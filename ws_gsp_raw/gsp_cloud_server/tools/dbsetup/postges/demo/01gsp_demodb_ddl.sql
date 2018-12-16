-----------------------------------数据权限Start----------------------------------------------------------
-----------------规则权限--------------------------------------
create table if not exists GSPAuresultsysOrg
(
	id		varchar(36)   	not null,
    packageId varchar(36)   	not null,
	authorizationid	varchar(36)   not null,	
	authField	varchar(36)  	not null,
	authOpId	varchar(36)  	null,
	aodata	varchar(36)  	null,
	ruledata	varchar(4000)  	null,
    groupId  varchar(2) null,
	fieldaccessflag varchar(1)  	null,/**2--只读3--读写，2、3同时存在表示2**/
	assid1  varchar(36)  	null,
	assid2  varchar(36)  	null,
	assid3  varchar(36)  	null
);



create table if not exists gspauresultBMBE01
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
	  groupId  varchar(2) null
);
-----------------组织过滤的权限--------------------------------------
create table if not exists GSPAuresultBM
(
	id		varchar(36)   	not null,
    packageId varchar(36)   	not null,
	authorizationid	varchar(36)   not null,	
	authField	varchar(36)  	not null,
	authOpId	varchar(36)  	null,
	aodata	varchar(36)  	null,
	ruledata	varchar(4000)  	null,
    groupId  varchar(2) null,
	fieldaccessflag varchar(1)  	null,
	assid1  varchar(36)  	null,
	assid2  varchar(36)  	null,
	assid3  varchar(36)  	null
);
create table if not exists testbm
(
	id		varchar(36)   	not null,
    code varchar(36)   	not null,
	name	varchar(36)   not null,	
	orgid	varchar(36)  	not null
);

create table if not EXISTS bm
(
	id		varchar(36)   	not null,
    code varchar(36)   	not null,
	name	varchar(36)   not null,	
	orgid	varchar(36)  	not null
);
-----------------列权限--------------------------------------
create table if not exists gspauresultcolumn1
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
	 groupId  varchar(2) null
);

-----------------------------------数据权限End----------------------------------------------------------


-----------------------------------流程构件----------------------------------------------------------
CREATE TABLE wfprocesscomponentdemo (
id varchar(36),
content varchar(200)
);
-----------------------------------流程构件end----------------------------------------------------------