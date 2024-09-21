FROM mongo:6.0 AS mongodb

VOLUME /data/db

EXPOSE 27017

CMD ["mongod"]

FROM node:20-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install pm2 -g

EXPOSE 3000

CMD ["npm", "run", "start:dev"]