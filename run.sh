export NODE_OPTIONS=--openssl-legacy-provider

cd ~/neuro-cabinet-vewers
yarn config set workspaces-experimental true
yarn install

docker network create dcm4chee_network
cd ~/neuro-cabinet-vewers/platform/viewer/.recipes/Nginx-Dcm4che
docker compose down
docker compose up -d

cd ~/neuro-cabinet-vewers/platform/viewer/public
yarn run dev:viewer
