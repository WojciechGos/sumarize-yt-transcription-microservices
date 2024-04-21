FROM openjdk:21-jdk-slim

ARG JAR_FILE=target/*.jar

COPY ./target/server-0.0.1-SNAPSHOT.jar app.jar

# Set the entry point of the container to run the application
CMD ["java", "-jar", "/app.jar"]