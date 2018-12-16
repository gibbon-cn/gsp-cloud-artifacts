FROM gibbonnet/ws_gsp_file:nightly

ADD --chown=user:user ./patch/config/main.json /home/gsp/gsp_cloud_server/config/main.json
ADD --chown=user:user ./patch/config/runtime/caf_cache.json /home/gsp/gsp_cloud_server/config/runtime/caf_cache.json
ADD --chown=user:user ./patch/platform/dev/main/libs/git2-6311e88.so /home/gsp/gsp_cloud_server/platform/dev/main/libs/git2-6311e88.so

WORKDIR /home/gsp/gsp_cloud_server/runtime/libs

EXPOSE 5000

ENTRYPOINT ["dotnet", "Inspur.Ecp.Caf.Communication.Service.dll"]