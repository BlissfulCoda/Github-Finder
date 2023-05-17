FROM node:19-alpine as development

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .


FROM development as production

EXPOSE 8000

ENV NODE_PATH=./build

RUN npm run build