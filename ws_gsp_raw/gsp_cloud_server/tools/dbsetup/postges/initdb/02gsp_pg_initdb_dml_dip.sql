--select * from gspebsevent;
insert into gspebsevent (id,code,name,serviceunit,description,needresponse,issystem) values('DataSharingEvent','DataSharingEvent','基础数据缓存同步Event','ls','基础数据缓存同步Event',false,false);
--select * from gspeventsub;
insert into gspebssubscriber (id,code,name,invokeinfo,serviceunit,description,compensable) values('DataSharingEvent_dip','DataSharingEvent_dip','基础数据缓存同步订阅_dip','Inspur.Gsp.Svc.DataSharing.Service;Inspur.Gsp.Svc.DataSharing.Service.DataSharingEventSubscriber;SaveChangedData','dip','基础数据缓存同步订阅_dip',false);
insert into gspebssubscriber (id,code,name,invokeinfo,serviceunit,description,compensable) values('DataSharingEvent_wf','DataSharingEvent_wf','基础数据缓存同步订阅_wf','Inspur.Gsp.Svc.DataSharing.Service;Inspur.Gsp.Svc.DataSharing.Service.DataSharingEventSubscriber;SaveChangedData','wf','基础数据缓存同步订阅_wf',false);
--select * from gspeventrelation;
insert into gspebspubsub (id,eventid,subscriberid) values('DataSharingEvent_dip','DataSharingEvent','DataSharingEvent_dip');
insert into gspebspubsub (id,eventid,subscriberid) values('DataSharingEvent_wf','DataSharingEvent','DataSharingEvent_wf');
