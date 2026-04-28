FROM node:20-alpine

WORKDIR /app

# Copy package files first (layer caching optimization)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
