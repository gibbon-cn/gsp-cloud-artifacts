

-- ----------------------------
-- Records of gspfunc
-- ----------------------------
delete from gspfunc where id = '3';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('3', 'SYS02', '签订合同', 10000, false, false, false, '2', '0', '', '', '', '', false, '3', '000100010001', '3', 'Creator', 'Award Contracts');
delete from gspfunc where id = '4';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('4', 'SYS0103', '销售订单', 10000, false, false, true, '3', '0', '', '', null, '{Type:"", Url:"sales-order",Path:"", Image:"", Width: 0, Height: 0}', false, '4', '0001000100010001', '4', 'Creator', 'Sales Order');
delete from gspfunc where id = '5';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('5', 'SYS0104', '预置类型', 10000, false, false, true, '3', '001', '', '', 'ICON', '{Type:"", Url:"",Path:"", Image:"", Width: 0, Height: 0}', false, '4', '0001000100010002', '4', 'Creator', 'Preset Type');
delete from gspfunc where id = '6';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('6', 'funcObj_test6', '编制合同文本', 10000, false, false, false, '3', '0', null, null, null, '{Type:'''', Url:'''',Path:'''', Image:'''', Width: 0, Height: 0}', false, '4', '0001000100010003', '4', 'Creator', 'Compiling Contract Text');
delete from gspfunc where id = '7';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('7', 'funcObj_test7', '签订合同', 10000, false, false, false, '3', '0', null, null, null, '{Type:"", Url:"/main/contract/sign-contract",Path:"", Image:"", Width: 0, Height: 0}', false, '4', '0001000100010004', '4', 'Creator', 'Award Contracts');
delete from gspfunc where id = '8';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('8', 'funcObj_test8', '编制合同模板', 10000, false, false, true, '3', '0', null, null, null, '{Type:'''', Url:'''',Path:'''', Image:'''', Width: 0, Height: 0}', false, '4', '0001000100010005', '4', 'Creator', 'Compiling Contract Template');
delete from gspfunc where id = '9';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('9', 'funcObj_test9', '申请用印', 10000, false, false, true, '3', '0', null, null, null, '{Type:"", Url:"sign-contract/apply-for-printing",Path:"", Image:"", Width: 0, Height: 0}', false, '4', '0001000100010006', '4', 'Creator', 'Application of Official Seal');
delete from gspfunc where id = 'sys01';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('sys01', 'sys01', '系统管理', 10000, false, false, false, '0', '9', '', '', '', '', false, '1', '0009', '1', 'Creator', 'System Manager');

