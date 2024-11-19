
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
  RiJavaFill,
} from "react-icons/ri";
import {
  SiMui,
  SiMysql,
  SiMicrosoftsqlserver,
  SiC,
  SiNodedotjs,
  SiCanva,
  SiGimp,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 pl-5">
      <h1 className="font-semibold text-center text-4xl ">Technologies</h1>

      {/* Front-End Technologies */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Front-End Technologies</div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <RiHtml5Fill className="text-5xl text-orange-600" />
            <p className="text-lg">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <RiCss3Fill className="text-5xl text-blue-400" />
            <p className="text-lg">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <RiJavascriptFill className="text-5xl text-yellow-400" />
            <p className="text-lg">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <RiReactjsLine className="text-5xl text-cyan-600" />
            <p className="text-lg">React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMui className="text-5xl text-white" />
            <p className="text-lg">Material UI</p>
          </div>
          <div className="flex flex-col items-center">
            <RiTailwindCssFill className="text-5xl text-blue-400" />
            <p className="text-lg">Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Mobile Development */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Mobile Development</div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <TbBrandFlutter className="text-5xl text-blue-500" />
            <p className="text-lg">Flutter</p>
          </div>
        </div>
      </div>

      {/* Back-End Technologies */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Back-End Technologies</div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <SiNodedotjs className="text-5xl text-green-600" />
            <p className="text-lg">Node.js</p>
          </div>
        </div>
      </div>

      {/* Databases */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Databases</div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <SiMicrosoftsqlserver className="text-5xl text-white" />
            <p className="text-lg">MSSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-5xl text-white" />
            <p className="text-lg">MySQL</p>
          </div>
        </div>
      </div>

      {/* Programming Languages */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Programming Languages</div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <RiJavaFill className="text-5xl text-blue-400" />
            <p className="text-lg">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <RiJavascriptFill className="text-5xl text-yellow-400" />
            <p className="text-lg">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <SiC className="text-5xl text-blue-600" />
            <p className="text-lg">C</p>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="pt-10">
        <div className="font-semibold text-3xl pb-8">Tools</div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-5xl text-orange-700" />
            <p className="text-lg">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <SiCanva className="text-5xl text-[#00C4CC]" />
            <p className="text-lg">Canva</p>
          </div>
          <div className="flex flex-col items-center">
            <SiGimp className="text-5xl text-amber-800" />
            <p className="text-lg">Gimp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
