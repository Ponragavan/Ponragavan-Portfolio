import {
  SiJupyter,
  SiMicrosoftexcel,
  SiMicrosoftonenote,
  SiMicrosoftoutlook,
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
  SiTailwindcss,
  SiPostman,
  SiNetlify,
  SiMicrosoftazure,
  SiExpress,
} from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { BsGithub, BsGit } from "react-icons/bs";
import { TbBrandRedux, TbBrandMongodb, TbBrandVscode } from "react-icons/tb";
import { FaMobileAlt, FaAdn } from "react-icons/fa";
import {
  FaCss3,
  FaFire,
  FaHtml5,
  FaJs,
  FaMicrosoft,
  FaNode,
  FaPalette,
  FaReact,
  FaRegLightbulb,
  FaServer,
  FaSketch,
  FaUser,
} from "react-icons/fa6";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen p-5 pt-20 bg-cover text-white text-center"
      style={{backgroundImage: 'url("skills.png")'}}
    >
      <h2 className="text-4xl font-bold mb-5">Skills</h2>
      <p className="mb-5">
        Here are some skills I have learned over the last three years.
      </p>
      <ul className="flex flex-wrap gap-10 text-gray-900 justify-center items-center">
        <Skill title="Frontend">
          <Icon
            icon={<FaHtml5 size={30} className="text-orange-500" />}
            text="HTML"
          />
          <Icon
            icon={<FaCss3 size={30} className="text-blue-500" />}
            text="CSS"
          />
          <Icon
            icon={<FaJs size={30} className="text-yellow-500" />}
            text="Javascript"
          />
          <Icon
            icon={<FaReact size={30} className="text-cyan-500" />}
            text="React JS"
          />
          <Icon
            icon={<TbBrandRedux size={30} className="text-purple-600" />}
            text="React Redux"
          />
          <Icon
            icon={<SiTailwindcss size={30} className="text-sky-600" />}
            text="Tailwind CSS"
          />
        </Skill>
        <Skill title="Backend">
          <Icon
            icon={<TbBrandMongodb size={30} className="text-green-500" />}
            text="MongoDB"
          />
          <Icon
            icon={<FaFire size={30} className="text-yellow-500" />}
            text="Firebase"
          />
          <Icon
            icon={<FaNode size={30} className="text-green-400" />}
            text="Node"
          />
          <Icon
            icon={<SiExpress size={30} className="text-black" />}
            text="Express JS"
          />
          <Icon
            icon={<FaUser size={30} className="text-blue-500" />}
            text="Authentication"
          />
          <Icon
            icon={<FaServer size={30} className="text-gray-400" />}
            text="Server rendering"
          />
        </Skill>
        <Skill title="UI/UX">
          <Icon icon={<img src="figma.png" width={30} />} text="Figma" />
          <Icon
            icon={<FaAdn size={30} className="text-red-500" />}
            text="Adobe XD"
          />
          <Icon
            icon={<FaSketch size={30} className="text-orange-500" />}
            text="Sketch"
          />
          <Icon
            icon={<FaPalette size={30} className="text-pink-500" />}
            text="Design Systems"
          />
          <Icon
            icon={<FaMobileAlt size={30} className="text-blue-400" />}
            text="Responsive Design"
          />
          <Icon
            icon={<FaRegLightbulb size={30} className="text-yellow-400" />}
            text="User Research"
          />
        </Skill>
        <Skill title="MS Office">
          <Icon
            icon={<FaMicrosoft size={30} className="text-blue-500" />}
            text="Microsoft Office"
          />
          <Icon
            icon={<SiMicrosoftexcel size={30} className="text-green-500" />}
            text="Excel"
          />
          <Icon
            icon={<SiMicrosoftword size={30} className="text-blue-700" />}
            text="Word"
          />
          <Icon
            icon={
              <SiMicrosoftpowerpoint size={30} className="text-orange-500" />
            }
            text="PowerPoint"
          />
          <Icon
            icon={<SiMicrosoftoutlook size={30} className="text-blue-500" />}
            text="Outlook"
          />
          <Icon
            icon={<SiMicrosoftonenote size={30} className="text-purple-500" />}
            text="OneNote"
          />
          <Icon
            icon={<SiMicrosoftazure size={30} className="text-blue-500" />}
            text="Azure"
          />
        </Skill>
        <Skill title="Others">
          <Icon
            icon={<TbBrandVscode size={30} className="text-blue-500" />}
            text="VS Code"
          />
          <Icon
            icon={<SiNetlify size={30} className="text-pink-500" />}
            text="Netlify"
          />
          <Icon
            icon={<BsGit size={30} className="text-orange-400" />}
            text="Git"
          />
          <Icon
            icon={<BsGithub size={30} className="text-black" />}
            text="Github"
          />
          <Icon
            icon={<RiEnglishInput size={30} className="text-emerald-500" />}
            text="Communication"
          />
          <Icon
            icon={<SiPostman size={30} className="text-orange-600" />}
            text="Postman"
          />
          <Icon
            icon={<SiJupyter size={30} className="text-amber-700" />}
            text="Jupyter Notebook"
          />
        </Skill>
      </ul>
    </section>
  );
};

export default Skills;

const Icon = ({ icon, text }) => {
  return (
    <li className="flex gap-1 items-center py-2 px-3 bg-opacity-50 bg-slate-600 rounded-full text-white border border-black">
      {icon} <p className="text-sm">{text}</p>
    </li>
  );
};

const Skill = ({ children, title }) => {
  return (
    <li className="w-72 h-auto p-5 bg-opacity-50 bg-black rounded-lg border border-slate-500 neon-slate">
      <h2 className="mb-3 text-xl text-white">{title}</h2>
      <ul className="flex flex-wrap justify-center gap-2">{children}</ul>
    </li>
  );
};
