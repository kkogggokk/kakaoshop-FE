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

# Nginx Exporter 설치
RUN apk add --no-cache curl \
    && curl -L https://github.com/nginxinc/nginx-prometheus-exporter/releases/download/v1.4.0/nginx-prometheus-exporter_1.4.0_linux_arm64.tar.gz \
    | tar -xz -C /usr/local/bin \
    && mv /usr/local/bin/nginx-prometheus-exporter /usr/local/bin/nginx-exporter

EXPOSE 80 9113
CMD ["sh", "-c", "nginx -g 'daemon off;' & nginx-exporter -nginx.scrape-uri=http://127.0.0.1/nginx_status"]
