FROM node:16.1 as build

WORKDIR /var/app
COPY . /var/app
RUN yarn install
RUN yarn build

FROM node:16.1-alpine

RUN yarn global add serve
WORKDIR /var/app
COPY --from=build /var/app/build /var/app/build

EXPOSE 8080
CMD [ "serve", "-l", "tcp://0.0.0.0:8080", "-s", "build" ]
