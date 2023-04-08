FROM node:19-alpine as development

WORKDIR /home/node/app

COPY package.json .

RUN npm install --only=production
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . .

FROM development as production

EXPOSE 8000

ENV NODE_PATH=./build

CMD ["node", "build/server.js]


