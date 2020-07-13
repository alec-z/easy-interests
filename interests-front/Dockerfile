FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm run-script ng build -- --prod
FROM nginx:alpine as runner
COPY --from=builder /app/dist/interests-front /usr/share/nginx/html
COPY ./nginx-backend.conf /etc/nginx/conf.d/default.conf
