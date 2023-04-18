FROM node:19-alpine as development

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

FROM development as production

ENV NODE_PATH=./build

EXPOSE 8000

CMD ["node", "start"]