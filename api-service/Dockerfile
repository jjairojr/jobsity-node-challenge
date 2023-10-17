# Stage 1: Build Image
FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production Image
FROM node:latest
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/build ./build
COPY --from=build /app/prisma ./prisma

EXPOSE 3001

CMD [ "npm", "run", "start:prod" ]
