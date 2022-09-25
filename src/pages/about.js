import React from 'react';
import ProfilePic from '../assets/Profile.png';
// import ProfilePic1 from '../assets/profilepic1.jpeg';
import ProfilePic1 from '../assets/profile2.jpeg';
// import ResumeFile from '../assets/Vedant_Daigavane_Resume.pdf';

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img src={ProfilePic} className="rounded-lg h-70 w-60 mx-auto" alt=""></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-500 text-xl">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">Gaurav Shinde</div>
          <div className="text-xl text-gray-500 font-semibold">Passionate Coder</div>
          <div className="font-light text-gray-400">
            Full-stack web developer aspiring to solve real-world problems by exploring insights
            from data, requirements of the end user. Being a Full Stack Developer, mostly works in
            MERN Stack , Java and GoLang, I have been developing a web app for the last 2 years now
            and I have been part of projects which were built with technologies such as ReactJS,
            Redux, ExpressJS, GraphQL, MongoDB. I am a highly enthusiastic and competitive person
            who likes being around people who like to test my limits. I love to acquire new skills
            and share my knowledge. Taking up complex challenges is my passion. I don't like to
            stick to one technique for a longer time and quickly look for other ways to do a task.
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/14c_tgYfpOuySzqTWx8sQUhJOGWWKBLGJ/view'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/gauravshinde18/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/gauravshinde1816',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: gauravshinde1816@gmail.com',
  },
];
