# Building
FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Prod Image
FROM node:latest
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/build ./build
RUN npm install --only=production
EXPOSE 3000
CMD ["node", "build/server.js"]
