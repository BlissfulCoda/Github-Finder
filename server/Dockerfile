FROM node:19-alpine as development

WORKDIR /home/node/app

COPY package.json .

EXPOSE 6379

RUN npm install --only=production
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . .

FROM development as production


ENV NODE_PATH=./build

# RUN npm run build

CMD ["npm", "run", "build"]


