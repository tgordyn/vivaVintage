#---------Firts Phase - Build -----------------
FROM maven AS builder
COPY pom.xml /usr/src/app/
WORKDIR /usr/src/app/
RUN mvn -f ./pom.xml dependency:resolve
COPY src/ /usr/src/app/src/
RUN mvn -f ./pom.xml package -DskipTests
#---------Second Phase - Deploy-----------------
FROM openjdk:17
WORKDIR /usr/src/app/
COPY --from=builder /usr/src/app/target ./target/
RUN ls ./target
EXPOSE 8080
ENTRYPOINT ["java","-jar","./target/vivavintage.jar"]
