# guess-number

## Building from source

Ensure you have JDK 11 (or newer), Git and Maven 3.1+ installed

    java -version
    git --version
    mvn --version

---    
First clone the guess-number repository:
    
    git clone https://github.com/pedro-hos/guess-number
    cd guess-number/guess-number
    
To build ssl-handshake-debugger run:

    mvn clean package
    
This will build the project.

To run the built artifact, run:

    java -jar target/guess-number-0.0.1-SNAPSHOT.jar 

---
