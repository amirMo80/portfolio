import { useState, useEffect } from "react";
import { Skill } from "./";

import { devSkills } from "../../constants/skills";

const Skills = () => {
  const { htmlSkill, cssSkill, jsSkill, reactSkill, gitSkill } = devSkills;

  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [git, setGit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((oldProgress) => {
        // const randomNum = Math.random() * 10;
        return Math.min(oldProgress + 10, 90);
      });

      setCss((oldProgress) => {
        // const randomNum = Math.random() * 10;
        return Math.min(oldProgress + 10, 84);
      });

      setJavascript((oldProgress) => {
        // const randomNum = Math.random() * 10;
        return Math.min(oldProgress + 10, 70);
      });

      setReactJs((oldProgress) => {
        // const randomNum = Math.random() * 10;
        return Math.min(oldProgress + 10, 80);
      });

      setGit((oldProgress) => {
        // const randomNum = Math.random() * 10;
        return Math.min(oldProgress + 10, 45);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Skill color={htmlSkill.color} name={htmlSkill.name} value={html} />
      <Skill color={cssSkill.color} name={cssSkill.name} value={css} />
      <Skill color={jsSkill.color} name={jsSkill.name} value={javascript} />
      <Skill color={reactSkill.color} name={reactSkill.name} value={reactJs} />
      <Skill color={gitSkill.color} name={gitSkill.name} value={git} />
    </>
  );
};

export default Skills;
