
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="m-8 text-center pb-10">
        © 2024 Kavinda Perera. All rights reserved.
      </h2>
      <div className="m-8 flex items-center justify-between gap-4">
        <a href="https://www.linkedin.com/in/savinduneth/">
          <FaLinkedin className="text-4xl mx-2" />
        </a>
        <a href="https://github.com/nethsarabas">
          <FaGithub className="text-4xl mx-2" />
        </a>
        <a href="https://x.com/SavinduNethsara">
          <FaTwitter className="text-4xl mx-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
