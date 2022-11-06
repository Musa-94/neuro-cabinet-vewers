export NODE_OPTIONS=--openssl-legacy-provider

docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)

cd ~/neuro-cabinet-vewers
yarn config set workspaces-experimental true
yarn install

docker network create dcm4chee_network
cd ~/neuro-cabinet-vewers/platform/viewer/.recipes/Nginx-Dcm4che
docker compose up -d

cd ~/neuro-cabinet-vewers
yarn build

cd ~/neuro-cabinet-vewers/platform/viewer/public
yarn run dev:viewer
