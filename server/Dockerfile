FROM node:19-alpine as development

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

FROM development as production

ENV NODE_PATH=./build

CMD ["node", "start"]