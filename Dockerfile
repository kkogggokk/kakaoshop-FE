# STEP1. Build React App
FROM --platform=$BUILDPLATFORM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./

# 환경변수 설정
ENV REACT_APP_SHOP_API_URL=http://localhost:8080
ENV REACT_APP_COUPON_API_URL=http://localhost:8081

RUN npm ci
COPY . .
RUN npm run build

# STEP2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]