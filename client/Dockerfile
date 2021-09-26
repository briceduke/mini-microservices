FROM node:alpine

ENV CI=true

WORKDIR /app
COPY package.json ./
RUN yarn
COPY ./ ./

RUN yarn build
CMD ["yarn", "serve", "--host"]