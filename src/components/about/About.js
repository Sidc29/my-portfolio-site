import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  const Resume =
    "https://drive.google.com/file/d/1kJGpwZdFRr-dsMTrfiJO_x2Ysh1G5X0g/view?usp=share_link";

  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>{firstName} $</span> cat about
          {firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>{firstName} $</span> cd
          skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Expertise in</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}>tools</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function interestsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}> $</span> cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function languageText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}> $</span> cd languages
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            languages <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.languages.map((language, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {language.emoji}
              </Box>
              {language.label}
            </li>
          ))}
        </ul>
      </>
    );
  }
  function myResume() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}> $</span> cd resume
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            resume <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.resume.map((resume, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              style={{ fontWeight: "normal" }}
              href={Resume}
              target={"_blank"}
              rel="noreferrer"
            >
              <li key={index}>
                <Box component={"span"} mr={"1rem"}>
                  {resume.emoji}
                </Box>
                {resume.label}
              </li>
            </a>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={interestsText()} />
      <Terminal text={languageText()} />
      <Terminal text={myResume()} />
    </Box>
  );
}
