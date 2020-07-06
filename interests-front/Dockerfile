FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm build .
FROM nginx:alpine as runner
COPY --from=0 /app/dist/interests-front /usr/share/nginx/html
COPY ./nginx-backend.conf /etc/nginx/conf.d/default.conf
