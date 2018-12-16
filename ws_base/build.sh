# ws_base:0.0.1

# 使用DockHub构建镜像

docker pull gibbonnet/gsp2
docker tag gibbonnet/gsp2 localhost:5000/gsp/ws_base:nightly \
&& docker push localhost:5000/gsp/ws_base:nightly

exit 0

# 在本地构建镜像

docker build -t localhost:5000/gsp/ws_base:nightly . \
&& docker push localhost:5000/gsp/ws_base:nightly
