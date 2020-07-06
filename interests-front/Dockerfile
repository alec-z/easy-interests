FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm build .
FROM nginx:alpine as runner
COPY --from=builder /app/dist/interests-front2 /usr/share/nginx/html
COPY ./nginx-backend.conf /etc/nginx/conf.d/default.conf
