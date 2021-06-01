# Clone

```
git clone https://github.com/golos-blockchain/golos-js-gui

cd golos-js-gui
```

## Manual run

```
npm install

npm build

npm install -g serve

serve -s build
```

or via pm2:

```
npm install -g pm2

pm2 serve build 8080 --spa
```