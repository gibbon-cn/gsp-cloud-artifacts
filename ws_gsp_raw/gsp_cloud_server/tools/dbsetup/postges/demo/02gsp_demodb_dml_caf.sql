DELETE FROM ecptenant where id  = 10000;
insert into ecptenant(id,code,name_chs,name_cht,name_en,name_es,name_pt,createdtime)
values(10000,'10000','浪潮集团','浪潮集團','Inspur','','',now());

DELETE FROM ecptenant where id  = 913029;
insert into ecptenant(id,code,name_chs,name_cht,name_en,name_es,name_pt,createdtime)
values(913029,'913029','铁塔集团','鐵塔集團','TieTower','','',now());


DELETE FROM ecptenant where id  = 913030;
insert into ecptenant(id,code,name_chs,name_cht,name_en,name_es,name_pt,createdtime)
values(913030,'913030','鲁能集团','魯能集團','LuNeng','','',now());


DELETE FROM EcpAppInstance where tenant_app_instance_id='Inspur01';
insert into EcpAppInstance(tenant_app_instance_id,tenant_id,tenant_app_no,
description,tenant_app_instance_status,app_portal_url,data_isolation,expired_time,create_time) 
values('Inspur01','10000','pg01','浪潮实例01','1','platform/runtime/sys/web/index.html','2',now(),now());

DELETE FROM EcpAppInstance where tenant_app_instance_id='Tower01';
insert into EcpAppInstance(tenant_app_instance_id,tenant_id,tenant_app_no,
description,tenant_app_instance_status,app_portal_url,data_isolation,expired_time,create_time) 
values('Tower01','913029','pg01','铁塔实例01','1','platform/runtime/sys/web/index.html',2,now(),now());

DELETE FROM EcpAppInstance where tenant_app_instance_id='Luneng01';
insert into EcpAppInstance(tenant_app_instance_id,tenant_id,tenant_app_no,
description,tenant_app_instance_status,app_portal_url,data_isolation,expired_time,create_time) 
values('Luneng01','913030','pg01','鲁能实例01','1','platform/runtime/sys/web/index.html',2,now(),now());

DELETE FROM EcpSUDBMapping where id = '0001';
insert into EcpSUDBMapping(id,appinstanceid,SU,DBConnectionId,LastModifiedTime) values('0001','Inspur01','*','connection01',current_timestamp);
DELETE FROM EcpSUDBMapping where id = '0002';
insert into EcpSUDBMapping(id,appinstanceid,SU,DBConnectionId,LastModifiedTime) values('0002','Tower01','*','connection02',current_timestamp);
DELETE FROM EcpSUDBMapping where id = '0003';
insert into EcpSUDBMapping(id,appinstanceid,SU,DBConnectionId,LastModifiedTime) values('0003','Luneng01','*','connection03',current_timestamp);

DELETE FROM EcpSUDBMapping where id = '0004';
insert into EcpSUDBMapping(id,appinstanceid,SU,DBConnectionId,LastModifiedTime) values('0004','Inspur01','sys','connection04',current_timestamp);
DELETE FROM EcpSUDBMapping where id = '0005';
insert into EcpSUDBMapping(id,appinstanceid,SU,DBConnectionId,LastModifiedTime) values('0005','Inspur01','scm','connection05',current_timestamp);
DELETE FROM EcpSUDBMapping where id = '0006';
INSERT INTO ecpsudbmapping (id,appinstanceid,SU,DBConnectionId,LastModifiedTime) values ('0006', 'Inspur01', 'wf', 'connection04', current_timestamp);
DELETE FROM EcpSUDBMapping where id = '0007';
INSERT INTO ecpsudbmapping (id,appinstanceid,SU,DBConnectionId,LastModifiedTime) values ('0007', 'Inspur01', 'main', 'connection05', current_timestamp);

DELETE FROM EcpDbConnection where id = 'connection01';
insert into EcpDbConnection(Id,DbType,ConnectionString,LastModifiedTime) values('connection01',2,
'Server=10.24.19.124;Port=15432;Database=gsp_cloud_db;User Id= gsp_cloud;Password=Test6530;MaxPoolSize=100;Enlist=true',current_timestamp);

DELETE FROM EcpDbConnection where id = 'connection02';
insert into EcpDbConnection(Id,DbType,ConnectionString,LastModifiedTime) values('connection02',2,
'Server=10.24.19.124;Port=15432;Database=gsp_cloud_db2;User Id= gsp_cloud;Password=Test6530;MaxPoolSize=100;Enlist=true',current_timestamp);

DELETE FROM EcpDbConnection where id = 'connection03';
insert into EcpDbConnection(Id,DbType,ConnectionString,LastModifiedTime) values('connection03',2,
'Server=10.24.19.124;Port=15432;Database=gsp_cloud_db2;User Id= gsp_cloud;Password=Test6530;MaxPoolSize=100;Enlist=true',current_timestamp);

DELETE FROM EcpDbConnection where id = 'connection04';
insert into EcpDbConnection(Id,DbType,ConnectionString,LastModifiedTime) values('connection04',2,
'Server=10.24.19.140;Port=5866;Database=GSPCloudHighGO;User Id=CloudDBM;Password=Test6530;Enlist=true',current_timestamp);

DELETE FROM EcpDbConnection where id = 'connection05';
insert into EcpDbConnection(Id,DbType,ConnectionString,LastModifiedTime) values('connection05',2,
'Server=10.24.19.124;Port=15432;Database=gsp_cloud_scm;User Id= gsp_cloud;Password=Test6530;MaxPoolSize=100;Enlist=true',current_timestamp);
