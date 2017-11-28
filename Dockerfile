FROM node:8.4-alpine

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY package.json package.json
RUN npm install

COPY . $APP_HOME
ENTRYPOINT ["npm","start"]
