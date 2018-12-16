delete from gspbosumapping where id in('4508c847-33c5-4e15-bb3a-49a1864f43a5','f2a743fc-a1ed-48a1-962a-b455e79a726f');
INSERT INTO gspbosumapping(id,businessobjectid,suname) VALUES ('4508c847-33c5-4e15-bb3a-49a1864f43a5', 'scm', 'salesorder');
INSERT INTO gspbosumapping(id,businessobjectid,suname) VALUES ('f2a743fc-a1ed-48a1-962a-b455e79a726f', 'salesorder', 'sd');

delete from gspbusinessobject where id in('gscloud','scm','hcm', 'salesorder','hrpi','sd','pu','im');
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('gscloud', 'GSCloud', 'GSCloud', '', 1, NULL, 0, '0',0,1);
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('scm', 'Scm', 'Scm', NULL, 1, 'gscloud', 0, '0',0,2);
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('hcm', 'Hcm', 'Hcm', NULL, 1, 'gscloud', 0, '0',0,2);
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('salesorder', 'SalesOrder', 'SalesOrder', NULL, 0, 'sd', 0, '1',1,4);
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('hrpi', 'Hrpi', 'Hrpi', NULL, 1, 'hcm', 0, '0',0,3);
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('sd', 'SD', 'SD', NULL, 1, 'scm', 2, '0',0,3);
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('pu', 'PU', 'PU', NULL, 1, 'scm', 1, '0',0,3);
INSERT INTO gspbusinessobject(id,code,name,description,sysinit,parentid,sortorder,isdetail,type,layer) VALUES ('im', 'IM', 'IM', NULL, 1, 'scm', 0, '0',0,3);

delete from gspfunc where id = 'SYS0102';
 INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('SYS0102', 'SYS0102', '业务对象维护', 10000, false, true, true, 'sys03', '1', '', '', null, '{"Type": "",
			"Url": "business-object",
			"Path": "/platform/runtime/sys/web/business-object.module#./src/app/modules/business-object/business-object.module.js#BusinessObjectModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', false, '2', '00100001', '2', 'Creator', 'BusinessObject Maintenance');




delete from GSPSUInfo where id='1a025c18-3d21-4773-9ed7-901eae2d410a';
INSERT INTO GSPSUInfo(id,applicationname,serviceunitname,applicationpath,configpath) values('1a025c18-3d21-4773-9ed7-901eae2d410a','scm','sd','apps/scm/sd','config/apps/scm/salesorder');