# Stage 1: Build
FROM node:24-alpine3.23 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production Environment
FROM nginx:stable-alpine
# Copy the 'dist' folder from the build stage to Nginx's serve directory
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80 (standard for Nginx)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]