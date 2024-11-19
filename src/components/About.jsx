

const About = () => {
  return (
    <div className=" pb-4">
      <h1 className="font-semibold my-10 text-center text-5xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="text-center mx-20 mb-10">
        <p className="text-lg">
          I am an IT undergraduate at the University of Moratuwa . I’m a dedicated Information Technology undergraduate currently diving deep into the world of coding, technology, and innovation. My journey in tech is driven by a passion for Web Development, Mobile Development, and Creative Designing, coupled with a growing interest in the Networking field. I am a team player with strong time
          management skills, and I am always eager to learn and take on new
          challenges
        </p>
      </div>
      <div className="container mx-auto py-10 px-4 lg:px-0">
        <h2 className="text-4xl font-semibold text-center mb-10  tracking-wider">
          Educations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Education Box */}
          <div className="bg-transparent border border-gray-300  p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 hover:border-neutral-300">
            <h3 className="text-2xl font-bold mb-3 text-white">
              University of Moratuwa
            </h3>
            <p className="text-sm text-neutral-400 mb-3">Expected in 2026</p>
            <p className="text-lg font-semibold text-white mb-5">
              BScHons in Information Technology
            </p>
            <p className="text-neutral-300 mb-5">
              I am an undergraduate at the University of Moratuwa, pursuing a
              BSc (Hons) in Information Technology. I am in my third year and
              have already completed coursework that includes Data Structures
              and Algorithms (DSA), Object-Oriented Programming (OOP), Database
              Management Systems (DBMS), and many more.
            </p>
            
          </div>

          {/* Second Education Box */}
          <div className="bg-transparent border border-gray-300  p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 hover:border-neutral-300">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Kaikawala Central College,Matale
            </h3>
            <p className="text-sm text-neutral-400 mb-3">2012 - 2020</p>
            <p className="text-lg font-semibold text-white mb-5">
              GCE A/L in Physical Science Stream
            </p>
            <p className="text-neutral-300 mb-5">
            In 2020, I completed the GCE Advanced Level in the 
            Physical Science stream with a Z-score of : 1.298.
             I achieved two B s in Combined Mathematics and Physics, 
             and one C in Information And Communication Technology.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
