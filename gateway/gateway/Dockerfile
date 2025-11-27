# Build stage dùng JDK 21
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy cấu hình Maven và source code
COPY pom.xml .
COPY src ./src

# Build jar, bỏ qua test cho nhanh
RUN mvn -q -DskipTests package

# Run stage dùng JRE 21
FROM eclipse-temurin:21-jre
WORKDIR /app

# ⚠️ Đảm bảo tên file jar đúng với file trong target/
# Nếu khác tên, sau này chỉnh lại cho khớp
COPY --from=build /app/target/gateway-0.0.1-SNAPSHOT.jar app.jar

ENV SPRING_PROFILES_ACTIVE=docker
EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]
