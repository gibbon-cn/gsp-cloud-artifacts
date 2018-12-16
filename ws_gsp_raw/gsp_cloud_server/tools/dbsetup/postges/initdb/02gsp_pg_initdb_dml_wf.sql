--任务中心
DELETE FROM gspfunc WHERE id='taskcenter';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule" , "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid" , "bizopid", "icon", "invokingconfig", "isworkstation", "functype" , "path", "layer", "createdtime", "creator", "lastmodifiedtime" , "lastmodifier", "description", "name_en","menutype") 
VALUES ('taskcenter', 'taskcenter', '任务中心', 10000, '1' , '0', '0', '0', '0', '' , '', NULL, '', '0', '1' , '0005', '1', '2018-05-25 10:06:37', 'Creator', '2018-05-25 10:06:37' , NULL, '', 'Task Center','None');

--启动流程
DELETE FROM gspfunc WHERE id='2302';
INSERT INTO "gspfunc" ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder","bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime", "lastmodifier", "description", "name_en","menutype")
VALUES ('2302', 'WF02', '启动流程', 10000, '0', '1', '1', 'taskcenter', 1, '', '', NULL, 
'{"Type": "",
			"Url": "startflow",
			"Path": "/platform/runtime/wf/web/task-start-flow.module#./src/app/modules/task-start-flow/task-start-flow.module.js#TaskStartFlowModule",
			"Image": "/platform/runtime/wf/web/assets/img/todo.png",
			"Width": 0, 
			"Height": 0
}', '0', '2', '00050001', '2', 
'2018-05-25 10:06:37', 'Creator', '2018-05-25 10:06:37', NULL, '', 'Start Flows','None');


--待办任务
DELETE FROM gspfunc WHERE id='taskcenter01';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule" , "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid" , "bizopid", "icon", "invokingconfig", "isworkstation", "functype" , "path", "layer", "createdtime", "creator", "lastmodifiedtime" , "lastmodifier", "description", "name_en","menutype") 
VALUES ('taskcenter01', 'taskcenter01', '待办任务', 10000, '0' , '1', '1', 'taskcenter', 2, '' , '', NULL, 
'{"Type": "",
			"Url": "tasktodo",
			"Path": "/platform/runtime/wf/web/task-todo.module#./src/app/modules/task-todo/task-todo.module.js#TaskTodoModule",
			"Image": "/platform/runtime/wf/web/assets/img/todo.png",
			"Width": 0, 
			"Height": 0
}', 
'0', '2' , '00050002', '2', '2018-05-25 10:06:37', 'Creator', '2018-05-25 10:06:37' , NULL, '', 'Todo Tasks','None');

--任务中心已办
DELETE FROM gspfunc WHERE id='taskcenter02';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule" , "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid" , "bizopid", "icon", "invokingconfig", "isworkstation", "functype" , "path", "layer", "createdtime", "creator", "lastmodifiedtime" , "lastmodifier", "description", "name_en","menutype") 
VALUES ('taskcenter02', 'taskcenter02', '已办任务', 10000, '0' , '1', '1', 'taskcenter', 3, '' , '', NULL, 
'{"Type": "",
			"Url": "taskhaddone",
			"Path": "/platform/runtime/wf/web/task-had-done.module#./src/app/modules/task-had-done/task-had-done.module.js#TaskHadDoneModule",
			"Image": "/platform/runtime/wf/web/assets/img/todo.png",
			"Width": 0, 
			"Height": 0
}', 
'0', '2' , '00050003', '2', '2018-05-25 10:06:37', 'Creator', '2018-05-25 10:06:37' , NULL, '', 'Had Done Tasks','None');

