FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/tonsV2/surf-easy-edit-frontend.git .

FROM node:alpine as build
COPY --from=clone /app /app
WORKDIR /app
RUN apk update && apk add git && npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
