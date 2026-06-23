# ================================
# Stage 1: Build the Angular App
# ================================
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first to enable Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build Angular app in production mode
RUN npm run build --configuration=production

# ================================
# Stage 2: Serve with Nginx
# ================================
FROM nginx:stable-alpine

# Copy compiled Angular output from build stage
# IMPORTANTE: Cambia "games" por el nombre de tu proyecto
COPY --from=build /dist/games/browser /usr/share/nginx/html

# Replace default Nginx config with custom SPA config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]