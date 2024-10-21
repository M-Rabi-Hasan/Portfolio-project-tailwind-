// src/app/about/page.tsx

import Image from "next/image";
import Navbar from "../Navbar/page";

const About = () => {
  return (
    <div className="bg-gray-100">
      <header className="text-center">
          <Navbar/>
        <Image src="/profile3.jpg" alt="Profile Picture" width={130} height={150} className="rounded-full mx-auto" />
      </header>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center py-10">About Me</h1>
          <p className="mt-4 text-lg">
            I am a Full Stack Developer with a passion for creating scalable web applications. 
            With a background in Business Administration and technical expertise in cloud solutions, 
            I bring a unique perspective to software development.
          </p>
          
          <h2 className="text-3xl font-semibold mt-10">Experience</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Full Stack Developer at System Limited (2023 - Present)</li>
            <li>Data Analyst at iCreative Tech (2022 - 2023)</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-10">Education</h2>
          <p className="mt-2">BBA at Sindh Madressatul Islam University (Expected Graduation: 2027)</p>

          <section className="mt-10">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>React.js</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>AWS & Azure</li>
        </ul>
      </section>
        </div>
    </div>
  );
};

export default About;
