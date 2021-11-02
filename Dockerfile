FROM node:16.1

WORKDIR /var/app
RUN mkdir -p /var/app
ADD package.json yarn.lock /var/app/
RUN yarn install
RUN yarn global add serve

COPY . /var/app

RUN yarn build

ENV PORT 8080
ENV NODE_ENV production

EXPOSE 8080

CMD [ "serve", "-l", "tcp://0.0.0.0:8080", "-s", "build" ]
