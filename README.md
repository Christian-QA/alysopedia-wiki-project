# Alysopedia Wiki Project

Welcome to the Alysopedia Wiki Project!

Taking onboard our QA Academy training - this is a post-academy self assigned and managed project. The aim is to expand and build on our knowlegde and learn new technologies. The project is split into phases and is currently in the first phase of development.

This first phase is intended to be an admin managed game wiki app to provide and manage a database of additional information and lore for the future game **Alysia Is Mine**.

## Table of Contents

1. [About the Project](#about-the-project)
1. [Project Status](#project-status)

1. [Getting Started](#getting-started)
    1. [Getting the Source](#getting-the-source)
    1. [Dependencies](#dependencies)
    1. [Building](#building)
     <!-- 1. [Installation](#installation)-->
    1. [Usage](#usage)
1. [Release Process](#release-process)
    1. [Versioning](#versioning)
<!--1. [Further Reading](#further-reading)-->

1. [Contributing](#contributing)
1. [How to Get Help](#how-to-get-help)
1. [License](#license)
1. [Authors](#authors)
1. [Acknowledgements](#acknowledgements)

## About the Project

The project is currently split into 4 phases. We are on **Phase 1: Wiki**.

1. Wiki - The main purpose of the project is to create a wiki application, and as it isn't dependent on anything, it's naturally the first stage of the project. This wiki will have the capacity to store vast amounts of data, add it from the user side (as an admin), and display in an aesthetically pleasing manner. With no time constraint on the project, stylising the user interface will not be limited in any way. Once this is complete, the project will be released as v1.0.0.

2. QR - There needs to be a way the application interfaces with the Alysia Is Mine game in order to validate its existence. The decided method is to scan QR codes displayed in the game to unlock certain features of the application i.e. spoiler information. Once this is complete, the project will be released as v2.0.0.

3. Game - Adding onto the second phase, this phase will develop the project from a basic wiki application and become more independent. The objective of this phase is to give the project its own purpose beyond merely being a free extension to Alysia Is Mine. This phase will also look into directly connecting this application to Alysia Is Mine through a currently undetermined method (Node.js's TCP interface is the most likely method). Once this is complete, the project will be released as v3.0.0.

4. Final - Ongoing tweaks to improve functionality, quality-of-life and to build on feedback provided by black-box testers.


<details>
<summary>Technologies that will be used in the project...</summary>

- Version Control System: Git 
- Source Code Management: GitHub 
- Kanban Board: GitHub Boards  
- Database Management System: MongoDB (local for now)
- Back-End Programming Language: Java 
- API Development Platform: Spring  
- Front-End Web Technologies: HTML, CSS, JavaScript, Axios
- Build Tool: Maven 
- Unit Testing: Junit / TestNG, Mockito 
- Integration Testing: Cucumber-Selenium 
- Test Reporting: Surefire / ExtentReports 
- CI Server: Jenkins 
- Static Analysis: SonarQube

</details>

<details>
<summary>Other technologies which are being considered:</summary>

Front-End Web Technologies: Phaser, React
Security Technologies: Spring Security, bcrypt
Cloud Technology: AWS / Azure
Load Testing: JMeter
Other: GameMaker Studios 2, Node.js

</details>

Please see the `documentation` folder for the other documentation.


**[Back to top](#table-of-contents)**

## Project Status 
Current release: v0.1 - in development

**Test Coverage:** For src/main/java: 0% // Overall: 0% // 0 tests

There are currently no test reports as we are in the early stages of the project.
For test reports please see the `documentation` folder.

**Jenkins Status (CI Pipeline):**

N/A


**[Back to top](#table-of-contents)**

## Getting Started

### Getting the Source

This project is [hosted on GitHub](https://github.com/Christian-QA/alysopedia-wiki-project). You can clone this project directly using this command:

```
git clone https://github.com/Christian-QA/alysopedia-wiki-project.git
```
### Dependencies
What things you need to install the software and where to find them. Currently incomplete / in development.

**To Run**

The app is currently still in development.

**IDE's to Develop**
IntelliJ Ultimate [here](https://www.jetbrains.com/idea/download/#section=windows),
Visual Studio Code [here](https://code.visualstudio.com/Download),
Eclipse [here](https://www.eclipse.org/downloads/).

**Links for Dependencies**
Java latest version [here](https://www.oracle.com/java/technologies/javase-downloads.html#JDK14),
Maven [here](https://maven.apache.org/),
MongoDB [here](https://www.mongodb.com/what-is-mongodb),
Git & Git Bash [here](https://git-scm.com/downloads),
Jenkins [here](https://jenkins.io/download/),
Postman [here](https://www.postman.com/downloads/),
Google Chrome [here](https://www.google.com/chrome/)

**External API's**
N/A

**[Back to top](#table-of-contents)**
## Building

How to build this project: 

### Built With

[Maven](https://maven.apache.org/) - Dependency Management

* Warning! The app does not have a 'stop' function, it is advised to only run in an IDE.
* Clone the repo to your machine.
* Open the cmd line / git bash inside the repo file directory.
* Run the following commands:

``` mvn clean package ```

``` mvn spring-boot:run ```

As a Spring app, running the jar with `java -jar FileName.jar` won't work (at least not without some config).

<!--
### Running the tests

The easiest way to run all our existing tests is to right click on `test/java/com.qa.alysopedia` in your IDE and select `Run tests in 'com.qa.alysopedia'` or `Run tests in 'com.qa.alysopedia' with Coverage`

![Run All Tests](https://i.imgur.com/RSGswss.png)

**[Back to top](#table-of-contents)**

#### User acceptance Tests (with Selenium)
Selenium uses the `chromedriver.exe` to run automated tests mocking use of the front-end. You should check that the driver you use matches your version of chrome. Get versions [here](http://chromedriver.chromium.org/).

We have included the `extent-report.xml` and dependencies required to get easy to read test reports in the form of html files.

There are examples of the tests in this project. You can run them like you would run unit tests.

Or take a look at this [selenium-testing](https://github.com/CarolineS-QA/selenium-testing) repo which has other examples.

#### Static analysis
Sonarqube is used for static analysis. We used it to see how well my code conformed to an industry standard, the amount of coverage for my tests, and also highlighting bugs and security warnings.

```
mvn clean package
sonar:sonar -Dsonar.host.url=http://YourVMForSonarQubeIP:PORT/ -Dsonar.login.admin=admin -Dsonar.password=admin
```
![SonarQube example](https://i.imgur.com/zFF3c7m.png)

**[Back to top](#table-of-contents)**
## Installation

Installing Demo

How to get a development environment running:

* Clone the repo to your machine. (fork it first if you want to make changes for yourself).
* Open git bash (git should already be initalised if you clone it otherwise use `git init`).
* It's recommended that you start making changes on a new branch `git checkout -b NAME-OF-YOUR-BRANCH`
* Open as an existing maven project in the IDE of your choice
* You'll probably want to check the **application.properties** file in `src/main/resources` first
* You can change the database connection details and port the web app is hosted on here
* Once configured, you can start developing!
* Find the `App` file in `src/main/java/com.qa.alysopedia`
* There should be an option to `run` the application


Example of getting some data out of the system with Postman:

![Postman createUser](https://i.imgur.com/xerOh0B.jpg)

On localhost:8181 page:
![Development web interface](https://i.imgur.com/kHuocmT.jpg)



Remember you can `Ctrl + Shift + I` to inspect and reach the developer's console.

**[Back to top](#table-of-contents)**
-->

## Usage

This project is intended to be a learning experience as well as an admin managed game wiki app to provide and manage a database of additional information and lore for the future game **Alysia Is Mine**.

**[Back to top](#table-of-contents)**

## Release Process

This project is in development and not yet at 'release' stage - once the first phase is complete a v.1.0.0 will be released (planned for August 2020). Each phase will be a new release.

There are currently no time contraints set on this project.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For a list of available versions, see the [repository tag list](https://github.com/Christian-QA/alysopedia-wiki-project/tags).

**[Back to top](#table-of-contents)**
<!--
## Further Reading

**[Back to top](#table-of-contents)**
-->
## Contributing

Currently we are not accepting contributions due to the nature of this project being part of our continuted learning.

<!-- Please review [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on our code of conduct and development process (this is currently in development). -->

## How to get help

If you have questions regarding the project you can get in touch via email at: carstracode@gmail.com

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

**[Back to top](#table-of-contents)**

## Authors

* **Christian Redfern** [[Christian-QA](https://github.com/Christian-QA)]
* **Caroline Strasenburgh** [[CarolineS-QA](https://github.com/CarolineS-QA)]
<!--
* **Felix Marley** [[Femarleycode](https://github.com/Femarleycode)]
* **Luke Smyth-osbourne** [[sosbourneQA](https://github.com/sosbourneQA)]
-->

## Acknowledgements

* Embedded Artistry [[embeddedartistry](https://github.com/embeddedartistry)] for their documentation templates [embedded-resources/docs](https://github.com/embeddedartistry/embedded-resources/tree/master/docs)

**[Back to top](#table-of-contents)**

