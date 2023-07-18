import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function About() {
  return (
    <>
      <div className="About flex flex-col items-center justify-center w-screen">
        <NavigationBar />
        <div className=" bg-cyan-950 h-32 w-screen"></div>
        <div className="flex flex-col md:flex-row md:w-screen">
          <div className="flex flex-col items-start bg-white md:w-full md:m-auto md:pl-10 xl:pl-32">
            <h3 className=" text-xl mt-5 mb-1 max-w-lg px-3">
              Hello, my name is
            </h3>
            <h2 className=" text-4xl px-3">Marcin Jarosz</h2>
            <div className="h-1 w-16 my-3 bg-gray-500 ml-3"></div>
            <div className="max-w-lg px-3">
              <p>
                {" "}
                I’m an enthusiastic software engineer from Poland, who loves
                challenges, newest technologies and programming at all. I'm also
                a third year computer science student at TU Delft, focusing
                primarly on data science, currently doing minor in business
                administration at Leiden University.
              </p>
              <p>Check out my portfolio in the projects page!</p>
              <br />
              <h2 className="font-bold">Programming languages</h2>
              <p>Java, Python, Typescript/Javascript, HTML, CSS, SQL</p>
              <br />
              <h2 className="font-bold">Frameworks and libraries</h2>
              <p>
                <span className="font-semibold">Java</span>: Spring boot, jfx,
                JPA <br />
                <span className="font-semibold">
                  Typescript/web development
                </span>
                : NestJS, TypeORM, React, Tailwind CSS, DaisyUI <br />
                <span className="font-semibold">Python</span>: fixie.ai,
                jupyter, numpy, pandas <br />
              </p>
              <br />
              <h2 className="font-bold">Other tools</h2>
              <p>
                VSCode, terminal, git, GitHub/GitLab, NodeJS, yarn/npm, Gradle,
                testing frameworks (JUnit, Jest, Mockito), PostgreSQL,
                MongoDB, Firebase, AWS services: Amplify, Elastic Beanstalk
              </p>
              <br />
            </div>
          </div>
          <div className="Contact w-screen md:h-screen flex flex-col items-center justify-center text-white p-5 bg-cyan-600">
            <h2 className="text-3xl pb-4 font-bold">Contact Details</h2>
            <FontAwesomeIcon icon={faMapLocationDot} />
            <h3 className="text-xl">Rotterdam, Netherlands</h3>
            <h3 className="text-xl pb-10">Gliwice, Poland</h3>
            <FontAwesomeIcon icon={faPhone} />
            <h3 className="text-xl pb-10">(+31) 653-329-144</h3>
            <FontAwesomeIcon icon={faEnvelope} />
            <h3 className="text-xl pb-0 mb-0">mjarosz.tech@gmail.com</h3>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
