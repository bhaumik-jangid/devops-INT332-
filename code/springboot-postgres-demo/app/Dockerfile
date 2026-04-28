# Stage 1: Build the JAR
FROM maven:3.9-eclipse-temurin-21 AS builder

WORKDIR /build
COPY pom.xml .
# Download dependencies separately for better layer caching
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Runtime image (smaller — no Maven, no source)
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app
# Copy only the built JAR from stage 1
COPY --from=builder /build/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
