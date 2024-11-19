
import profilePic from "../assets/sshome.png";
import partTimeJob from "../assets/part-time.jpeg";
import paperRecyclingPic from "../assets/paper.jpg"; // Added path for Paper Recycling Machine image
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";
import Portfolio from "../assets/Capture.png";

const Project = () => {
  return (
    <div className="boder-b border-white pb-10">
      <h1 className="font-semibold my-10 text-center text-5xl">
        My<span className="text-neutral-500"> Works</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Expense Tracker System */}
        <div className="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div className="mb-4">
            <img
              src={profilePic}
              alt="Project Screenshot"
              className="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Expense Tracker System</h2>
            <span className="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div className="mt-4">
            <p className="text-gray-300 text-sm">
              For our second-year software project, my team and I developed an
              Expense Tracking system for Bistec Global. I worked on both the
              frontend and backend, focusing on features like user and admin
              setting pages. I also implemented a payment reminders page and
              developed personalized budget displays on the budget page.
              Additionally, we enabled users to track their financial
              statements, enhancing the system convenience and usability.
            </p>
          </div>
          {/* Tech Stack Icons */}
          <div className="flex space-x-2 mt-4">
            <RiReactjsLine className="text-3xl text-cyan-600" />
            <SiDotnet className="text-3xl text-blue-600" />
            <SiMicrosoftsqlserver className="text-3xl text-white" />
            <SiMui className="text-3xl text-white" />
          </div>
        </div>

        {/* Portfolio Website */}
        <div className="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div className="mb-4">
            <img
              src={Portfolio}
              alt="Portfolio Screenshot"
              className="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Portfolio Website</h2>
            <span className="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div className="mt-4">
            <p className="text-gray-300 text-sm">
              I am building my portfolio website using React.js and TailwindCSS.
              This site will showcase my personal details, skills, and work in a
              user-friendly and visually appealing manner.
            </p>
          </div>
          {/* Tech Stack Icons */}
          <div className="flex space-x-2 mt-4">
            <RiReactjsLine className="text-3xl text-cyan-600" />
            <RiTailwindCssFill className="text-3xl text-blue-400" />
          </div>
        </div>

        {/* Part-Time Job Offering Platform */}
        <div className="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div className="mb-4">
            <img
              src={partTimeJob}
              alt="Part-Time Job Offering Platform"
              className="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Part-Time Job Offering Platform</h2>
            <span className="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div className="mt-4">
            <p className="text-gray-300 text-sm">
              Developed a comprehensive web and mobile application to facilitate
              part-time job opportunities. The platform integrates user
              registration, job posting, communication tools, financial
              management, and scheduling features to enhance the efficiency of
              the part-time job-seeking process for both job seekers and
              employers.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              As Profile Admin, I managed user profiles and ensured data
              integrity. As Job Handling Admin, I oversaw job postings and
              ensured compliance with platform guidelines. As Super Admin, I
              maintained overall platform administration, including user
              management and system monitoring.
            </p>
          </div>
          {/* Tech Stack Icons */}
          <div className="flex space-x-2 mt-4">
            <RiReactjsLine className="text-3xl text-cyan-600" />
            <RiTailwindCssFill className="text-3xl text-blue-400" />
          </div>
        </div>

        {/* Paper Recycling Machine */}
        <div className="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div className="mb-4">
            <img
              src={paperRecyclingPic}
              alt="Paper Recycling Machine"
              className="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Paper Recycling Machine</h2>
            <span className="block text-sm text-gray-400">2022-2023</span>
          </div>
          {/* Project Description */}
          <div className="mt-4">
            <p className="text-gray-300 text-sm">
              As the <strong>Team Leader and IoT Developer</strong>, I led the development of an 
              <strong>Arduino-based Paper Recycling Machine</strong> to address environmental concerns and the growing demand for paper. 
              The project aimed to repurpose paper waste into practical products, promoting sustainability and reducing waste.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Utilizing <strong>Arduino Studio</strong>, <strong>C programming</strong>, <strong>EasyEDA</strong>, 
              <strong>Proteus</strong>, and <strong>Blender</strong>, the project integrated advanced hardware and software components for efficient recycling processes. 
              This innovative solution combined environmental consciousness with technical expertise, resulting in a functional prototype capable of producing recycled paper items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
