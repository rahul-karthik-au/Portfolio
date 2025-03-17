import "../assets/styles/Techstack.scss";
import javaimg from "../assets/images/icons8-java-48.png";
import springimg from "../assets/images/icons8-spring-boot-48.png";
import pythonimg from "../assets/images/icons8-python-48.png";
import cimg from "../assets/images/icons8-c-48 (1).png";
import cppimg from "../assets/images/icons8-c-48.png";
import htmlimg from "../assets/images/icons8-html-48.png";
import cssimg from "../assets/images/icons8-css-48.png";
import gitimg from "../assets/images/icons8-git-48.png";
import githubimg from "../assets/images/icons8-github-48.png"
import javascriptimg from "../assets/images/icons8-javascript-48.png";
import typescriptimg from "../assets/images/icons8-typescript-48.png";
import reactimg from "../assets/images/icons8-react-48.png";
import angularimg from "../assets/images/icons8-angularjs-48.png";
import mysqlimg from "../assets/images/icons8-mysql-48.png";
import postgresimg from "../assets/images/icons8-postgresql-48.png";
import mongodbimg from "../assets/images/icons8-mongo-db-48.png";
import nodejsimg from "../assets/images/icons8-nodejs-48.png";
import expressimg from "../assets/images/icons8-express-js-48.png";
import linuximg from "../assets/images/icons8-linux-48.png";
import hadoopimg from "../assets/images/icons8-hadoop-distributed-file-system-48.png";
import sparkimg from "../assets/images/icons8-apache-spark-48.png";
import awsimg from "../assets/images/icons8-aws-48.png";
import azureimg from "../assets/images/icons8-azure-48.png";
import firebaseimg from "../assets/images/icons8-firebase-48.png";

function Techstack() {
    const techIcons=[
        javaimg,
        springimg,
        pythonimg,
        cimg,
        cppimg,
        htmlimg,
        cssimg,
        gitimg,
        githubimg,
        javascriptimg,
        typescriptimg,
        reactimg,
        angularimg,
        mysqlimg,
        postgresimg,
        mongodbimg,
        nodejsimg,
        expressimg,
        linuximg,
        hadoopimg,
        sparkimg,
        awsimg,
        azureimg,
        firebaseimg
    ]
    
    return (
      <>
      <div className="items-container">
        <h1>Tech Stack</h1>
      </div>
        <div className="scroll-container">
          <div className="scroll-content">
            {techIcons.concat(techIcons).map((icon, index) => (
              <div className="icon" key={index}>
              <img src={icon} alt={`icon-${index}`} />
            </div>
            ))}
          </div>
        </div>
      </>
      );
}

export default Techstack;