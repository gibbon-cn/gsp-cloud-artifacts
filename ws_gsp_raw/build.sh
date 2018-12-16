chmod 777 -R gsp_cloud_server \
&& docker build -t localhost:5000/gsp/ws_gsp_file:nightly . \
&& docker push localhost:5000/gsp/ws_gsp_file:nightly
