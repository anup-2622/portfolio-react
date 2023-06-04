import React from "react";
// import { HashLink } from "react-router-hash-link";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Social = () => {
  return (
    <div className="social">
      <article>
        <div>
          <a
            title="Facebook"
            href="{https://www.facebook.com/profile.php?id=100011674730213}"
          >
            <AiFillFacebook />
          </a>
        </div>
        <div>
          <a
            title="Instagram"
            href={"https://www.instagram.com/a_n_u_p_s_a_i/"}
          >
            <AiFillInstagram />
            {/* insta */}
          </a>
        </div>
        <div>
          <a title="Github" href={"https://github.com/anup-2622"}>
            <AiFillGithub />
          </a>
        </div>
        <div>
          <a
            title="Linkdin"
            href={"https://www.linkedin.com/in/anup-kumar-4987821a3/"}
          >
            <AiFillLinkedin />
          </a>
        </div>
      </article>
    </div>
  );
};

export default Social;