delete from gspFunc where id='SYS0110';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en)
 VALUES ('SYS0110', 'SYS0110', '数据权限分配', '10000', 'f', 't', 'f', 'sys01', '9', '', '',  '{"Type": "",
			"Url": "authassign",
			"Path": "/platform/runtime/sys/web/authassign.module#./src/app/modules/authassign/authassign.module.js#AuthassignModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', 'f', '2', '00090010',2,'Creator', 'DataAuthorization Assign');

delete from gspfunc where id = '152';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('152', 'SYS0107', '系统组织', 10000, false, true, true, 'sys01', '3', '', '', null, '{"Type": "",
			"Url": "sys-org",
			"Path": "/platform/runtime/sys/web/sys-organization.module#./src/app/modules/sys-organization/sys-organization.module.js#SysOrganizationModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', false, '2', '00090004', '2', 'Creator', 'Sys Organizaiton');

delete from gspfunc where id = 'SYS0103';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('SYS0103', 'SYS0103', '用户分组', 10000, false, true, true, 'sys01', '4', '', '', null, '{"Type": "",
			"Url": "usergroup",
			"Path": "/platform/runtime/sys/web/user-group-tree.module#./src/app/user-group-tree/user-group-tree.module.js#FlatUserGroupTreeModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', false, '2', '00090005', '2', 'Creator', 'Sys UserGroup');

delete from gspfunc where id = '780';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('780', 'SYS0119', '功能组分组', 10000, false, true, true, 'sys01', '5', '', '', null, '{"Type": "",
			"Url": "role-groups",
			"Path": "/platform/runtime/sys/web/flat-role-group.module#./src/app/modules/flat-role-groups/flat-role-group.module.js#FlatRoleGroupTreeModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', false, '2', '00090006', '2', 'Creator', 'Sys RolesGroup');

delete from gspfunc where id = '631';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('631', 'position-group', '岗位分组', 10000, false, true, true, 'sys01', '6', '', '', null, '{"Type": "",
			"Url": "sys-post",
			"Path": "/platform/runtime/sys/web/sys-post.module#./src/app/modules/sys-post/sys-post.module.js#SysPostModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', false, '2', '00090007', '2', 'Creator', 'Sys PosGroup');

delete from gspfunc where id = 'online-user';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('online-user', 'online-user', '在线用户', 10000, false, true, true, 'sys01', '10', '', '', null, '{"Type": "",
			"Url": "onlineuser",
			"Path": "/platform/runtime/sys/web/onlineuser-list.module#./src/app/modules/onlineuser-list/onlineuser-list.module.js#OnlineUserManagerModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', false, '2', '000900010', '2', 'Creator', 'Sys OnlineUser');


delete from gspfunc where id = 'sys03';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('sys03', 'sys03', '业务定制平台', 10000, false, false, false, '0', '10', '', '', '', '', false, '1', '0010', '1', 'Creator', 'System Manager');


delete from gspfunc where id = 'SYS0101';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('SYS0101', 'SYS0101', '功能菜单维护', 10000, false, true, true, 'sys03', '2', '', '', null, '{"Type": "",
			"Url": "function-maintenance",
			"Path": "/platform/runtime/sys/web/flat-function-tree.module#./src/app/modules/function-maintenance/flat-function-tree.module.js#FlatFunctionTreeModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', false, '2', '00100002', '2', 'Creator', 'Function Maintenance');



delete from gspFunc where id='authfield';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, invokingconfig, isworkstation, functype, path, layer,
  creator,lastmodifiedtime, name_en)
 VALUES ('authfield', 'authfield', '权限字段维护', '10000', 'f', 't', 't', 'sys03', '3', '', '',  '{"Type": "",
			"Url": "authfield",
			"Path": "/platform/runtime/sys/web/authfield.module#./src/app/modules/authfield/authfield.module.js#AuthFieldModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', 'f', '2', '00100003',2,'Creator',now(), 'AuthField');

delete from gspFunc where id='func-operation';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, invokingconfig, isworkstation, functype, path, layer,
  creator,lastmodifiedtime, name_en)
 VALUES ('func-operation', 'func-operation', '功能操作', '10000', 'f', 't', 't', 'sys03', '4', '', '',  '{"Type": "",
			"Url": "func-operation",
			"Path": "/platform/runtime/sys/web/operation.module#./src/app/modules/operation/operation.module.js#GSPOperationModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', 'f', '2', '00100004',2,'Creator',now(), 'Function Operation');


delete from gspfunc where id = 'sys04';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, icon, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en) VALUES ('sys04', 'sys04', '用户管理', 10000, false, false, false, '0', '8', '', '', '', '', false, '1', '0011', '1', 'Creator', 'System Manager');


delete from gspFunc where id='user-manager';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en)
 VALUES ('user-manager', 'user-manager', '用户维护', '10000', 'f', 't', 't', 'sys04', '3', '', '',  '{"Type": "",
			"Url": "user-manager",
			"Path": "/platform/runtime/sys/web/user-manager.module#./src/app/modules/user-manager/user-manager.module.js#GSPUserManagerModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', 'f', '2', '00110003',2,'Creator', 'User Management');

delete from gspFunc where id='role-manager';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en)
 VALUES ('role-manager', 'role-manager', '功能组维护', '10000', 'f', 't', 't', 'sys04', '1', '', '',  '{"Type": "",
			"Url": "role-manager",
			"Path": "/platform/runtime/sys/web/role-manager.module#./src/app/modules/rolemanager/role-manager.module.js#RoleManagerModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', 'f', '2', '00110001',2,'Creator', 'Role Management');


delete from gspFunc where id='position-manager';
INSERT INTO gspfunc (id, code, name_chs, tenantid, ismodule, isdetail, issysmenu, parentid, sortorder, bizobjectid, bizopid, invokingconfig, isworkstation, functype, path, layer,
  creator, name_en)
 VALUES ('position-manager', 'position-manager', '岗位维护', '10000', 'f', 't', 't', 'sys04', '2', '', '',  '{"Type": "",
			"Url": "position-manager",
			"Path": "/platform/runtime/sys/web/position.module#./src/app/modules/position/position.module.js#PositionModule",
			"Image": "assets/img/analytics-44.png",
			"Width": 0,
			"Height": 0
}', 'f', '2', '00110002',2,'Creator', 'Position Management');


--1.default user--
delete from gspuser;
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('admin','admin','系统管理员admin',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('9999','9999','系统管理员',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('8888','8888','集团管理员',0,'admin','001',0,true,10000,'admin',now());
--2.platform user--
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('shaozhuqiang','shaozhuqiang','邵珠强',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('haozhibei','haozhibei','郝志北',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhouyjtr','zhouyjtr','周由甲',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liu.zhao','liu.zhao','刘钊',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('sun_peng_lc','sun_peng_lc','孙鹏（平台）',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('yi.fan','yi.fan','衣凡',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('chengch','chengch','成晨',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liwftr','liwftr','李文峰',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhangjintr','zhangjintr','张进',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('jip','jip','纪鹏',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('fanxsh','fanxsh','范潇生',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangyhtr','wangyhtr','王永辉',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('huoliang','huoliang','霍亮',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liuhaijun','liuhaijun','刘海军',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhangyin','zhangyin','张胤',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('chenmch','chenmch','陈明超',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liujhtr','liujhtr','刘建华',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('qiweifeng','qiweifeng','齐伟峰',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('lijiaqi','lijiaqi','李家奇',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('guoyanxue','guoyanxue','郭言学',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('huangxiuling','huangxiuling','黄秀岭',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('lvdongwei','lvdongwei','吕东卫',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangzhgtr','wangzhgtr','王召冠',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('yufuchang','yufuchang','于富昌',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('maningning','maningning','马宁宁',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('lizhichao','lizhichao','李志超',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liu_wei','liu_wei','刘威',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('miaochw','miaochw','苗传伟',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('linchang','linchang','林畅',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('kehuan','kehuan','柯桓',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('shanwzh','shanwzh','单文政',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liyazhou','liyazhou','李亚洲',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('xuruitr','xuruitr','徐芮',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('jiwt','jiwt','季维涛',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('xiaoll','xiaoll','肖露露',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('weixingtr','weixingtr','魏星(平台)',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('chenjiaj','chenjiaj','陈佳佳',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('lilitr','lilitr','李丽',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('maorx','maorx','毛瑞雪',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangzehao','wangzehao','王泽浩',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liuyangtr','liuyangtr','刘洋',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('lijibo','lijibo','李纪波',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('xia-xin','xia-xin','夏鑫',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('taoshunhang','taoshunhang','陶顺行',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('xuyangyang','xuyangyang','许阳阳',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zouchengyuan','zouchengyuan','邹承元',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zangzhiyuan','zangzhiyuan','臧志远',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('huangwenchao','huangwenchao','黄文超',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangwei01','wangwei01','王维',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liuqiangtr','liuqiangtr','刘强',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('renmh','renmh','任明虎',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('hefangfang','hefangfang','何方芳',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wubai','wubai','邬柏',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('shilltr','shilltr','史亮亮',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('chenghy','chenghy','程红意',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('linfl','linfl','林凤兰',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wang-xh','wang-xh','王晓航',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('tiandi','tiandi','田迪',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhouaihua','zhouaihua','周爱华',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhaoleitr','zhaoleitr','赵磊',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('pengxd','pengxd','彭晓迪',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('yisiqi','yisiqi','仪思奇',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('caoguiyuan','caoguiyuan','曹桂源',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zengzhen','zengzhen','曾珍',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liyongtr','liyongtr','李勇',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('liu_bintr','liu_bintr','刘斌（平台）',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('lizhaorui','lizhaorui','李兆锐',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('libtr','libtr','李斌',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('xuyunlong','xuyunlong','徐云龙',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangjiazhao','wangjiazhao','王家照',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('sunyy','sunyy','孙岳岳',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('luzhanxiang','luzhanxiang','卢占翔',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangjun03','wangjun03','王君',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhoulijie','zhoulijie','周立杰',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhangshixu','zhangshixu','张世旭',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('yangyb','yangyb','杨艳斌',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('huangchy','huangchy','黄呈宇',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('daihh','daihh','戴海宏',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangjiegj','wangjiegj','王洁',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhengshanlin','zhengshanlin','郑善林',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhimaofeng','zhimaofeng','支茂峰',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangxufa','wangxufa','王续法',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('sunlixin','sunlixin','孙立新',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhengwb','zhengwb','郑伟波',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('li.kai','li.kai','李凯pt',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('lilj','lilj','李琳杰',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('chenshj','chenshj','陈圣杰',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('wangyandong','wangyandong','王延东',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('zhouxg','zhouxg','周祥国',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('yuexg','yuexg','岳现国',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('gongbj','gongbj','宫保金',0,'admin','001',0,true,10000,'admin',now());
insert into gspuser (id,code,name_chs,usertype,usergroup,sysorgid,seclevel,sysinit,tenantid,creator,createdtime)VALUES('tianshj','tianshj','田尚杰',0,'admin','001',0,true,10000,'admin',now());
--2.1userInfo: execute it after insert into gspuser--
delete from gspuserextend;
insert into gspuserextend(id,userid,email,phone,mobilephone,address,creator) 
select id,id,code||'@inspur.com','','','浪潮','9999' from gspuser;
--3.sysorg--
delete from gspsysorg;
insert into gspsysorg(id,code,name_chs,nodetype,sortorder,path,layer,isdetail,parentid,creator)
VALUES('001','001','浪潮国际',0,0,'0001',1,false,'','9999');
insert into gspsysorg(id,code,name_chs,nodetype,sortorder,path,layer,isdetail,parentid,creator)
VALUES('platform','platform','平台技术部',1,0,'00010001',2,false,'001','9999');
insert into gspsysorg(id,code,name_chs,nodetype,sortorder,path,layer,isdetail,parentid,creator)
VALUES('rtf','rtf','运行框架组',1,0,'000100010001',3,true,'platform','9999');
--4.gsprole--

delete from gsprole;
insert into gsprole(id,code,name_chs,rolegroup,sysinit,state,creator)VALUES
('9999','9999','系统管理功能组','admin',true,0,'admin');
--5.gspposition--
delete from gspposition;
insert into gspposition(id,code,name_chs,postype,posgroup,sysinit,creator)VALUES
('9999','9999','系统管理岗位',0,'admin',true,'admin');



-----------------------------------BE用的权限测试数据  Start----------------------------------------------------------
/************权限对象预制*************/
--预制权限对象--
INSERT into gspAuthorization(id,code,name_chs,name_en,type,sortorder,sysinit,creator)
select 'BE02','BE02','供应链公共对象','SCM Common',1,1,'1','admin' where not exists(select 1 from gspAuthorization where id='BE02');
insert into gspAuthorization(id,code,name_chs,name_en,type,sortorder,sysinit,creator)
select 'BE01','BE01','销售订单','Sale Order',1,1,'1','admin' where not exists(select 1 from gspAuthorization where id='BE01');

insert into gspAuthorization(id,code,name_chs,name_en,type,sortorder,sysinit,creator)
select 'sysTest','sysTest','权限测试','Security Test',1,1,'1','admin' where not exists(select 1 from gspAuthorization where id='sysTest');


/************权限字段预制*************/
insert into gspAuthfield(id,code,name_chs,name_en,type,path,layer,isdetail,parentId,sortorder,sysinit,creator)
select 'ERP','ERP','ERP','ERP',0,'0001',1,'0','',0,'1','admin' where not exists(select 1 from gspAuthfield where id='ERP');


insert into gspAuthfield(id,code,name_chs,name_en,type,path,layer,isdetail,parentId,sortorder,sysinit,creator)
select 'BEDRP','BEDRP','供应链','SCM',0,'00010003',2,'0','ERP',1,'1','admin' where not exists(select 1 from gspAuthfield where id='BEDRP');
insert into gspAuthfield(id,code,name_chs,name_en,type,path,layer,isdetail,parentId,sortorder,sysinit,creator)
select 'BESALE','BESALE','销售','Sale',0,'000100030001',3,'0','BEDRP',1,'1','admin' where not exists(select 1 from gspAuthfield where id='BESALE');


insert into gspAuthfield(id,code,name_chs,name_en,type,path,layer,isdetail,parentId,sortorder,sysinit,creator)
select 'SYSPUB','SYSPUB','系统公共','SysManager Common',0,'00010002',2,'0','ERP',2,'1','admin' where not exists(select 1 from gspAuthfield where id='SYSPUB');
insert into gspAuthfield(id,code,name_chs,name_en,type,path,layer,isdetail,parentId,sortorder,sysinit,creator)
select 'SYS105','SYS105','系统管理','SysManager',0,'000100020001',3,'0','SYSPUB',1,'1','admin' where not exists(select 1 from gspAuthfield where id='SYS105');
insert into gspAuthfield(id,code,name_chs,name_en,type,path,layer,isdetail,parentId,sortorder,sysinit,creator)
select 'sysTest','sysTest','权限测试','Security Test',1,'0001000200010002',4,'1','SYS105',1,'1','admin' where not exists(select 1 from gspAuthfield where id='sysTest');
delete from gspauthField where id='BMBE01';
INSERT INTO gspauthField (id, code, name_chs,name_en, path, layer, isdetail, parentid, sortorder, sysinit, datasourceid, 
datasourcetype, datafetcherserialize, aofetchertype, partitiontable, isyear, state, note, creator, isglobal,type)
 VALUES ('BMBE01', 'BMBE01', '部门权限','department permission', '0001', '1', '1', 'BESALE', 
'1', '1', 'BM', '1', '<?xml version="1.0" encoding="UTF-8"?>
<DataFetcher>
		<DataSource>BM</DataSource>
		<DataSourceType>1</DataSourceType>
		<FetcherType>1</FetcherType>
		<HierarchicalType>0</HierarchicalType>
		<Key>id</Key>
		<Filter><![CDATA[]]></Filter>
		<Sort><![CDATA[]]></Sort>
		<ListElements>
			<ElementId>code</ElementId>
			<ElementId>name</ElementId>
		</ListElements>
	</DataFetcher>
',  '1', 'gspauresultBMBE01', '0', '0', NULL, 'admin', '0',1);

--dbo数据预制--
delete from gspdatabaseobject where id = 'BM';
insert into gspdatabaseobject(id, code,name,isfiscaltable, type, isi18nobject, tenantidcolumncode, version, content) VALUES ('BM', 'BM','BM','f', '0', '1', '', '1.0', '{
    "columns": [
        {
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "id",
            "name": "id",
            "description": null,
            "type": 0,
            "version": null
        },
		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "code",
            "name": "code",
            "description": "编号",
            "type": 0,
            "version": null
        },	
		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "name",
            "name": "name",
            "description": "名称",
            "type": 0,
            "version": null
        }
    ],
    "universalColumnInfo": null,
    "isI18nObject": false,
    "isSynHis": false,
    "multiLanguageColumns": null,
    "tenantIdentityColumn": null,
    "timestampColumn": null,
    "primaryKey": null,
    "indexes": [],
    "id": "bm",
    "name": "bm",
    "description": null,
    "type": 0,
    "version": "1.0"
}');

insert into BM(id,code,name,orgId) values('销售一部','01','销售一部','001');
insert into BM(id,code,name,orgId) values('销售二部','02','销售二部','001');
insert into BM(id,code,name,orgId) values('销售三部','01','销售三部','001');
insert into BM(id,code,name,orgId) values('销售四部','02','销售四部','001');
insert into BM(id,code,name,orgId) values('销售五部','02','销售五部','001');

delete from gspauthField where id='usergroup';
INSERT INTO gspauthField (id, code, name_chs,name_en, path, layer, isdetail, parentid, sortorder, sysinit, datasourceid, 
datasourcetype, datafetcherserialize, aofetchertype, partitiontable, isyear, state, note, creator, isglobal,type)
 VALUES ('usergroup', 'usergroup', '用户分组','user group', '0001', '1', '1',  'SYS105', 
'1', '1', 'usergroup', '1', NULL, '1', 'gspauresultusergroup', '0', '0', NULL, 'admin', '0',1);




/************权限字段、权限对象、数据操作关系预制*************/
/*部门权限*/
delete from gspauthEntry where authorizationId='BE01' and authField='BMBE01';
insert into gspauthEntry(id,authorizationId,authField,ctrlobj,state,creator)
values('BE01-01','BE01','BMBE01','1','1','admin');
delete from gspauthPermission where authorizationId='BE01' AND authField='BMBE01';
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('BE01-02','BE01','BMBE01','001','admin');
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('BE01-03','BE01','BMBE01','003','admin');
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('BE01-04','BE01','BMBE01','004','admin');
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('BE01-05','BE01','BMBE01','005','admin');
/*用户分组权限*/
delete from gspauthEntry where authorizationId='sysTest' and authField='usergroup';
insert into gspauthEntry(id,authorizationId,authField,ctrlobj,state,creator)
values('sysTest01-01','sysTest','usergroup','1','1','admin');
delete from gspauthPermission where authorizationId='sysTest' AND authField='usergroup';
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('sysTest01-02','sysTest','usergroup','001','admin');
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('sysTest01-03','sysTest','usergroup','003','admin');
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('sysTest01-04','sysTest','usergroup','004','admin');
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('sysTest01-05','sysTest','usergroup','005','admin');
/*部门权限分配结果预制*/
delete from gspauresultBMBE01;
insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackage','BE01','BMBE01','001','销售一部');

insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackage','BE01','BMBE01','001','销售二部');

insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackage','BE01','BMBE01','001','销售三部');

insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackage','BE01','BMBE01','001','销售四部');

insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackage','BE01','BMBE01','001','销售五部');

insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackage','BE01','BMBE01','004','销售一部');
insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('02','BEPackage','BE01','BMBE01','004','销售三部');

insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackageAll','BE01','BMBE01','001','*');
insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackageAll','BE01','BMBE01','004','*');
insert into gspauresultBMBE01(id,packageId,authorizationid,authField,authOpId,aodata)
values('01','BEPackageAll','BE01','BMBE01','004','*');

-----------------------------------功能权限Start----------------------------------------------------------
/************插入功能操作*************/
/*1.插入功能操作目录*/
delete from gspoperation where id in('BEFTutorial');
insert into gspoperation(id,code,name_chs,type,sortorder,sysinit,creator,note)
values('BEFTutorial','BEFTutorial','销售订单',0,'2','1','admin','01');
/*2.插入功能操作*/
delete from gspoperation where id in('addBE','delBE','editBE','auditBE','queryBE');
insert into gspoperation(id,code,name_chs,type,parentId,sortorder,sysinit,creator,note)
values('queryBE','queryBE','查看',1,'BEFTutorial','1','1','admin','01');
insert into gspoperation(id,code,name_chs,type,parentId,sortorder,sysinit,creator,note)
values('addBE','addBE','新增',1,'BEFTutorial','1','1','admin','01');
insert into gspoperation(id,code,name_chs,type,parentId,sortorder,sysinit,creator,note)
values('delBE','delBE','删除',1,'BEFTutorial','1','1','admin','01');
insert into gspoperation(id,code,name_chs,type,parentId,sortorder,sysinit,creator,note)
values('editBE','editBE','修改',1,'BEFTutorial','1','1','admin','01');
insert into gspoperation(id,code,name_chs,type,parentId,sortorder,sysinit,creator,note)
values('auditBE','auditBE','稽核',1,'BEFTutorial','1','1','admin','01');
/************功能操作权限预制*************/
/*预制功能组*/
delete from gspRole where id='BE';
insert into gspRole (id,code,name_chs,rolegroup,sysinit,state,creator)
values('BE','BE','BE','01',true,0,'admin');
delete from gspRole where id='BEAll';
insert into gspRole (id,code,name_chs,rolegroup,sysinit,state,creator)
values('BEAll','BEAll','BEAll','01',true,0,'admin');
/**功能组授权功能操作**/
delete from gspRoleOp where  roleId='BE' and operationid in('addBE','delBE','editBE','queryBE');
delete from gspRoleOp where  roleId='BEAll' and operationid in('addBE','delBE','editBE','queryBE');
insert into gspRoleOp(id,roleid,operationid,Creator)values('BE01','BE','addBE','admin');
insert into gspRoleOp(id,roleid,operationid,Creator)values('BE02','BE','editBE','admin');
insert into gspRoleOp(id,roleid,operationid,Creator)values('BE03','BE','queryBE','admin');
insert into gspRoleOp(id,roleid,operationid,Creator)values('BEAll01','BEAll','addBE','admin');
insert into gspRoleOp(id,roleid,operationid,Creator)values('BEAll02','BEAll','editBE','admin');
insert into gspRoleOp(id,roleid,operationid,Creator)values('BEAll03','BEAll','delBE','admin');
insert into gspRoleOp(id,roleid,operationid,Creator)values('BE021','BEAll','queryBE','admin');
 /**预制岗位**/
 delete from gspposition where id in('BE','BEAll');
insert into gspposition(id,code,name_chs,postype,posgroup,sysinit,creator)values('BE','BE','BE',0,'','1','9999');
insert into gspposition(id,code,name_chs,postype,posgroup,sysinit,creator)values('BEAll','BEAll','BEAll',0,'','1','9999');
/**预制岗位功能组的关系**/
delete from gspPosRole where positionID='BE' and roleID='BE';
delete from gspPosRole where positionID='BEAll' and roleID='BEAll';
insert into gspPosRole(id,roleid,positionId,Creator)values('BE01','BE','BE','admin');
insert into gspPosRole(id,roleid,positionId,Creator)values('BE02','BEAll','BEAll','admin');
 /**用户授权功能组**/
 delete from gspUserRole where id in('BE01','BE02');
insert into gspUserRole(id,userId,roleId,creator)
select random()*1000000000000000,ID,'BEAll','admin' from gspUser where id not in('zhangjintr','zhengwb') and Id not in(select userId from gspUserRole);
insert into gspUserRole(id,userid,roleid,Creator)values('BE01','zhangjintr','BE','admin');
insert into gspUserRole(id,userid,roleid,Creator)values('BE02','zhengwb','BE','admin');
 /**用户授权岗位，岗位是为了构造数据权限用的，所有数据权限都在岗位上，这里岗位ID和功能组ID是一一对应的**/
insert into gspUserPos(id,userId,positionID,creator)
select random()*1000000000000000,ID,'BEAll','admin' from gspUser where id not in('zhangjintr','zhengwb','admin')and Id not in(select userId from gspUserPos);
delete from gspuserPos where id in('01','02','03');
insert into gspUserPos(id,userId,positionID,creator)values('01','zhangjintr','BE','admin');
insert into gspUserPos(id,userId,positionID,creator)values('02','zhengwb','BE','admin');
insert into gspUserPos(id,userId,positionID,creator)values('03','admin','BE','admin');
 /**数据权限包**/
delete from GSPPackagePosition where id in('001','002');
insert into GSPPackagePosition(id,packageId,ownerId,creator)values('001','BEPackage','BE','admin');
insert into GSPPackagePosition(id,packageId,ownerId,creator)values('001','BEPackageAll','BEAll','admin');



-----------------------------------BE用的权限测试数据  END----------------------------------------------------------
-----------------------------------数据权限Start----------------------------------------------------------

------------------------------------组织全局权限------------------------------------

--dbo系统管理数据预制--
delete from gspdatabaseobject where id = 'gspsysorganization';
insert into gspdatabaseobject(id, code,name,isfiscaltable, type, isi18nobject, tenantidcolumncode, version, content) VALUES ('gspsysorganization', 'gspsysorg','gspsysorg','f', '0', '1', '', '1.0', '{
    "columns": [
        {
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "id",
            "name": "id",
            "description": null,
            "type": 0,
            "version": null
        },
		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "code",
            "name": "code",
            "description": "编号",
            "type": 0,
            "version": null
        },	
		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "name",
            "name": "name_chs",
            "description": "名称",
            "type": 0,
            "version": null
        },
		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "path",
            "name": "path",
            "description":  "分级码",
            "type": 0,
            "version": null
        },		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "parentId",
            "name": "parentId",
            "description": null,
            "type": 0,
            "version": null
        }
    ],
    "universalColumnInfo": null,
    "isI18nObject": false,
    "isSynHis": false,
    "multiLanguageColumns": null,
    "tenantIdentityColumn": null,
    "timestampColumn": null,
    "primaryKey": null,
    "indexes": [],
    "id": "gspsysorganization",
    "name": "gspsysorg",
    "description": null,
    "type": 0,
    "version": "1.0"
}');
--系统组织全局权限行权限--
delete from gspauthField where id='sysOrgRow';
INSERT INTO gspauthField (id, code, name_chs,name_en,type,isglobal, path, layer, isdetail, parentid, sortorder, sysinit, datasourceid, datasourcetype, datafetcherserialize, aofetchertype, partitiontable,
isyear, state, note, creator) VALUES ('sysOrgRow', 'sysOrgRow', '系统组织全局行权限', 'global sysManager organization permission',1, '1','0010', '1', '1', 'SYS105', '0', '0', 'gspsysorganization', '1',
 '<?xml version="1.0" encoding="UTF-8"?>
<DataFetcher>
		<DataSource>gspsysorganization</DataSource>
		<DataSourceType>1</DataSourceType>
		<FetcherType>1</FetcherType>
		<HierarchicalType>0</HierarchicalType>
		<Key>id</Key>
		<Filter><![CDATA[]]></Filter>
		<Sort><![CDATA[]]></Sort>
		<ListElements>
			<ElementId>code</ElementId>
			<ElementId>name</ElementId>
		</ListElements>
	</DataFetcher>
', '1', 'GSPAuresultsysOrg', '0', '1', NULL, 'admin');
--预制全局权限分配实体关系--
delete from gspauthEntry where authorizationId='GlobalId' and authField='sysOrgRow';
insert into gspauthEntry(id,authorizationId,authField,ctrlobj,state,creator)
values('GlobalId','GlobalId','sysOrgRow','1','1','admin');
--预制和操作的关系--
delete from gspauthPermission where authorizationId='GlobalId' AND authField='sysOrgRow';
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('GlobalId','GlobalId','sysOrgRow','GlobalId','admin');

--------------------------------------组织全局权限结束------------------------------------------------
-------规则权限-------------------------------------
delete from gspauthEntry where authorizationId='sysTest' and authField='sysOrg';
insert into gspauthEntry(id,authorizationId,authField,ctrlobj,state,creator)
values('rule001','sysTest','sysOrg','1','1','admin');
delete from gspauthPermission where authorizationid='sysTest' and authField='sysOrg';
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('rule002','sysTest','sysOrg','001','admin');

delete from gspAuresultSysorg;
insert into gspAuresultSysorg(id,packageid,authorizationid,authField,authOpId,aodata,ruledata,groupid,fieldaccessflag)
values('002','BEPackage','sysTest','sysOrg','001','','<?xml version="1.0" encoding="utf-8"?><Condition><ExpressionCollection>
<Expression type="1" needInput="False" lbracket="" variable="Selected" value="001" displayValue="" variableFeatureValue1="" variableFeatureValue2="" 
rbracket="" relation="or" /><Expression needInput="False" lbracket="(" variable="SelectedAndDirectChild" value="001" displayValue="" 
variableFeatureValue1="" variableFeatureValue2="" rbracket="" relation="or" /><Expression type="1" needInput="False" lbracket=""
 variable="SelectedChild" value="001" displayValue="" variableFeatureValue1="" variableFeatureValue2="" rbracket=")" relation="" />
 </ExpressionCollection></Condition>','1','0');
 
  
delete from gspauthField where id='sysOrg';

INSERT INTO gspauthField (id, code, name_chs,name_en, path, layer, isdetail, parentid, sortorder, sysinit, datasourceid, datasourcetype, datafetcherserialize, aofetchertype, partitiontable, isyear, state, note, creator, createdtime, 
lastmodifier, lastmodifiedtime, isglobal,type) VALUES ('sysOrg', 'sysOrgTest1', '系统组织','system organization', '0001', '1', '1', 'SYS105', '0', '0', 'gspsysorganization', '1',
 '<?xml version="1.0" encoding="UTF-8"?>
<DataFetcher>
		<DataSource>gspsysorganization</DataSource>
		<DataSourceType>1</DataSourceType>
		<FetcherType>3</FetcherType>
		<HierarchicalType>2</HierarchicalType>
		<ParentField>parentId</ParentField>
		<PathField>path</PathField>
		<PathLength>4</PathLength>
		<Key>id</Key>
		<Filter><![CDATA[]]></Filter>
		<Sort><![CDATA[]]></Sort>
		<ListElements>
			<ElementId>code</ElementId>
			<ElementId>name</ElementId>
		</ListElements>
	</DataFetcher>
', '3', 'GSPAuresultsysOrg', '0', '1', NULL, 'lilitr', '2018-06-15 06:36:03.936603', 'lilitr', '2018-06-15 06:36:04.114765', '1',1);


-----------------组织过滤的权限--------------------------------------
insert into TestBM(id,code,name,orgId) values('01','01','部门01','001');
insert into TestBM(id,code,name,orgId) values('02','02','部门02','001');
insert into TestBM(id,code,name,orgId) values('01','01','部门03','001');
insert into TestBM(id,code,name,orgId) values('02','02','部门04','001');
delete from gspauthEntry where authorizationId='sysTest' and authField='BM';
insert into gspauthEntry(id,authorizationId,authField,ctrlobj,state,creator)
values('groupbm001','sysTest','BM','1','1','admin');
delete from gspauthpermission where authorizationid='sysTest' and authField='BM';
insert into gspauthpermission(id,authorizationId,authField,authopid,creator)
values('groupbm001','sysTest','BM','001','admin');

delete from gspAuresultBM;
insert into gspAuresultBM(id,packageid,authorizationid,authField,authOpId,aodata,ruledata,groupid,fieldaccessflag)
values('001','BEPackageAll','sysTest','BM','001','*','','1','0');
insert into gspAuresultBM(id,packageid,authorizationid,authField,authOpId,aodata,ruledata,groupid,fieldaccessflag)
values('002','BEPackage','sysTest','BM','001','01','','1','0');

 delete from gspUserPosOrg where userid='lilitr' and positionId='BE' and orgId='001';
 insert into gspUserPosOrg (id,userId,positionId,orgId,orgCode,orgName,orgtypeid,orgtypename,creator,createdtime)
values('001','lilitr','BE','001','001','浪潮国际','sysOrg','组织','9999',now());

delete from gspAuresultSysorg where id='001' and packageId='BEPackage' and authField='sysOrg' and authOpId='GlobalId';
insert into gspAuresultSysorg(id,packageid,authorizationid,authField,authOpId,aodata,ruledata,groupid,fieldaccessflag)
values('002','BEPackage','GlobalId','sysOrg','GlobalId','','<?xml version="1.0" encoding="utf-8"?><Condition><ExpressionCollection>
<Expression needInput="False" lbracket="" variable="Selected" value="001" displayValue="" variableFeatureValue1="" variableFeatureValue2="" 
rbracket="" relation="or" /><Expression needInput="False" lbracket="(" variable="SelectedAndDirectChild" value="001" displayValue="" 
variableFeatureValue1="" variableFeatureValue2="" rbracket="" relation="or" /><Expression needInput="False" lbracket=""
 variable="SelectedChild" value="001" displayValue="" variableFeatureValue1="" variableFeatureValue2="" rbracket=")" relation="" />
 </ExpressionCollection></Condition>','1','0');
delete from gspAuresultSysorg where id='002' and packageId='BEPackageAll' and authField='sysOrg' and authOpId='GlobalId';
 insert into gspAuresultSysorg(id,packageid,authorizationid,authField,authOpId,aodata,ruledata,groupid,fieldaccessflag)
values('002','BEPackageAll','GlobalId','sysOrg','GlobalId','*','','1','0');

delete from gspauthField where id='BM';
INSERT INTO gspauthField (id, code, name_chs,name_en, path, layer, isdetail, parentid, sortorder, sysinit, datasourceid, datasourcetype, datafetcherserialize, aofetchertype, partitiontable, isyear, state, note, creator, createdtime, 
lastmodifier, lastmodifiedtime, isglobal,type) VALUES ('BM', 'BM', '部门','department', '0001', '1', '1', 'SYS105', '0', '0', 'testbm', '1',
 '<?xml version="1.0" encoding="UTF-8"?>
<DataFetcher>
		<DataSource>testbm</DataSource>
		<DataSourceType>1</DataSourceType>
		<FetcherType>1</FetcherType>
		<HierarchicalType>0</HierarchicalType>	
		<Key>id</Key>
		<Filter><![CDATA[]]></Filter>
		<Sort><![CDATA[]]></Sort>
		<ListElements>
			<ElementId>code</ElementId>
			<ElementId>name</ElementId>
		</ListElements>
	</DataFetcher>
', '1', 'GSPAuresultbm', '0', '1', NULL, 'lilitr', '2018-06-15 06:36:03.936603', 'lilitr', '2018-06-15 06:36:04.114765', '0',1);


delete from gspauthFieldgroup where authField='BM' and groupauthField='sysOrg';
insert into gspauthFieldgroup(id,authField,groupauthField,refelementId,isaugroup,creator,createdTime)
values('bm001','BM','sysOrg','orgid','f','admin',now());


/**DBO**/
delete from gspdatabaseobject where id = 'testbm';
insert into gspdatabaseobject(id, code,name,isfiscaltable, type, isi18nobject, tenantidcolumncode, version, content) VALUES ('testbm', 'testbm','testbm','f', '0', '1', '', '1.0', '{
    "columns": [
        {
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "id",
            "name": "ID",
            "description": null,
            "type": 0,
            "version": null
        },
		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "code",
            "name": "code",
            "description": "编号",
            "type": 0,
            "version": null
        },	
		{
            "dataType": 0,
            "length": 36,
            "precision": 0,
            "scale": 0,
            "defaultValue": "",
            "ifPrimaryKey": false,
            "isNullable": false,
            "isUnique": false,
            "id": "name",
            "name": "name",
            "description": "名称",
            "type": 0,
            "version": null
        }
    ],
    "universalColumnInfo": null,
    "isI18nObject": false,
    "isSynHis": false,
    "multiLanguageColumns": null,
    "tenantIdentityColumn": null,
    "timestampColumn": null,
    "primaryKey": null,
    "indexes": [],
    "id": "testbm",
    "name": "testbm",
    "description": null,
    "type": 0,
    "version": "1.0"
}');


-----------------------------------列权限自测用----------------------------------------------------------
delete from gspauthField where id='column1';
INSERT INTO gspauthField (id, code, name_chs,name_en, path, layer, isdetail, parentid, sortorder, sysinit, 
datasourceid, datasourcetype, datafetcherserialize, aofetchertype, partitiontable, isyear, 
state, creator,type)
VALUES ('column1', 'column1', '列权限','column permission', '0001', '1', '1', 'SYS105', '0', '1', NULL, '0', NULL, '2', 'gspauresultcolumn1', '0', '0', 
'admin',1);
delete from gspauthEntry where authorizationId='sysTest' and authField='column1';
insert into gspauthEntry(id,authorizationId,authField,ctrlobj,state,creator)
values('column01','sysTest','column1','1','1','admin');
delete from gspauthPermission where authorizationId='sysTest' AND authField='column1';
insert into gspauthPermission(id,authorizationId,authField,authopid,creator)
values('column02','sysTest','column1','004','admin');
insert into gspauresultcolumn1(id,packageId,authorizationid,aodata,authField,authOpId,fieldaccessflag)
values('column01','BEPackage','sysTest','code','column1','004','2');
insert into gspauresultcolumn1(id,packageId,authorizationid,aodata,authField,authOpId,fieldaccessflag)
values('column02','BEPackage','sysTest','name','column1','004','3');
insert into gspauresultcolumn1(id,packageId,authorizationid,aodata,authField,authOpId,fieldaccessflag)
values('column03','BEPackageAll','sysTest','code','column1','004','2');
insert into gspauresultcolumn1(id,packageId,authorizationid,aodata,authField,authOpId,fieldaccessflag)
values('column04','BEPackageAll','sysTest','name','column1','004','3');
-----------------------------------数据权限End----------------------------------------------------------

--认证数据--
delete from GSPAuthenStrategy;
insert into GSPAuthenStrategy(id,authenstrategyid,name,authentypes,relationships,tenantid,CreatedTime,Creator,LastModifier,LastModifiedTime)values
('5B203A18-5C7E-407A-BF6F-C4DDCAECE472','UserPassword','用户名密码认证','UserPassword','Singularity','10000',now(),'admin','admin',now());
insert into GSPAuthenStrategy(id,authenstrategyid,name,authentypes,relationships,tenantid,CreatedTime,Creator,LastModifier,LastModifiedTime)values
('5B203A18-5C7E-407A-BF6F-C4DDCAECE471','Windows','域认证','Windows','Singularity','10000',now(),'admin','admin',now());

delete from GSPAuthenType;
insert into GSPAuthenType(id,code,name,tenantid,isactive,loginuidesign,loginuiscript,sysmanageruidesign,sysmanageruiscript,CreatedTime,Creator,LastModifier,LastModifiedTime)
values('8D1A3CBE-C3D2-4D57-BF37-4387B0FE2564','UserPassword','用户名密码认证','10000','1',null,null,null,null,now(),'admin','admin',now());
insert into GSPAuthenType(id,code,name,tenantid,isactive,loginuidesign,loginuiscript,sysmanageruidesign,sysmanageruiscript,CreatedTime,Creator,LastModifier,LastModifiedTime)
values('8D1A3CBE-C3D2-4D57-BF37-4387B0FE2561','Windows','域认证','10000','1',null,null,null,null,now(),'admin','admin',now());

delete from GSPAuthenAccount;
insert into GSPAuthenAccount select id,id,code,tenantid,'用户名密码认证','UserPassword'from gspuser;

delete from GSPUserPassword;
insert into GSPUserPassword select userid,userid ,accountid,'96niR3fsIyEsVNejULxb6lR3/bs=',tenantid ,now(),'admin','admin',now(),
'9999','0',now() from gspauthenaccount;

delete from GSPAuthenMapping;
insert into GSPAuthenMapping select id,id,code,'Windows','10000',now(),'admin','admin',now() from gspuser;



