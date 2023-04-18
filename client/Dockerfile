FROM node:19-alpine as development

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

FROM development as production

ENV NODE_PATH=./dist

CMD ["npm", "run", "build"]

# FROM node:18-alpine3.17 as development
# WORKDIR /app
# COPY . /app
# RUN npm install
# RUN npm run build

# FROM nginx:1.17.0-alpine
# COPY --from=development /usr/src/app/dist /var/www/html/
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]