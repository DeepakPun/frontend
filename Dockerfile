# Phase One: Build for production
# specify base image
FROM node:24-alpine3.21 AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

# Not strictly necessary when bookmarking volumes, but we can leave it here for learning purposes
COPY . .   

RUN npm run build

# Phase Two: Deploy
FROM nginx:mainline-alpine
# copy static html directory to /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html

