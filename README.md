# Clone

```
git clone https://github.com/golos-blockchain/ui-api

cd ui-api
```

## Deployment

```
docker build . -t golosblockchain/ui-api

docker run -d -p 8080:8080 --name ui-api golosblockchain/ui-api
```

## Manual run

```
yarn install

yarn build

yarn global add serve

serve -s build
```

or via pm2:

```
yarn global add pm2

pm2 serve build 8080 --spa
```
