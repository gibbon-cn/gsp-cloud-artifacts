--**********************************************************************************
                             --SYS预制数据
--**********************************************************************************
--1.GSPRoleOp--
insert into GSPSysObjRelation(TableName, SubjectField, ObjectField, SubjectType, ObjectType, 
SubjectTable, ObjectTable, SubjectTableIdField, ObjectTableIdField, 
SubjectTableCodeField, ObjectTableCodeField, SubjectTableNameField, ObjectTableNameField, Creator) 
select 'GSPRoleOp','RoleId','OperationId','Role','Operation',
'GSPRole','GSPOperation','ID','ID','Code','Code','Name','Name','admin'
WHERE NOT EXISTS (select 1 from GSPSysObjRelation where UPPER(TableName)=UPPER('GSPRoleOp'));
--2.GSPUserRole--
INSERT into GSPSysObjRelation(TableName, SubjectField, ObjectField, SubjectType, ObjectType, 
SubjectTable, ObjectTable, SubjectTableIdField, ObjectTableIdField, 
SubjectTableCodeField, ObjectTableCodeField, SubjectTableNameField, ObjectTableNameField, Creator) 
SELECT 'GSPUserRole','UserId','RoleId','User','Role','GSPUser',
'GSPRole','ID','ID','Code','Code','Name','Name','admin'
WHERE NOT EXISTS (select 1 from GSPSysObjRelation where UPPER(TableName)=UPPER('GSPUserRole'));
--3.GSPUserPos--
INSERT into GSPSysObjRelation(TableName, SubjectField, ObjectField, SubjectType, ObjectType, 
SubjectTable, ObjectTable, SubjectTableIdField, ObjectTableIdField, 
SubjectTableCodeField, ObjectTableCodeField, SubjectTableNameField, ObjectTableNameField, Creator) 
SELECT 'GSPUserPos','UserID','PositionID','User','Position','GSPUser',
'GSPPosition','ID','ID','Code','Code','Name','Name','admin'
WHERE NOT EXISTS (select 1 from GSPSysObjRelation where UPPER(TableName)=UPPER('GSPUserPos'));
--4.GSPPosRole--
INSERT into GSPSysObjRelation(TableName, SubjectField, ObjectField, SubjectType, ObjectType, 
SubjectTable, ObjectTable, SubjectTableIdField, ObjectTableIdField, 
SubjectTableCodeField, ObjectTableCodeField, SubjectTableNameField, ObjectTableNameField, Creator) 
SELECT 'GSPPosRole','PositionID','RoleID','Position','Role','GSPPosition',
'GSPRole','ID','ID','Code','Code','Name','Name','admin'
WHERE NOT EXISTS (select 1 from GSPSysObjRelation where UPPER(TableName)=UPPER('GSPPosRole'));

---------------------SYS公共操作-----------------------------------------
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select 'GlobalId',1000,'GlobalId','全局组织操作','Global organization','admin','1',''
  WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='GlobalId');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note) select '001',1,'view','查看','view','admin','1',''
  WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='001');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '002',2,'manage','维护','maintenance','admin','1','' 
  WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='002');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '003',3,'create','新增','create','admin','1',''
  WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='003');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '004',4,'edit','修改','edit','admin','1',''
 WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='004');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '005',5,'delete','删除','delete','admin','1',''
 WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='005');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '006',6,'audit','审核','audit','admin','1',''
 WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='006');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '007',7,'cancelAudit','反审核','cancel audit','admin','1',''
 WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='007');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '008',8,'print','打印','print','admin','1',''
 WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='008');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '009',9,'execute','执行','execute','admin','1',''
   WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='009');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '010',10,'revocation','撤销','revocation','admin','1',''
  WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='010');
insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '011',11,'archive','归档','archive','admin','1',''
  WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='011');
  insert into GSPAuthOperation(ID,SortOrder,Code,Name_chs,Name_en,Creator,SysInit,Note)select '012',12,'handle','办理','handle','admin','1',''
  WHERE NOT EXISTS (select 1 from GSPAuthOperation where id='012');


