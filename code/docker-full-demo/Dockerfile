FROM node:18-alpine
ARG APP_VERSION=1.0
ENV PORT=3000
ENV MESSAGE="Hello from Dockerfile"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ADD data.txt /app/data.txt
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser
EXPOSE 3000
ENTRYPOINT ["sh", "start.sh"]
CMD ["node", "app.js"]
