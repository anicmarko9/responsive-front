## Phase 1
FROM node:20-alpine as builder
WORKDIR /
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci
COPY . .
RUN npm run build

## Phase 2
FROM nginx:1.25-alpine
ENV NODE_ENV production
COPY --from=builder /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
