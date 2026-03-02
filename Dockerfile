### Stage 1 — Build the Angular app
FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx ng build --configuration=production

### Stage 2 — Serve with nginx
FROM nginx:1.27-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV PORT=8080
ENV BASE_URL=""

EXPOSE ${PORT}

ENTRYPOINT ["/entrypoint.sh"]
