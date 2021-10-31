# Clone

```
git clone https://github.com/golos-blockchain/golos-js-gui

cd golos-js-gui
```

## Manual run

```
yarn install

yarn build

yarn install -g serve

serve -s build
```

or via pm2:

```
yarn install -g pm2

pm2 serve build 8080 --spa
```