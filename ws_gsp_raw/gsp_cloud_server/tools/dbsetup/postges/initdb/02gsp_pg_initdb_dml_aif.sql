DELETE FROM gspfunc WHERE id='24';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime","lastmodifier", "description", "name_en") VALUES ('24', 'BPM', '业务流', '10000', true, false, false, '0', '5', '', '', NULL, '', false, '1', '0006', '1', '2018-07-11 18:00:00', 'Creator', '2018-07-11 18:00:00', NULL, '','Bpm');

DELETE FROM gspfunc WHERE id='2401';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime", "lastmodifier","description", "name_en") VALUES ('2401', 'BPM01', '业务事件', '10000', false, true, true, '24', '0', '', '', NULL, '{"Type": "",
			"Url": "beEvent",
			"Path": "/platform/dev/main/web/bpm/aif-be-event.module#./src/app/modules/aif-be-event/aif-be-event.module.js#AifBeEventModule",
			"Image": "",
			"Width": 0, 
			"Height": 0
}', false, '2', '00060001', '2', '2018-07-11 18:00:00', 'Creator', '2018-07-11 18:00:00', NULL, '','BeEventManager');

DELETE FROM gspfunc WHERE id='2402';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime", "lastmodifier","description", "name_en") VALUES ('2402', 'BPM02', '业务动作', '10000', false, true, true, '24', '1', '', '', NULL, '{"Type": "",
			"Url": "beAction",
			"Path": "/platform/dev/main/web/bpm/aif-be-action.module#./src/app/modules/aif-be-action/aif-be-action.module.js#AifBeActionModule",
			"Image": "",
			"Width": 0, 
			"Height": 0
}', false, '2', '00060002', '2', '2018-07-11 18:00:00', 'Creator', '2018-07-11 18:00:00', NULL, '','BeActionManager');

DELETE FROM gspfunc WHERE id='2403';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime", "lastmodifier","description", "name_en") VALUES ('2403', 'BPM03', '生单规则', '10000', false, true, true, '24', '2', '', '', NULL, '{"Type": "",
			"Url": "beCreationRule",
			"Path": "/platform/dev/main/web/bpm/aif-be-creation-rule.module#./src/app/modules/aif-be-creation-rule/aif-be-creation-rule.module.js#AifBeCreationRuleModule",
			"Image": "",
			"Width": 0, 
			"Height": 0
}', false, '2', '00060003', '2', '2018-07-11 18:00:00', 'Creator', '2018-07-11 18:00:00', NULL, '','BeCreationRuleManager');

DELETE FROM gspfunc WHERE id='2404';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime", "lastmodifier","description", "name_en") VALUES ('2404', 'BPM04', '生单流程', '10000', false, true, true, '24', '3', '', '', NULL, '{"Type": "",
			"Url": "beCreationProcess",
			"Path": "/platform/dev/main/web/bpm/aif-be-creation-process.module#./src/app/modules/aif-be-creation-process/aif-be-creation-process.module.js#AifBeCreationProcessModule",
			"Image": "",
			"Width": 0, 
			"Height": 0
}', false, '2', '00060004', '2', '2018-07-11 18:00:00', 'Creator', '2018-07-11 18:00:00', NULL, '','BeCreationProcessManager');

DELETE FROM gspfunc WHERE id='2405';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime", "lastmodifier","description", "name_en") VALUES ('2405', 'BPM05', '回写规则', '10000', false, true, true, '24', '4', '', '', NULL, '{"Type": "",
			"Url": "beWritebackRule",
			"Path": "/platform/dev/main/web/bpm/aif-be-writeback-rule.module#./src/app/modules/aif-be-writeback-rule/aif-be-writeback-rule.module.js#AifBeWritebackRuleModule",
			"Image": "",
			"Width": 0, 
			"Height": 0
}', false, '2', '00060005', '2', '2018-07-11 18:00:00', 'Creator', '2018-07-11 18:00:00', NULL, '','BeWritebackRuleManager');

DELETE FROM gspfunc WHERE id='2406';
INSERT INTO gspfunc ("id", "code", "name_chs", "tenantid", "ismodule", "isdetail", "issysmenu", "parentid", "sortorder", "bizobjectid", "bizopid", "icon", "invokingconfig", "isworkstation", "functype", "path", "layer", "createdtime", "creator", "lastmodifiedtime", "lastmodifier","description", "name_en") VALUES ('2406', 'BPM06', '回写流程', '10000', false, true, true, '24', '5', '', '', NULL, '{"Type": "",
			"Url": "beWritebackProcess",
			"Path": "/platform/dev/main/web/bpm/aif-be-writeback-process.module#./src/app/modules/aif-be-writeback-process/aif-be-writeback-process.module.js#AifBeWritebackProcessModule",
			"Image": "",
			"Width": 0, 
			"Height": 0
}', false, '2', '00060006', '2', '2018-07-11 18:00:00', 'Creator', '2018-07-11 18:00:00', NULL, '','BeWritebackProcessManager');